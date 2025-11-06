'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  ChevronDownIcon,
  
  BookOpenIcon,
 
  ChartBarIcon,
  DocumentArrowDownIcon,
  
  BriefcaseIcon,
  TrophyIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

interface CFALevel {
  id: string;
  level: string;
  focus: string;
  outcome: string;
  duration: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  topics: string[];
  keySkills: string[];
  examDetails: {
    format: string;
    questions: string;
    passingScore: string;
    studyHours: string;
  };
}

const cfaLevels: CFALevel[] = [
  {
    id: 'level-1',
    level: 'Level I',
    focus: 'Investment tools, ethics, basics',
    outcome: 'Analytical foundation',
    duration: '6–8 months',
    icon: BookOpenIcon,
    color: 'from-red-500 to-indigo-500',
    bgColor: 'from-red-50 to-indigo-50',
    topics: [
      'Ethical and Professional Standards',
      'Quantitative Methods',
      'Economics',
      'Financial Statement Analysis',
      'Corporate Issuers',
      'Equity Investments',
      'Fixed Income',
      'Derivatives',
      'Alternative Investments',
      'Portfolio Management'
    ],
    keySkills: [
      'Financial statement analysis',
      'Investment valuation basics',
      'Risk and return concepts',
      'Professional ethics'
    ],
    examDetails: {
      format: 'Computer-based testing',
      questions: '180 multiple choice',
      passingScore: '~70% (MPS varies)',
      studyHours: '300+ hours recommended'
    }
  },
  {
    id: 'level-2',
    level: 'Level II',
    focus: 'Valuation, financial modeling, portfolio',
    outcome: 'Advanced analysis',
    duration: '8–10 months',
    icon: ChartBarIcon,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50',
    topics: [
      'Ethical and Professional Standards',
      'Quantitative Methods',
      'Economics',
      'Financial Statement Analysis',
      'Corporate Issuers',
      'Equity Investments',
      'Fixed Income',
      'Derivatives',
      'Alternative Investments',
      'Portfolio Management'
    ],
    keySkills: [
      'Advanced valuation techniques',
      'Financial modeling',
      'Asset allocation strategies',
      'Risk management'
    ],
    examDetails: {
      format: 'Computer-based testing',
      questions: '88 item sets (4-6 questions each)',
      passingScore: '~70% (MPS varies)',
      studyHours: '350+ hours recommended'
    }
  },
  {
    id: 'level-3',
    level: 'Level III',
    focus: 'Portfolio management, strategy, client relations',
    outcome: 'Global professional',
    duration: '10–12 months',
    icon: TrophyIcon,
    color: 'from-orange-500 to-red-500',
    bgColor: 'from-orange-50 to-red-50',
    topics: [
      'Behavioral Finance',
      'Private Wealth Management',
      'Institutional Portfolio Management',
      'Capital Market Expectations',
      'Asset Allocation',
      'Fixed Income Portfolio Management',
      'Equity Portfolio Management',
      'Alternative Investments for Portfolio Management',
      'Risk Management',
      'Trading, Performance Evaluation, and Manager Selection'
    ],
    keySkills: [
      'Portfolio construction',
      'Client relationship management',
      'Strategic asset allocation',
      'Performance evaluation'
    ],
    examDetails: {
      format: 'Computer-based testing',
      questions: 'Essay + item sets',
      passingScore: '~70% (MPS varies)',
      studyHours: '400+ hours recommended'
    }
  }
];

export default function CFAProgramStructure() {
  const [isClient, setIsClient] = useState(false);
  const [activeLevel, setActiveLevel] = useState<string | null>(null);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsClient(true), 100);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const levelVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1
    }
  };

  if (!isClient) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-50 via-red-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              CFA Program Structure
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Simplified Visualization — Your 3-Part Journey to Global Finance Excellence
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-red-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              CFA Program Structure
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
                  Simplified Visualization — Your 3-Part Journey to Global Finance Excellence
                </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          {/* 3-Level Timeline Grid */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid lg:grid-cols-3 gap-8">
              {cfaLevels.map((level, index) => (
                <motion.div
                  key={level.id}
                  variants={levelVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative"
                >
                  {/* Connection Line (Desktop) */}
                  {index < cfaLevels.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-red-300 to-purple-300 z-10" />
                  )}
                  
                  <div className={`bg-gradient-to-br ${level.bgColor} rounded-2xl p-8 border border-white/50 shadow-lg backdrop-blur-sm h-full`}>
                    {/* Level Header */}
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${level.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                        {React.createElement(level.icon, {
                          className: "w-8 h-8 text-white"
                        })}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{level.level}</h3>
                      <div className="text-sm font-medium text-slate-600 bg-white/70 rounded-full px-3 py-1 inline-block">
                        {level.duration}
                      </div>
                    </div>

                    {/* Level Details */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Focus</h4>
                        <p className="text-slate-600 text-sm">{level.focus}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Outcome</h4>
                        <p className="text-slate-600 text-sm">{level.outcome}</p>
                      </div>

                      {/* Expandable Topics */}
                      <button
                        onClick={() => setActiveLevel(activeLevel === level.id ? null : level.id)}
                        className="w-full bg-white/70 hover:bg-white/90 rounded-lg p-3 flex items-center justify-between transition-all duration-200 group"
                      >
                        <span className="font-medium text-slate-800">Topics you&apos;ll master</span>
                        <motion.div
                          animate={{ rotate: activeLevel === level.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDownIcon className="w-5 h-5 text-slate-600 group-hover:text-slate-800" />
                        </motion.div>
                      </button>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  {activeLevel === level.id && (
                    <div className="mt-4 animate-in slide-in-from-top-2 duration-300">
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Topics */}
                            <div>
                              <h5 className="font-bold text-slate-900 mb-3 flex items-center">
                                <BookOpenIcon className="w-5 h-5 mr-2 text-red-500" />
                                Key Topics
                              </h5>
                              <ul className="space-y-2">
                                {level.topics.map((topic, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <CheckCircleIcon className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                    <span className="text-slate-700 text-sm">{topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Skills & Exam Details */}
                            <div className="space-y-4">
                              <div>
                                <h5 className="font-bold text-slate-900 mb-3 flex items-center">
                                  <BriefcaseIcon className="w-5 h-5 mr-2 text-purple-500" />
                                  Key Skills
                                </h5>
                                <ul className="space-y-2">
                                  {level.keySkills.map((skill, idx) => (
                                    <li key={idx} className="flex items-start">
                                      <ArrowRightIcon className="w-4 h-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                                      <span className="text-slate-700 text-sm">{skill}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="bg-slate-50 rounded-lg p-4">
                                <h5 className="font-bold text-slate-900 mb-3">Exam Details</h5>
                                <div className="space-y-2 text-sm">
                                  <div><strong>Format:</strong> {level.examDetails.format}</div>
                                  <div><strong>Questions:</strong> {level.examDetails.questions}</div>
                                  <div><strong>Study Hours:</strong> {level.examDetails.studyHours}</div>
                                  <div><strong>Passing Score:</strong> {level.examDetails.passingScore}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Download CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Get Complete CFA Syllabus Guide
                </h3>
                <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
                  Download detailed syllabus with study schedules, exam strategies, and career roadmaps for all three levels
                </p>
                <motion.button
                  onClick={() => setShowDownloadModal(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-red-600 font-bold py-4 px-8 rounded-xl hover:bg-red-50 transition-all duration-200 flex items-center gap-3 mx-auto shadow-lg"
                >
                  <DocumentArrowDownIcon className="w-6 h-6" />
                  Download Full CFA Syllabus (PDF)
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Download Modal */}
      <AnimatePresence>
        {showDownloadModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowDownloadModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Download CFA Syllabus</h3>
              <p className="text-slate-600 mb-6">Get instant access to the complete CFA program guide</p>
              
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:from-red-700 hover:to-purple-700 transition-all duration-200"
                >
                  Download Now
                </button>
              </form>
              
              <button
                onClick={() => setShowDownloadModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}