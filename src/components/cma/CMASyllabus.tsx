'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ClockIcon, BookOpenIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

import LeadFormButton from '../LeadFormButton';

export default function CMASyllabus() {
  const [expandedPart, setExpandedPart] = useState<number | null>(null);

  const syllabusData = [
    {
      part: 'Part 1',
      title: 'Financial Planning, Performance, and Analytics',
      duration: '3-4 months',
      weight: '100 MCQs + 2 Essays',
      topics: [
        {
          section: 'A. External Financial Reporting Decisions (15%)',
          subtopics: [
            'Financial Statements',
            'Recognition, Measurement, and Valuation',
            '…and more in the full syllabus'
          ]
        },
        {
          section: 'B. Planning, Budgeting, and Forecasting (30%)',
          subtopics: [
            'Strategic Planning',
            'Budgeting Concepts',
            '…advanced forecasting covered in the full syllabus'
          ]
        },
        {
          section: 'C. Performance Management (20%)',
          subtopics: [
            'Cost and Variance Measures',
            'Performance Measures',
            '…additional topics in full syllabus'
          ]
        },
        {
          section: 'D. Cost Management (20%)',
          subtopics: [
            'Measurement Concepts',
            'Costing Systems',
            '…and more (BPI, SCM) in full syllabus'
          ]
        },
        {
          section: 'E. Internal Controls (15%)',
          subtopics: [
            'Governance, Risk, and Compliance',
            'Systems Controls & Security Measures',
            '…additional coverage in full syllabus'
          ]
        }
      ]
      ,
      whatYouLearn: [
        'Prepare and analyze financial statements that drive decisions',
        'Plan budgets and build rolling forecasts with confidence',
        'Measure performance using cost & variance analytics',
        'Implement cost systems and improve processes',
        'Design internal controls to reduce risk'
      ],
      roleImpact: [
        'FP&A Analyst: stronger budgeting & forecasting impact',
        'Cost Analyst: improved cost control & efficiency',
        'Reporting Specialist: better compliance and disclosures',
        'Operations Partner: actionable performance insights'
      ]
    },
    {
      part: 'Part 2',
      title: 'Strategic Financial Management',
      duration: '3-4 months',
      weight: '100 MCQs + 2 Essays',
      topics: [
        {
          section: 'A. Financial Statement Analysis (25%)',
          subtopics: [
            'Financial Ratio Analysis',
            'Liquidity & Profitability Analysis',
            '…extended techniques in full syllabus'
          ]
        },
        {
          section: 'B. Corporate Finance (20%)',
          subtopics: [
            'Risk and Return',
            'Working Capital Management',
            '…TVM & valuation in full syllabus'
          ]
        },
        {
          section: 'C. Decision Analysis (25%)',
          subtopics: [
            'Cost-Volume-Profit Analysis',
            'Pricing Decisions',
            '…marginal/make-or-buy in full syllabus'
          ]
        },
        {
          section: 'D. Risk Management (10%)',
          subtopics: [
            'Enterprise Risk Management',
            'Operational Risk Management',
            '…financial risk in full syllabus'
          ]
        },
        {
          section: 'E. Investment Decisions (20%)',
          subtopics: [
            'Capital Budgeting Process',
            'Discounted Cash Flow (DCF)',
            '…additional methods in full syllabus'
          ]
        }
      ]
      ,
      whatYouLearn: [
        'Analyze financial statements to uncover trends and insights',
        'Apply corporate finance (risk, WCM, valuation) to decisions',
        'Use decision analysis for pricing & make-or-buy choices',
        'Build risk management frameworks for resilient decisions',
        'Evaluate investments using DCF and capital budgeting'
      ],
      roleImpact: [
        'Financial Analyst: sharper ratio & trend analysis',
        'Corporate Finance: better capital and funding decisions',
        'Business Partner: data-backed strategic recommendations',
        'Investment Evaluator: rigorous project selection'
      ]
    }
  ];

  const examDetails = [
    { label: 'Exam Format', value: '100 MCQs + 2 Essays per part' },
    { label: 'Duration', value: '4 hours per part' },
    { label: 'Passing Score', value: '360/500 points' },
    { label: 'Validity', value: 'Lifetime (with CPE requirements)' }
  ];

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
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            CMA{' '}
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Syllabus
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Master strategic financial management and business analytics with our comprehensive CMA curriculum designed for global finance leaders.
          </p>
        </motion.div>

        {/* Exam Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {examDetails.map((detail, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-sm text-slate-500 mb-2">{detail.label}</div>
              <div className="font-semibold text-slate-900">{detail.value}</div>
            </div>
          ))}
        </motion.div>

        {/* Syllabus Parts */}
        <div className="space-y-6">
          {syllabusData.map((part, partIndex) => (
            <motion.div
              key={partIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: partIndex * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              {/* Part Header */}
              <div
                className="p-6 cursor-pointer hover:bg-slate-50 transition-colors duration-200"
                onClick={() => setExpandedPart(expandedPart === partIndex ? null : partIndex)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                        {part.part}
                      </span>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <ClockIcon className="w-4 h-4" />
                          {part.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpenIcon className="w-4 h-4" />
                          {part.weight}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {part.title}
                    </h3>
                  </div>
                  <ChevronDownIcon
                    className={`w-6 h-6 text-slate-400 transition-transform duration-200 ${
                      expandedPart === partIndex ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </div>

              {/* Expanded Content */}
              {expandedPart === partIndex && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-slate-100"
                >
                  <div className="p-6 space-y-6">
                    {/* Preview gate banner (FOMO) */}
                    <div className="rounded-lg border border-red-100 bg-red-50 p-4 text-sm text-red-700">
                      Quick preview only — not the full CMA US syllabus.
                      <span className="ml-1">Unlock the complete, detailed syllabus (with subtopics and weightages):</span>
                      <div className="mt-3">
                        <LeadFormButton formType="download-syllabus" isSendOtp={true} variant="primary" className="text-sm">
                          Download Full Syllabus PDF
                        </LeadFormButton>
                      </div>
                    </div>

                    {/* CIA-style content: What you’ll learn & Role impact */}
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* What You’ll Learn */}
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                          <BookOpenIcon className="w-5 h-5 mr-2 text-red-600" />
                          What You’ll Learn
                        </h4>
                        <ul className="space-y-2">
                          {part.whatYouLearn?.map((item: string, idx: number) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-slate-700 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Role Impact */}
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                          <BriefcaseIcon className="w-5 h-5 mr-2 text-green-600" />
                          Role Impact
                        </h4>
                        <ul className="space-y-2">
                          {part.roleImpact?.map((impact: string, idx: number) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-slate-700 text-sm">{impact}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Get Complete CMA Study Material
          </h3>
          <p className="mb-6 opacity-90 max-w-2xl mx-auto">
            Download detailed syllabus, study guides, and practice questions. Start your CMA preparation with expert-curated content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
         
            <LeadFormButton
              formType="download-syllabus"
              isSendOtp={true}
              variant="secondary"
              className='text-base md:text-lg'
             
            >
              Download Full Syllabus
            </LeadFormButton>
            <LeadFormButton
              formType="general"
              
             
              className='text-base md:text-lg btn-info'
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