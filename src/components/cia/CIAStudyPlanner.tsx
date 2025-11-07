'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  
  BookOpenIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  DocumentArrowDownIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  TrophyIcon,
  XMarkIcon
} from '@heroicons/react/24/solid';
import LeadFormButton from '../LeadFormButton';

interface StudyPlan {
  name: string;
  duration: string;
  hoursPerWeek: string;
  description: string;
  color: string;
  icon: string;
  suitableFor: string[];
  timeline: TimelineStep[];
}

interface TimelineStep {
  phase: string;
  duration: string;
  description: string;
  activities: string[];
  milestone: string;
}

export default function CIAStudyPlanner() {
  const [selectedPlan, setSelectedPlan] = useState('standard');
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [leadFormData, setLeadFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const studyPlans: Record<string, StudyPlan> = {
    accelerated: {
      name: 'Accelerated Track',
      duration: '12 Months',
      hoursPerWeek: '20-25 hours',
      description: 'Fast-track for dedicated professionals',
      color: 'from-red-500 to-orange-500',
      icon: '🚀',
      suitableFor: ['Career changers', 'Full-time students', 'Highly motivated professionals'],
      timeline: [
        {
          phase: 'Part 1: Essentials',
          duration: 'Months 1-4',
          description: 'Master internal audit fundamentals',
          activities: ['Video lectures', 'Practice questions', 'Mock exams', 'Case studies'],
          milestone: 'Pass Part 1 Exam'
        },
        {
          phase: 'Part 2: Practice',
          duration: 'Months 5-8',
          description: 'Apply internal audit practices',
          activities: ['Advanced concepts', 'Practical scenarios', 'Mock tests', 'Peer discussions'],
          milestone: 'Pass Part 2 Exam'
        },
        {
          phase: 'Part 3: Business',
          duration: 'Months 9-12',
          description: 'Business knowledge integration',
          activities: ['Business acumen', 'Leadership skills', 'Final prep', 'Certification'],
          milestone: 'Pass Part 3 & Complete CIA'
        }
      ]
    },
    standard: {
      name: 'Standard Track',
      duration: '15 Months',
      hoursPerWeek: '15-20 hours',
      description: 'Balanced approach for working professionals',
      color: 'from-red-500 to-red-500',
      icon: '⚖️',
      suitableFor: ['Working professionals', 'Balanced lifestyle', 'Steady progress'],
      timeline: [
        {
          phase: 'Part 1: Essentials',
          duration: 'Months 1-5',
          description: 'Comprehensive foundation building',
          activities: ['Structured learning', 'Weekly assessments', 'Doubt clearing', 'Progress tracking'],
          milestone: 'Pass Part 1 Exam'
        },
        {
          phase: 'Part 2: Practice',
          duration: 'Months 6-10',
          description: 'Practical application mastery',
          activities: ['Real-world cases', 'Industry examples', 'Mock examinations', 'Skill development'],
          milestone: 'Pass Part 2 Exam'
        },
        {
          phase: 'Part 3: Business',
          duration: 'Months 11-15',
          description: 'Strategic business understanding',
          activities: ['Leadership concepts', 'Business strategy', 'Final review', 'Certification prep'],
          milestone: 'Pass Part 3 & Complete CIA'
        }
      ]
    },
    flexible: {
      name: 'Flexible Track',
      duration: '18 Months',
      hoursPerWeek: '10-15 hours',
      description: 'Perfect for busy professionals',
      color: 'from-green-500 to-teal-500',
      icon: '🕐',
      suitableFor: ['Busy professionals', 'Parents', 'Multiple commitments'],
      timeline: [
        {
          phase: 'Part 1: Essentials',
          duration: 'Months 1-6',
          description: 'Self-paced foundation learning',
          activities: ['Flexible scheduling', 'Weekend sessions', 'Mobile learning', 'Personal mentoring'],
          milestone: 'Pass Part 1 Exam'
        },
        {
          phase: 'Part 2: Practice',
          duration: 'Months 7-12',
          description: 'Gradual skill development',
          activities: ['Evening classes', 'Recorded sessions', 'Flexible deadlines', 'Peer support'],
          milestone: 'Pass Part 2 Exam'
        },
        {
          phase: 'Part 3: Business',
          duration: 'Months 13-18',
          description: 'Comprehensive business mastery',
          activities: ['Weekend workshops', 'Online resources', 'Final preparation', 'Career guidance'],
          milestone: 'Pass Part 3 & Complete CIA'
        }
      ]
    }
  };

  const roadmapSteps = [
    { 
      title: 'Part 1', 
      subtitle: 'Essentials of Internal Auditing',
      icon: BookOpenIcon,
      color: 'bg-red-500',
      description: 'Foundation concepts'
    },
    { 
      title: 'Part 2', 
      subtitle: 'Practice of Internal Auditing',
      icon: BriefcaseIcon,
      color: 'bg-red-500',
      description: 'Practical application'
    },
    { 
      title: 'Part 3', 
      subtitle: 'Business Knowledge',
      icon: AcademicCapIcon,
      color: 'bg-purple-500',
      description: 'Strategic thinking'
    },
    { 
      title: 'Certification', 
      subtitle: 'CIA Certificate',
      icon: TrophyIcon,
      color: 'bg-green-500',
      description: 'Global recognition'
    }
  ];

  const experienceGuidance = [
    {
      title: 'During Studies',
      description: 'Start building relevant experience while preparing',
      tips: ['Seek internal audit roles', 'Join audit committees', 'Volunteer for compliance projects']
    },
    {
      title: 'Post-Exam',
      description: '2 years of internal audit experience required',
      tips: ['Full-time positions count', 'Part-time pro-rated', 'Consulting experience eligible']
    },
    {
      title: 'Career Support',
      description: 'We help you find the right opportunities',
      tips: ['Job placement assistance', 'Resume optimization', 'Interview preparation']
    }
  ];

  const currentPlan = studyPlans[selectedPlan];

 

  const handleSubmitLeadForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead form submitted:', leadFormData);
    setShowLeadModal(false);
    // Here you would typically send the data to your backend
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLeadFormData({
      ...leadFormData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            CIA{' '}
            <span className="bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
              Study Planner
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
            Finish CIA in 12–18 months with our structured roadmap designed for working professionals
          </p>
          <div className="inline-flex items-center bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
            <CheckCircleIcon className="w-4 h-4 mr-2" />
            Ideal for working professionals
          </div>
        </motion.div>

        {/* CIA Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            CIA Journey Roadmap
          </h3>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Desktop Roadmap */}
            <div className="hidden md:flex items-center justify-between">
              {roadmapSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
                    <p className="text-sm text-slate-600 mb-1">{step.subtitle}</p>
                    <p className="text-xs text-slate-500">{step.description}</p>
                  </motion.div>
                  {index < roadmapSteps.length - 1 && (
                    <ArrowRightIcon className="w-8 h-8 text-slate-400 mx-4" />
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Roadmap */}
            <div className="md:hidden space-y-6">
              {roadmapSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center mr-4`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{step.title}</h4>
                    <p className="text-sm text-slate-600">{step.subtitle}</p>
                    <p className="text-xs text-slate-500">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Study Plan Selection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Choose Your Study Track
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(studyPlans).map(([key, plan]) => (
              <motion.div
                key={key}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedPlan(key)}
                className={`cursor-pointer rounded-xl p-6 border-2 transition-all duration-300 ${
                  selectedPlan === key
                    ? 'border-red-500 bg-red-50 shadow-lg'
                    : 'border-slate-200 bg-white hover:border-red-300 hover:shadow-md'
                }`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{plan.icon}</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h4>
                  <div className={`inline-block px-4 py-2 rounded-full text-white font-semibold mb-4 bg-gradient-to-r ${plan.color}`}>
                    {plan.duration}
                  </div>
                  <p className="text-slate-600 mb-4">{plan.description}</p>
                  <div className="text-sm text-slate-500 mb-4">
                    <strong>{plan.hoursPerWeek}</strong> per week
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-slate-700 mb-2">Suitable for:</p>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {plan.suitableFor.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Selected Plan Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPlan}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
          >
            {/* Header */}
            <div className={`bg-gradient-to-r ${currentPlan.color} text-white p-6`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {currentPlan.name} Timeline
                  </h3>
                  <p className="opacity-90">
                    Complete CIA certification in {currentPlan.duration.toLowerCase()}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl mb-2">{currentPlan.icon}</div>
                  <div className="text-sm opacity-90">{currentPlan.hoursPerWeek}</div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="p-6">
              <div className="space-y-6">
                {currentPlan.timeline.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start p-4 bg-slate-50 rounded-lg"
                  >
                    <div className="flex-shrink-0 w-24 text-center">
                      <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-2">
                        {index + 1}
                      </div>
                      <div className="text-sm font-semibold text-slate-600">{phase.duration}</div>
                    </div>
                    <div className="flex-1 ml-6">
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{phase.phase}</h4>
                      <p className="text-slate-600 mb-3">{phase.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {phase.activities.map((activity, actIndex) => (
                          <span
                            key={actIndex}
                            className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-green-600 font-medium">
                        <TrophyIcon className="w-4 h-4 mr-2" />
                        {phase.milestone}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Practical Experience Guidance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Practical Experience Guidance
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {experienceGuidance.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-slate-900 mb-3">{guide.title}</h4>
                <p className="text-slate-600 mb-4">{guide.description}</p>
                <ul className="space-y-2">
                  {guide.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start text-sm text-slate-600">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-50 to-red-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Start Your CIA Journey?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Download your personalized study planner and get started with our proven roadmap 
              to CIA certification success.
            </p>
            <LeadFormButton 
        formType='download-hackdoc'
        isSendOtp={true}
        courseId='CIA'
            
              className="bg-gradient-to-r from-red-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center"
            >
              <DocumentArrowDownIcon className="w-6 h-6 mr-2" />
              Download Study Planner
            </LeadFormButton>
          </div>
        </motion.div>
      </div>

      {/* Lead Form Modal */}
      <AnimatePresence>
        {showLeadModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Download Study Planner</h3>
                <button
                  onClick={() => setShowLeadModal(false)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmitLeadForm} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={leadFormData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={leadFormData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={leadFormData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Download Study Planner
                </button>
              </form>
              
              <p className="text-xs text-slate-500 mt-4 text-center">
                We&apos;ll send you the study planner and keep you updated on CIA preparation tips.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}