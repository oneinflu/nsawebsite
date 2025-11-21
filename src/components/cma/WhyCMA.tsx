'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon, GlobeAltIcon, CurrencyDollarIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { TrendingUp } from 'lucide-react';
import LeadFormButton from '../LeadFormButton';

export default function WhyCMA() {
  const benefits = [
    {
      icon: GlobeAltIcon,
      title: 'Global Recognition',
      description: 'CMA is recognized in 150+ countries including USA, UK, Canada, Australia, UAE, and Singapore.',
      color: 'text-red-600 bg-red-50'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'High Salary Potential',
      description: 'CMA professionals earn 25-40% more than non-certified peers with average salaries of $65K-$120K+.',
      color: 'text-green-600 bg-green-50'
    },
    {
      icon: TrendingUp,
      title: 'Fast Career Growth',
      description: 'Complete in 6-9 months and accelerate your career in management accounting and corporate finance.',
      color: 'text-red-600 bg-red-50'
    },
    {
      icon: UserGroupIcon,
      title: 'Big 4 & MNC Opportunities',
      description: 'Direct placement opportunities with Deloitte, PwC, KPMG, EY, and other Fortune 500 companies.',
      color: 'text-orange-600 bg-orange-50'
    },
    {
      icon: AcademicCapIcon,
      title: 'Management Focus',
      description: 'Specialized in strategic management, financial planning, and business decision-making.',
      color: 'text-red-600 bg-red-50'
    },
    {
      icon: CheckCircleIcon,
      title: 'IMA® Authorized',
      description: 'Official certification from Institute of Management Accountants (IMA®) - the global authority.',
      color: 'text-teal-600 bg-teal-50'
    }
  ];

  const stats = [
    { number: '150+', label: 'Countries Recognition' },
    { number: '65%', label: 'Average Pass Rate' },
    { number: '6-9', label: 'Months to Complete' },
    { number: '$120K+', label: 'Average Senior Salary' }
  ];

  return (
    <section className="py-4 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              CMA (USA)?
            </span>
          </h2>
          <p className="text-md md:text-xl text-slate-600 max-w-3xl mx-auto">
            The Certified Management Accountant (CMA) certification is your gateway to global finance leadership roles and strategic business positions.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-red-600 mb-2">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className=''>
                <div className={`w-12 h-12 rounded-lg ${benefit.color} flex items-center justify-center mb-4`}>
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center bg-gradient-to-r from-red-50 to-red50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to Transform Your Finance Career?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Join lakhs of professionals who have accelerated their careers with CMA certification. Get personalized guidance from our expert mentors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <LeadFormButton
              formType="download-syllabus"
              variant="primary"
              className="text-sm px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-700 transform hover:scale-105 transition-all duration-200"
            >
              Download Complete Syllabus
            </LeadFormButton>

            <LeadFormButton
              formType='general'
              variant='outline'
              className='text-base md:text-lg text-black'
              isSendOtp={true}
            >
              Talk to an Expert
            </LeadFormButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}