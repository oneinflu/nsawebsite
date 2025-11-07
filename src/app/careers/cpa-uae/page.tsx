import CpaUaeHero from '@/components/careers/CpaUaeHero';
import WhyUaeForCpa from '@/components/careers/WhyUaeForCpa';
import JobsDemandSnapshot from '@/components/careers/JobsDemandSnapshot';
import RolesSectorsUae from '@/components/careers/RolesSectorsUae';
import SalaryCareerGrowthUae from '@/components/careers/SalaryCareerGrowthUae';
import CpaTrainingPlacementUae from '@/components/careers/CpaTrainingPlacementUae';
import CtaNextStepUae from '@/components/careers/CtaNextStepUae';
import FaqUaeForCpa from '@/components/careers/FaqUaeForCpa';

export const metadata = {
  title: 'CPA (US) Jobs in UAE | NorthStar Academy',
  description: 'Launch your global career in UAE with CPA (US). Explore roles in Dubai and Abu Dhabi with top salaries and Big 4 opportunities.',
};

export default function CpaUaeCareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <CpaUaeHero />
      <WhyUaeForCpa />
      <JobsDemandSnapshot />
      <RolesSectorsUae />
      <SalaryCareerGrowthUae />
      <CpaTrainingPlacementUae />
      <CtaNextStepUae />
      <FaqUaeForCpa />
     
    </main>
  );
}