import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useModal } from '@/context/ModalContext';
import RevealWrapper from '@/components/ui/RevealWrapper/RevealWrapper';
import logoMapSvg from '@/assets/logo-map.svg';
import styles from './LogoMap.module.scss';

type Zone = 'mountains' | 'temples' | 'rajasthan' | 'safari' | 'goa' | 'kerala';

interface DestTag {
  label: string;
  status: 'live' | 'soon';
  itineraryId?: string;
}

interface PanelData {
  id: string;
  zone: Zone;
  side: 'left' | 'right';
  topPercent: string;
  icon: React.ReactNode;
  title: string;
  tags: DestTag[];
}

const MountainIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M8 21l4-13 4 13" />
    <path d="M2 21l6-15 4 6 4-3 6 12" />
  </svg>
);

const FortIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M3 21h18" />
    <path d="M5 21V8l3-3 3 3v13" />
    <path d="M14 21V5l3-3 3 3v16" />
    <path d="M9 21v-4h2v4" />
  </svg>
);

const WaveIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M2 18c2-2 4 2 6 0s4 2 6 0 4 2 6 0" />
    <circle cx="17" cy="6" r="3" />
    <path d="M2 12c2-2 4 2 6 0s4 2 6 0 4 2 6 0" />
  </svg>
);

const TempleIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2l3 5h-6l3-5z" />
    <path d="M5 21V9h14v12" />
    <path d="M9 21v-6h6v6" />
    <circle cx="12" cy="13" r="1.2" />
  </svg>
);

const SafariIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M4 18c0-4 2-7 5-9 1-2 3-3 5-2 1 .5 1 2 0 2-3 0-5 2-5 5 0 2 1 3 3 3h6" />
    <path d="M16 13l3 1-1 3" />
  </svg>
);

const KeralaIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2l2 4h-4l2-4z" />
    <path d="M9 6h6v3H9z" />
    <path d="M7 9h10v3H7z" />
    <path d="M5 12h14v9H5z" />
    <path d="M11 21v-5h2v5" />
  </svg>
);

const panels: PanelData[] = [
  {
    id: 'panel-mountains',
    zone: 'mountains',
    side: 'left',
    topPercent: '20.4%',
    icon: <MountainIcon />,
    title: 'The Mountains',
    tags: [
      { label: 'Ladakh', status: 'live', itineraryId: 'ladakh' },
      { label: 'Zanskar', status: 'live', itineraryId: 'zanskar' },
      { label: 'Spiti & Himachal', status: 'live', itineraryId: 'himachal' },
      { label: 'Uttarakhand', status: 'live', itineraryId: 'ladakh' },
    ],
  },
  {
    id: 'panel-rajasthan',
    zone: 'rajasthan',
    side: 'left',
    topPercent: '47%',
    icon: <FortIcon />,
    title: 'Forts & Palaces',
    tags: [
      { label: 'Rajasthan', status: 'soon' },
      { label: 'Orchha', status: 'soon' },
      { label: 'Gwalior', status: 'soon' },
    ],
  },
  {
    id: 'panel-goa',
    zone: 'goa',
    side: 'left',
    topPercent: '74.25%',
    icon: <WaveIcon />,
    title: 'Beaches & Coastline',
    tags: [
      { label: 'Goa', status: 'soon' },
      { label: 'Puri', status: 'soon' },
      { label: 'Pondicherry', status: 'soon' },
      { label: 'Gokarna', status: 'soon' },
      { label: 'Mumbai', status: 'soon' },
    ],
  },
  {
    id: 'panel-temples',
    zone: 'temples',
    side: 'right',
    topPercent: '20.4%',
    icon: <TempleIcon />,
    title: 'Mughal & Heritage',
    tags: [
      { label: 'Madhya Pradesh', status: 'soon' },
      { label: 'Banaras', status: 'soon' },
      { label: 'Agra', status: 'soon' },
      { label: 'Delhi', status: 'soon' },
    ],
  },
  {
    id: 'panel-safari',
    zone: 'safari',
    side: 'right',
    topPercent: '47%',
    icon: <SafariIcon />,
    title: 'Safaris & Wildlife',
    tags: [
      { label: 'Madhya Pradesh', status: 'soon' },
      { label: 'Jim Corbett', status: 'soon' },
      { label: 'Kaziranga', status: 'soon' },
      { label: 'Sundarbans', status: 'soon' },
    ],
  },
  {
    id: 'panel-kerala',
    zone: 'kerala',
    side: 'right',
    topPercent: '74.25%',
    icon: <KeralaIcon />,
    title: 'Temple Country',
    tags: [
      { label: 'Tirupati', status: 'live', itineraryId: 'tirupati' },
      { label: 'Tamil Nadu', status: 'soon' },
      { label: 'Karnataka', status: 'soon' },
      { label: 'Kerala', status: 'soon' },
    ],
  },
];

const zoneColors: Record<Zone, string> = {
  mountains: '#A8D8EA',
  temples:   '#D4B483',
  rajasthan: '#E8C470',
  safari:    '#7FB77E',
  goa:       '#FF8C69',
  kerala:    '#F5A623',
};


const LogoMap: React.FC = () => {
  const [activeZone, setActiveZone] = useState<Zone | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { openModal } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const activate = (zone: Zone) => setActiveZone(zone);
  const deactivate = () => setActiveZone(null);

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleTagClick = (tag: DestTag) => {
    if (tag.status === 'live' && tag.itineraryId) {
      goTo(tag.itineraryId);
    }
  };

  const handleZoneClick = (zone: Zone, defaultItineraryId: string) => {
    if (isMobile) {
      setActiveZone(prev => prev === zone ? null : zone);
    } else {
      goTo(defaultItineraryId);
    }
  };

  const leftPanels = panels.filter((p) => p.side === 'left');
  const rightPanels = panels.filter((p) => p.side === 'right');
  const activePanel = panels.find((p) => p.zone === activeZone);

  return (
    <section className={styles.section} id="logo-section">
      <RevealWrapper as="p" className={styles.label}>
        Explore India
      </RevealWrapper>
      <RevealWrapper as="h2" delay={1} className={styles.title}>
        Six worlds. One mark.
      </RevealWrapper>
      <RevealWrapper as="p" delay={2} className={styles.sub}>
        {isMobile ? "Tap any zone on the mark to explore where we take you." : "Hover over each panel to explore where we take you."}
      </RevealWrapper>

      <RevealWrapper delay={2} className={styles.stage}>
        {/* LEFT COLUMN */}
        <div className={`${styles.popupCol} ${styles.popupLeft}`}>
          {leftPanels.map((panel) => (
            <div
              key={panel.id}
              className={`${styles.lzPanel} ${activeZone === panel.zone ? styles.active : ''}`}
              style={{ top: panel.topPercent }}
              onMouseEnter={() => !isMobile && activate(panel.zone)}
              onMouseLeave={() => !isMobile && deactivate()}
            >
              <div className={styles.panelPopup}>
                <div className={styles.popupTitle}>
                  <span className={styles.popupIcon}>{panel.icon}</span>
                  {panel.title}
                </div>
                <div className={styles.popupItems}>
                  {panel.tags.map((tag) => (
                    <button
                      key={tag.label}
                      className={`${styles.destTag} ${tag.status === 'live' ? styles.live : styles.soon}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTagClick(tag);
                      }}
                      disabled={tag.status === 'soon'}
                    >
                      {tag.status === 'live' && <span className={styles.arr}>→</span>}
                      {tag.label}
                      {tag.status === 'soon' && <span className={styles.pill}>Soon</span>}
                    </button>
                  ))}
                </div>
              </div>
              <div
                className={styles.connectorLine}
                style={
                  activeZone === panel.zone
                    ? {
                        background: zoneColors[panel.zone],
                        boxShadow: `0 0 10px ${zoneColors[panel.zone]}cc, 0 0 24px ${zoneColors[panel.zone]}44`,
                        width: '48px',
                      }
                    : {}
                }
              />
            </div>
          ))}
        </div>


        {/* LOGO CENTER */}
        <div
          className={`${styles.logoMap} ${activeZone ? `zone-${activeZone}` : ''}`}
          id="logoMap"
        >
          <div className={styles.logoSvgWrap}>
            {/* Grayscale base */}
            <img className={styles.logoSvgGray} src={logoMapSvg} alt="The Sukoon Co" />
            {/* Color overlay */}
            <img className={styles.logoColorOverlay} src={logoMapSvg} alt="" />
          </div>
          {/* Hit zones */}
          <div
            className={`${styles.lz} ${styles.lzMountains}`}
            onMouseEnter={() => !isMobile && activate('mountains')}
            onMouseLeave={() => !isMobile && deactivate()}
            onClick={() => handleZoneClick('mountains', 'ladakh')}
          />
          <div
            className={`${styles.lz} ${styles.lzTemples}`}
            onMouseEnter={() => !isMobile && activate('temples')}
            onMouseLeave={() => !isMobile && deactivate()}
            onClick={() => handleZoneClick('temples', 'banaras')}
          />
          <div
            className={`${styles.lz} ${styles.lzRajasthan}`}
            onMouseEnter={() => !isMobile && activate('rajasthan')}
            onMouseLeave={() => !isMobile && deactivate()}
            onClick={() => handleZoneClick('rajasthan', 'rajasthan')}
          />
          <div
            className={`${styles.lz} ${styles.lzSafari}`}
            onMouseEnter={() => !isMobile && activate('safari')}
            onMouseLeave={() => !isMobile && deactivate()}
            onClick={() => handleZoneClick('safari', 'mp')}
          />
          <div
            className={`${styles.lz} ${styles.lzGoa}`}
            onMouseEnter={() => !isMobile && activate('goa')}
            onMouseLeave={() => !isMobile && deactivate()}
            onClick={() => handleZoneClick('goa', 'rajasthan')}
          />
          <div
            className={`${styles.lz} ${styles.lzKerala}`}
            onMouseEnter={() => !isMobile && activate('kerala')}
            onMouseLeave={() => !isMobile && deactivate()}
            onClick={() => handleZoneClick('kerala', 'tirupati')}
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className={`${styles.popupCol} ${styles.popupRight}`}>
          {rightPanels.map((panel) => (
            <div
              key={panel.id}
              className={`${styles.lzPanel} ${activeZone === panel.zone ? styles.active : ''}`}
              style={{ top: panel.topPercent }}
              onMouseEnter={() => !isMobile && activate(panel.zone)}
              onMouseLeave={() => !isMobile && deactivate()}
            >
              <div
                className={styles.connectorLine}
                style={
                  activeZone === panel.zone
                    ? {
                        background: zoneColors[panel.zone],
                        boxShadow: `0 0 10px ${zoneColors[panel.zone]}cc, 0 0 24px ${zoneColors[panel.zone]}44`,
                        width: '48px',
                      }
                    : {}
                }
              />
              <div className={styles.panelPopup}>
                <div className={styles.popupTitle}>
                  <span className={styles.popupIcon}>{panel.icon}</span>
                  {panel.title}
                </div>
                <div className={styles.popupItems}>
                  {panel.tags.map((tag) => (
                    <button
                      key={tag.label}
                      className={`${styles.destTag} ${tag.status === 'live' ? styles.live : styles.soon}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTagClick(tag);
                      }}
                      disabled={tag.status === 'soon'}
                    >
                      {tag.status === 'live' && <span className={styles.arr}>→</span>}
                      {tag.label}
                      {tag.status === 'soon' && <span className={styles.pill}>Soon</span>}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </RevealWrapper>

      {/* MOBILE DETAIL PANEL */}
      {isMobile && activePanel && (
        <div className={styles.mobileDetail}>
          <div className={styles.mobileDetailHeader}>
            <span className={styles.mobileDetailIcon}>{activePanel.icon}</span>
            <h3>{activePanel.title}</h3>
          </div>
          <div className={styles.mobileDetailItems}>
            {activePanel.tags.map((tag) => (
              <button
                key={tag.label}
                className={`${styles.mobileDestTag} ${tag.status === 'live' ? styles.live : styles.soon}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleTagClick(tag);
                }}
                disabled={tag.status === 'soon'}
              >
                {tag.status === 'live' && <span className={styles.arr}>→</span>}
                {tag.label}
                {tag.status === 'soon' && <span className={styles.pill}>Soon</span>}
              </button>
            ))}
          </div>
        </div>
      )}

      {isMobile && !activeZone && (
        <div className={styles.mobileHint}>
          Tap any zone on the mark above to explore destinations.
        </div>
      )}
    </section>
  );
};

export default LogoMap;
