import CIAEligibility from "@/components/cia/CIAEligibility";
import CIAHero from "@/components/cia/CIAHero";
import CIAStudyPlanner from "@/components/cia/CIAStudyPlanner";
import CIASyllabus from "@/components/cia/CIASyllabus";
import CIATrainingExperience from "@/components/cia/CIATrainingExperience";
import WhoShouldDoCIA from "@/components/cia/WhoShouldDoCIA";
import WhyCIA from "@/components/cia/WhyCIA";
import CIAComparison from "@/components/cia/CIAComparison";
import CIAFAQ from "@/components/cia/CIAFAQ";



export default function ACCAUKPage() {
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