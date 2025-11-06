import CFAHero from '@/components/cfa/CFAHero';
import WhyCFA from '@/components/cfa/WhyCFA';
import CFAProgramStructure from '@/components/cfa/CFAProgramStructure';
import CFAEligibility from '@/components/cfa/CFAEligibility';
import CFACareerRoles from '@/components/cfa/CFACareerRoles';
import CFANorthStarAdvantage from '@/components/cfa/CFANorthStarAdvantage';
import CFAExamPattern from '@/components/cfa/CFAExamPattern';
import CFAGlobalSalaryMap from '@/components/cfa/CFAGlobalSalaryMap';
import CFADecisionHelper from '@/components/cfa/CFADecisionHelper';
import CFAFAQs from '@/components/cfa/CFAFAQs';

export default function CFAPage() {
  return (
    <main className="min-h-screen">
      <CFAHero />
      <WhyCFA />
      <CFAProgramStructure />
      <CFAEligibility />
      <CFACareerRoles />
      <CFANorthStarAdvantage />
      <CFAExamPattern />
      <CFAGlobalSalaryMap />
      <CFADecisionHelper />
      <CFAFAQs />
      {/* Additional CFA components will be added here */}
    </main>
  );
}

export const metadata = {
  title: 'CFA (US) - Chartered Financial Analyst | NorthStar Academy',
  description: 'Become a Chartered Financial Analyst (CFA) with NorthStar Academy. The gold standard in investment & portfolio management. 3 Levels. Global recognition in 165+ countries.',
  keywords: 'CFA, Chartered Financial Analyst, CFA Institute, Investment Management, Portfolio Management, Financial Analysis, CFA Course, CFA Training',
};