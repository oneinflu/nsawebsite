import CMAEligibilityChecker from '@/components/cma/CMAEligibilityChecker';
import CMAFeesROI from '@/components/cma/CMAFeesROI';
import CMAGlobalPlacements from '@/components/cma/CMAGlobalPlacements';
import CMAHero from '@/components/cma/CMAHero';
import CMAImageMarquee from '@/components/cma/CMAImageMarquee';
import CMALearningExperience from '@/components/cma/CMALearningExperience';
import CMALearningJourney from '@/components/cma/CMALearningJourney';

import CMASyllabus from '@/components/cma/CMASyllabus';
import CMATestimonialVideo from '@/components/cma/CMATestimonialVideo';
import WhyCMA from '@/components/cma/WhyCMA';
import CMAFAQ from '@/components/CMAFAQ';

export const metadata = {
  title: 'CMA USA — Learn CMA with NorthStar Academy',
  description:
    'Discover CMA USA syllabus, learning experience, global placements, fees ROI, eligibility, testimonial videos, and FAQs to begin your CMA journey.',
};



export default function CMAUSAPage() {
  return (
    <main className="min-h-screen">
      <CMAHero />
      <CMAImageMarquee />
      <WhyCMA />
      <CMALearningExperience />
      <CMASyllabus />
      <CMAGlobalPlacements />
      <CMATestimonialVideo />
      <CMAFeesROI />
      <CMAEligibilityChecker />
      <CMAFAQ />
      <CMALearningJourney />
    </main>
  );
}