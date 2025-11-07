import SuccessStoriesHero from '@/components/success/SuccessStoriesHero';

  import PortraitVideoCarousel from '@/components/PortraitVideoCarousel';

export const metadata = {
  title: 'Success Stories | NorthStar Academy',
  description: 'Real outcomes from mentor-led learning. Explore videos, testimonials, and career journeys across CMA, CPA, ACCA, and EA.',
};
const portraitVideos = [
  { url: 'https://northstaracademy.b-cdn.net/northstaracademy/story1.mp4', quote: 'From Aspirant to Achiever' },
  { url: 'https://northstaracademy.b-cdn.net/northstaracademy/story10.mp4', quote: 'Mentor-led Success Journey' },
  { url: 'https://northstaracademy.b-cdn.net/northstaracademy/story12.mp4', quote: 'Big 4 Ready Confidence' },
  { url: 'https://northstaracademy.b-cdn.net/northstaracademy/story13.mp4', quote: 'Roadmap to Global Career' },
  { url: 'https://northstaracademy.b-cdn.net/northstaracademy/story14.mp4', quote: 'Exam Strategy Wins' },
  { url: 'https://northstaracademy.b-cdn.net/northstaracademy/story2.mp4', quote: 'Consistency beats Complexity' },
  { url: 'https://northstaracademy.b-cdn.net/northstaracademy/story3.mp4', quote: 'Focus. Practice. Succeed.' },
  { url: 'https://northstaracademy.b-cdn.net/northstaracademy/story4.mp4', quote: 'Smart Prep, Real Outcomes' },
  { url: 'https://northstaracademy.b-cdn.net/northstaracademy/story5.mp4', quote: 'From Confusion to Clarity' },
  { url: 'https://northstaracademy.b-cdn.net/northstaracademy/story6.mp4', quote: 'Results that Inspire' },
  { url: 'https://northstaracademy.b-cdn.net/northstaracademy/story7.mp4', quote: 'NorthStar Advantage' },
  { url: 'https://northstaracademy.b-cdn.net/northstaracademy/story8.mp4', quote: 'Community that Cares' },
  { url: 'https://northstaracademy.b-cdn.net/northstaracademy/story9.mp4', quote: 'Your Story Starts Here' }
];
export default function SuccessStoriesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <SuccessStoriesHero />
       <PortraitVideoCarousel videos={portraitVideos} title="Success Stories" subtitle="Real transformations at NorthStar Academy" />
    
   



     
    </main>
  );
}