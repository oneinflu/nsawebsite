import CfaPathsHero from '@/components/careers/CfaPathsHero';
import WhyCfaForCareers from '@/components/careers/WhyCfaForCareers';
import JobsDemandSnapshotGlobal from '@/components/careers/JobsDemandSnapshotGlobal';
import RolesSectorsCfa from '@/components/careers/RolesSectorsCfa';
import SalaryCareerGrowthCfa from '@/components/careers/SalaryCareerGrowthCfa';
import CfaTrainingPlacementCareers from '@/components/careers/CfaTrainingPlacementCareers';
import CtaNextStepCfa from '@/components/careers/CtaNextStepCfa';
import FaqCfaCareers from '@/components/careers/FaqCfaCareers';

export const metadata = {
  title: 'CFA Career Paths | NorthStar Academy',
  description: 'Explore CFA roles across investment management, research, risk, banking, and wealth. Learn progression from analyst to portfolio manager and beyond.',
};

export default function CfaPathsPage() {
  return (
    <main className="min-h-screen bg-white">
      <CfaPathsHero />
      <WhyCfaForCareers />
      <JobsDemandSnapshotGlobal />
      <RolesSectorsCfa />
      <SalaryCareerGrowthCfa />
      <CfaTrainingPlacementCareers />
      <CtaNextStepCfa />
      <FaqCfaCareers />
    </main>
  );
}