'use client';

import { motion } from 'framer-motion';
import {
  GlobeAltIcon,
  BuildingOfficeIcon,
  ClockIcon,
  CheckCircleIcon,

  DocumentCheckIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import LeadFormButton from '../LeadFormButton';

const ACCAHero = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const credibilityBadges = [
    {
      icon: CheckCircleIcon,
      text: "ACCA Global Qualification",
      color: "from-red-500 to-red-600"
    },
    {
      icon: GlobeAltIcon,
      text: "150+ Countries",
      color: "from-green-500 to-green-600"
    },
    {
      icon: BuildingOfficeIcon,
      text: "Big 4 & MNC Careers",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: ClockIcon,
      text: "3–7 Years Journey (Flexible)",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const accaLevels = [
    {
      level: "Knowledge",
      description: "Foundation papers covering business fundamentals",
      papers: ["BT", "MA", "FA"],
      color: "from-red-400 to-red-600",
      position: "top"
    },
    {
      level: "Skills",
      description: "Advanced technical skills in core areas",
      papers: ["LW", "PM", "TX", "FR", "AA", "FM"],
      color: "from-purple-400 to-purple-600",
      position: "middle"
    },
    {
      level: "Strategic",
      description: "Strategic thinking and leadership skills",
      papers: ["SBL", "SBR", "Options"],
      color: "from-green-400 to-green-600",
      position: "bottom"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };



  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-50 via-red-50 to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Headline */}
            <motion.div className="space-y-4 text-center md:text-left">
              <h1 className="text-3xl  md:text-6xl font-bold text-gray-900 leading-tight">
                Become a Globally Recognized{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">
                  Chartered Accountant
                </span>
                <br />
                <span className="text-xl md:text-3xl text-red-600 font-medium">(ACCA – UK)</span>
              </h1>
              <p className="text-md md:text-2xl text-gray-600 leading-relaxed">
                Flexible journey with worldwide career opportunities in finance, audit, taxation & consulting.
              </p>
            </motion.div>

            {/* Credibility Badges */}
            <motion.div className="grid grid-cols-2 gap-2 md:gap-4">
              {credibilityBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center bg-white rounded-xl p-2 md:p-4 shadow-lg border border-gray-100"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${badge.color} flex items-center justify-center mr-3`}>
                    <badge.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-800 text-xs md:text-sm">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Primary CTA */}
                <LeadFormButton formType='general' variant='primary' isSendOtp={true} >
                  Book Free Counselling
                </LeadFormButton>

                {/* Secondary CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('exemptions');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    } else {
                      window.location.hash = 'exemptions';
                    }
                  }}
                  className="bg-white text-red-600 border-2 border-red-600 md:px-8 py-2 md:py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-all duration-300 flex items-center justify-center"
                >
                  <DocumentCheckIcon className="w-6 h-6 mr-3" />
                  Check Exemptions
                </motion.button>
              </div>

              {/* Tertiary CTA */}

            </motion.div>

            {/* Trust Indicators */}
            <motion.div className="flex items-center space-x-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-red-400 to-purple-500 border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold">A</span>
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <div className="font-bold text-gray-900">2,500+ Students</div>
                <div>Successfully qualified globally</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - ACCA Levels Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative h-[600px] flex flex-col justify-center space-y-6">
              {accaLevels.map((level, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className={`relative bg-white rounded-2xl p-6 shadow-xl border border-gray-100 transform transition-all duration-300 ${hoveredCard === index ? 'scale-105 shadow-2xl' : ''
                    } ${index === 1 ? 'ml-8' : index === 2 ? 'ml-16' : ''
                    }`}
                >
                  {/* Animated Highlight */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${level.color} opacity-0 transition-opacity duration-300`}
                    animate={{ opacity: hoveredCard === index ? 0.1 : 0 }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r ${level.color} flex items-center justify-center mr-4`}>
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900">{level.level}</h3>
                        <p className="text-sm text-gray-600">Level {index + 1}</p>
                      </div>
                    </div>

                    <p className="text-sm md:text-lg text-gray-700 mb-4">{level.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {level.papers.map((paper, paperIndex) => (
                        <span
                          key={paperIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {paper}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Connection Lines */}
                  {index < accaLevels.length - 1 && (
                    <motion.div
                      className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-gray-300 to-transparent"
                      animate={{ height: hoveredCard === index ? 8 : 6 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg"
            >
              <CheckCircleIcon className="w-6 h-6 text-white" />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute bottom-10 -left-4 bg-green-400 rounded-full p-3 shadow-lg"
            >
              <GlobeAltIcon className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default ACCAHero;