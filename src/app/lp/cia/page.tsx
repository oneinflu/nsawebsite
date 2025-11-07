import CIAComparison from "@/components/cia/CIAComparison";
import CIAEligibility from "@/components/cia/CIAEligibility";
import CIAFAQ from "@/components/cia/CIAFAQ";
import CIAHero from "@/components/cia/CIAHero";
import CIAStudyPlanner from "@/components/cia/CIAStudyPlanner";
import CIASyllabus from "@/components/cia/CIASyllabus";
import CIATrainingExperience from "@/components/cia/CIATrainingExperience";
import WhoShouldDoCIA from "@/components/cia/WhoShouldDoCIA";
import WhyCIA from "@/components/cia/WhyCIA";


export default function CMAUSAPage() {
  return (
    <main className="min-h-screen">
    
    
    
     <CIAHero />
     <WhyCIA />
     <WhoShouldDoCIA />
     <CIATrainingExperience />
   <CIASyllabus />
   <CIAStudyPlanner />
   <CIAEligibility />
   <CIAComparison />
   <CIAFAQ />

    </main>
  );
}