import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import { getItinerary } from '@/data/itineraries';
import styles from './ItineraryModal.module.scss';

const ItineraryModal: React.FC = () => {
  const { activeId, closeModal, openEnquiry } = useModal();
  const itinerary = activeId ? getItinerary(activeId) : null;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [closeModal]);

  return (
    <AnimatePresence>
      {activeId && itinerary && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.target === e.currentTarget && closeModal()}
          role="dialog"
          aria-modal="true"
          aria-label={itinerary.name}
        >
          <motion.div
            className={styles.modal}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <button className={styles.close} onClick={closeModal} aria-label="Close modal">
              ✕
            </button>
            <div className={styles.inner}>
              <div className={styles.logo}>The Sukoon Co</div>
              <p className={styles.region}>{itinerary.region}</p>
              <h2 className={styles.title}>{itinerary.name}</h2>
              <div className={styles.meta}>
                <span>{itinerary.duration}</span>
                <span>{itinerary.route}</span>
              </div>

              <div className={styles.stats}>
                {itinerary.stats.map((s) => (
                  <div className={styles.stat} key={s.label}>
                    <div className={styles.statVal}>{s.val}</div>
                    <div className={styles.statLabel}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div className={styles.days}>
                {itinerary.days.map((d) => (
                  <div className={styles.dayRow} key={d.day}>
                    <div className={styles.dayNum}>{d.day}</div>
                    <div>
                      <div className={styles.dayTitle}>{d.title}</div>
                      <p className={styles.dayDesc}>{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className={styles.notes}>{itinerary.notes}</p>

              <button
                className={styles.planBtn}
                onClick={() => openEnquiry(itinerary?.region || itinerary?.name)}
              >
                Plan This Trip →
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ItineraryModal;
