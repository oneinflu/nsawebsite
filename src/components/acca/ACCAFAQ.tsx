"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ChevronDownIcon,
  QuestionMarkCircleIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import LeadFormButton from "../LeadFormButton";

const ACCAFAQ = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqCategories = {
    general: {
      title: "General Questions",
      icon: QuestionMarkCircleIcon,
      color: "blue",
    },
    eligibility: {
      title: "Eligibility & Requirements",
      icon: CheckCircleIcon,
      color: "green",
    },
    career: {
      title: "Career & Salary",
      icon: CurrencyDollarIcon,
      color: "purple",
    },
    study: {
      title: "Study & Exams",
      icon: AcademicCapIcon,
      color: "orange",
    },
    concerns: {
      title: "Common Concerns",
      icon: ExclamationTriangleIcon,
      color: "red",
    },
  };

  const faqData = {
    general: [
      {
        question: "What is ACCA and why is it globally recognized?",
        answer:
          "ACCA (Association of Chartered Certified Accountants) is a globally recognized professional accounting qualification. It's accepted in 180+ countries and is considered one of the most prestigious finance qualifications worldwide. ACCA focuses on practical skills, IFRS standards, and global business practices, making ACCA professionals highly sought after by multinational companies.",
      },
      {
        question: "How is ACCA different from CA India?",
        answer:
          "ACCA offers global mobility (180+ countries vs limited for CA India), practical curriculum focused on IFRS, flexible study options, and better work-life balance. While CA India is excellent for the Indian market, ACCA opens doors to international opportunities with MNCs, Big 4 firms, and global finance roles.",
      },
      {
        question: "Is ACCA worth it in 2024?",
        answer:
          "Absolutely! With increasing globalization, digital transformation, and demand for IFRS expertise, ACCA professionals are in high demand. The qualification offers excellent ROI with average salary increases of 40-60% post-qualification and access to global job markets.",
      },
      {
        question: "Can I work internationally with ACCA?",
        answer:
          "Yes! ACCA is your passport to global career opportunities. You can work in UK, USA, Canada, Australia, UAE, Singapore, and 175+ other countries. Many ACCA students secure international placements through our global network and placement support.",
      },
    ],
    eligibility: [
      {
        question: "What are the minimum eligibility criteria for ACCA?",
        answer:
          "You need to have completed 12th grade (any stream) to start ACCA. However, if you have a graduation degree, you may be eligible for exemptions up to 9 papers. There's no age limit, and you can start ACCA alongside your graduation or after completing it.",
      },
      {
        question: "Can I get exemptions in ACCA? How many?",
        answer:
          "Yes! Based on your educational background, you can get exemptions up to 9 papers out of 13. For example: BCom graduates get 5-6 exemptions, MBA graduates get 6-9 exemptions, and CA Inter qualified students get 8-9 exemptions. This significantly reduces your study time and cost.",
      },
      {
        question: "Do I need work experience to become ACCA qualified?",
        answer:
          "Yes, you need 3 years of relevant work experience to become a fully qualified ACCA member. However, this can be gained before, during, or after completing your exams. We provide placement support to help you gain this experience with our partner companies.",
      },
      {
        question: "Can I pursue ACCA while working full-time?",
        answer:
          "Absolutely! ACCA is designed for working professionals. With our flexible study options including weekend classes, online sessions, and recorded lectures, you can easily balance work and studies. Many of our students are working professionals who successfully complete ACCA.",
      },
    ],
    career: [
      {
        question: "What salary can I expect after ACCA?",
        answer:
          "ACCA professionals earn excellent salaries: Freshers: ₹4-8 LPA, 2-3 years experience: ₹8-15 LPA, 5+ years experience: ₹15-25 LPA, Senior positions: ₹25-50+ LPA. In international markets, salaries are even higher - UK: £35-60k, UAE: AED 120-250k, USA: $60-120k annually.",
      },
      {
        question: "What job roles are available for ACCA professionals?",
        answer:
          "ACCA opens doors to diverse roles: Financial Analyst, Management Accountant, Internal Auditor, Tax Consultant, Financial Controller, Finance Manager, CFO, Risk Manager, Investment Analyst, and many more. You can work in Big 4 firms, MNCs, banks, consulting firms, or start your own practice.",
      },
      {
        question: "Which companies hire ACCA professionals?",
        answer:
          "Top companies actively recruit ACCA professionals: Big 4 (Deloitte, PwC, KPMG, EY), MNCs (Google, Microsoft, Amazon, Apple), Banks (HDFC, ICICI, Axis, international banks), Consulting firms (McKinsey, BCG, Bain), and many more. Our placement team has partnerships with 500+ companies.",
      },
      {
        question: "Is there demand for ACCA in India and abroad?",
        answer:
          "Yes! Demand is growing rapidly. In India, MNCs prefer ACCA for finance roles due to IFRS expertise. Internationally, ACCA is highly valued - UK has 40,000+ job openings, UAE has 55,000+, and other countries have similar demand. The global shortage of qualified accountants makes ACCA professionals highly sought after.",
      },
    ],
    study: [
      {
        question: "How long does it take to complete ACCA?",
        answer:
          "Typically 2-4 years depending on your background and exemptions. With exemptions: 1.5-2.5 years, Without exemptions: 3-4 years. Our accelerated programs and expert guidance help you complete faster while maintaining high pass rates.",
      },
      {
        question: "What is the ACCA exam pattern and difficulty level?",
        answer:
          "ACCA has 13 papers divided into 3 levels: Applied Knowledge (3 papers - Foundation level), Applied Skills (6 papers - Intermediate level), Strategic Professional (4 papers - Advanced level). Exams are computer-based, held 4 times a year. With proper guidance and our proven study methodology, achieving good scores is very manageable.",
      },
      {
        question: "What is the pass rate for ACCA exams?",
        answer:
          "Global pass rates vary by paper (40-85%). However, with NorthStar's proven methodology, our students achieve 85-95% pass rates - significantly higher than global averages. Our comprehensive study materials, mock tests, and personalized mentoring ensure your success.",
      },
      {
        question: "Can I study ACCA online or do I need classroom coaching?",
        answer:
          "We offer both options! Our hybrid model combines the best of both: Live online classes, Recorded sessions for revision, Weekend classroom sessions, One-on-one doubt clearing, Mock tests and assessments. You can choose what works best for your schedule and learning style.",
      },
    ],
    concerns: [
      {
        question: "Is ACCA too difficult? I'm worried about failing.",
        answer:
          "This is a common fear, but with the right guidance, ACCA is very achievable! Our students consistently achieve 85-95% pass rates because of our: Simplified study materials, Step-by-step learning approach, Regular mock tests, Personal mentoring, Doubt clearing sessions. We ensure no student is left behind!",
      },
      {
        question: "Will ACCA be relevant in the age of AI and automation?",
        answer:
          "ACCA is future-proof! The qualification emphasizes strategic thinking, business advisory, and decision-making skills that AI cannot replace. ACCA professionals work WITH technology, not against it. Skills like financial analysis, risk management, and business strategy will always be in demand.",
      },
      {
        question: "Is the investment in ACCA worth it? It seems expensive.",
        answer:
          "ACCA offers excellent ROI! Total investment: ₹3-5 lakhs, Average salary increase: 40-60% post-qualification, Break-even period: 12-18 months. We also offer flexible EMI options starting at ₹8,999/month. Consider it an investment in your future, not an expense.",
      },
      {
        question: "What if I don't get a job after ACCA?",
        answer:
          "We provide 100% placement support! Our services include: Resume building, Interview preparation, Direct company connections, Internship opportunities, Job guarantee programs. With our network of 500+ partner companies and 95% placement rate, we ensure you get the right opportunity.",
      },
      {
        question: "I'm already 25+. Is it too late to start ACCA?",
        answer:
          "It's never too late! Many successful ACCA professionals started in their late 20s or 30s. Your work experience actually gives you an advantage in understanding practical concepts. ACCA values experience, and mature students often perform better due to their focused approach and real-world understanding.",
      },
    ],
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const getCategoryColor = (color: string) => {
    const colors = {
      blue: "text-red-600 bg-red-50 border-red-200",
      green: "text-green-600 bg-green-50 border-green-200",
      purple: "text-purple-600 bg-purple-50 border-purple-200",
      orange: "text-orange-600 bg-orange-50 border-orange-200",
      red: "text-red-600 bg-red-50 border-red-200",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-8 md:py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <QuestionMarkCircleIcon className="w-8 h-8 md:w-12 md:h-12 text-red-600 mr-4" />
            <h2 className="text-xl md:text-5xl font-bold text-gray-900">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">
                Questions
              </span>
            </h2>
          </div>
          <p className="text-md md:text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to all your ACCA-related questions and clear your doubts
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
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
                    : "text-gray-600 bg-white border-gray-200 hover:border-gray-300"
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
            {faqData[activeCategory as keyof typeof faqData].map(
              (faq, index) => (
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
                    <h3 className="text-md md:text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDownIcon className="w-4 h-4 md:w-6 md:h-6 text-gray-500 flex-shrink-0" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="text-sm md:text-lg px-6 pb-6 text-gray-700 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-red-600  rounded-3xl p-4 md:p-12 text-white">
            <ChatBubbleLeftRightIcon className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 text-red-200" />
            <h3 className="text-xl md:text-3xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-red-100 text-md md:text-lg mb-8 max-w-2xl mx-auto">
              Our ACCA experts are here to help! Get personalized answers to all
              your queries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LeadFormButton
                formType="general"
                variant="outline"
                isSendOtp={true}
              >
                {" "}
                Book Free Counsellor
              </LeadFormButton>
            </div>

            <div className="mt-8 text-white text-sm">
              💬 Average response time: Under 2 minutes | 📞 Free consultation
              available
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ACCAFAQ;
