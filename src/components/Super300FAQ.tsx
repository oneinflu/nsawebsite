'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const faqData = [
  {
    question: "Who can apply for the Super 300 Scholarship?",
    answer: "Students, graduates, and professionals aged 18–30 with commerce or related backgrounds are eligible to apply."
  },
  {
    question: "Is there any fee to apply?",
    answer: "No. Application and test are completely free. There are no hidden charges or application fees."
  },
  {
    question: "How much scholarship will I get?",
    answer: "Up to ₹90,000 applied directly toward your chosen global course (CMA, CPA, ACCA, CFA, CIA)."
  },
  {
    question: "What if I'm not selected?",
    answer: "You'll still receive a special NorthStar merit discount and counselling session to help you with your career goals."
  },
  {
    question: "Can working professionals apply?",
    answer: "Yes. Up to 5 years of experience in accounting, finance, or audit roles are eligible to apply."
  },
  {
    question: "When are the results announced?",
    answer: "Final list of 300 scholars is released on 2 January 2026."
  },
  {
    question: "How will I be informed?",
    answer: "Email + WhatsApp notifications are sent to all applicants with their selection status."
  },
  {
    question: "Is the selection fair?",
    answer: "100%. Based on test + interview scores, verified by mentors with complete transparency."
  },
  {
    question: "Does the scholarship cover full course fees?",
    answer: "It covers up to ₹90,000, which includes mentorship, course access & placement preparation."
  },
  {
    question: "Can international students apply?",
    answer: "Currently open to Indian citizens only."
  }
];

const trustBadges = [
  { icon: "🧠", label: "Mentor-Led Learning" },
  { icon: "🛡️", label: "100% Transparent Process" },
  { icon: "🕒", label: "Limited Time Opportunity" },
  { icon: "🎓", label: "55,000+ Students Trained" }
];

export default function Super300FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-white to-amber-50/30 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-amber-200/20 to-yellow-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked{' '}
            <span className="relative inline-block">
              Questions
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 origin-left"
              ></motion.div>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            100% transparent answers to help you make the right decision.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 px-2 text-left flex justify-between items-center hover:bg-gray-50/50 transition-colors duration-200 group"
              >
                <span className="text-lg md:text-xl font-semibold text-gray-900 pr-4 group-hover:text-amber-600 transition-colors duration-200">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openFAQ === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-light text-amber-500 flex-shrink-0"
                >
                  +
                </motion.span>
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
                    <div className="pb-6 px-2 border-l-2 border-amber-400 pl-4 ml-2">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* WhatsApp Reassurance Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-20"
        >
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Chat with our mentors instantly on WhatsApp.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold border-2 border-amber-400 hover:border-amber-500 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              🟢 Chat Now →
            </button>
          </div>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center relative"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-200/20 via-yellow-200/20 to-amber-200/20 rounded-3xl blur-xl"></div>
          
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-amber-100 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Secure Your Spot in the Super 300?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              This is your once-in-a-year opportunity — 300 students. ₹30 Crores. Real mentorship. Global careers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                🟡 Apply for Super 300 — Free →
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 hover:border-amber-400 text-gray-700 hover:text-amber-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200"
              >
                ⚪ Check Eligibility (30 Sec) →
              </motion.button>
            </div>
            
            <p className="text-sm text-gray-500">
              Applications close on 15 December 2025 · No application fee · 100% verified scholarship
            </p>
          </div>
        </motion.div>

        {/* Trust Badges Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-center p-4 rounded-xl hover:bg-amber-50 transition-all duration-200 cursor-pointer group"
              >
                <div className="text-3xl mb-2 grayscale group-hover:grayscale-0 transition-all duration-200">
                  {badge.icon}
                </div>
                <p className="text-sm font-medium text-gray-600 group-hover:text-amber-600 transition-colors duration-200">
                  {badge.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mobile Sticky CTA Bar */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-amber-400 to-yellow-500 p-4 shadow-2xl z-50 md:hidden"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white font-bold text-sm">⏳ ₹90,000 Scholarship</p>
            <p className="text-amber-100 text-xs">Limited Time Opportunity</p>
          </div>
          <button className="bg-white text-amber-600 px-6 py-2 rounded-full font-bold text-sm hover:bg-amber-50 transition-colors duration-200">
            Apply Now (Free)
          </button>
        </div>
      </motion.div>
    </section>
  );
}