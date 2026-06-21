export interface DayEntry {
  day: string;
  title: string;
  desc: string;
}

export interface ItineraryStat {
  val: string;
  label: string;
}

export interface Itinerary {
  id: string;
  region: string;
  name: string;
  duration: string;
  route: string;
  cardDuration?: string;
  cardRoute?: string;
  imgSrc: string;
  isWide?: boolean;
  stats: ItineraryStat[];
  days: DayEntry[];
  notes: string;
}
