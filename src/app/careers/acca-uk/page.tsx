export const metadata = {
  title: 'ACCA Jobs in UK | NorthStar Academy',
  description: 'Launch your UK career with ACCA. Explore roles in audit, financial accounting, tax, FP&A, and internal audit across London, Manchester, Birmingham, Edinburgh, and Leeds.',
};

import AccaUkHero from '@/components/careers/AccaUkHero';
import WhyUkForAcca from '@/components/careers/WhyUkForAcca';
import JobsDemandSnapshotUk from '@/components/careers/JobsDemandSnapshotUk';
import RolesSectorsUk from '@/components/careers/RolesSectorsUk';
import SalaryCareerGrowthUk from '@/components/careers/SalaryCareerGrowthUk';
import AccaTrainingPlacementUk from '@/components/careers/AccaTrainingPlacementUk';
import CtaNextStepUk from '@/components/careers/CtaNextStepUk';
import FaqUkForAcca from '@/components/careers/FaqUkForAcca';

export default function AccaUkCareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <AccaUkHero />
      <WhyUkForAcca />
      <JobsDemandSnapshotUk />
      <RolesSectorsUk />
      <SalaryCareerGrowthUk />
      <AccaTrainingPlacementUk />
      <CtaNextStepUk />
      <FaqUkForAcca />
    </main>
  );
}