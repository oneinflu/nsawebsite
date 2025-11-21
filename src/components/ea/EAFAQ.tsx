'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDownIcon,
  QuestionMarkCircleIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import LeadFormButton from '../LeadFormButton';

const EAFAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqCategories = {
    general: { title: 'General', icon: QuestionMarkCircleIcon, color: 'blue' },
    eligibility: { title: 'Eligibility', icon: CheckCircleIcon, color: 'green' },
    career: { title: 'Career & Salary', icon: CurrencyDollarIcon, color: 'purple' },
    study: { title: 'Study & Exams', icon: AcademicCapIcon, color: 'orange' },
    concerns: { title: 'Common Concerns', icon: ExclamationTriangleIcon, color: 'red' },
  } as const;

  const faqData = {
    general: [
      {
        question: 'What is an Enrolled Agent (EA)?',
        answer:
          'EA is the highest credential awarded by the IRS, allowing you to represent taxpayers before the IRS in all tax matters.',
      },
      {
        question: 'Is EA globally useful?',
        answer:
          'EA is US-centric and highly valued in tax advisory, compliance, and representation. It’s particularly beneficial for roles dealing with US taxation worldwide.',
      },
      {
        question: 'Who grants the EA credential and what are the rights?',
        answer:
          'The Internal Revenue Service (IRS) grants the EA credential. EAs have unlimited practice rights to represent taxpayers before the IRS in audits, appeals, and collections.',
      },
      {
        question: 'How is EA different from CPA?',
        answer:
          'EA focuses exclusively on US federal taxation and taxpayer representation, whereas CPA covers a broader scope of accounting, audit, finance, and state licensure. For tax-only roles, EA is a direct fit.',
      },
      {
        question: 'Can EAs operate independent tax practices?',
        answer:
          'Yes. EAs can open independent tax practices, prepare returns, and represent clients. You will need a PTIN and, if e-filing, an EFIN from the IRS.',
      },
      {
        question: 'Do EAs require a state license?',
        answer:
          'No. EA is a federal credential issued by the IRS, so there is no separate state licensure like CPA. EAs maintain status through IRS renewal and CE compliance.',
      },
    ],
    eligibility: [
      {
        question: 'Is a degree required?',
        answer:
          'No degree is mandatory. You need a PTIN, pass the three SEE parts, and complete IRS suitability checks.',
      },
      {
        question: 'Do non-US residents qualify?',
        answer:
          'Yes. Non-US residents can pursue EA. You must obtain a PTIN and pass the SEE exams; representation rights apply to US tax matters.',
      },
      {
        question: 'Do I need a US SSN to get a PTIN?',
        answer:
          'A SSN is helpful but not mandatory for non-US residents. The IRS provides alternate identity verification routes for PTIN issuance to foreign applicants.',
      },
      {
        question: 'What is the IRS suitability check?',
        answer:
          'It’s a background review conducted by the IRS after you pass SEE, checking for compliance issues. If anything is flagged, you may need to provide additional documentation.',
      },
      {
        question: 'Is there an age or education minimum?',
        answer:
          'You must be legally an adult (typically 18+). No specific degree is required; tax knowledge and exam success are the primary requirements.',
      },
      {
        question: 'How do I obtain and renew a PTIN?',
        answer:
          'Apply online via the IRS PTIN portal. PTINs are renewed annually for a small fee. Keep your profile details updated to avoid lapses.',
      },
    ],
    career: [
      {
        question: 'What roles do EAs work in?',
        answer:
          'Typical roles include Tax Associate, Senior Tax Associate, EA Advisor, and Tax Manager in firms and tax advisory practices.',
      },
      {
        question: 'Salary outlook?',
        answer:
          'Entry-level US salaries often range from $55K–$75K, mid-level $80K–$110K, senior $120K+. Actuals vary by geography and employer.',
      },
      {
        question: 'Which industries hire EAs?',
        answer:
          'Big 4 and mid-tier firms, tax boutiques, captive centers, shared service centers, fintechs, and independent practices actively hire for US tax roles.',
      },
      {
        question: 'What growth path can an EA expect?',
        answer:
          'Progression typically moves from Associate → Senior → Supervisor/Manager → Tax Lead/Director. Many EAs specialize in business taxation, representation, or advisory.',
      },
      {
        question: 'Are there international opportunities for EAs?',
        answer:
          'Yes. US tax work is global. Many firms in India, Philippines, and elsewhere support US clients, offering strong career tracks and cross-border exposure.',
      },
      {
        question: 'Is EA valued compared to CPA in tax roles?',
        answer:
          'In tax-specific roles, EA is highly valued due to deep IRS-focused expertise and representation rights. CPA may be preferred for audit/general accounting tracks.',
      },
    ],
    study: [
      {
        question: 'How many exams are there and what are they?',
        answer:
          'Three parts: Individuals (Part 1), Businesses (Part 2), and Representation, Practices & Procedures (Part 3).',
      },
      {
        question: 'Recommended prep time?',
        answer:
          'Most candidates prepare 2–3 months per part with structured study plans, mocks, and targeted tax practice.',
      },
      {
        question: 'When are exams offered and how do I schedule?',
        answer:
          'SEE is offered most months of the year via Prometric testing centers. You schedule online; availability varies by location and season.',
      },
      {
        question: 'What is the passing score and format?',
        answer:
          'The passing score is 105 on a scaled scoring system. Exams are computer-based with multiple-choice questions and strict timing per part.',
      },
      {
        question: 'Are passed parts valid if I take breaks?',
        answer:
          'Yes. Credits for passed SEE parts remain valid for two years from the date you pass the first part, within which you must clear all parts.',
      },
      {
        question: 'What study resources are recommended?',
        answer:
          'Use updated EA prep guides, IRS publications, curated question banks, and take timed mocks. Focus on exam objectives and recent tax changes.',
      },
    ],
    concerns: [
      {
        question: 'Renewal and CE requirements?',
        answer:
          'EAs must renew on a cycle and complete continuing education as per IRS requirements to maintain active status.',
      },
      {
        question: 'How difficult is EA compared to CPA?',
        answer:
          'EA focuses exclusively on US taxation and representation. Difficulty depends on your tax background; it’s generally more targeted than multi-topic certifications like CPA.',
      },
      {
        question: 'What happens if I fail an exam part?',
        answer:
          'You can retake any part. Review your weak areas, take additional mocks, and reschedule when ready. There is no cap on retakes, but plan smartly.',
      },
      {
        question: 'Is prior US tax experience mandatory?',
        answer:
          'No. Prior exposure helps, but structured prep covers fundamentals and applied scenarios. Many first-time candidates clear with dedicated study.',
      },
      {
        question: 'What is the typical total cost to become an EA?',
        answer:
          'Costs include PTIN fee, exam fees for three parts, study materials, and later CE. Overall investment is modest compared to many other professional credentials.',
      },
      {
        question: 'Can EAs represent clients outside the US?',
        answer:
          'EAs represent taxpayers in US federal tax matters regardless of where the EA or client is located. Representation is tied to US tax jurisdiction.',
      },
    ],
  } as const;

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const getCategoryColor = (color: string) => {
    const colors = {
      blue: 'text-red-600 bg-red-50 border-red-200',
      green: 'text-green-600 bg-green-50 border-green-200',
      purple: 'text-purple-600 bg-purple-50 border-purple-200',
      orange: 'text-orange-600 bg-orange-50 border-orange-200',
      red: 'text-red-600 bg-red-50 border-red-200',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-10 sm:py-20 bg-gradient-to-br from-slate-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center lg:mb-16 mb-8"
        >
          <div className="flex items-center justify-center lg:mb-6 mb-3">
            <QuestionMarkCircleIcon className="w-8 h-8 sm:w-12 sm:h-12 text-red-600 mr-2 lg:mr-4 flex-shrink-0" />
            <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">Questions</span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get answers to all your EA-related questions and clear your doubts
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 lg:mb-12 mb-6"
        >
          {Object.entries(faqCategories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 border-2 ${
                  activeCategory === key
                    ? getCategoryColor(category.color)
                    : 'text-gray-600 bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <IconComponent className="w-5 h-5 mr-2" />
                {category.title}
              </motion.button>
            );
          })}
        </motion.div>

        {/* FAQ Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-4">
            {faqData[activeCategory as keyof typeof faqData].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <motion.div animate={{ rotate: openFAQ === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDownIcon className="w-6 h-6 text-gray-500 flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-700 leading-relaxed">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:mt-16 mt-10 text-center"
        >
          <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <ChatBubbleLeftRightIcon className="w-16 h-16 mx-auto mb-6 text-red-200" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
              Our EA experts are here to help! Get personalized answers to all your queries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LeadFormButton formType="general" variant="outline" isSendOtp={true} courseId="EA">
                Book Free Counsellor
              </LeadFormButton>
            </div>
            <div className="mt-8 text-red-200 text-sm">💬 Average response time: Under 2 minutes | 📞 Free consultation available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EAFAQ;