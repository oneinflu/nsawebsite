
import ACCAComparisonMatrix from '@/components/acca-course-details/ACCAComparisonMatrix';
import ACCAExemptionsChecker from '@/components/acca-course-details/ACCAExemptionsChecker';
import ACCAFAQ from '@/components/acca-course-details/ACCAFAQ';
import ACCAGlobalSalaryROI from '@/components/acca-course-details/ACCAGlobalSalaryROI';
import ACCAHero from '@/components/acca-course-details/ACCAHero';
import ACCAPlacementOutcomes from '@/components/acca-course-details/ACCAPlacementOutcomes';

import ACCAStudySupport from '@/components/acca-course-details/ACCAStudySupport';
import ACCASyllabus from '@/components/acca-course-details/ACCASyllabus';
import ACCATimelinePlanner from '@/components/acca-course-details/ACCATimelinePlanner';
import WhyACCA from '@/components/acca-course-details/WhyACCA';


export default function ACCAUKPage() {
  return (
    <main className="min-h-screen">
      <ACCAHero />
     <WhyACCA />
       <ACCAStudySupport />
     <ACCAExemptionsChecker />
     <ACCASyllabus />
     <ACCATimelinePlanner />
     <ACCAPlacementOutcomes />
       <ACCAGlobalSalaryROI />
     <ACCAComparisonMatrix />
     <ACCAFAQ />
     
   
    </main>
  );
}