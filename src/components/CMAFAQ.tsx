'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import LeadFormButton from './LeadFormButton';

export default function CMAFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What is CMA (USA) certification?',
          a: 'CMA (Certified Management Accountant) is a globally recognized professional certification offered by the Institute of Management Accountants (IMA) in the USA. It focuses on management accounting, financial planning, analysis, control, and decision support.'
        },
        {
          q: 'Is CMA globally recognized?',
          a: 'Yes, CMA (USA) is recognized in 150+ countries worldwide including USA, UK, Canada, Australia, UAE, Singapore, and India. It\'s highly valued by multinational corporations and Big 4 accounting firms globally.'
        },
        {
          q: 'What are the career opportunities after CMA?',
          a: 'CMA opens doors to roles like Financial Analyst, Management Accountant, Budget Analyst, Cost Accountant, Financial Planning & Analysis Manager, Controller, CFO, and strategic consulting positions in Fortune 500 companies.'
        },
        {
          q: 'How is CMA different from CPA and ACCA?',
          a: 'CMA focuses on management accounting and corporate finance, CPA emphasizes public accounting and auditing, while ACCA provides broader global accounting knowledge. CMA is ideal for corporate finance roles and strategic management positions.'
        }
      ]
    },
    {
      category: 'Eligibility & Requirements',
      questions: [
        {
          q: 'What are the eligibility requirements for CMA?',
          a: 'You need a bachelor\'s degree from an accredited institution (any field). If you don\'t have a bachelor\'s degree, you can substitute with professional certifications like CPA, CA, or relevant work experience as approved by IMA.'
        },
        {
          q: 'Can I pursue CMA with a non-commerce background?',
          a: 'Yes! CMA accepts candidates from any educational background. Engineering, Science, Arts, or any other field graduates can pursue CMA. Our foundation courses help bridge any knowledge gaps.'
        },
        {
          q: 'Do I need work experience to start CMA?',
          a: 'No work experience is required to start CMA or take the exams. However, you need 2 years of relevant professional experience to receive the CMA certification after passing both parts.'
        },
        {
          q: 'What is the work experience requirement for CMA certification?',
          a: 'You need 2 years of continuous professional experience in management accounting or financial management. This can be completed before, during, or after passing the CMA exams.'
        }
      ]
    },
    {
      category: 'Exam Structure & Preparation',
      questions: [
        {
          q: 'How many parts are there in CMA exam?',
          a: 'CMA has 2 parts: Part 1 - Financial Planning, Performance and Analytics, and Part 2 - Strategic Financial Management. Each part is 4 hours long with 100 MCQs and 2 essay questions.'
        },
        {
          q: 'How long does it take to complete CMA?',
          a: 'With our structured program, most students complete CMA in 6-12 months. The timeline depends on your study schedule, background, and chosen track (accelerated, standard, or flexible).'
        },
        {
          q: 'What is the pass rate for CMA exams?',
          a: 'The global CMA pass rate is around 45-50%. However, our students achieve a 98% pass rate due to our comprehensive preparation methodology, personalized mentoring, and extensive practice materials.'
        },
        {
          q: 'Can I take both CMA parts together?',
          a: 'No, you must pass Part 1 before taking Part 2. However, you can schedule Part 2 immediately after passing Part 1. There\'s no waiting period between the parts.'
        }
      ]
    },
    {
      category: 'Costs & Investment',
      questions: [
        {
          q: 'What are the total costs involved in CMA?',
          a: 'Total costs include IMA membership ($245), entrance fee ($300), exam fees ($415 per part), and training costs. Our comprehensive program provides excellent ROI with placement assistance and career support.'
        },
        {
          q: 'Is CMA worth the investment?',
          a: 'Absolutely! CMA professionals earn 25-40% more than non-certified peers. The average salary increase post-CMA ranges from $55,000-$30,000 annually, making it a highly profitable investment in your career.'
        },
        {
          q: 'Do you provide EMI options for course fees?',
          a: 'Yes, we offer flexible EMI options starting from ₹5,000 per month. We also provide scholarships and early bird discounts to make CMA education accessible to deserving candidates.'
        },
        {
          q: 'What is included in your CMA program fee?',
          a: 'Our program includes comprehensive study materials, video lectures, live classes, practice tests, mock exams, doubt clearing sessions, placement assistance, and lifetime access to updated content.'
        }
      ]
    },
    {
      category: 'Career & Placement',
      questions: [
        {
          q: 'What salary can I expect after CMA?',
          a: 'CMA salaries vary by location and experience. In India: ₹6-15 LPA for freshers, ₹15-30 LPA for experienced. Globally: $65,000-$130,000+ annually. Our placement team helps you achieve competitive packages.'
        },
        {
          q: 'Do you provide placement assistance?',
          a: 'Yes! We have partnerships with 200+ companies including Big 4 firms, MNCs, and Fortune 500 companies. Our placement team provides resume building, interview preparation, and direct job referrals.'
        },
        {
          q: 'Can CMA help me get jobs abroad?',
          a: 'Definitely! CMA is highly valued globally. Our alumni work in USA, UK, Canada, Australia, UAE, Singapore, and other countries. We provide guidance for international job applications and visa processes.'
        },
        {
          q: 'Which companies hire CMA professionals?',
          a: 'Top recruiters include Deloitte, PwC, EY, KPMG, McKinsey, BCG, Goldman Sachs, JP Morgan, Google, Microsoft, Amazon, and thousands of other multinational corporations worldwide.'
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <QuestionMarkCircleIcon className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl md:text-5xl font-bold text-slate-900 mb-6">
            CMA{' '}
            <span className="bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
              FAQ
            </span>
          </h2>
          <p className="text-md md:text-xl text-slate-600 max-w-3xl mx-auto">
            Get answers to the most commonly asked questions about CMA certification, 
            eligibility, career prospects, and our training programs.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                  {category.category}
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-600 rounded-full"></div>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = faqs.slice(0, categoryIndex).reduce((acc, cat) => acc + cat.questions.length, 0) + questionIndex;
                  
                  return (
                    <motion.div
                      key={globalIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: questionIndex * 0.05 }}
                      className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200 hover:border-red-300 transition-colors duration-200"
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-100 transition-colors duration-200"
                      >
                        <h4 className="text-md md:text-lg font-semibold text-slate-900 pr-4">
                          {faq.q}
                        </h4>
                        <ChevronDownIcon
                          className={`w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                            openFAQ === globalIndex ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      <AnimatePresence>
                        {openFAQ === globalIndex && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4 border-t border-slate-200">
                              <p className="text-sm md:text-lg text-slate-700 leading-relaxed pt-4">
                                {faq.a}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-red-50 to-red-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-md md:text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Our CMA experts are here to help! Book a free consultation to get personalized 
              answers about your CMA journey, career goals, and study plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
                <LeadFormButton formType='book-free-consultation' variant='primary' isSendOtp={true} >
                  Book Free Consultation
                </LeadFormButton>
             
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}