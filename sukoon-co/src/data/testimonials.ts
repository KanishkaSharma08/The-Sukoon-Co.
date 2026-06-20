export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  trip: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'priya',
    quote:
      '"I have travelled across 40 countries, and no one has ever made me feel as taken care of as The Sukoon Co did in Rajasthan. I just lived it."',
    name: 'Priya Kapoor',
    trip: 'Royal Rajasthan · 12 Days',
  },
  {
    id: 'arjun-meera',
    quote:
      '"We saw a Bengal tiger on day one and wept. Our guide knew exactly where to go. The entire journey felt sacred. Sukoon is the right word."',
    name: 'Arjun & Meera Nair',
    trip: 'Tiger Trails · 7 Days',
  },
  {
    id: 'sarah',
    quote:
      '"The Ladakh trip was everything a once-in-a-lifetime journey should be. Cold mornings, silence, stars I had never seen. Completely effortless."',
    name: 'Sarah Thompson',
    trip: 'The Quiet Peaks · 10 Days',
  },
];
