'use client';

import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const EligibilityApply = () => {
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setUnderlineWidth(100), 300);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

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
      className="relative py-20 bg-white overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(255, 215, 0, 0.02) 0%, rgba(255, 255, 255, 1) 20%)'
      }}
    >
      {/* Section Title */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 relative inline-block">
            Are You Eligible for the Super 300?
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600"
              style={{ width: `${underlineWidth}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Designed to include ambitious learners from every background — students, graduates, and professionals aiming for global finance careers.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Eligibility Criteria */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Eligibility Criteria</h3>
            
            <div className="space-y-6 mb-8">
              {eligibilityCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{card.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{card.category}</h4>
                      <p className="text-gray-600 leading-relaxed">{card.criteria}</p>
                    </div>
                  </div>
                  
                  {/* Hover animation line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Additional Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Additional Requirements</h4>
              <ul className="space-y-2">
                {additionalRequirements.map((req, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 flex-shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column - How to Apply */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">The 3-Step Selection Process</h3>
            
            <div className="relative">
              {/* Timeline connector line */}
              <motion.div
                className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-yellow-400 to-yellow-600"
                initial={{ height: 0 }}
                animate={isInView ? { height: '80%' } : {}}
                transition={{ duration: 1.2, delay: 0.8 }}
              />

              <div className="space-y-8">
                {applicationSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                    className="relative flex items-start"
                  >
                    {/* Step number circle */}
                    <motion.div
                      className="relative z-10 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold rounded-full shadow-lg"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
                    >
                      {step.number}
                    </motion.div>

                    {/* Step content */}
                    <div className="ml-6 flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">{step.icon}</span>
                        <h4 className="text-xl font-semibold text-gray-900">{step.title}</h4>
                      </div>
                      <p className="text-gray-700 font-medium mb-1">{step.description}</p>
                      <p className="text-gray-600 text-sm">{step.subtext}</p>
                    </div>

                    {/* Confetti animation for last step */}
                    {index === applicationSteps.length - 1 && (
                      <motion.div
                        className="absolute -top-2 -right-2"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1.4 }}
                      >
                        <div className="text-2xl">✨</div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Microcopy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200"
            >
              <p className="text-center text-gray-700 font-medium mb-2">
                Transparent · Merit-Based · No Upfront Fees
              </p>
              <p className="text-center text-gray-600 text-sm">
                Applicants are evaluated on aptitude, clarity, and career vision.
              </p>
              
              {/* Tooltip */}
              <div className="mt-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-xs text-gray-700 text-center">
                  💡 The scholarship covers training fees up to ₹90,000. No monetary payout; applied directly to program fee.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Visual Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-12"
        />

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-gray-50 rounded-2xl p-8 border-t-2 border-yellow-400"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h4 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center lg:justify-start">
                <span className="mr-3">🎯</span>
                Think you qualify? Let&apos;s find out.
              </h4>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 border-2 border-yellow-500 text-yellow-600 font-semibold rounded-xl hover:bg-yellow-50 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Check Eligibility →</span>
                <motion.div
                  className="absolute inset-0 border-2 border-yellow-500 rounded-xl"
                  initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
                  whileHover={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Apply Now (Free)</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-700"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Support Visual - Celebration Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute top-20 right-10 hidden lg:block"
      >
        <div className="w-32 h-32 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center">
          <span className="text-4xl">🎉</span>
        </div>
      </motion.div>

      {/* Certificate Watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.05 } : {}}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-10 hidden lg:block"
      >
        <div className="w-24 h-24 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg flex items-center justify-center">
          <span className="text-3xl">🏆</span>
        </div>
      </motion.div>
    </section>
  );
};

export default EligibilityApply;