import CPAEligibilityChecker from "@/components/cpa/CPAEligibilityChecker";
import CPAFAQ from "@/components/cpa/CPAFAQ";
import CPAFeesROI from "@/components/cpa/CPAFeesROI";
import CPAHero from "@/components/cpa/CPAHero";
import CPAStudyPlanner from "@/components/cpa/CPAStudyPlanner";
import CPASyllabus from "@/components/cpa/CPASyllabus";

import PlacementReadiness from "@/components/PlacementReadiness";
import StateBoardWizard from "@/components/StateBoardWizard";
import WhyCPA from "@/components/WhyCPA";


export default function CMAUSAPage() {
  return (
    <main className="min-h-screen">
      <CPAHero />
      <WhyCPA />
      <CPASyllabus />
      <StateBoardWizard />
      <CPAFeesROI />
      <CPAEligibilityChecker />
      <CPAStudyPlanner />
      <PlacementReadiness />
      <CPAFAQ />
     
    
    
   

    </main>
  );
}