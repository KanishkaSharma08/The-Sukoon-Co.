import React from 'react';
import { Helmet } from 'react-helmet-async';

interface PageMetaProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

const BASE_URL = 'https://www.thesukoonco.in';
const OG_IMAGE = 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80';

const PageMeta: React.FC<PageMetaProps> = ({ title, description, canonical, ogImage }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href={`${BASE_URL}${canonical ?? ''}`} />

    {/* Open Graph */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={`${BASE_URL}${canonical ?? ''}`} />
    <meta property="og:image" content={ogImage ?? OG_IMAGE} />
    <meta property="og:site_name" content="The Sukoon Co" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage ?? OG_IMAGE} />

    {/* Schema.org structured data */}
    <script type="application/ld+json">{JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TravelAgency',
      name: 'The Sukoon Co',
      url: BASE_URL,
      telephone: ['+917032394455', '+919689833000'],
      email: 'team@sukoonco.com',
      description: 'Boutique customised travel across India. No fixed departures. Only yours.',
      areaServed: 'India',
      image: OG_IMAGE,
    })}</script>
  </Helmet>
);

export default PageMeta;
