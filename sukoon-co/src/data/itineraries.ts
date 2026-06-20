import type { Itinerary } from '@/types/itinerary';

export const itineraries: Itinerary[] = [
  {
    id: 'rajasthan',
    region: 'Rajasthan',
    name: 'The Royal Heartland',
    duration: '12 Days',
    route: 'Udaipur · Jodhpur · Jaisalmer · Jaipur',
    imgSrc: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1400&q=80',
    isWide: true,
    stats: [
      { val: '12', label: 'Days' },
      { val: '~950', label: 'Kilometres' },
      { val: '4', label: 'Cities' },
      { val: '0', label: 'Fixed departures' }
    ],
    days: [
      { day: '1–3', title: 'Udaipur', desc: 'City Palace, Lake Pichola boat ride, Jagdish Temple, Saheliyon ki Bari, sunset at Bagore ki Haveli.' },
      { day: '4–5', title: 'Jodhpur', desc: 'Mehrangarh Fort, Jaswant Thada, the blue old city, Umaid Bhawan Palace exterior, local market walk.' },
      { day: '6–8', title: 'Jaisalmer', desc: 'Jaisalmer Fort (living fort), Patwon ki Haveli, Sam Sand Dunes overnight desert camp, camel safari.' },
      { day: '9–11', title: 'Jaipur', desc: 'Amber Fort, City Palace, Hawa Mahal, Jantar Mantar, Johari Bazaar for jewellery and textiles.' },
      { day: '12', title: 'Departure', desc: 'Morning at leisure, last-minute shopping, airport/railway drop.' }
    ],
    notes: 'Best time: October–March. Carry light cottons for the day and a warm layer for desert nights. Internal travel is by private vehicle throughout.'
  },
  {
    id: 'ladakh',
    region: 'Ladakh',
    name: 'The Quiet Peaks',
    duration: '8–10 Days',
    route: 'Leh · Nubra · Pangong · Hanle · Umling La',
    imgSrc: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80',
    stats: [
      { val: '9', label: 'Days (avg)' },
      { val: '5,798m', label: 'Highest point (Umling La)' },
      { val: '4', label: 'High-altitude zones' },
      { val: '0', label: 'Fixed departures' }
    ],
    days: [
      { day: '1–2', title: 'Leh', desc: 'Acclimatisation days — Leh Palace, Shanti Stupa, local market, gentle walks only.' },
      { day: '3–4', title: 'Nubra Valley', desc: 'Khardung La crossing, Diskit Monastery, sand dunes and double-humped camels at Hunder.' },
      { day: '5–6', title: 'Pangong Lake', desc: 'Changla Pass, overnight by the lake, sunrise over the changing blue.' },
      { day: '7–8', title: 'Hanle & Umling La', desc: "India's highest motorable pass, Hanle's dark-sky observatory, remote Changthang plateau." },
      { day: '9–10', title: 'Return & Departure', desc: 'Drive back to Leh, buffer day for weather, departure.' }
    ],
    notes: 'Best time: June–September. Acclimatisation is non-negotiable — no high-altitude push before Day 3. Carry warm layers regardless of season.'
  },
  {
    id: 'zanskar',
    region: 'Zanskar',
    name: 'The Frozen River',
    duration: '8 Days',
    route: 'Padum · Phuktal · Suru Valley · Manali',
    imgSrc: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80',
    stats: [
      { val: '8', label: 'Days' },
      { val: '~3,850m', label: 'Padum altitude' },
      { val: '1', label: 'Remote monastery trek' },
      { val: '0', label: 'Fixed departures' }
    ],
    days: [
      { day: '1–2', title: 'Kargil to Padum', desc: 'Drive via Suru Valley, Rangdum Monastery, Pensi La pass into the Zanskar valley.' },
      { day: '3–4', title: 'Padum & Phuktal', desc: 'Day trek or drive toward Phuktal Monastery, built into a cliffside cave.' },
      { day: '5–6', title: 'Zanskar villages', desc: 'Karsha Monastery, Stongdey, quiet valley villages largely untouched by tourism.' },
      { day: '7–8', title: 'Return via Manali', desc: 'Cross back over high passes toward Manali, end of the circuit.' }
    ],
    notes: 'Best time: July–September (road open). Extremely remote — limited connectivity throughout. Not recommended for first-time high-altitude travellers.'
  },
  {
    id: 'banaras',
    region: 'Banaras',
    name: 'City of Light',
    duration: '5 Days',
    route: 'Varanasi Ghats · Sarnath · Ganga Aarti',
    imgSrc: 'https://images.unsplash.com/photo-1561361058-c24e01f69f84?w=900&q=80',
    stats: [
      { val: '5', label: 'Days' },
      { val: '1', label: 'Single city base' },
      { val: '88', label: 'Ghats along the river' },
      { val: '0', label: 'Fixed departures' }
    ],
    days: [
      { day: '1', title: 'Arrival', desc: 'Check-in, evening Ganga Aarti at Dashashwamedh Ghat.' },
      { day: '2', title: 'The Ghats', desc: 'Sunrise boat ride along the river, walk through Assi Ghat to Manikarnika Ghat.' },
      { day: '3', title: 'Old City & Sarnath', desc: 'Narrow lanes of Vishwanath Gali, silk weaving workshops, day trip to Sarnath.' },
      { day: '4', title: 'Slow day', desc: 'Optional: classical music recital, cooking experience, or simply more ghat time.' },
      { day: '5', title: 'Departure', desc: 'Morning at leisure, airport/railway drop.' }
    ],
    notes: 'Best time: October–March. This is a single-base, low-effort trip — same hotel throughout, ideal for shorter visits.'
  },
  {
    id: 'tirupati',
    region: 'Tirupati',
    name: 'The Sacred Summit',
    duration: '3 Days',
    route: 'Tirumala · Padmavathi Temple · Chandragiri',
    imgSrc: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80',
    stats: [
      { val: '3', label: 'Days' },
      { val: '~853m', label: 'Tirumala altitude' },
      { val: '1', label: 'Single base' },
      { val: '0', label: 'Fixed departures' }
    ],
    days: [
      { day: '1', title: 'Arrival & Tirumala', desc: 'Drive up the ghat road, check-in, Sri Venkateswara Temple darshan (timing per booking).' },
      { day: '2', title: 'Temple circuit', desc: 'Padmavathi Temple at Tiruchanur, Akasa Ganga, Silathoranam natural arch.' },
      { day: '3', title: 'Chandragiri & Departure', desc: 'Chandragiri Fort, then drop to Tirupati airport/railway station.' }
    ],
    notes: 'Best time: year-round (avoid peak festival crowds unless intended). Darshan tickets and timings are arranged in advance — please share preferred dates early.'
  },
  {
    id: 'himachal',
    region: 'Himachal Pradesh',
    name: 'Valley to Valley',
    duration: '9 Days',
    route: 'Kinnaur · Chitkul · Tabo · Kaza · Chandratal',
    imgSrc: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80',
    stats: [
      { val: '9', label: 'Days' },
      { val: '~4,300m', label: 'Kunzum Pass' },
      { val: '5', label: 'Valleys covered' },
      { val: '0', label: 'Fixed departures' }
    ],
    days: [
      { day: '1–2', title: 'Kinnaur', desc: 'Drive along the Sutlej, apple orchards, Kalpa for Kinner Kailash views.' },
      { day: '3', title: 'Chitkul', desc: "India's last inhabited village toward the Indo-Tibet border." },
      { day: '4–5', title: 'Tabo & Dhankar', desc: "1,000-year-old Tabo Monastery, Dhankar's cliffside gompa, Pin Valley." },
      { day: '6–7', title: 'Kaza & Spiti villages', desc: "Key Monastery, Kibber, Langza's fossil village, Komic — among the world's highest." },
      { day: '8–9', title: 'Chandratal & Manali', desc: 'Crossing Kunzum Pass to camp by Chandratal lake, then descent to Manali.' }
    ],
    notes: 'Best time: June–September (roads open). High-altitude circuit — acclimatise in Kinnaur before pushing into Spiti.'
  },
  {
    id: 'kashmir',
    region: 'Kashmir',
    name: 'Beyond Dal Lake',
    duration: '4 Days',
    route: 'Srinagar · Gulmarg · Sonamarg',
    imgSrc: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?w=900&q=80',
    stats: [
      { val: '4', label: 'Days' },
      { val: '~220', label: 'Kilometres' },
      { val: '1', label: 'Hotel, zero changeovers' },
      { val: '3,979m', label: 'Gulmarg Phase 2' }
    ],
    days: [
      { day: '1', title: 'Arrive Srinagar', desc: 'Check in for the full trip. Mughal Gardens (Nishat Bagh, Shalimar Bagh, Chashme Shahi), Lal Chowk market, evening at the Bund.' },
      { day: '2', title: 'Gulmarg round trip', desc: 'Drive to Gulmarg, Gondola Phase 1 to Kongdoori, Phase 2 to Apharwat Peak (3,979m), return to the same Srinagar hotel.' },
      { day: '3', title: 'Sonamarg round trip', desc: 'Drive via Kangan, Thajiwas Glacier (pony or short walk), optional Zero Point & Zojila detour, return to Srinagar.' },
      { day: '4', title: 'Checkout & Departure', desc: 'Morning at leisure, last-minute shopping, airport/railway drop.' }
    ],
    notes: 'Best time: April–June (spring bloom) or September–November (autumn colours). Single-base format — same hotel for all 4 days, no packing or unpacking after Day 1.'
  },
  {
    id: 'mp',
    region: 'Madhya Pradesh',
    name: 'The Tiger Trails',
    duration: '8 Days',
    route: 'Bandhavgarh · Kanha · Pench · Khajuraho',
    imgSrc: 'https://images.unsplash.com/photo-1615361200141-f45040f367be?w=1400&q=80',
    isWide: true,
    stats: [
      { val: '8', label: 'Days' },
      { val: '3', label: 'Tiger reserves' },
      { val: '6+', label: 'Safari drives' },
      { val: '0', label: 'Fixed departures' }
    ],
    days: [
      { day: '1–2', title: 'Bandhavgarh', desc: 'Two safari drives, highest tiger density in India, Bandhavgarh Fort viewpoint.' },
      { day: '3–4', title: 'Kanha', desc: "Inspiration for Kipling's Jungle Book, sal forests and open meadows, multiple safaris." },
      { day: '5–6', title: 'Pench', desc: 'Quieter reserve on the Maharashtra border, strong birdlife alongside tiger sightings.' },
      { day: '7–8', title: 'Khajuraho & Departure', desc: 'UNESCO temple complex en route, then airport/railway drop.' }
    ],
    notes: 'Best time: November–April (parks close mid-year for monsoon). Safari permits are limited and booked well in advance — earlier planning means better sightings.'
  }
];

export const getItinerary = (id: string): Itinerary | undefined =>
  itineraries.find((i) => i.id === id);
