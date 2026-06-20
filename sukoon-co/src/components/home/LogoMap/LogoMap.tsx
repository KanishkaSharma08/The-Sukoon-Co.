import React, { useState } from 'react';
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
      { label: 'Rajasthan', status: 'live', itineraryId: 'rajasthan' },
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
      { label: 'Madhya Pradesh', status: 'live', itineraryId: 'mp' },
      { label: 'Banaras', status: 'live', itineraryId: 'banaras' },
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
      { label: 'Madhya Pradesh', status: 'live', itineraryId: 'mp' },
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

const LogoMap: React.FC = () => {
  const [activeZone, setActiveZone] = useState<Zone | null>(null);
  const { openModal } = useModal();
  const navigate = useNavigate();

  const activate = (zone: Zone) => setActiveZone(zone);
  const deactivate = () => setActiveZone(null);

  const handleTagClick = (tag: DestTag) => {
    if (tag.status === 'live' && tag.itineraryId) {
      openModal(tag.itineraryId);
    }
  };

  const leftPanels = panels.filter((p) => p.side === 'left');
  const rightPanels = panels.filter((p) => p.side === 'right');

  return (
    <section className={styles.section} id="logo-section">
      <RevealWrapper as="p" className={styles.label}>
        Explore India
      </RevealWrapper>
      <RevealWrapper as="h2" delay={1} className={styles.title}>
        Six worlds. One mark.
      </RevealWrapper>
      <RevealWrapper as="p" delay={2} className={styles.sub}>
        Hover over each panel to explore where we take you.
      </RevealWrapper>

      <RevealWrapper delay={2} className={styles.stage}>
        {/* LEFT COLUMN */}
        <div className={`${styles.popupCol} ${styles.popupLeft}`}>
          {leftPanels.map((panel) => (
            <div
              key={panel.id}
              className={`${styles.lzPanel} ${activeZone === panel.zone ? styles.active : ''}`}
              style={{ top: panel.topPercent }}
              onMouseEnter={() => activate(panel.zone)}
              onMouseLeave={deactivate}
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
              <div className={styles.connectorLine} />
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
            onMouseEnter={() => activate('mountains')}
            onMouseLeave={deactivate}
            onClick={() => openModal('ladakh')}
          />
          <div
            className={`${styles.lz} ${styles.lzTemples}`}
            onMouseEnter={() => activate('temples')}
            onMouseLeave={deactivate}
            onClick={() => openModal('banaras')}
          />
          <div
            className={`${styles.lz} ${styles.lzRajasthan}`}
            onMouseEnter={() => activate('rajasthan')}
            onMouseLeave={deactivate}
            onClick={() => openModal('rajasthan')}
          />
          <div
            className={`${styles.lz} ${styles.lzSafari}`}
            onMouseEnter={() => activate('safari')}
            onMouseLeave={deactivate}
            onClick={() => openModal('mp')}
          />
          <div
            className={`${styles.lz} ${styles.lzGoa}`}
            onMouseEnter={() => activate('goa')}
            onMouseLeave={deactivate}
            onClick={() => navigate('/destinations')}
          />
          <div
            className={`${styles.lz} ${styles.lzKerala}`}
            onMouseEnter={() => activate('kerala')}
            onMouseLeave={deactivate}
            onClick={() => openModal('tirupati')}
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className={`${styles.popupCol} ${styles.popupRight}`}>
          {rightPanels.map((panel) => (
            <div
              key={panel.id}
              className={`${styles.lzPanel} ${activeZone === panel.zone ? styles.active : ''}`}
              style={{ top: panel.topPercent }}
              onMouseEnter={() => activate(panel.zone)}
              onMouseLeave={deactivate}
            >
              <div className={styles.connectorLine} />
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
    </section>
  );
};

export default LogoMap;
