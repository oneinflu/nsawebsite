import ACCAComparisonMatrix from "@/components/acca/ACCAComparisonMatrix";
import ACCAExemptionsChecker from "@/components/acca/ACCAExemptionsChecker";
import ACCAFAQ from "@/components/acca/ACCAFAQ";
import ACCAGlobalSalaryROI from "@/components/acca/ACCAGlobalSalaryROI";
import ACCAHero from "@/components/acca/ACCAHero";
import ACCAPlacementOutcomes from "@/components/acca/ACCAPlacementOutcomes";
import ACCAStudySupport from "@/components/acca/ACCAStudySupport";
import ACCASyllabus from "@/components/acca/ACCASyllabus";
import ACCATimelinePlanner from "@/components/acca/ACCATimelinePlanner";
import WhyACCA from "@/components/acca/WhyACCA";




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