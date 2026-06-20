import type { Story } from '@/types/story';

export const featuredStory: Story = {
  id: 'chadar-walk',
  tag: 'Field Diary',
  date: 'Ladakh & Zanskar',
  title: 'Walking on a Frozen River: Six Days on the Chadar',
  excerpt:
    "There is no road to Zanskar in winter. There is only the river, frozen hard enough to walk on, and the eleven of us who decided that was reason enough to go. This is what nobody tells you about the Chadar before you do it.",
  imgSrc: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=85',
  readTime: '9 min read',
  isFeatured: true,
};

export const stories: Story[] = [
  {
    id: 'hanle-dark-sky',
    tag: 'Ladakh',
    date: 'Field Notes',
    title: "What 5am Looks Like at India's Darkest Sky Reserve",
    excerpt:
      "Hanle sits at 4,500 metres with almost no light pollution for hundreds of kilometres. We went to watch the stars and stayed up arguing about whether the Milky Way looks better through a telescope or with nothing in between you and it.",
    imgSrc: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80',
  },
  {
    id: 'kinnaur-spiti-road',
    tag: 'Spiti Valley',
    date: 'Route Guide',
    title: 'The Kinnaur–Spiti Road, Mile by Mile',
    excerpt:
      "Nine days, one road, and a valley that changes character every twenty kilometres — from apple orchards in Kinnaur to lunar fossil beds in Langza. A practical account of where to stop, where to sleep, and where to just sit quietly.",
    imgSrc: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80',
  },
  {
    id: 'ganga-aarti',
    tag: 'Banaras',
    date: 'Essay',
    title: "The Ganga Aarti Isn't a Performance. It Just Looks Like One.",
    excerpt:
      "Every evening at the same ghat, the same ritual happens whether or not a single tourist is watching. We spent three evenings there trying to understand the difference between witnessing something and consuming it.",
    imgSrc: 'https://images.unsplash.com/photo-1561361058-c24e01f69f84?w=600&q=80',
  },
];
