import type { Itinerary } from '@/types/itinerary';

export const itineraries: Itinerary[] = [
  // === LADAKH & ZANSKAR (6) ===
  {
    id: 'ladakh-essential',
    region: 'Ladakh',
    name: 'Ladakh Essential',
    duration: '6 Days',
    route: 'Leh · Khardung La · Nubra · Turtuk · Pangong',
    imgSrc: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80',
    priceString: 'From ₹35,000 / person',
    stats: [
      { val: '6', label: 'Days' },
      { val: '5,359m', label: 'Highest point' },
      { val: '3', label: 'High passes' },
      { val: '0', label: 'Fixed departures' }
    ],
    days: [
      { day: '1–2', title: 'Leh Acclimatisation', desc: 'Arrive in Leh (3,500m). Acclimatise with complete rest on Day 1, followed by gentle old town walks, Shanti Stupa, and Leh Palace on Day 2.' },
      { day: '3', title: 'Leh to Nubra Valley', desc: 'Cross the Khardung La pass (5,359m). Visit the giant Buddha at Diskit Monastery and see the double-humped camels at Hunder sand dunes.' },
      { day: '4', title: 'Turtuk Excursion', desc: 'Explore the historic Balti village of Turtuk, bordering Pakistan. Experience local culture, apricot orchards, and unique cold-desert farming.' },
      { day: '5', title: 'Nubra to Pangong Lake', desc: 'Drive along the rugged Shyok River to Pangong Lake (4,250m). Stay overnight in lakeside cottages and experience the changing blue hues.' },
      { day: '6', title: 'Pangong to Leh & Departure', desc: 'Drive back to Leh crossing Chang La pass (5,360m). Transfer to Leh airport for your morning flight.' }
    ],
    notes: 'Best time: June to September. Proper acclimatisation in Leh is essential. Heavy woollens required for Nubra/Pangong nights.'
  },
  {
    id: 'complete-ladakh',
    region: 'Ladakh',
    name: 'The Complete Ladakh',
    duration: '8 Days',
    route: 'Leh · Nubra · Pangong · Hanle · Umling La · Tso Moriri',
    imgSrc: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=900&q=80',
    priceString: 'From ₹55,000 / person',
    stats: [
      { val: '8', label: 'Days' },
      { val: '5,798m', label: 'Umling La altitude' },
      { val: '5', label: 'High valleys' },
      { val: '0', label: 'Fixed departures' }
    ],
    days: [
      { day: '1–2', title: 'Leh Acclimatisation', desc: 'Rest on arrival in Leh. Day 2 includes exploring Leh local market, Shanti Stupa, and a short walk to Leh Palace.' },
      { day: '3', title: 'Khardung La to Nubra', desc: 'Cross the high Khardung La pass. Explore Hunder sand dunes and the remote village of Sumur.' },
      { day: '4', title: 'Nubra to Pangong Lake', desc: 'Drive via the Shyok route directly to Pangong Lake, catching a spectacular lakeside sunset.' },
      { day: '5', title: 'Pangong to Hanle', desc: 'Travel south into the remote Changthang plateau. Arrive in Hanle, a designated Dark Sky Reserve.' },
      { day: '6', title: 'Umling La Summit', desc: 'Ascend Umling La (5,798m), the highest motorable road in the world. Return to Hanle for stargazing.' },
      { day: '7', title: 'Hanle to Tso Moriri', desc: 'Cross high-altitude plains to the deep blue Tso Moriri lake. Visit Karzok village and monastery.' },
      { day: '8', title: 'Tso Moriri to Leh & Departure', desc: 'Drive back to Leh via Chumathang hot springs. Evening flight transfer.' }
    ],
    notes: 'Best time: June to August. This route goes into very remote high altitudes. Strict fitness check and acclimatisation required.'
  },
  {
    id: 'changthang',
    region: 'Ladakh · Changthang',
    name: 'Zanskar & Changthang Expedition',
    duration: '9–10 Days',
    route: 'Pangong · Hanle dark sky · Tso Moriri · Tso Kar',
    imgSrc: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80',
    priceString: 'From ₹42,000 / person',
    stats: [
      { val: '9-10', label: 'Days' },
      { val: '4,500m', label: 'Avg plateau height' },
      { val: '4', label: 'High-altitude lakes' },
      { val: '0', label: 'Fixed departures' }
    ],
    days: [
      { day: '1–2', title: 'Leh Arrival & Rest', desc: 'Arrive in Leh. Rest to adjust to thin air. Take a gentle walk to the local market and Shanti Stupa on Day 2.' },
      { day: '3', title: 'Leh to Pangong Lake', desc: 'Cross Chang La pass to arrive at Pangong Lake. Stay in eco-cabins overlooking the salt water.' },
      { day: '4', title: 'Pangong to Hanle', desc: 'Drive along the international border route to Hanle. Stargaze in India\'s prime dark sky territory.' },
      { day: '5', title: 'Hanle Astronomical Exploration', desc: 'Visit the Indian Astronomical Observatory. Enjoy walks around Hanle Monastery and the wetland flats.' },
      { day: '6', title: 'Hanle to Tso Moriri', desc: 'Take the scenic off-road drive across the plateau to Karzok by the shores of Tso Moriri.' },
      { day: '7', title: 'Tso Moriri Plateau Walks', desc: 'Explore Karzok Monastery and interact with the nomadic Changpa herdsmen and their pashmina goats.' },
      { day: '8', title: 'Tso Moriri to Tso Kar', desc: 'Drive to the salt flats of Tso Kar. Look out for Tibetan wild ass (Kiang) and rare birds.' },
      { day: '9–10', title: 'Tso Kar to Leh & Departure', desc: 'Return to Leh via Tanglang La pass. Transfer to airport for onward journey.' }
    ],
    notes: 'Best time: July to September. Excellent for astronomy enthusiasts, photographers, and wildlife observers.'
  },
  {
    id: 'zanskar-escape',
    region: 'Zanskar',
    name: 'Zanskar Escape',
    duration: '6 Days',
    route: 'Leh · Kargil · Rangdum · Padum · Zanskar Canyon',
    imgSrc: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80',
    priceString: 'From ₹36,000 / person',
    stats: [
      { val: '6', label: 'Days' },
      { val: '4,400m', label: 'Pensi La summit' },
      { val: '1', label: 'Glacier viewpoint' },
      { val: '0', label: 'Fixed departures' }
    ],
    days: [
      { day: '1', title: 'Leh to Kargil', desc: 'Drive along the Indus. Stop at Hall of Fame, Magnetic Hill, Alchi Monastery, and Mulbekh rock carvings. Overnight in Kargil.' },
      { day: '2', title: 'Kargil to Padum', desc: 'Enter the Suru Valley. Drive past the majestic Nun Kun peaks, Rangdum Monastery, and cross Pensi La pass (4,400m).' },
      { day: '3', title: 'Padum & Zanskar Canyon', desc: 'Explore Padum town, Karsha Monastery, Stongdey Monastery, and take in the deep gorge of the Zanskar Canyon.' },
      { day: '4', title: 'Padum to Lingshed', desc: 'Drive along the newly built route crossing Singge La pass (4,950m) to the isolated mountain village of Lingshed.' },
      { day: '5', title: 'Lingshed to Leh', desc: 'Finish the traverse back to Leh via Sirsir La pass. Relax in Leh town.' },
      { day: '6', title: 'Departure', desc: 'Transfer to Leh airport for departure flight.' }
    ],
    notes: 'Best time: July to September. Perfect for travellers seeking a short, high-impact adventure into the heart of remote Zanskar.'
  },
  {
    id: 'zanskar-deep',
    region: 'Zanskar',
    name: 'Zanskar Deep',
    duration: '8 Days',
    route: 'Manali · Zanskar Canyon · Phuktal · Padum · Suru Valley',
    imgSrc: 'https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=900&q=80',
    priceString: 'From ₹40,000 / person',
    stats: [
      { val: '8', label: 'Days' },
      { val: '5,091m', label: 'Shinku La crossing' },
      { val: '1', label: 'Monastery trek' },
      { val: '0', label: 'Fixed departures' }
    ],
    days: [
      { day: '1', title: 'Manali to Keylong/Jispa', desc: 'Drive via Atal Tunnel into Lahaul Valley. Explore Keylong and overnight in Jispa.' },
      { day: '2', title: 'Jispa to Purne via Shinku La', desc: 'Cross Shinku La pass (5,091m) with views of Gonbo Rangjon holy peak. Camp at Purne.' },
      { day: '3', title: 'Phuktal Monastery Trek', desc: 'Trek 4-5 hours round trip to Phuktal Monastery, built into a cliffside cave. Overnight in Purne.' },
      { day: '4', title: 'Purne to Padum', desc: 'Short drive to Padum. Explore Bardan Monastery, Zangla Palace ruins, and Karsha.' },
      { day: '5', title: 'Padum Village Exploration', desc: 'Spend a slow day visiting Stongdey Monastery and local homes for traditional butter tea.' },
      { day: '6', title: 'Padum to Rangdum', desc: 'Cross Pensi La pass, stopping at the Drang Drung glacier viewpoint. Enter Suru Valley.' },
      { day: '7', title: 'Rangdum to Kargil', desc: 'Drive past Nun Kun glacier peaks and pristine pastures. Overnight in Kargil.' },
      { day: '8', title: 'Kargil to Srinagar / Leh & Departure', desc: 'Drive across Zoji La to Srinagar or across Namika La to Leh, followed by airport drop.' }
    ],
    notes: 'Best time: July to September. Requires the Phuktal cave monastery trek (moderate difficulty). A true explorer\'s path.'
  },
  {
    id: 'himalayan-traverse',
    region: 'Manali → Leh',
    name: 'The Great Himalayan Traverse',
    duration: '14 Days',
    route: 'Manali · Shinkula La · Zanskar · Phuktal · Padum · Leh',
    imgSrc: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?w=900&q=80',
    priceString: 'From ₹75,000 / person',
    stats: [
      { val: '14', label: 'Days' },
      { val: '3', label: 'Legendary regions' },
      { val: '4', label: 'High mountain passes' },
      { val: '0', label: 'Fixed departures' }
    ],
    days: [
      { day: '1–2', title: 'Manali & Jispa', desc: 'Gather in Manali. Drive to Jispa in Lahaul Valley on Day 2 for initial acclimatisation.' },
      { day: '3', title: 'Jispa to Purne', desc: 'Cross Shinku La pass (5,091m) to enter Zanskar. Overnight by the Tsarap river.' },
      { day: '4–5', title: 'Phuktal Trek & Exploration', desc: 'Trek to the cliffside cave monastery of Phuktal. Day 5 is a slow day in local villages.' },
      { day: '6–7', title: 'Purne to Padum', desc: 'Drive to Padum. Sightsee around Zangla, Karsha, and Stongdey monasteries.' },
      { day: '8–9', title: 'Padum to Lingshed & Leh', desc: 'Traverse the new high pass route via Singge La (4,950m) and Sirsir La to Leh.' },
      { day: '10–11', title: 'Leh Rest & Local Monasteries', desc: 'Relax in Leh. Visit Thiksey and Hemis Monasteries, and explore the Indus valley.' },
      { day: '12–13', title: 'Leh to Pangong Lake & Return', desc: 'Cross Chang La to Pangong Lake. Return to Leh on Day 13 for final market shopping.' },
      { day: '14', title: 'Departure', desc: 'Morning flight from Leh airport. End of expedition.' }
    ],
    notes: 'Best time: July to August. A grand trans-Himalayan overland tour linking Lahaul, Zanskar, and Ladakh.'
  },

  // === HIMACHAL PRADESH (8) ===
  {
    id: 'chandratal',
    region: 'Spiti',
    name: 'Chandratal Escape',
    duration: '3 Days',
    route: 'Chandratal lake · Spiti meadows',
    imgSrc: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80',
    stats: [
      { val: '3', label: 'Days' },
      { val: '4,250m', label: 'Lake altitude' },
      { val: '1', label: 'Meadow walk' },
      { val: '0', label: 'Fixed departures' }
    ],
    days: [
      { day: '1', title: 'Manali to Chandratal', desc: 'Drive through Atal Tunnel to Lahaul Valley. Cross Kunzum Pass (4,551m) or turn toward Batal, reaching Chandratal camp site.' },
      { day: '2', title: 'Explore Chandratal Lake', desc: 'Walk to the crescent-shaped lake. Walk along the lakeside meadows, reflecting the surrounding peaks.' },
      { day: '3', title: 'Chandratal to Manali', desc: 'Drive back via Rohtang / Atal Tunnel. Drop in Manali for onward transit.' }
    ],
    notes: 'Best time: Mid-June to September. Accommodation is in semi-deluxe camps 2km from the lake. Nights are extremely cold.'
  },
  {
    id: 'spiti-express',
    region: 'Spiti',
    name: 'Spiti Express',
    duration: '6 Days',
    route: 'Kaza · Tabo · Key Monastery · Chandratal',
    imgSrc: 'https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=800&q=80',
    stats: [
      { val: '6', label: 'Days' },
      { val: '4', label: 'Historic temples' },
      { val: '2', label: 'High passes' },
      { val: '0', label: 'Fixed departures' }
    ],
    days: [
      { day: '1', title: 'Manali to Kaza', desc: 'Cross Rohtang Pass / Atal Tunnel and Kunzum Pass to enter Spiti Valley. Overnight in Kaza.' },
      { day: '2', title: 'Kaza & Spiti Villages', desc: 'Visit Key Monastery, Kibber village, and drive across the suspension bridge to Chicham.' },
      { day: '3', title: 'Tabo & Dhankar excursion', desc: 'Explore Tabo Monastery (founded 996 AD) and the dramatic cliffside ruins of Dhankar Fort.' },
      { day: '4', title: 'Kaza to Chandratal', desc: 'Drive to Batal, hike or drive to Chandratal Lake. Camp overnight near the water.' },
      { day: '5', title: 'Chandratal to Manali', desc: 'Drive back to Manali. Evening at leisure.' },
      { day: '6', title: 'Departure', desc: 'Morning checkout and drop at Manali transit station.' }
    ],
    notes: 'Best time: June to September. A fast-paced exploration of the highlight sites in Spiti Valley.'
  },
  {
    id: 'dharamshala',
    region: 'Himachal',
    name: 'The Dharamshala Journey',
    duration: '5 Days',
    route: 'McLeod Ganj · Triund · Dharamkot',
    imgSrc: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    stats: [
      { val: '5', label: 'Days' },
      { val: '2,875m', label: 'Triund altitude' },
      { val: '1', label: 'Forest trek' },
      { val: '0', label: 'Fixed departures' }
    ],
    days: [
      { day: '1', title: 'Arrive Dharamshala', desc: 'Transfer to hotel in McLeod Ganj. Evening walk around the Dalai Lama temple complex.' },
      { day: '2', title: 'Bhagsunag & Dharamkot', desc: 'Visit Bhagsunag waterfall, St. John in the Wilderness church, and the cafes of Dharamkot village.' },
      { day: '3', title: 'Triund Forest Trek', desc: 'Begin the 4-hour trek to Triund ridge. Camp overnight under the stars with views of the Dhauladhar range.' },
      { day: '4', title: 'Triund to McLeod Ganj', desc: 'Trek back down. Rest or indulge in local Tibetan food in McLeod Ganj.' },
      { day: '5', title: 'Departure', desc: 'Drop to Gaggal airport or Pathankot railway station.' }
    ],
    notes: 'Best time: October to June. Triund trek is moderate. Comfortable walking shoes and a small backpack are required.'
  },
  {
    id: 'beyond-spiti',
    region: 'Spiti · Kinnaur',
    name: 'Beyond Spiti',
    duration: '8 Days',
    route: 'Pin Valley · Kibber · Dhankar · Kinnaur',
    imgSrc: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
    stats: [
      { val: '8', label: 'Days' },
      { val: '3', label: 'Himachali valleys' },
      { val: '4,000m+', label: 'Peak elevations' },
      { val: '0', label: 'Fixed departures' }
    ],
    days: [
      { day: '1–2', title: 'Shimla to Sangla & Chitkul', desc: 'Drive through Kinnaur along the Sutlej. On Day 2, visit Chitkul, the last village on the Indo-Tibet border.' },
      { day: '3', title: 'Sangla to Nako', desc: 'Explore Sangla fort. Drive to Nako lake and monastery, sitting near the Tibetan border.' },
      { day: '4', title: 'Nako to Tabo & Dhankar', desc: 'Enter Spiti Valley. Visit Tabo’s ancient mud temples and Dhankar’s hanging monastery.' },
      { day: '5', title: 'Dhankar to Pin Valley', desc: 'Explore Pin Valley National Park. Stay in the quiet village of Mud.' },
      { day: '6', title: 'Pin Valley to Kaza', desc: 'Explore Key Monastery, Komic (highest village), and Hikkim (highest post office).' },
      { day: '7', title: 'Kaza to Manali', desc: 'Drive across Kunzum Pass and through Lahaul Valley back to Manali.' },
      { day: '8', title: 'Departure', desc: 'Morning checkout and drop at Manali transit point.' }
    ],
    notes: 'Best time: June to September. Starts in Shimla and ends in Manali, making it a complete Spiti loop with gradual acclimatisation.'
  },
  {
    id: 'sukoon-trail',
    region: 'Lower Himachal',
    name: 'The Sukoon Trail',
    duration: '6 Days',
    route: 'Tirthan · Jibhi · Jalori · Shoja',
    imgSrc: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    stats: [
      { val: '6', label: 'Days' },
      { val: '3,120m', label: 'Jalori Pass height' },
      { val: '1', label: 'National park hike' },
      { val: '0', label: 'Fixed departures' }
    ],
    days: [
      { day: '1', title: 'Arrive Tirthan Valley', desc: 'Transfer to a riverside wooden lodge in Tirthan. Relax by the water.' },
      { day: '2', title: 'Great Himalayan National Park Walk', desc: 'A guided day walk inside the UNESCO heritage park to Chhoie waterfall.' },
      { day: '3', title: 'Tirthan to Jibhi', desc: 'Drive to Jibhi. Explore local pine forest trails and wooden houses.' },
      { day: '4', title: 'Jalori Pass & Serolsar Lake', desc: 'Drive to Jalori Pass (3,120m) and hike through oak forests to the sacred Serolsar Lake.' },
      { day: '5', title: 'Shoja Mountain Meadows', desc: 'Relax in the alpine meadow hamlet of Shoja, perfect for mountain reading.' },
      { day: '6', title: 'Departure', desc: 'Drive back to Kullu airport or Bhuntar bus stand.' }
    ],
    notes: 'Best time: March to June, and October to November. A low-altitude, relaxing vacation, highly recommended for families.'
  },
  {
    id: 'pangi-valley',
    region: 'Pangi Valley',
    name: 'Pangi Valley Explorer',
    duration: '6 Days',
    route: 'Killar · Trilokinath · Udaipur · Chamba',
    imgSrc: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800&q=80',
    stats: [
      { val: '6', label: 'Days' },
      { val: '4,390m', label: 'Sach Pass crossing' },
      { val: '1', label: 'Remote gorge drive' },
      { val: '0', label: 'Fixed departures' }
    ],
    days: [
      { day: '1', title: 'Manali to Udaipur', desc: 'Drive through Atal Tunnel to Lahaul. Visit Trilokinath Temple and Udaipur village.' },
      { day: '2', title: 'Udaipur to Killar', desc: 'Drive along the dangerous Chenab River gorge road to Killar, Pangi Valley\'s center.' },
      { day: '3', title: 'Killar & Hudan Valley', desc: 'Explore Hudan Lake, remote Pangi hamlets, and interact with the Pangwala community.' },
      { day: '4', title: 'Killar to Sural Valley', desc: 'Drive to the scenic Sural Valley, exploring old temples and alpine fields.' },
      { day: '5', title: 'Killar to Chamba via Sach Pass', desc: 'Cross the wild Sach Pass (4,390m) over dirt roads and snow walls to Chamba.' },
      { day: '6', title: 'Departure', desc: 'Transfer from Chamba to Pathankot railway station.' }
    ],
    notes: 'Best time: July to September. Very basic facilities. Ideal only for adventure seekers and offbeat travelers.'
  },
  {
    id: 'sach-pass',
    region: 'Pangi · Chamba',
    name: 'The Sach Pass Traverse',
    duration: '6 Days',
    route: 'Chamba · Sach Pass 4,390m · Pangi',
    imgSrc: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80',
    stats: [
      { val: '6', label: 'Days' },
      { val: '4,390m', label: 'Sach Pass summit' },
      { val: '1', label: 'Mountain pass loop' },
      { val: '0', label: 'Fixed departures' }
    ],
    days: [
      { day: '1', title: 'Pathankot to Chamba', desc: 'Transfer to Chamba. Visit the ancient Lakshmi Narayan Temple and local markets.' },
      { day: '2', title: 'Chamba to Killar via Sach Pass', desc: 'Cross Sach Pass (4,390m). Traverse snow glaciers, ice walls, and waterfalls. Stay in Killar.' },
      { day: '3', title: 'Killar & Sural Valley', desc: 'Spend a day walking in the alpine fields of Sural village, tasting local cuisine.' },
      { day: '4', title: 'Killar to Udaipur', desc: 'Travel along the river gorge to Udaipur in Lahaul Valley.' },
      { day: '5', title: 'Udaipur to Manali', desc: 'Drive back to Manali via the Atal Tunnel. Evening check-in at Manali.' },
      { day: '6', title: 'Departure', desc: 'Morning checkout in Manali and transfer to Kullu airport.' }
    ],
    notes: 'Best time: July to September. Road across Sach Pass is rough and open only for a few months.'
  },
  {
    id: 'pangi-sach',
    region: 'Pangi · Chamba',
    name: 'Pangi & Sach Pass Expedition',
    duration: '8 Days',
    route: 'Manali · Pangi · Sach Pass · Chamba',
    imgSrc: 'https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=800&q=80',
    stats: [
      { val: '8', label: 'Days' },
      { val: '4,390m', label: 'Sach Pass summit' },
      { val: '3', label: 'Valleys traversed' },
      { val: '0', label: 'Fixed departures' }
    ],
    days: [
      { day: '1', title: 'Manali Arrival', desc: 'Reach Manali. Rest, check gear, and acclimatise.' },
      { day: '2', title: 'Manali to Udaipur', desc: 'Drive past Lahaul Valley. Explore the ancient Trilokinath temple.' },
      { day: '3', title: 'Udaipur to Killar', desc: 'Traverse the Chenab river canyon road to enter Pangi Valley.' },
      { day: '4', title: 'Killar Villages Tour', desc: 'Walk through Sural and Cherry villages, observing local woodcraft.' },
      { day: '5', title: 'Killar to Chamba via Sach Pass', desc: 'Complete the rugged pass crossing (4,390m), descending into Chamba.' },
      { day: '6', title: 'Chamba Heritage Tour', desc: 'Visit Chamba museum, Laxmi Narayan temple complex, and the local bazaar.' },
      { day: '7', title: 'Chamba to Khajjiar & Dalhousie', desc: 'Drive to the cedar forests of Khajjiar (Mini Switzerland). Stay overnight in Dalhousie.' },
      { day: '8', title: 'Departure', desc: 'Drive to Pathankot or Amritsar airport for your return flight.' }
    ],
    notes: 'Best time: July to August. A comprehensive expedition linking Manali, Spiti/Lahaul, Pangi, and Chamba.'
  }
];

export const getItinerary = (id: string): Itinerary | undefined =>
  itineraries.find((i) => i.id === id);
