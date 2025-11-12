import EAHero from '@/components/ea/EAHero';
import EAEligibility from '@/components/ea/EAEligibility';
import EASyllabus from '@/components/ea/EASyllabus';
import EAFAQ from '@/components/ea/EAFAQ';
import EACareerProspectus from '@/components/ea/EACareerProspectus';

import EASalaryROI from '@/components/ea/EASalaryROI';

import EAComparison from '@/components/ea/EAComparison';
import EAWhyNorthStar from '@/components/ea/EAWhyNorthStar';

export const metadata = {
  title: 'Enrolled Agent (EA) Course Details | NorthStar Academy',
  description:
    'Explore the EA program: hero overview, career prospects, mentorship, syllabus, salary ROI, eligibility, comparison, and FAQs.',
};

export default function EAPage() {
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