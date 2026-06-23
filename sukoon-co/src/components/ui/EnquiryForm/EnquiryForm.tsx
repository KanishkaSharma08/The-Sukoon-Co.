import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import { trackEvent } from '@/utils/analytics';
import styles from './EnquiryForm.module.scss';

// Dynamically use Formspree form ID from environment variables
const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID || 'mwvdezao';
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;
const WHATSAPP_PRIMARY = '919689833000';
const WHATSAPP_SECONDARY = '917032394455';

const DESTINATION_OPTIONS = [
  'Not sure yet — help me decide',
  'Rajasthan — Forts & Palaces',
  'Ladakh — High Altitude Desert',
  'Kashmir — Valley & Dal Lake',
  'Kerala — Backwaters & Hills',
  'Goa — Coast & Culture',
  'Spiti Valley — Remote Mountains',
  'Varanasi — Sacred Ghats',
  'Ranthambore — Tiger Safari',
  'Jim Corbett — Wildlife',
  'Andaman Islands — Beaches',
  'Multiple Regions / Grand Tour',
];

const matchDestination = (input: string): string => {
  if (!input) return '';
  const val = input.toLowerCase().trim();
  
  if (val.includes('rajasthan') || val.includes('heartland')) return 'Rajasthan — Forts & Palaces';
  if (val.includes('ladakh') || val.includes('peaks')) return 'Ladakh — High Altitude Desert';
  if (val.includes('kashmir')) return 'Kashmir — Valley & Dal Lake';
  if (val.includes('kerala') || val.includes('backwaters')) return 'Kerala — Backwaters & Hills';
  if (val.includes('goa') || val.includes('coast')) return 'Goa — Coast & Culture';
  if (val.includes('spiti') || val.includes('himachal') || val.includes('zanskar') || val.includes('frozen') || val.includes('valley to valley')) return 'Spiti Valley — Remote Mountains';
  if (val.includes('varanasi') || val.includes('banaras') || val.includes('light')) return 'Varanasi — Sacred Ghats';
  if (val.includes('ranthambore') || val.includes('safari') || val.includes('mp') || val.includes('madhya pradesh') || val.includes('tiger')) return 'Ranthambore — Tiger Safari';
  if (val.includes('corbett') || val.includes('jim')) return 'Jim Corbett — Wildlife';
  if (val.includes('andaman')) return 'Andaman Islands — Beaches';
  
  // Try to match any option that contains the text
  const found = DESTINATION_OPTIONS.find(opt => opt.toLowerCase().includes(val));
  if (found) return found;
  
  return 'Not sure yet — help me decide';
};

const EnquiryForm: React.FC = () => {
  const { enquiryOpen, closeEnquiry, enquiryDestination } = useModal();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    dates: '',
    groupSize: '',
    message: '',
  });

  // Pre-fill destination when opened from itinerary
  useEffect(() => {
    if (enquiryOpen) {
      setForm(prev => ({
        ...prev,
        destination: enquiryDestination ? matchDestination(enquiryDestination) : '',
      }));
      setStatus('idle');
      // Focus first field after animation
      setTimeout(() => firstFieldRef.current?.focus(), 350);
    }
  }, [enquiryOpen, enquiryDestination]);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeEnquiry(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeEnquiry]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    // JavaScript fallback validation for required fields
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.destination.trim() || !form.dates.trim() || !form.groupSize.trim()) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    // Track lead submission event
    trackEvent('submit_enquiry_form', 'lead_generation', form.destination || 'General');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          destination: form.destination || 'Not specified',
          travel_dates: form.dates || 'Flexible',
          group_size: form.groupSize || 'Not specified',
          message: form.message || '—',
          _subject: `Enquiry from ${form.name} — ${form.destination || 'General'}`,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', destination: '', dates: '', groupSize: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {enquiryOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.target === e.currentTarget && closeEnquiry()}
          role="dialog"
          aria-modal="true"
          aria-label="Enquiry Form"
        >
          <motion.div
            className={styles.panel}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Header */}
            <div className={styles.header}>
              <div>
                <p className={styles.headerLabel}>Start Your Journey</p>
                <h2 className={styles.headerTitle}>
                  {enquiryDestination ? `Plan: ${enquiryDestination}` : 'Plan Your Trip'}
                </h2>
              </div>
              <button
                className={styles.closeBtn}
                onClick={closeEnquiry}
                aria-label="Close enquiry form"
              >
                ✕
              </button>
            </div>

            <div className={styles.body}>
              {status === 'success' ? (
                <div className={styles.success}>
                  <div className={styles.successIcon}>✓</div>
                  <h3>We've received your enquiry.</h3>
                  <p>We'll be in touch within 24 hours. In the meantime, you're welcome to reach us directly.</p>
                  <div className={styles.directLinks}>
                    <a
                      href={`https://wa.me/${WHATSAPP_PRIMARY}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.waLink}
                    >
                      <WhatsAppIcon /> WhatsApp Us (+91 70323 94455)
                    </a>
                    <a
                      href={`https://wa.me/${WHATSAPP_SECONDARY}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.waLink}
                    >
                      <WhatsAppIcon /> WhatsApp Us (+91 96898 33000)
                    </a>
                  </div>
                  <button className={styles.resetBtn} onClick={() => setStatus('idle')}>
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label htmlFor="eq-name" className={styles.label}>Your Name *</label>
                      <input
                        ref={firstFieldRef}
                        id="eq-name"
                        name="name"
                        type="text"
                        required
                        placeholder="E.g. Priya Sharma"
                        className={styles.input}
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="eq-email" className={styles.label}>Email Address *</label>
                      <input
                        id="eq-email"
                        name="email"
                        type="email"
                        required
                        placeholder="hello@example.com"
                        className={styles.input}
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label htmlFor="eq-phone" className={styles.label}>Phone / WhatsApp *</label>
                      <input
                        id="eq-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className={styles.input}
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="eq-destination" className={styles.label}>Destination Interest *</label>
                      <select
                        id="eq-destination"
                        name="destination"
                        required
                        className={styles.select}
                        value={form.destination}
                        onChange={handleChange}
                      >
                        <option value="">Select a region…</option>
                        {DESTINATION_OPTIONS.map(d => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label htmlFor="eq-dates" className={styles.label}>Preferred Travel Dates *</label>
                      <input
                        id="eq-dates"
                        name="dates"
                        type="text"
                        required
                        placeholder="E.g. October 2025, flexible"
                        className={styles.input}
                        value={form.dates}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="eq-group" className={styles.label}>Group Size *</label>
                      <input
                        id="eq-group"
                        name="groupSize"
                        type="text"
                        required
                        placeholder="E.g. 2 adults, 1 child"
                        className={styles.input}
                        value={form.groupSize}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="eq-message" className={styles.label}>Tell Us More</label>
                    <textarea
                      id="eq-message"
                      name="message"
                      rows={4}
                      placeholder="What kind of experience are you looking for? Any specific interests, pace, or must-sees?"
                      className={styles.textarea}
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  {status === 'error' && (
                    <p className={styles.errorMsg}>
                      Something went wrong. Please try again or{' '}
                      <a href={`https://wa.me/${WHATSAPP_PRIMARY}`} target="_blank" rel="noopener noreferrer">
                        WhatsApp us directly
                      </a>.
                    </p>
                  )}

                  <div className={styles.actions}>
                    <button
                      type="submit"
                      className={styles.submitBtn}
                      disabled={status === 'submitting'}
                    >
                      {status === 'submitting' ? 'Sending…' : 'Send Enquiry →'}
                    </button>
                    <span className={styles.orText}>or</span>
                    <a
                      href={`https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent(
                        `Hi, I'd like to enquire about a trip${form.destination ? ` to ${form.destination}` : ''}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.waBtn}
                      onClick={() => trackEvent('click_whatsapp_enquiry', 'lead_generation', form.destination || 'General')}
                    >
                      <WhatsAppIcon /> WhatsApp Us
                    </a>
                  </div>

                  <p className={styles.privacy}>
                    We'll reply within 24 hours. Your details are never shared.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const WhatsAppIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default EnquiryForm;
