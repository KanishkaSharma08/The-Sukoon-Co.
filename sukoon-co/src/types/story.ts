export interface Story {
  id: string;
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  imgSrc: string;
  readTime?: string;
  isFeatured?: boolean;
}
