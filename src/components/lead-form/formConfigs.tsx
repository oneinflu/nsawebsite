"use client";
import React from "react";

export type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export type FormConfig = {
  title: string;
  description: string;
  features: Feature[];
  formTitle: string;
  submitButtonText: string;
  formName: string;
};

export type FormType =
  | "general"
  | "download-syllabus"
  | "download-placement-report"
  | "download-hackdoc"
  | "book-webinar"
  | "talk-to-our-counseller"
  | "get-mentorship"
  | "check-scholarship-eligibilty"
  | "reserve-you-seat-now"
  | "get-free-guide"
  | "talk-to-an-expert"
  | "book-free-consultation"
  | "get-personalized-recommendation"
  | "cpa-journey"
  | "download-cpa-guide"
  | "request-emi-plan"
  | "get-personalized-study-plan"
  | "start-placement-program"
  | "talk-to-alumni"
  | "cia-career-opportunity"
  | "cia-journey"
  | "book-demo-session"
  | "download-cia-study-guide"
  | "experience-the-northstar"
  | "check-eligibilty"
  | "cfa-roadmap"
  | "cfa-journey"
  | "salary-guide"
  | "acca-journey"
  | "free-consultation";

const iconCheck = (
  <svg
    className="w-5 h-5 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const iconChart = (
  <svg
    className="w-5 h-5 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 19V9m4 10V5m4 14v-3M5 19h14"
    />
  </svg>
);

const iconDoc = (
  <svg
    className="w-5 h-5 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M7 21h10a2 2 0 002-2V7l-5-5H7a2 2 0 00-2 2v15a2 2 0 002 2z"
    />
  </svg>
);

const iconCalendar = (
  <svg
    className="w-5 h-5 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

export const formConfigs: Record<FormType, FormConfig> = {
  general: {
    title: "Book Free Counseling",
    description:
      "Provide your details and our expert counselor will connect with you shortly.",
    features: [
      {
        title: "Personalized Guidance",
        description: "Get tailored advice for your career path",
        icon: iconCheck,
      },
      {
        title: "High Success Rates",
        description: "95% pass rate across programs",
        icon: iconChart,
      },
      {
        title: "Experienced Mentors",
        description: "Learn from industry experts",
        icon: iconCheck,
      },
    ],
    formTitle: "Get in Touch",
    submitButtonText: "Submit",
    formName: "Lead Form Modal",
  },
  "download-syllabus": {
    title: "Download Syllabus",
    description: "Get the latest syllabus for your chosen course.",
    features: [
      {
        title: "Latest Curriculum",
        description: "Up-to-date syllabus and modules",
        icon: iconDoc,
      },
      {
        title: "Exam Blueprint",
        description: "Topic-wise weightage and structure",
        icon: iconChart,
      },
      {
        title: "Study Tips",
        description: "Guidance from mentors",
        icon: iconCheck,
      },
    ],
    formTitle: "Download Syllabus",
    submitButtonText: "Download",
    formName: "Syllabus Download",
  },
  "download-placement-report": {
    title: "Placement Report",
    description: "Explore our student success and recent placements.",
    features: [
      {
        title: "Top Recruiters",
        description: "Connections with leading corporates",
        icon: iconChart,
      },
      {
        title: "Salary Insights",
        description: "Compensation trends for freshers",
        icon: iconDoc,
      },
      {
        title: "Success Stories",
        description: "Real outcomes from our alumni",
        icon: iconCheck,
      },
    ],
    formTitle: "Download Placement Report",
    submitButtonText: "Download",
    formName: "Placement Report Download",
  },
  "download-hackdoc": {
    title: "Download HackDoc",
    description: "Get our preparation hacks and condensed notes.",
    features: [
      {
        title: "Quick References",
        description: "Concise notes for revision",
        icon: iconDoc,
      },
      {
        title: "Exam Hacks",
        description: "Strategies to maximize scores",
        icon: iconCheck,
      },
      {
        title: "Practice Tips",
        description: "Methods to retain concepts",
        icon: iconChart,
      },
    ],
    formTitle: "Download HackDoc",
    submitButtonText: "Download",
    formName: "HackDoc Download",
  },
  "book-webinar": {
    title: "Register for Webinar",
    description: "Join our upcoming webinar or book a live demo.",
    features: [
      {
        title: "Live Q&A",
        description: "Interact with mentors and alumni",
        icon: iconCalendar,
      },
      {
        title: "Program Overview",
        description: "Get clarity on curriculum & outcomes",
        icon: iconDoc,
      },
      {
        title: "Admissions Help",
        description: "Understand eligibility and next steps",
        icon: iconCheck,
      },
    ],
    formTitle: "Register for Webinar",
    submitButtonText: "Register",
    formName: "Webinar/Demo Registration",
  },
  "talk-to-our-counseller": {
    title: "Talk to our Counseller",
    description:
      "Provide your details and our expert counselor will connect with you shortly.",
    features: [
      {
        title: "Personalized Guidance",
        description: "Get tailored advice for your career path",
        icon: iconCheck,
      },
      {
        title: "High Success Rates",
        description: "95% pass rate across programs",
        icon: iconChart,
      },
      {
        title: "Experienced Mentors",
        description: "Learn from industry experts",
        icon: iconCheck,
      },
    ],
    formTitle: "Get in touch",
    submitButtonText: "Submit",
    formName: "Talk to our Counseller",
  },
  "get-mentorship": {
    title: "Get Mentorship",
    description:
      "Provide your details and our expert counselor will connect with you shortly.",
    features: [
      {
        title: "Personalized Guidance",
        description: "Get tailored advice for your career path",
        icon: iconCheck,
      },
      {
        title: "High Success Rates",
        description: "95% pass rate across programs",
        icon: iconChart,
      },
      {
        title: "Experienced Mentors",
        description: "Learn from industry experts",
        icon: iconCheck,
      },
    ],
    formTitle: "Get in touch",
    submitButtonText: "Submit",
    formName: "Get Mentorship",
  },
  "check-scholarship-eligibilty": {
    title: "Check Scholarship Eligibility",
    description:
      "Provide your details and our expert counselor will connect with you shortly.",
    features: [
      {
        title: "Personalized Guidance",
        description: "Get tailored advice for your career path",
        icon: iconCheck,
      },
      {
        title: "High Success Rates",
        description: "95% pass rate across programs",
        icon: iconChart,
      },
      {
        title: "Experienced Mentors",
        description: "Learn from industry experts",
        icon: iconCheck,
      },
    ],
    formTitle: "Get in touch",
    submitButtonText: "Submit",
    formName: "Check Scholarship Eligibility",
  },
  "reserve-you-seat-now": {
    title: "Reserve Your Seat Now",
    description:
      "Provide your details and our expert counselor will connect with you shortly.",
    features: [
      {
        title: "Personalized Guidance",
        description: "Get tailored advice for your career path",
        icon: iconCheck,
      },
      {
        title: "High Success Rates",
        description: "95% pass rate across programs",
        icon: iconChart,
      },
      {
        title: "Experienced Mentors",
        description: "Learn from industry experts",
        icon: iconCheck,
      },
    ],
    formTitle: "Get in touch",
    submitButtonText: "Submit",
    formName: "Reserve Your Seat Now",
  },
  "get-free-guide": {
    title: "Get Free Guide",
    description:
      "Provide your details and our expert counselor will connect with you shortly.",
    features: [
      {
        title: "Personalized Guidance",
        description: "Get tailored advice for your career path",
        icon: iconCheck,
      },
      {
        title: "High Success Rates",
        description: "95% pass rate across programs",
        icon: iconChart,
      },
      {
        title: "Experienced Mentors",
        description: "Learn from industry experts",
        icon: iconCheck,
      },
    ],
    formTitle: "Get in touch",
    submitButtonText: "Submit",
    formName: "Get Free Guide",
  },
  "talk-to-an-expert": {
    title: "Talk to An Expert",
    description:
      "Provide your details and our expert counselor will connect with you shortly.",
    features: [
      {
        title: "Personalized Guidance",
        description: "Get tailored advice for your career path",
        icon: iconCheck,
      },
      {
        title: "High Success Rates",
        description: "95% pass rate across programs",
        icon: iconChart,
      },
      {
        title: "Experienced Mentors",
        description: "Learn from industry experts",
        icon: iconCheck,
      },
    ],
    formTitle: "Get in touch",
    submitButtonText: "Submit",
    formName: "Talk to An Expert",
  },
  "book-free-consultation": {
    title: "Book Free Consultation",
    description:
      "Provide your details and our expert counselor will connect with you shortly.",
    features: [
      {
        title: "Personalized Guidance",
        description: "Get tailored advice for your career path",
        icon: iconCheck,
      },
      {
        title: "High Success Rates",
        description: "95% pass rate across programs",
        icon: iconChart,
      },
      {
        title: "Experienced Mentors",
        description: "Learn from industry experts",
        icon: iconCheck,
      },
    ],
    formTitle: "Get in touch",
    submitButtonText: "Submit",
    formName: "Book Free Consultation",
  },
  "get-personalized-recommendation": {
    title: "Get Personalized Recommendation",
    description:
      "Provide your details and our expert counselor will connect with you shortly.",
    features: [
      {
        title: "Personalized Guidance",
        description: "Get tailored advice for your career path",
        icon: iconCheck,
      },
      {
        title: "High Success Rates",
        description: "95% pass rate across programs",
        icon: iconChart,
      },
      {
        title: "Experienced Mentors",
        description: "Learn from industry experts",
        icon: iconCheck,
      },
    ],
    formTitle: "Get in touch",
    submitButtonText: "Submit",
    formName: "Get Personalized Recommendation",
  },
  "cpa-journey": {
    title: "CPA Journey",
    description:
      "Provide your details and our expert counselor will connect with you shortly.",
    features: [
      {
        title: "Personalized Guidance",
        description: "Get tailored advice for your career path",
        icon: iconCheck,
      },
      {
        title: "High Success Rates",
        description: "95% pass rate across programs",
        icon: iconChart,
      },
      {
        title: "Experienced Mentors",
        description: "Learn from industry experts",
        icon: iconCheck,
      },
    ],
    formTitle: "Get in touch",
    submitButtonText: "Submit",
    formName: "CPA Journey",
  },
  "download-cpa-guide": {
    title: "Download CPA Guide",
    description:
      "Provide your details and our expert counselor will connect with you shortly.",
    features: [
      {
        title: "Personalized Guidance",
        description: "Get tailored advice for your career path",
        icon: iconCheck,
      },
      {
        title: "High Success Rates",
        description: "95% pass rate across programs",
        icon: iconChart,
      },
      {
        title: "Experienced Mentors",
        description: "Learn from industry experts",
        icon: iconCheck,
      },
    ],
    formTitle: "Get in touch",
    submitButtonText: "Submit",
    formName: "Download CPA Guide",
  },
  "request-emi-plan": {
    title: "Request EMI Plan",
    description:
      "Provide your details and our expert counselor will connect with you shortly.",
    features: [
      {
        title: "Personalized Guidance",
        description: "Get tailored advice for your career path",
        icon: iconCheck,
      },
      {
        title: "High Success Rates",
        description: "95% pass rate across programs",
        icon: iconChart,
      },
      {
        title: "Experienced Mentors",
        description: "Learn from industry experts",
        icon: iconCheck,
      },
    ],
    formTitle: "Get in touch",
    submitButtonText: "Submit",
    formName: "Request EMI Plan",
  },
  "get-personalized-study-plan": {
    title: "Get Personalized Study Plan",
    description:
      "Provide your details and our expert counselor will connect with you shortly.",
    features: [
      {
        title: "Personalized Guidance",
        description: "Get tailored advice for your career path",
        icon: iconCheck,
      },
      {
        title: "High Success Rates",
        description: "95% pass rate across programs",
        icon: iconChart,
      },
      {
        title: "Experienced Mentors",
        description: "Learn from industry experts",
        icon: iconCheck,
      },
    ],
    formTitle: "Get in touch",
    submitButtonText: "Submit",
    formName: "Get Personalized Study Plan",
  },
  "start-placement-program": {
    title: "Start Placement Program",
    description:
      "Provide your details and our expert counselor will connect with you shortly.",
    features: [
      {
        title: "Personalized Guidance",
        description: "Get tailored advice for your career path",
        icon: iconCheck,
      },
      {
        title: "High Success Rates",
        description: "95% pass rate across programs",
        icon: iconChart,
      },
      {
        title: "Experienced Mentors",
        description: "Learn from industry experts",
        icon: iconCheck,
      },
    ],
    formTitle: "Get in touch",
    submitButtonText: "Submit",
    formName: "Start Placement Program",
  },
  "talk-to-alumni": {
    title: "Talk to Alumni",
    description:
      "Provide your details and our expert counselor will connect with you shortly.",
    features: [
      {
        title: "Personalized Guidance",
        description: "Get tailored advice for your career path",
        icon: iconCheck,
      },
      {
        title: "High Success Rates",
        description: "95% pass rate across programs",
        icon: iconChart,
      },
      {
        title: "Experienced Mentors",
        description: "Learn from industry experts",
        icon: iconCheck,
      },
    ],
    formTitle: "Get in touch",
    submitButtonText: "Submit",
    formName: "Talk to Alumni",
  },
  "cia-career-opportunity": {
    title: "CIA Career Opportunity",
    description:
      "Provide your details and our expert counselor will connect with you shortly.",
    features: [
      {
        title: "Personalized Guidance",
        description: "Get tailored advice for your career path",
        icon: iconCheck,
      },
      {
        title: "High Success Rates",
        description: "95% pass rate across programs",
        icon: iconChart,
      },
      {
        title: "Experienced Mentors",
        description: "Learn from industry experts",
        icon: iconCheck,
      },
    ],
    formTitle: "Get in touch",
    submitButtonText: "Submit",
    formName: "CIA Career Opportunity",
  },
  "cia-journey": {
    title: "CIA Journey",
    description:
      "Provide your details and our expert counselor will connect with you shortly.",
    features: [
      {
        title: "Personalized Guidance",
        description: "Get tailored advice for your career path",
        icon: iconCheck,
      },
      {
        title: "High Success Rates",
        description: "95% pass rate across programs",
        icon: iconChart,
      },
      {
        title: "Experienced Mentors",
        description: "Learn from industry experts",
        icon: iconCheck,
      },
    ],
    formTitle: "Get in touch",
    submitButtonText: "Submit",
    formName: "CIA Journey",
  },
  "book-demo-session": {
    title: "Book Demo Session",
    description:
      "Provide your details and our expert counselor will connect with you shortly.",
    features: [
      {
        title: "Personalized Guidance",
        description: "Get tailored advice for your career path",
        icon: iconCheck,
      },
      {
        title: "High Success Rates",
        description: "95% pass rate across programs",
        icon: iconChart,
      },
      {
        title: "Experienced Mentors",
        description: "Learn from industry experts",
        icon: iconCheck,
      },
    ],
    formTitle: "Get in touch",
    submitButtonText: "Submit",
    formName: "Book Demo Session",
  },
  "download-cia-study-guide": {
    title: "Download CIA Study Guide",
    description:
      "Provide your details and our expert counselor will connect with you shortly.",
    features: [
      {
        title: "Personalized Guidance",
        description: "Get tailored advice for your career path",
        icon: iconCheck,
      },
      {
        title: "High Success Rates",
        description: "95% pass rate across programs",
        icon: iconChart,
      },
      {
        title: "Experienced Mentors",
        description: "Learn from industry experts",
        icon: iconCheck,
      },
    ],
    formTitle: "Get in touch",
    submitButtonText: "Submit",
    formName: "Download CIA Study Guide",
  },
  "experience-the-northstar": {
    title: "Experience The Northstar",
    description:
      "Provide your details and our expert counselor will connect with you shortly.",
    features: [
      {
        title: "Personalized Guidance",
        description: "Get tailored advice for your career path",
        icon: iconCheck,
      },
      {
        title: "High Success Rates",
        description: "95% pass rate across programs",
        icon: iconChart,
      },
      {
        title: "Experienced Mentors",
        description: "Learn from industry experts",
        icon: iconCheck,
      },
    ],
    formTitle: "Get in touch",
    submitButtonText: "Submit",
    formName: "Experience The Northstar",
  },
  "check-eligibilty": {
    title: "Check Eligibilty",
    description:
      "Provide your details and our expert counselor will connect with you shortly.",
    features: [
      {
        title: "Personalized Guidance",
        description: "Get tailored advice for your career path",
        icon: iconCheck,
      },
      {
        title: "High Success Rates",
        description: "95% pass rate across programs",
        icon: iconChart,
      },
      {
        title: "Experienced Mentors",
        description: "Learn from industry experts",
        icon: iconCheck,
      },
    ],
    formTitle: "Get in touch",
    submitButtonText: "Submit",
    formName: "Check Eligibilty",
  },
  "cfa-roadmap": {
    title: "Download CFA Roadmap",
    description:
      "Provide your details and our expert counselor will connect with you shortly.",
    features: [
      {
        title: "Personalized Guidance",
        description: "Get tailored advice for your career path",
        icon: iconCheck,
      },
      {
        title: "High Success Rates",
        description: "95% pass rate across programs",
        icon: iconChart,
      },
      {
        title: "Experienced Mentors",
        description: "Learn from industry experts",
        icon: iconCheck,
      },
    ],
    formTitle: "Get in touch",
    submitButtonText: "Submit",
    formName: "CFA Roadmap",
  },
  "cfa-journey": {
    title: "CFA Journey",
    description:
      "Provide your details and our expert counselor will connect with you shortly.",
    features: [
      {
        title: "Personalized Guidance",
        description: "Get tailored advice for your career path",
        icon: iconCheck,
      },
      {
        title: "High Success Rates",
        description: "95% pass rate across programs",
        icon: iconChart,
      },
      {
        title: "Experienced Mentors",
        description: "Learn from industry experts",
        icon: iconCheck,
      },
    ],
    formTitle: "Get in touch",
    submitButtonText: "Submit",
    formName: "CFA Journey",
  },
  "salary-guide": {
    title: "Salary Guide",
    description:
      "Provide your details and our expert counselor will connect with you shortly.",
    features: [
      {
        title: "Personalized Guidance",
        description: "Get tailored advice for your career path",
        icon: iconCheck,
      },
      {
        title: "High Success Rates",
        description: "95% pass rate across programs",
        icon: iconChart,
      },
      {
        title: "Experienced Mentors",
        description: "Learn from industry experts",
        icon: iconCheck,
      },
    ],
    formTitle: "Get in touch",
    submitButtonText: "Submit",
    formName: "Salary Guide",
  },
  "acca-journey": {
    title: "ACCA Journey",
    description:
      "Provide your details and our expert counselor will connect with you shortly.",
    features: [
      {
        title: "Personalized Guidance",
        description: "Get tailored advice for your career path",
        icon: iconCheck,
      },
      {
        title: "High Success Rates",
        description: "95% pass rate across programs",
        icon: iconChart,
      },
      {
        title: "Experienced Mentors",
        description: "Learn from industry experts",
        icon: iconCheck,
      },
    ],
    formTitle: "Get in touch",
    submitButtonText: "Submit",
    formName: "ACCA Journey",
  },
  "free-consultation": {
    title: "Free Consultation",
    description:
      "Provide your details and our expert counselor will connect with you shortly.",
    features: [
      {
        title: "Personalized Guidance",
        description: "Get tailored advice for your career path",
        icon: iconCheck,
      },
      {
        title: "High Success Rates",
        description: "95% pass rate across programs",
        icon: iconChart,
      },
      {
        title: "Experienced Mentors",
        description: "Learn from industry experts",
        icon: iconCheck,
      },
    ],
    formTitle: "Get in touch",
    submitButtonText: "Submit",
    formName: "Free Consultation",
  },
};
