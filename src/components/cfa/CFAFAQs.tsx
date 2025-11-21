'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import LeadFormButton from '../LeadFormButton';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 'who-should-pursue',
    question: 'Who should pursue CFA?',
    answer: 'CFA is ideal for finance professionals seeking global recognition in investment management, equity research, portfolio management, and financial analysis. Perfect for graduates in finance, economics, or commerce who want to advance their careers in investment banking, asset management, or corporate finance. The program suits both fresh graduates and experienced professionals looking to enhance their credentials in the global finance industry.'
  },
  {
    id: 'cfa-with-job',
    question: 'Can I do CFA along with a job?',
    answer: 'Yes, absolutely! CFA is designed for working professionals. Most candidates (over 70%) pursue CFA while working full-time. The program requires 300+ hours of study per level, which can be managed with proper time management. Many employers support CFA studies and may even sponsor the program. Our flexible learning schedules, weekend classes, and online resources make it possible to balance work and CFA preparation effectively.'
  },
  {
    id: 'difficulty-comparison',
    question: 'What is CFA exam difficulty vs CA/CMA?',
    answer: 'CFA focuses on global investment analysis and portfolio management, while CA emphasizes accounting and auditing, and CMA covers cost and management accounting. CFA has a lower pass rate (40-50%) compared to CA/CMA, making it more challenging. However, CFA offers better global recognition and higher salary potential in investment roles. The difficulty varies by individual background - finance graduates find CFA more aligned with their knowledge, while accounting students may find CA/CMA more familiar.'
  },
  {
    id: 'india-recognition',
    question: 'Is CFA recognized in India?',
    answer: 'Yes, CFA is highly recognized and valued in India. Major financial institutions like ICICI Bank, HDFC Bank, Kotak Mahindra, Axis Bank, and multinational firms like Goldman Sachs, JP Morgan, and Morgan Stanley actively recruit CFA charterholders. The CFA Institute has a strong presence in India with local societies in Mumbai, Delhi, Bangalore, and other cities. Indian CFA charterholders command premium salaries and have excellent career prospects in investment banking, asset management, and corporate finance.'
  },
  {
    id: 'completion-time',
    question: 'How long does it take to complete all levels?',
    answer: 'Typically 2.5 to 4 years to complete all three levels. Level 1 can be taken twice a year (February and August), while Levels 2 and 3 are offered once annually. Most candidates follow this timeline: Level 1 (6-12 months preparation), Level 2 (12-18 months after Level 1), and Level 3 (12-18 months after Level 2). With our structured program and expert guidance, many students complete faster. You also need 4 years of relevant work experience to earn the CFA charter, which can be accumulated before, during, or after the exams.'
  }
];

const CFAFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  // SEO Schema for FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* SEO Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <section className="sm:py-15 py-10 bg-gradient-to-br from-slate-50 via-red-50 to-red-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center sm:mb-16 mb-10"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-3 rounded-2xl shadow-lg">
                <QuestionMarkCircleIcon className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get answers to the most common questions about CFA certification, career prospects, and our program
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-red-50/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-inset"
                  aria-expanded={openFAQ === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDownIcon className="h-6 w-6 text-red-600" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openFAQ === faq.id && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 pt-2">
                        <div className="h-px bg-gradient-to-r from-red-200 to-red-200 mb-4"></div>
                        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-red-600 to-red-600 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Still Have Questions?
              </h3>
              <p className="text-red-100 mb-6 text-lg">
                Our CFA experts are here to guide you through your certification journey
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <LeadFormButton formType='general' variant='outline' isSendOtp={true} >
                  Schedule Free Consultation
                </LeadFormButton>
                <LeadFormButton formType='get-free-guide' variant='secondary' isSendOtp={true} >
                  Download CFA Guide
                </LeadFormButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CFAFAQs;