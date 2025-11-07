export const metadata = {
  title: 'CPA vs CMA Salaries | NorthStar Academy',
  description: 'Immediate clarity on salary gap between CPA (US) and CMA (US). Compare global averages, top countries, and explore courses with guided CTAs.',
};

import CpaVsCaOverview from '@/components/salary/CpaVsCaOverview';
import CpaVsCmaHero from '@/components/salary/CpaVsCmaHero';

import CpaVsCmaSalaryChart from '@/components/salary/CpaVsCmaSalaryChart';
import CpaVsCaTimeRoi from '@/components/salary/CpaVsCaTimeRoi';
import CpaVsCaExperienceChart from '@/components/salary/CpaVsCaExperienceChart';
import CpaVsCaFaq from '@/components/salary/CpaVsCaFaq';

export default function CpaVsCmaSalaryPage() {
  return (
    <main className="min-h-screen bg-white">
      <CpaVsCmaHero />
  <CpaVsCaOverview />
      <CpaVsCmaSalaryChart />
      <CpaVsCaExperienceChart />
      <CpaVsCaTimeRoi />
   
      <CpaVsCaFaq />
    </main>
  );
}