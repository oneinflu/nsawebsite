import AboutHero from '@/components/about/AboutHero';
import AboutOverview from '@/components/about/AboutOverview';
import AboutLifeGallery from '@/components/about/AboutLifeGallery';
import TrustLogosMarquee from '@/components/TrustLogosMarquee';
import WhyNorthStar from '@/components/WhyNorthStar';
import MeetYourMentorTwo from '@/components/MeetYourMentorTwo';
import PlacementReadiness from '@/components/PlacementReadiness';

export const metadata = {
  title: 'About NorthStar Academy',
  description:
    'Learn about NorthStar Academy’s mentors, learning approach, placement readiness, trusted partners, and student life.',
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />

      <section className="bg-white border-t border-slate-200 py-6 sm:py-10 overflow-hidden">
        <div className="text-center mb-4 sm:mb-6">
          <p className="text-sm sm:text-base text-slate-600 font-medium">Trusted by students who now work at</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustLogosMarquee />
        </div>
      </section>

      <AboutOverview />

      {/* Reuse components inspired by CPA, CMA, EA, ACCA, CIA, AFA, theme */}
      <WhyNorthStar />
      <section id="mentors" className="scroll-mt-24">
        <MeetYourMentorTwo />
      </section>
      <PlacementReadiness />
    

      <AboutLifeGallery />

      
    </main>
  );
}