'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarIcon, ClockIcon, BookOpenIcon, CheckCircleIcon, PlayCircleIcon, DocumentTextIcon } from '@heroicons/react/24/solid';
import LeadFormButton from './LeadFormButton';

export default function CMAStudyPlanner() {
  const [selectedPlan, setSelectedPlan] = useState('standard');
  const [selectedPart, setSelectedPart] = useState(1);

  const studyPlans = {
    accelerated: {
      name: 'Accelerated Track',
      duration: '6 Months',
      hoursPerWeek: '20-25 hours',
      description: 'For dedicated students who want to complete CMA quickly',
      color: 'from-red-500 to-orange-500',
      icon: '🚀',
      suitableFor: ['Full-time students', 'Career changers', 'Highly motivated professionals']
    },
    standard: {
      name: 'Standard Track',
      duration: '9 Months',
      hoursPerWeek: '15-20 hours',
      description: 'Balanced approach for working professionals',
      color: 'from-red-500 to-red-500',
      icon: '⚖️',
      suitableFor: ['Working professionals', 'Balanced lifestyle', 'Steady progress']
    },
    flexible: {
      name: 'Flexible Track',
      duration: '12 Months',
      hoursPerWeek: '10-15 hours',
      description: 'Perfect for busy professionals with limited time',
      color: 'from-green-500 to-teal-500',
      icon: '🕐',
      suitableFor: ['Busy professionals', 'Parents', 'Multiple commitments']
    }
  };

  const part1Schedule = {
    accelerated: [
      { week: 'Week 1-2', topic: 'External Financial Reporting Decisions', hours: 40, activities: ['Video lectures', 'Practice questions', 'Case studies'] },
      { week: 'Week 3-4', topic: 'Planning, Budgeting, and Forecasting', hours: 45, activities: ['Interactive sessions', 'Excel modeling', 'Mock tests'] },
      { week: 'Week 5-6', topic: 'Performance Management', hours: 40, activities: ['Live classes', 'Group discussions', 'Assignments'] },
      { week: 'Week 7-8', topic: 'Cost Management', hours: 35, activities: ['Case analysis', 'Problem solving', 'Peer review'] },
      { week: 'Week 9-10', topic: 'Internal Controls', hours: 35, activities: ['Audit simulations', 'Control testing', 'Reports'] },
      { week: 'Week 11-12', topic: 'Technology and Analytics', hours: 35, activities: ['Data analysis', 'Tech tools', 'Final prep'] }
    ],
    standard: [
      { week: 'Month 1', topic: 'External Financial Reporting Decisions', hours: 60, activities: ['Comprehensive study', 'Practice tests', 'Doubt clearing'] },
      { week: 'Month 2', topic: 'Planning, Budgeting, and Forecasting', hours: 65, activities: ['Deep dive sessions', 'Excel mastery', 'Case studies'] },
      { week: 'Month 3', topic: 'Performance Management', hours: 60, activities: ['Performance metrics', 'KPI analysis', 'Mock exams'] },
      { week: 'Month 4', topic: 'Cost Management & Internal Controls', hours: 70, activities: ['Integrated learning', 'Control frameworks', 'Practice'] },
      { week: 'Month 5', topic: 'Technology and Analytics + Review', hours: 65, activities: ['Tech applications', 'Final review', 'Exam prep'] }
    ],
    flexible: [
      { week: 'Month 1-2', topic: 'External Financial Reporting Decisions', hours: 80, activities: ['Self-paced learning', 'Weekly check-ins', 'Flexible schedule'] },
      { week: 'Month 3-4', topic: 'Planning, Budgeting, and Forecasting', hours: 85, activities: ['Weekend sessions', 'Online support', 'Progress tracking'] },
      { week: 'Month 5-6', topic: 'Performance Management', hours: 80, activities: ['Evening classes', 'Recorded sessions', 'Peer groups'] },
      { week: 'Month 7-8', topic: 'Cost Management', hours: 75, activities: ['Flexible timing', 'Mobile learning', 'Quick reviews'] },
      { week: 'Month 9-10', topic: 'Internal Controls', hours: 75, activities: ['Weekend workshops', 'Online labs', 'Case discussions'] },
      { week: 'Month 11-12', topic: 'Technology and Analytics + Final Prep', hours: 85, activities: ['Intensive review', 'Mock exams', 'Exam strategy'] }
    ]
  };

  const studyResources = [
    { icon: PlayCircleIcon, title: 'Video Lectures', description: '200+ hours of comprehensive video content', color: 'text-red-600 bg-red-50' },
    { icon: BookOpenIcon, title: 'Study Materials', description: 'IMA-aligned textbooks and practice guides', color: 'text-red-600 bg-red-50' },
    { icon: DocumentTextIcon, title: 'Practice Tests', description: '1000+ practice questions with explanations', color: 'text-green-600 bg-green-50' },
    { icon: CalendarIcon, title: 'Live Sessions', description: 'Weekly live classes and doubt clearing', color: 'text-purple-600 bg-purple-50' }
  ];

  const currentPlan = studyPlans[selectedPlan as keyof typeof studyPlans];
  const currentSchedule = part1Schedule[selectedPlan as keyof typeof part1Schedule];

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
            CMA{' '}
            <span className="bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
              Study Planner
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose your ideal study track and get a personalized timeline to achieve 
            your CMA certification goals efficiently.
          </p>
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

        {/* Part Selection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-2 shadow-lg">
              <button
                onClick={() => setSelectedPart(1)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedPart === 1
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'text-slate-600 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                Part 1: Financial Planning & Analytics
              </button>
              <button
                onClick={() => setSelectedPart(2)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedPart === 2
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'text-slate-600 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                Part 2: Strategic Financial Management
              </button>
            </div>
          </div>
        </motion.div>

        {/* Study Schedule */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedPlan}-${selectedPart}`}
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
                    {currentPlan.name} - Part {selectedPart}
                  </h3>
                  <p className="opacity-90">
                    Complete timeline for your CMA Part {selectedPart} preparation
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl mb-2">{currentPlan.icon}</div>
                  <div className="text-sm opacity-90">{currentPlan.hoursPerWeek}</div>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="p-6">
              <div className="space-y-6">
                {currentSchedule.map((item, index) => (
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
                      <div className="text-sm font-semibold text-slate-600">{item.week}</div>
                    </div>
                    <div className="flex-1 ml-6">
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{item.topic}</h4>
                      <div className="flex items-center text-sm text-slate-600 mb-3">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        <span>{item.hours} hours total</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.activities.map((activity, actIndex) => (
                          <span
                            key={actIndex}
                            className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Study Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Complete Study Resources
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studyResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg ${resource.color} flex items-center justify-center mb-4`}>
                  <resource.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{resource.title}</h4>
                <p className="text-slate-600 text-sm">{resource.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-50 to-red-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Start Your CMA Journey?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Get your personalized study plan and start preparing for your CMA certification 
              with our expert guidance and comprehensive resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LeadFormButton
              formType="download-hackdoc"
              isSendOtp={true}
             variant='secondary'
             
             
            >
            
                Get My Study Plan
              </LeadFormButton>
             <LeadFormButton
              formType="general"
              isSendOtp={true}
             variant='primary'
             
             
            >
            
                Book Free Consultation
              </LeadFormButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}