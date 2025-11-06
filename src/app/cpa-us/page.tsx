import CPAHero from '@/components/cpa/CPAHero';
import WhyCPA from '@/components/WhyCPA';
import CPASyllabus from '@/components/CPASyllabus';
import StateBoardWizard from '@/components/StateBoardWizard';
import CPAFeesROI from '@/components/CPAFeesROI';
import CPAEligibilityChecker from '@/components/CPAEligibilityChecker';
import CPAStudyPlanner from '@/components/CPAStudyPlanner';
import PlacementReadiness from '@/components/PlacementReadiness';
import CPAComparison from '@/components/CPAComparison';
import CPAFAQ from '@/components/CPAFAQ';

export default function CPAUSPage() {
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
      <CPAComparison />
    </main>
  );
}