import EACareerProspectus from "@/components/ea/EACareerProspectus";
import EAComparison from "@/components/ea/EAComparison";
import EAEligibility from "@/components/ea/EAEligibility";
import EAFAQ from "@/components/ea/EAFAQ";
import EAHero from "@/components/ea/EAHero";
import EASalaryROI from "@/components/ea/EASalaryROI";
import EASyllabus from "@/components/ea/EASyllabus";
import EAWhyNorthStar from "@/components/ea/EAWhyNorthStar";

export const metadata = {
  title: 'EA — Enrolled Agent with NorthStar Academy',
  description:
    'Begin your Enrolled Agent preparation: syllabus, salary ROI, eligibility, career prospects, comparison, and FAQs.',
};



export default function CMAUSAPage() {
  return (
    <main className="min-h-screen">
     <EAHero />
          <EACareerProspectus />
          <EAWhyNorthStar />
         
          <EASyllabus />
          <EASalaryROI />
          <EAEligibility />
        
          <EAComparison />
          <EAFAQ />

    </main>
  );
}