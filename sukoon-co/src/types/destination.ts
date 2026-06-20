export type CardSize = 'feature' | 'tall' | 'wide' | 'small';
export type CardStatus = 'live' | 'soon';

export interface DestCard {
  id: string;
  name: string;
  tagline: string;
  imgSrc: string;
  size: CardSize;
  status: CardStatus;
  itineraryId?: string;
}

export interface SoonChip {
  id: string;
  name: string;
  tag: string;
  imgSrc: string;
}

export interface Region {
  id: string;
  num: string;
  label: string;
  title: string;
  status: string;
  statusType: 'live' | 'soon';
  cards: DestCard[];
  soonChips: SoonChip[];
}
