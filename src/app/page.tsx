


import Hero from '@/components/Hero';
import WhyNorthStar from '@/components/WhyNorthStar';

import GlobalCareerPath from '@/components/GlobalCareerPath';
import GlobalCoursesHub from '@/components/GlobalCoursesHub';
import MeetYourMentor from "@/components/MeetYourMentor";
import LearningExperience from '@/components/LearningExperience';
import GlobalCareerSuccess from '@/components/GlobalCareerSuccess';
import PricingROI from "@/components/PricingROI";
import LeadMagnet from "@/components/LeadMagnet";
import FAQ from '@/components/FAQ';
import Accreditation from '@/components/Accreditation';
import FinalCTA from '@/components/FinalCTA';


export default function Home() {
  return (
    <main>
      <Hero />
      <WhyNorthStar />
      <GlobalCoursesHub />
      <GlobalCareerPath />
     
     <MeetYourMentor />
      <LearningExperience />
      <GlobalCareerSuccess />
      <PricingROI />
      <LeadMagnet />
      <FAQ />
      <Accreditation />
      <FinalCTA />
    </main>
  );
}
