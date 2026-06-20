import React, { useEffect } from 'react';
import PageHero from '@/components/ui/PageHero/PageHero';
import RegionSection from '@/components/destinations/RegionSection/RegionSection';
import { regions } from '@/data/destinations';

const DestinationsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="subpage-pad">
      <PageHero
        eyebrow="02 / Destinations"
        title={
          <>
            Where we <em>take you.</em>
          </>
        }
        subtitle="We launch with three regions, fully lived in. Many more are on the way — each added only once we've walked it ourselves."
      />
      {regions.map((region) => (
        <RegionSection key={region.id} region={region} />
      ))}
    </div>
  );
};

export default DestinationsPage;
