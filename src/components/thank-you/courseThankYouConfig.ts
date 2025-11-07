export type CourseThankYouContent = {
  title: string;
  subtitle: string;
  heroText?: string;
  youtubeId?: string;
  groupLink?: string;
  groupPlatform?: 'whatsapp' | 'telegram' | 'discord' | 'linkedin';
  advisorName?: string;
  advisorTitle?: string;
  highlights?: string[];
  nextSteps?: string[];
  resources?: { label: string; href: string }[];
};

export const courseThankYouConfig: Record<string, CourseThankYouContent> = {
  'cma-usa': {
    title: 'Welcome to CMA USA Success Path',
    subtitle: 'Your counselor will reach out shortly — meanwhile, get started below.',
    heroText: 'Kickstart your CMA journey with curated resources and community.',
    youtubeId: 'JiZDzlJsoBo',
    groupLink: 'https://chat.whatsapp.com/your-cma-group-link',
    groupPlatform: 'whatsapp',
    advisorName: 'Anoop K',
    advisorTitle: 'Lead Mentor — CMA USA',
    highlights: [
      '95% pass rate with structured mentorship',
      'Exam-focused study plans and mock tests',
      'Placement support with global companies'
    ],
    nextSteps: [
      'Join the WhatsApp group for updates and community support',
      'Watch the orientation video to understand the roadmap',
      'Fill your profile details to get a personalized plan'
    ],
    resources: [
      { label: 'Download CMA Syllabus', href: '/api/resources/cma-syllabus' },
      { label: 'Placement Report', href: '/api/resources/cma-placement-report' }
    ]
  },
  'cpa-us': {
    title: 'Welcome to CPA US Accelerator',
    subtitle: 'Everything you need to begin your CPA journey.',
    youtubeId: 'JiZDzlJsoBo',
    groupLink: 'https://t.me/your-cpa-telegram-group',
    groupPlatform: 'telegram',
    advisorName: 'Priya S',
    advisorTitle: 'Program Advisor — CPA US',
    highlights: [
      'Expert-led CPA mentoring sessions',
      'Exam strategy and section-wise guidance',
      'Global opportunities with Big 4 partners'
    ],
    nextSteps: [
      'Join the Telegram group to receive updates',
      'Review the CPA roadmap video',
      'Book a counseling slot if you need clarity'
    ],
    resources: [
      { label: 'CPA Syllabus PDF', href: '/api/resources/cpa-syllabus' },
      { label: 'Career Guide', href: '/api/resources/cpa-career-guide' }
    ]
  },
  'acca-uk': {
    title: 'Welcome to ACCA Fast-Track',
    subtitle: 'Let’s get you moving towards global ACCA accreditation.',
    youtubeId: 'JiZDzlJsoBo',
    groupLink: 'https://discord.gg/your-acca-discord',
    groupPlatform: 'discord',
    advisorName: 'Rahul M',
    advisorTitle: 'Senior Mentor — ACCA',
    highlights: [
      'Structured modules with progress tracking',
      'Mentor support and exam prep bootcamps',
      'Placement readiness training'
    ],
    nextSteps: [
      'Join the Discord community',
      'Watch the ACCA roadmap overview',
      'Update your profile and preferences'
    ],
    resources: [
      { label: 'ACCA Syllabus', href: '/api/resources/acca-course-details-syllabus' },
      { label: 'Upcoming Bootcamps', href: '/api/resources/acca-course-details-bootcamps' }
    ]
  },
  cia: {
    title: 'Welcome to CIA Global Certification Track',
    subtitle: 'Your path to becoming a Certified Internal Auditor starts here.',
    youtubeId: 'JiZDzlJsoBo',
    groupLink: 'https://www.linkedin.com/groups/your-cia-group',
    groupPlatform: 'linkedin',
    advisorName: 'Neha T',
    advisorTitle: 'CIA Program Advisor',
    highlights: [
      'Exam-focused CIA study roadmap',
      'Mentor Q&A sessions and community support',
      'Career acceleration with industry connections'
    ],
    nextSteps: [
      'Join the LinkedIn group for weekly updates',
      'Watch the CIA intro session',
      'Complete the onboarding form'
    ],
    resources: [
      { label: 'CIA Syllabus', href: '/api/resources/cia-syllabus' },
      { label: 'Mentor Q&A Calendar', href: '/api/resources/cia-qa' }
    ]
  },
  'cfa-us': {
    title: 'Welcome to CFA Success Track',
    subtitle: 'Start your CFA journey with curated guidance and community.',
    youtubeId: 'JiZDzlJsoBo',
    groupLink: 'https://chat.whatsapp.com/your-cfa-group-link',
    groupPlatform: 'whatsapp',
    advisorName: 'Arjun P',
    advisorTitle: 'Program Advisor — CFA',
    highlights: [
      'Level-wise study plans and resources',
      'Exam strategy sessions',
      'Mentor support and peer community'
    ],
    nextSteps: [
      'Join the WhatsApp group for updates',
      'Watch the CFA roadmap overview',
      'Complete onboarding to get a personalized plan'
    ],
    resources: [
      { label: 'CFA Syllabus', href: '/api/resources/cfa-syllabus' },
      { label: 'Study Planner', href: '/api/resources/cfa-planner' }
    ]
  },
  'enrolled-agent': {
    title: 'Welcome to Enrolled Agent Fast-Track',
    subtitle: 'Accelerate your EA preparation with structured guidance.',
    youtubeId: 'JiZDzlJsoBo',
    groupLink: 'https://t.me/your-ea-telegram-group',
    groupPlatform: 'telegram',
    advisorName: 'Sana R',
    advisorTitle: 'Program Advisor — EA',
    highlights: [
      'Exam-oriented modules and mock tests',
      'Mentor support and Q&A',
      'Career readiness and placement assistance'
    ],
    nextSteps: [
      'Join the Telegram group for updates',
      'Review the EA orientation video',
      'Fill profile details to get tailored guidance'
    ],
    resources: [
      { label: 'EA Syllabus', href: '/api/resources/ea-syllabus' },
      { label: 'Bootcamp Schedule', href: '/api/resources/ea-bootcamps' }
    ]
  }
};

export const getCourseContent = (course: string): CourseThankYouContent => {
  return courseThankYouConfig[course] ?? {
    title: 'Welcome to NorthStar Academy',
    subtitle: 'Thanks for your interest — we will contact you shortly.',
    heroText: 'Explore resources and join the community to get started.',
    youtubeId: 'dQw4w9WgXcQ',
    groupLink: 'https://chat.whatsapp.com/your-generic-group-link',
    groupPlatform: 'whatsapp',
    highlights: [
      'Personalized mentoring and study plans',
      'Exam-oriented preparation material',
      'Placement guidance and alumni network'
    ],
    nextSteps: [
      'Join the community group',
      'Watch the orientation video',
      'Update your profile details'
    ],
    resources: [
      { label: 'Download Syllabus', href: '/api/resources/syllabus' },
      { label: 'Placement Report', href: '/api/resources/placement-report' }
    ]
  };
};