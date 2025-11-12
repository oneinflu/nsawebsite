import CMAEligibilityChecker from "@/components/cma/CMAEligibilityChecker";
import CMAFeesROI from "@/components/cma/CMAFeesROI";
import CMAGlobalPlacements from "@/components/cma/CMAGlobalPlacements";
import CMAHero from "@/components/cma/CMAHero";
import CMALearningExperience from "@/components/cma/CMALearningExperience";
import CMASyllabus from "@/components/cma/CMASyllabus";
import WhyCMA from "@/components/cma/WhyCMA";
import CMAComparison from "@/components/CMAComparison";
import CMAFAQ from "@/components/CMAFAQ";
import CMAStudyPlanner from "@/components/CMAStudyPlanner";

export const metadata = {
  title: 'CMA USA Course Details | NorthStar Academy',
  description:
    'All about CMA USA: syllabus, learning experience, global placements, fees ROI, eligibility, study planner, comparison, and FAQs.',
};

export default function CMAUSAPage() {
  return (
    <main className="min-h-screen">
      <CMAHero />
     <WhyCMA />
      <CMALearningExperience />
     <CMASyllabus />
    <CMAGlobalPlacements />
     <CMAFeesROI />
     <CMAEligibilityChecker />
    
     <CMAStudyPlanner />

     <CMAFAQ />
     <CMAComparison />
    </main>
  );
}