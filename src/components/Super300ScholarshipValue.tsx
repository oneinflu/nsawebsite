/* eslint-disable react-hooks/purity */
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircleIcon, CurrencyDollarIcon, GlobeAltIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import LeadFormButton from './LeadFormButton';

const Super300ScholarshipValue = () => {
  const [counter, setCounter] = useState(0);
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  // Generate stable particle positions
  const particles = useMemo(() => 
    [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2
    })), []
  );

  // Animated counter for ₹30 Crores
  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setCounter(prev => {
          if (prev >= 30) {
            clearInterval(timer);
            return 30;
          }
          return prev + 1;
        });
      }, 100);
      return () => clearInterval(timer);
    }
  }, [isInView]);

  const valueCards = [
    {
      icon: '🎓',
      title: 'Merit-Based Selection',
      description: 'Top 300 students nationwide',
      highlight: 'No randomness'
    },
    {
      icon: '💰',
      title: '₹90,000 Per Student',
      description: 'Direct financial support',
      highlight: 'Full transparency'
    },
    {
      icon: '🌍',
      title: 'Global Certifications',
      description: 'CPA, CMA, ACCA, CFA, CIA',
      highlight: '5+ programs'
    }
  ];

  const timelineSteps = [
    { step: '01', title: 'Apply', date: '1-15 Dec', icon: '📝' },
    { step: '02', title: 'Test', date: '20 Dec', icon: '🧠' },
    { step: '03', title: 'Interview', date: '22-25 Dec', icon: '💬' },
    { step: '04', title: 'Results', date: '2 Jan', icon: '🏆' }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-red-50 via-red-50 to-purple-50 overflow-hidden"
    >
      {/* Background accents (matching hero theme) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-red-300/40 rounded-full"
            style={{ left: `${particle.left}%`, top: `${particle.top}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3], scale: [1, 1.2, 1] }}
            transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                NorthStar Super 30 Scholarship
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">
                  ₹{counter} Crores Scholarship Fund
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
                Merit-based scholarships for CPA US — 30 seats only
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="inline-flex items-center px-4 py-2 bg-red-50 border border-red-200 rounded-full text-red-800 text-sm font-medium">
                  <ShieldCheckIcon className="w-4 h-4 mr-2" /> Examly Official Partner
                </span>
                <span className="inline-flex items-center px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-800 text-sm font-medium">
                  <CheckCircleIcon className="w-4 h-4 mr-2" /> Mentor-Led Learning
                </span>
                <span className="inline-flex items-center px-4 py-2 bg-red-50 border border-red-200 rounded-full text-red-800 text-sm font-medium">
                  <CurrencyDollarIcon className="w-4 h-4 mr-2" /> ₹100K per student
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="flex items-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="p-2 rounded-lg bg-gradient-to-r from-red-500 to-purple-600 mr-3">
                <ShieldCheckIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700">Seats</div>
                <div className="text-lg font-bold text-gray-900">30</div>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="p-2 rounded-lg bg-gradient-to-r from-red-500 to-purple-600 mr-3">
                <CurrencyDollarIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700">Per Student</div>
                <div className="text-lg font-bold text-gray-900">₹100K</div>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="p-2 rounded-lg bg-gradient-to-r from-red-500 to-purple-600 mr-3">
                <GlobeAltIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700">Programs</div>
                <div className="text-lg font-bold text-gray-900">CPA US</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Value Proposition Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {valueCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-red-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="mb-4 text-center"
                >
                  {index === 0 && (<CheckCircleIcon className="w-10 h-10 text-red-600 inline-block" />)}
                  {index === 1 && (<CurrencyDollarIcon className="w-10 h-10 text-red-600 inline-block" />)}
                  {index === 2 && (<GlobeAltIcon className="w-10 h-10 text-red-600 inline-block" />)}
                </motion.div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-slate-800 mb-3 text-center">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-center mb-4">
                  {card.description}
                </p>
                
                {/* Highlight Badge */}
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">
                    {card.highlight}
                  </span>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/10 to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Simplified Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Simple 4-Step Process
          </h3>

          {/* Timeline */}
          <div className="relative">
            {/* Connection Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 2, delay: 1.2 }}
              className="absolute top-12 left-0 h-1 bg-gradient-to-r from-red-500 to-purple-600 rounded-full hidden md:block"
            />

            <div className="grid md:grid-cols-4 gap-8">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                  className="text-center relative"
                >
                  {/* Step Circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <span className="text-3xl">{step.icon}</span>
                  </motion.div>

                  {/* Step Number */}
                  <div className="text-sm font-bold text-red-600 mb-2">
                    STEP {step.step}
                  </div>

                  {/* Step Title */}
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    {step.title}
                  </h4>

                  {/* Step Date */}
                  <p className="text-sm text-slate-600 font-medium">
                    {step.date}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-red-200/50 shadow-xl">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-4xl mb-4"
            >
              🚀
            </motion.div>
            
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Ready to Join India&apos;s Elite 300?
            </h3>
            
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Applications close on 15th December. Don&apos;t miss your chance to be part of this transformative journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LeadFormButton
                formType="general"
                isSendOtp={true}
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center"
              >
                Apply for Super 300
              </LeadFormButton>
              <motion.button
                whileHover={{ scale: 1.02 }}
                type="button"
                className="px-8 py-4 border-2 border-red-500 text-red-600 font-semibold rounded-xl hover:bg-red-50 transition-all duration-300"
              >
                Download Brochure
              </motion.button>
            </div>

            {/* Trust Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 2 }}
              className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-600"
            >
              <span>🔒</span>
              <span>Secure Application Process</span>
              <span>•</span>
              <span>⏱️</span>
              <span>5 Minutes to Apply</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Super300ScholarshipValue;