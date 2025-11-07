export const metadata = {
  title: 'CMA (US) Jobs in India | NorthStar Academy',
  description: 'Launch your finance career in India with CMA (US). Explore roles in FP&A, cost accounting, controllership, and internal audit across major hubs.',
};

import CmaIndiaHero from '@/components/careers/CmaIndiaHero';
import WhyIndiaForCma from '@/components/careers/WhyIndiaForCma';
import JobsDemandSnapshotIndia from '@/components/careers/JobsDemandSnapshotIndia';
import RolesSectorsIndia from '@/components/careers/RolesSectorsIndia';
import SalaryCareerGrowthIndia from '@/components/careers/SalaryCareerGrowthIndia';
import CmaTrainingPlacementIndia from '@/components/careers/CmaTrainingPlacementIndia';
import CtaNextStepIndia from '@/components/careers/CtaNextStepIndia';
import FaqIndiaForCma from '@/components/careers/FaqIndiaForCma';

export default function CmaIndiaCareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <CmaIndiaHero />
      <WhyIndiaForCma />
      <JobsDemandSnapshotIndia />
      <RolesSectorsIndia />
      <SalaryCareerGrowthIndia />
      <CmaTrainingPlacementIndia />
      <CtaNextStepIndia />
      <FaqIndiaForCma />
    </main>
  );
}