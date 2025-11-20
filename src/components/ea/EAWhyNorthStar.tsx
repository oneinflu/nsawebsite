'use client';

import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  StarIcon,
  UserGroupIcon,
  ChartBarIcon,
  
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import LeadFormButton from '@/components/LeadFormButton';

const features = [
  {
    title: 'One Mentor System',
    description: 'Guided by a single expert mentor for consistency and clarity.',
    icon: StarIcon,
    color: 'from-red-600 to-purple-600',
  },
  {
    title: 'Doubt Solving (1-on-1)',
    description: 'High-touch support to clear doubts quickly and keep momentum.',
    icon: ChatBubbleLeftRightIcon,
    color: 'from-orange-500 to-red-600',
  },
  {
    title: 'Mock Exams + Analytics',
    description: 'Performance dashboards and insights to sharpen your exam strategy.',
    icon: ChartBarIcon,
    color: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Placement Assistance',
    description: 'Career pathways, interview prep, and employer connections.',
    icon: BriefcaseIcon,
    color: 'from-slate-600 to-slate-800',
  },
  {
    title: 'India-friendly Content',
    description: 'Simplified explanations with practical examples tailored for you.',
    icon: AcademicCapIcon,
    color: 'from-purple-600 to-red-600',
  },
  {
    title: 'Community & Peer Support',
    description: 'Active learning groups, weekly touchpoints, and accountability.',
    icon: UserGroupIcon,
    color: 'from-blue-600 to-indigo-600',
  },
];

const EAWhyNorthStar = () => {
  return (
    <section className="py-10 sm:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-12 left-8 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-32 right-8 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-16 left-1/2 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-purple-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Why NorthStar Academy
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">EA Success</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mentorship, analytics, and placements — a system that makes tax representation careers achievable and fast.
          </p>
        </motion.div>

        {/* Split section: Mentor Spotlight and Value Props */}
        <div className="grid lg:grid-cols-1 gap-6 sm:gap-12 items-center mb-10 sm:mb-20">
          {/* Mentor Spotlight Card */}
         
          {/* Value Props Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-3 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <LeadFormButton
            formType="general"
            isSendOtp={true}
            courseId="EA"
            variant="primary"
            className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center"
          >
            <span>Experience the NorthStar Difference</span>
          </LeadFormButton>
        </motion.div>
      </div>
    </section>
  );
};

export default EAWhyNorthStar;