'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { TrendingUp } from 'lucide-react';
import LeadFormButton from '../LeadFormButton';

export default function CMAFeesROI() {
  const feeStructure = [
    {
      component: 'IMA Membership',
      amount: '$245',
      description: 'Annual membership (required)',
      included: true
    },
    {
      component: 'Exam Registration',
      amount: '$415',
      description: 'Per part (2 parts total)',
      included: true
    },
    {
      component: 'Study Materials',
      amount: '$1,800',
      description: 'Complete course with NorthStar',
      included: true
    },
    {
      component: 'Total Investment',
      amount: '$2,875',
      description: 'Complete CMA certification',
      included: true,
      highlight: true
    }
  ];

  const roiData = [
    {
      metric: 'Average Salary Increase',
      value: '25-40%',
      description: 'Higher than non-certified peers'
    },
    {
      metric: 'Entry Level Salary',
      value: '$65,000',
      description: 'Fresh CMA graduates'
    },
    {
      metric: 'Mid-Level Salary',
      value: '$85,000',
      description: '3-5 years experience'
    },
    {
      metric: 'Senior Level Salary',
      value: '$120,000+',
      description: '5+ years experience'
    }
  ];

  const paybackCalculation = [
    {
      scenario: 'Conservative',
      salaryIncrease: '$15,000',
      paybackPeriod: '2.3 months',
      annualROI: '522%'
    },
    {
      scenario: 'Average',
      salaryIncrease: '$25,000',
      paybackPeriod: '1.4 months',
      annualROI: '870%'
    },
    {
      scenario: 'Optimistic',
      salaryIncrease: '$40,000',
      paybackPeriod: '0.9 months',
      annualROI: '1,392%'
    }
  ];

  const benefits = [
    'Global job opportunities in 100+ countries',
    'Fast-track to management positions',
    'Higher earning potential throughout career',
    'Recognition by Fortune 500 companies',
    'Lifetime certification value',
    'Network with global finance professionals'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            CMA Investment &{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              ROI Analysis
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Understand the complete investment required for CMA certification and discover how it pays for itself within months of completion.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Fee Structure */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Complete Fee Structure
            </h3>
            <div className="space-y-4">
              {feeStructure.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${
                    item.highlight
                      ? 'bg-red-50 border-red-200'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className={`font-semibold ${
                        item.highlight ? 'text-red-900' : 'text-slate-900'
                      }`}>
                        {item.component}
                      </h4>
                      <p className="text-sm text-slate-600">{item.description}</p>
                    </div>
                    <div className={`text-xl font-bold ${
                      item.highlight ? 'text-red-600' : 'text-slate-900'
                    }`}>
                      {item.amount}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircleIcon className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-900">What&apos;s Included</span>
              </div>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Live + Recorded Classes</li>
                <li>• Personal Mentor Support</li>
                <li>• Practice Questions & Mock Exams</li>
                <li>• Career Placement Assistance</li>
                <li>• Lifetime Access to Materials</li>
              </ul>
            </div>
          </motion.div>

          {/* ROI Analysis */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Return on Investment
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {roiData.map((item, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {item.value}
                  </div>
                  <div className="font-medium text-slate-900 text-sm mb-1">
                    {item.metric}
                  </div>
                  <div className="text-xs text-slate-600">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>

            <h4 className="font-semibold text-slate-900 mb-4">Payback Period Analysis</h4>
            <div className="space-y-3">
              {paybackCalculation.map((scenario, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-slate-900">{scenario.scenario} Scenario</span>
                    <span className="text-sm text-green-600 font-semibold">
                      {scenario.annualROI} ROI
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>Salary Increase: {scenario.salaryIncrease}</span>
                    <span>Payback: {scenario.paybackPeriod}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Lifetime Career Benefits
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-6 h-6" />
            <h3 className="text-2xl font-bold">
              Your Investment Pays for Itself in Under 3 Months
            </h3>
          </div>
          <p className="mb-6 opacity-90 max-w-2xl mx-auto">
            Don&apos;t let the initial investment hold you back. CMA certification typically pays for itself within the first few months through salary increases and better opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LeadFormButton formType="download-syllabus" variant="outline" className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-slate-50 transform hover:scale-105 transition-all duration-200">
             Talk to Expert
            </LeadFormButton>
            <LeadFormButton formType="general" variant="secondary" className="px-8 py-4 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors duration-200">
              Start Your Journey Today
            </LeadFormButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}