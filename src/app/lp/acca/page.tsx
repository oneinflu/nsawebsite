import ACCAExemptionsChecker from "@/components/acca/ACCAExemptionsChecker";
import ACCAFAQ from "@/components/acca/ACCAFAQ";
import ACCAGlobalSalaryROI from "@/components/acca/ACCAGlobalSalaryROI";
import ACCAHero from "@/components/acca/ACCAHero";
import ACCAPlacementOutcomes from "@/components/acca/ACCAPlacementOutcomes";
import ACCAStudySupport from "@/components/acca/ACCAStudySupport";
import ACCASyllabus from "@/components/acca/ACCASyllabus";
import ACCATimelinePlanner from "@/components/acca/ACCATimelinePlanner";
import WhyACCA from "@/components/acca/WhyACCA";


export const metadata = {
  title: "ACCA — Learn ACCA with NorthStar Academy",
  description:
    "Explore ACCA syllabus, exemptions, timeline planner, study support, global placements, salary ROI, and FAQs to start your ACCA journey.",
};


export default function CMAUSAPage() {
  return (
    <main className="min-h-screen">
      <ACCAHero />
      <WhyACCA />
      <ACCAStudySupport />
      <ACCAExemptionsChecker />
      <ACCASyllabus />
      <ACCATimelinePlanner />
      <ACCAPlacementOutcomes />
      <ACCAGlobalSalaryROI />
      <ACCAFAQ />
    </main>
  );
}