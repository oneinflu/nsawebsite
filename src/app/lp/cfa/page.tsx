import CFACareerRoles from "@/components/cfa/CFACareerRoles";
import CFADecisionHelper from "@/components/cfa/CFADecisionHelper";
import CFAEligibility from "@/components/cfa/CFAEligibility";
import CFAExamPattern from "@/components/cfa/CFAExamPattern";
import CFAFAQs from "@/components/cfa/CFAFAQs";
import CFAGlobalSalaryMap from "@/components/cfa/CFAGlobalSalaryMap";
import CFAHero from "@/components/cfa/CFAHero";
import CFANorthStarAdvantage from "@/components/cfa/CFANorthStarAdvantage";
import CFAProgramStructure from "@/components/cfa/CFAProgramStructure";
import WhyCFA from "@/components/cfa/WhyCFA";

export const metadata = {
  title: 'CFA — Learn CFA with NorthStar Academy',
  description:
    'Explore the CFA program structure, eligibility, career roles, NorthStar advantage, exam pattern, global salary insights, decision helper, and FAQs.',
};


export default function CMAUSAPage() {
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

    </main>
  );
}