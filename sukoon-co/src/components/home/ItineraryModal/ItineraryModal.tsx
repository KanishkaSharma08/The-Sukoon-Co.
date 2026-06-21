import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import { getItinerary } from '@/data/itineraries';
import styles from './ItineraryModal.module.scss';
import { jsPDF } from 'jspdf';

const ItineraryModal: React.FC = () => {
  const { activeId, closeModal, openEnquiry } = useModal();
  const itinerary = activeId ? getItinerary(activeId) : null;
  const [isGenerating, setIsGenerating] = useState(false);
  const [pdfLink, setPdfLink] = useState<{ url: string; fileName: string; automatic: boolean } | null>(null);
  const blobUrlRef = useRef<string | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [closeModal]);

  // Reset PDF link when modal content changes + revoke old blob URLs (memory leak fix)
  useEffect(() => {
    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current);
      blobUrlRef.current = null;
    }
    setPdfLink(null);
    setIsGenerating(false);
  }, [activeId]);

  const handleDownload = () => {
    if (!itinerary) return;
    setIsGenerating(true);

    setTimeout(() => {
      try {
        const doc = new jsPDF({ unit: 'pt', format: 'a4' });
        const pageW = doc.internal.pageSize.getWidth();
        const pageH = doc.internal.pageSize.getHeight();
        const margin = 42;
        let y = 0;

        // Background
        doc.setFillColor(10, 10, 10);
        doc.rect(0, 0, pageW, pageH, 'F');

        const gold: [number, number, number] = [196, 168, 130];
        const white: [number, number, number] = [255, 255, 255];
        const greyText: [number, number, number] = [170, 170, 170];

        // Logo wordmark
        y = 50;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(white[0], white[1], white[2]);
        doc.text('THE SUKOON CO', margin, y);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(greyText[0], greyText[1], greyText[2]);
        doc.text('thesukoonco.in', pageW - margin, y, { align: 'right' });

        // Divider
        y += 14;
        doc.setDrawColor(40, 40, 40);
        doc.line(margin, y, pageW - margin, y);

        // Region eyebrow
        y += 28;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(gold[0], gold[1], gold[2]);
        doc.text(itinerary.region.toUpperCase(), margin, y);

        // Title
        y += 26;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(26);
        doc.setTextColor(white[0], white[1], white[2]);
        doc.text(itinerary.name, margin, y);

        // Meta line
        y += 20;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.setTextColor(greyText[0], greyText[1], greyText[2]);
        doc.text(`${itinerary.duration}   |   ${itinerary.route}`, margin, y);

        // Stats row
        y += 26;
        const statW = (pageW - margin * 2) / itinerary.stats.length;
        itinerary.stats.forEach((s, i) => {
          const sx = margin + statW * i;
          doc.setDrawColor(35, 35, 35);
          doc.setFillColor(18, 18, 18);
          doc.rect(sx, y, statW - 6, 50, 'F');
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(13);
          doc.setTextColor(gold[0], gold[1], gold[2]);
          doc.text(String(s.val), sx + (statW - 6) / 2, y + 22, { align: 'center' });
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(6.5);
          doc.setTextColor(greyText[0], greyText[1], greyText[2]);
          const labelLines = doc.splitTextToSize(s.label.toUpperCase(), statW - 14);
          doc.text(labelLines, sx + (statW - 6) / 2, y + 34, { align: 'center' });
        });
        y += 70;

        // Divider
        doc.setDrawColor(40, 40, 40);
        doc.line(margin, y, pageW - margin, y);
        y += 24;

        // Day by day
        itinerary.days.forEach((d) => {
          const descLines = doc.splitTextToSize(d.desc, pageW - margin * 2 - 80);
          const rowHeight = 16 + descLines.length * 12;

          if (y + rowHeight > pageH - 110) {
            doc.addPage();
            doc.setFillColor(10, 10, 10);
            doc.rect(0, 0, pageW, pageH, 'F');
            y = 50;
          }

          doc.setFont('helvetica', 'bold');
          doc.setFontSize(8);
          doc.setTextColor(gold[0], gold[1], gold[2]);
          doc.text(`DAY ${d.day}`, margin, y);

          doc.setFont('helvetica', 'bold');
          doc.setFontSize(11);
          doc.setTextColor(white[0], white[1], white[2]);
          doc.text(d.title, margin + 80, y);

          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8.5);
          doc.setTextColor(greyText[0], greyText[1], greyText[2]);
          doc.text(descLines, margin + 80, y + 13);

          y += rowHeight + 10;
          doc.setDrawColor(28, 28, 28);
          doc.line(margin, y - 6, pageW - margin, y - 6);
        });

        // Notes box
        y += 12;
        const noteLines = doc.splitTextToSize(itinerary.notes, pageW - margin * 2 - 24);
        const noteBoxH = 24 + noteLines.length * 11;
        if (y + noteBoxH > pageH - 60) {
          doc.addPage();
          doc.setFillColor(10, 10, 10);
          doc.rect(0, 0, pageW, pageH, 'F');
          y = 50;
        }
        doc.setFillColor(16, 16, 16);
        doc.rect(margin, y, pageW - margin * 2, noteBoxH, 'F');
        doc.setDrawColor(gold[0], gold[1], gold[2]);
        doc.setLineWidth(2);
        doc.line(margin, y, margin, y + noteBoxH);
        doc.setLineWidth(1);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(greyText[0], greyText[1], greyText[2]);
        doc.text(noteLines, margin + 14, y + 16);

        // Footer
        const footerY = pageH - 36;
        doc.setDrawColor(40, 40, 40);
        doc.line(margin, footerY - 14, pageW - margin, footerY - 14);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.5);
        doc.setTextColor(greyText[0], greyText[1], greyText[2]);
        doc.text('The Sukoon Co · Customised journeys, no fixed departures', margin, footerY);
        doc.text('hello@thesukoonco.in', pageW - margin, footerY, { align: 'right' });

        const fileName = `sukoon-${activeId}-itinerary.pdf`;
        const pdfBlob = doc.output('blob');
        // Revoke previous blob URL before creating a new one
        if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
        const blobUrl = URL.createObjectURL(pdfBlob);
        blobUrlRef.current = blobUrl;

        let downloadTriggered = false;
        try {
          const link = document.createElement('a');
          link.href = blobUrl;
          link.download = fileName;
          link.style.position = 'fixed';
          link.style.opacity = '0';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          downloadTriggered = true;
        } catch (downloadErr) {
          console.warn('Direct download failed, will offer manual link instead:', downloadErr);
        }

        setPdfLink({
          url: blobUrl,
          fileName,
          automatic: downloadTriggered
        });
      } catch (err) {
        console.error('PDF generation failed:', err);
        alert('Something went wrong generating the PDF. Please try again.');
      } finally {
        setIsGenerating(false);
      }
    }, 30);
  };

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

              {pdfLink && (
                <div style={{ marginTop: '14px', marginBottom: '14px', fontSize: '11px', color: 'rgba(255, 255, 255, 0.6)' }}>
                  {pdfLink.automatic ? (
                    <>
                      PDF ready. If the download didn't start automatically,{' '}
                      <a href={pdfLink.url} target="_blank" rel="noopener noreferrer" download={pdfLink.fileName} style={{ color: '#C4A882', textDecoration: 'underline' }}>
                        click here to open it
                      </a>.
                    </>
                  ) : (
                    <>
                      <a href={pdfLink.url} target="_blank" rel="noopener noreferrer" download={pdfLink.fileName} style={{ color: '#C4A882', textDecoration: 'underline' }}>
                        Click here to open the PDF
                      </a>{' '}
                      (automatic download was blocked).
                    </>
                  )}
                </div>
              )}

              <button
                className={styles.planBtn}
                onClick={() => openEnquiry(itinerary?.name)}
              >
                Plan This Trip →
              </button>
              <button
                className={styles.cta}
                onClick={handleDownload}
                disabled={isGenerating}
              >
                {isGenerating ? 'Preparing PDF…' : 'Download Itinerary ↓'}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ItineraryModal;
