'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon,
 
  CheckCircleIcon,
  PlayIcon,
  PhoneIcon,
  DocumentArrowDownIcon,
  ChartBarIcon,
  TrophyIcon,
  GlobeAltIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import LeadFormButton from '../LeadFormButton';

const CFAHero = () => {
  const [isClient, setIsClient] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);

  useEffect(() => {
    // Animate through CFA levels
    const interval = setInterval(() => {
      setCurrentLevel((prev) => (prev + 1) % 4); // 0: Start, 1: Level I, 2: Level II, 3: Level III, then back to 0
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Handle client-side hydration
  useEffect(() => {
    const timer = setTimeout(() => setIsClient(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const credibilityBadges = [
    {
      icon: ShieldCheckIcon,
      text: "CFA Institute (USA)",
      color: "from-red-600 to-red-700"
    },
    {
      icon: TrophyIcon,
      text: "3 Exam Levels (Level I, II, III)",
      color: "from-green-600 to-green-700"
    },
    {
      icon: GlobeAltIcon,
      text: "Global Recognition (165+ countries)",
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: CurrencyDollarIcon,
      text: "High ROI (₹15–60 LPA average salaries)",
      color: "from-amber-600 to-amber-700"
    }
  ];

  const cfaLevels = [
    { level: "Level I", focus: "Investment Tools", color: "from-red-500 to-red-600" },
    { level: "Level II", focus: "Asset Valuation", color: "from-green-500 to-green-600" },
    { level: "Level III", focus: "Portfolio Management", color: "from-purple-500 to-purple-600" },
    { level: "Charterholder", focus: "Global Recognition", color: "from-amber-500 to-amber-600" }
  ];

  const topHiringCompanies = [
    "Goldman Sachs", "JP Morgan", "BlackRock", "Deloitte", "EY"
  ];

  const salaryProgression = [
    { role: "Investment Analyst", salary: "₹15-25 LPA", level: 1 },
    { role: "Portfolio Manager", salary: "₹35-50 LPA", level: 2 },
    { role: "Investment Director", salary: "₹60+ LPA", level: 3 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  // Fallback for non-client rendering
  if (!isClient) {
    return (
      <section className="relative min-h-screen bg-gradient-to-br from-red-50 via-purple-50 to-amber-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Become a Chartered Financial Analyst{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">
                    (CFA – USA)
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                  The Gold Standard in Investment & Portfolio Management
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  3 Levels. One Global Charter. Transform your career in finance, research, and investment banking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-50 via-purple-50 to-amber-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
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
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Become a Chartered Financial Analyst{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">
                  (CFA – USA)
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                The Gold Standard in Investment & Portfolio Management
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                3 Levels. One Global Charter. Transform your career in finance, research, and investment banking.
              </p>
            </motion.div>

            {/* Credibility Badges */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {credibilityBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center p-4 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${badge.color} mr-3`}>
                    <badge.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="space-y-4">
              {/* Primary CTA */}
             <LeadFormButton formType='general' variant='primary' isSendOtp={true}>
                Book Free Counselling
              </LeadFormButton>

              {/* Secondary CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <LeadFormButton formType='download-syllabus' variant='secondary' isSendOtp={true}>
                  Download CFA Roadmap
               </LeadFormButton>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="text-gray-600 hover:text-red-600 font-medium flex items-center justify-center transition-colors duration-300"
                >
                  <PlayIcon className="w-5 h-5 mr-2" />
                  Watch Success Stories
                </motion.button>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="flex items-center space-x-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-red-400 to-purple-500 border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold">C</span>
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <div className="font-bold text-gray-900">2,500+ Students</div>
                <div>Successfully certified globally</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Progression Visual */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* CFA Progression Animation */}
            <motion.div
              variants={itemVariants}
              className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrophyIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">CFA Charter Journey</h3>
                <p className="text-gray-600">Your path to global recognition</p>
              </div>

              {/* Animated Level Progression */}
              <div className="space-y-4 mb-8">
                {cfaLevels.map((level, index) => (
                  <motion.div
                    key={index}
                    className={`p-4 rounded-xl border-2 transition-all duration-500 ${
                      currentLevel === index 
                        ? 'border-red-500 bg-red-50 shadow-lg' 
                        : currentLevel > index 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-200 bg-white'
                    }`}
                    animate={{
                      scale: currentLevel === index ? 1.05 : 1,
                      opacity: currentLevel >= index ? 1 : 0.6
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-gray-900">{level.level}</div>
                        <div className="text-sm text-gray-600">{level.focus}</div>
                      </div>
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${level.color} flex items-center justify-center`}>
                        {currentLevel > index ? (
                          <CheckCircleIcon className="w-5 h-5 text-white" />
                        ) : (
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Salary Trajectory */}
              <div className="bg-gradient-to-r from-red-50 to-purple-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <ChartBarIcon className="w-6 h-6 text-red-600 mr-2" />
                  <h4 className="font-bold text-gray-900">Salary Trajectory</h4>
                </div>
                <div className="space-y-3">
                  {salaryProgression.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">{item.role}</span>
                      <span className="font-bold text-red-600">{item.salary}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Company Logos */}
            <div className="absolute -top-4 -right-4 space-y-2">
              {topHiringCompanies.slice(0, 3).map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.2 }}
                  className="bg-white px-3 py-2 rounded-lg shadow-lg text-xs font-medium text-gray-700 border border-gray-200"
                >
                  {company}
                </motion.div>
              ))}
            </div>

            <div className="absolute -bottom-4 -left-4 space-y-2">
              {topHiringCompanies.slice(3).map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 + index * 0.2 }}
                  className="bg-white px-3 py-2 rounded-lg shadow-lg text-xs font-medium text-gray-700 border border-gray-200"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CFAHero;