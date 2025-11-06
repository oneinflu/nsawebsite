import CMAEligibilityChecker from '@/components/cma/CMAEligibilityChecker';
import CMAFeesROI from '@/components/cma/CMAFeesROI';
import CMAGlobalPlacements from '@/components/cma/CMAGlobalPlacements';
import CMAHero from '@/components/cma/CMAHero';
import CMAImageMarquee from '@/components/cma/CMAImageMarquee';
import CMALearningExperience from '@/components/cma/CMALearningExperience';

import CMASyllabus from '@/components/cma/CMASyllabus';
import CMATestimonialVideo from '@/components/cma/CMATestimonialVideo';
import WhyCMA from '@/components/cma/WhyCMA';
import CMAFAQ from '@/components/CMAFAQ';



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

    </main>
  );
}