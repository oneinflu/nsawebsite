export type VideoItem = {
  id: string;
  src: string;
  title: string;
  author: string;
  views: string;
  date: string;
  thumb: string;
  quote?: string;
  tag?: 'CMA' | 'CPA' | 'ACCA' | 'EA' | 'General';
};

export const successVideos: VideoItem[] = [
  { id: 'story1', src: 'https://northstaracademy.b-cdn.net/northstaracademy/story1.mp4', title: 'From Aspirant to Achiever', author: 'NSA Alumni', views: '12k views', date: '2 days ago', thumb: '/students/1.jpg', quote: 'From Aspirant to Achiever', tag: 'General' },
  { id: 'story2', src: 'https://northstaracademy.b-cdn.net/northstaracademy/story2.mp4', title: 'Consistency beats Complexity', author: 'NSA Alumni', views: '9.1k views', date: '1 week ago', thumb: '/students/2.jpg', quote: 'Consistency beats Complexity', tag: 'CMA' },
  { id: 'story3', src: 'https://northstaracademy.b-cdn.net/northstaracademy/story3.mp4', title: 'Focus. Practice. Succeed.', author: 'NSA Alumni', views: '14k views', date: '4 days ago', thumb: '/students/3.jpg', quote: 'Focus. Practice. Succeed.', tag: 'CPA' },
  { id: 'story4', src: 'https://northstaracademy.b-cdn.net/northstaracademy/story4.mp4', title: 'Smart Prep, Real Outcomes', author: 'NSA Alumni', views: '7.6k views', date: '3 weeks ago', thumb: '/students/4.jpeg', quote: 'Smart Prep, Real Outcomes', tag: 'ACCA' },
  { id: 'story5', src: 'https://northstaracademy.b-cdn.net/northstaracademy/story5.mp4', title: 'From Confusion to Clarity', author: 'NSA Alumni', views: '11k views', date: '5 days ago', thumb: '/placements/placement1.webp', quote: 'From Confusion to Clarity', tag: 'EA' },
  { id: 'story6', src: 'https://northstaracademy.b-cdn.net/northstaracademy/story6.mp4', title: 'Results that Inspire', author: 'NSA Alumni', views: '8.8k views', date: '1 month ago', thumb: '/placements/placement2.webp', quote: 'Results that Inspire', tag: 'CMA' },
  { id: 'story7', src: 'https://northstaracademy.b-cdn.net/northstaracademy/story7.mp4', title: 'NorthStar Advantage', author: 'NSA Alumni', views: '10.2k views', date: '4 weeks ago', thumb: '/placements/placement3.webp', quote: 'NorthStar Advantage', tag: 'General' },
  { id: 'story8', src: 'https://northstaracademy.b-cdn.net/northstaracademy/story8.mp4', title: 'Community that Cares', author: 'NSA Alumni', views: '6.9k views', date: '2 months ago', thumb: '/placements/placement4.webp', quote: 'Community that Cares', tag: 'General' },
  { id: 'story9', src: 'https://northstaracademy.b-cdn.net/northstaracademy/story9.mp4', title: 'Your Story Starts Here', author: 'NSA Alumni', views: '5.3k views', date: '1 month ago', thumb: '/students/1.jpg', quote: 'Your Story Starts Here', tag: 'CPA' },
  { id: 'story10', src: 'https://northstaracademy.b-cdn.net/northstaracademy/story10.mp4', title: 'Mentor-led Success Journey', author: 'NSA Alumni', views: '18k views', date: '2 weeks ago', thumb: '/students/2.jpg', quote: 'Mentor-led Success Journey', tag: 'CMA' },
  { id: 'story12', src: 'https://northstaracademy.b-cdn.net/northstaracademy/story12.mp4', title: 'Big 4 Ready Confidence', author: 'NSA Alumni', views: '21k views', date: '1 week ago', thumb: '/students/3.jpg', quote: 'Big 4 Ready Confidence', tag: 'CPA' },
  { id: 'story13', src: 'https://northstaracademy.b-cdn.net/northstaracademy/story13.mp4', title: 'Roadmap to Global Career', author: 'NSA Alumni', views: '13k views', date: '5 days ago', thumb: '/students/4.jpeg', quote: 'Roadmap to Global Career', tag: 'ACCA' },
  { id: 'story14', src: 'https://northstaracademy.b-cdn.net/northstaracademy/story14.mp4', title: 'Exam Strategy Wins', author: 'NSA Alumni', views: '15k views', date: '3 days ago', thumb: '/students/2.jpg', quote: 'Exam Strategy Wins', tag: 'EA' },
];