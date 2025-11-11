'use client';

import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import LeadFormButton from './LeadFormButton';

const EligibilityApply = () => {
  const [, setUnderlineWidth] = useState(0);
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setUnderlineWidth(100), 300);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const credibilityBadges = [
    { icon: '✅', text: 'Merit-based Selection', color: 'from-red-500 to-purple-600' },
    { icon: '🆓', text: 'Free Scholarship Test', color: 'from-red-500 to-purple-600' },
    { icon: '🔍', text: 'Transparent Process', color: 'from-red-500 to-purple-600' }
  ];

  const eligibilityCards = [
    {
      icon: '🎓',
      category: 'Students',
      criteria: 'Final-year or recently graduated in B.Com, BBA, or MBA'
    },
    {
      icon: '💼',
      category: 'Working Professionals',
      criteria: '0–5 years experience in finance, accounting, or audit'
    },
    {
      icon: '🧭',
      category: 'Career Switchers',
      criteria: 'Non-commerce background but interested in finance (short aptitude test required)'
    }
  ];

  const applicationSteps = [
    {
      number: 1,
      title: 'Register Online',
      description: 'Fill out quick 2-min form',
      subtext: 'Choose your preferred course (CMA, CPA, ACCA, CFA, CIA)',
      icon: '📝'
    },
    {
      number: 2,
      title: 'Scholarship Test',
      description: 'Short aptitude + logical + finance basics',
      subtext: 'Conducted online, free of charge',
      icon: '📊'
    },
    {
      number: 3,
      title: 'Personal Interview',
      description: 'With NorthStar mentors',
      subtext: 'Merit + attitude-based selection',
      icon: '🤝'
    }
  ];

  const additionalRequirements = [
    'Age: 18–30 years',
    'Minimum 60% marks (last qualification)',
    'Valid Indian ID (Aadhaar / PAN)',
    'Open for both online and classroom batches'
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-red-50 via-purple-50 to-red-50 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute top-24 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Headline and Badges */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-purple-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-2">
              Eligibility & Selection
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Become a Super 30 Scholar
              <span className="block text-2xl md:text-3xl text-red-600 font-medium mt-2">30 Students. ₹100K Scholarship Each.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600 mt-2">Merit-based • Transparent • Fast</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Designed for ambitious learners — students, graduates, and professionals aiming for global finance careers with NorthStar Academy.
            </p>

            {/* Credibility Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              {credibilityBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center p-3 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${badge.color} mr-3 text-white`}>{badge.icon}</div>
                  <span className="text-sm font-medium text-gray-700">{badge.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <LeadFormButton formType="general" isSendOtp={true} variant="primary" className="px-8 py-4">
                Apply Now (Free)
              </LeadFormButton>
              <LeadFormButton formType="general" isSendOtp={true} variant="outline" className="px-8 py-4">
                Check Eligibility →
              </LeadFormButton>
            </div>
          </motion.div>

          {/* Right: Animated Selection Journey Card */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900">Selection Journey</h3>
                <p className="text-gray-600">3 quick steps to get selected</p>
              </div>

              {/* Timeline inside card */}
              <div className="relative">
                <motion.div
                  className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-red-500 to-purple-600"
                  initial={{ height: 0 }}
                  animate={isInView ? { height: '85%' } : {}}
                  transition={{ duration: 1.2, delay: 0.6 }}
                />

                <div className="space-y-6">
                  {applicationSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                      className="relative flex items-start group"
                      whileHover={{ y: -2 }}
                    >
                      <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-600 to-purple-600 text-white font-bold rounded-full shadow-lg">
                        {step.number}
                      </div>
                      <div className="ml-6 flex-1 p-4 rounded-xl border border-gray-100 bg-white shadow-sm group-hover:shadow-md transition">
                        <div className="flex items-center mb-1">
                          <span className="text-2xl mr-3">{step.icon}</span>
                          <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                        </div>
                        <p className="text-gray-700 text-sm font-medium">{step.description}</p>
                        <p className="text-gray-600 text-xs">{step.subtext}</p>
                      </div>

                      {index === applicationSteps.length - 1 && (
                        <motion.div
                          className="absolute -top-1 -right-1"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.5, delay: 1.2 }}
                        >
                          <div className="text-xl">✨</div>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Profiles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-20"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-900 mb-6">
            Who Can Apply
          </motion.h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {eligibilityCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all"
                whileHover={{ y: -4 }}
              >
                <div className="text-3xl mb-3">{card.icon}</div>
                <div className="text-lg font-semibold text-gray-900">{card.category}</div>
                <p className="text-gray-600 text-sm mt-2">{card.criteria}</p>
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.0), rgba(255,255,255,0.3))' }}
                />
              </motion.div>
            ))}
          </div>

          {/* Additional Requirements */}
          <motion.div
            variants={itemVariants}
            className="mt-8 bg-gradient-to-r from-red-50 to-purple-50 rounded-xl p-6 border border-red-200"
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Additional Requirements</h4>
            <ul className="space-y-2">
              {additionalRequirements.map((req, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Info Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 p-4 bg-white rounded-lg border border-gray-200"
        >
          <p className="text-center text-gray-700 font-medium mb-2">
            Transparent · Merit-Based · No Upfront Fees
          </p>
          <p className="text-center text-gray-600 text-sm">
            Applicants are evaluated on aptitude, clarity, and career vision.
          </p>
          <div className="mt-3 p-3 bg-red-50 rounded-lg border border-red-200">
            <p className="text-xs text-gray-700 text-center">
              💡 The scholarship covers training fees up to ₹1,00,000. No monetary payout; applied directly to program fee.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EligibilityApply;