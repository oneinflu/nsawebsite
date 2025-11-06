'use client';

import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  DollarSign, 
  Clock, 
  BookOpen, 
  TrendingUp, 
  Award, 
 
  Target,
 
  X,
  ArrowRight,
  
  Briefcase,
 
  Building
} from 'lucide-react';

const CPAComparison = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [quizResult, setQuizResult] = useState<string | null>(null);

  // Comparison data with SEO-optimized content
  const certifications = {
    CPA: {
      name: 'CPA (Certified Public Accountant)',
      fullName: 'Certified Public Accountant',
      color: 'from-red-600 to-red-700',
      bgColor: 'from-red-50 to-red-100',
      logo: '🇺🇸',
      winner: true
    },
    CMA: {
      name: 'CMA (Certified Management Accountant)',
      fullName: 'Certified Management Accountant',
      color: 'from-green-600 to-green-700',
      bgColor: 'from-green-50 to-green-100',
      logo: '📊',
      winner: false
    },
    ACCA: {
      name: 'ACCA (Association of Chartered Certified Accountants)',
      fullName: 'Association of Chartered Certified Accountants',
      color: 'from-purple-600 to-purple-700',
      bgColor: 'from-purple-50 to-purple-100',
      logo: '🇬🇧',
      winner: false
    }
  };

  // Decision helper categories with scoring
  const comparisonCategories = [
    {
      category: 'Global Recognition',
      icon: Globe,
      description: 'International acceptance and recognition',
      scores: { CPA: 9, CMA: 7, ACCA: 8 },
      details: {
        CPA: 'Globally recognized, especially in US and multinational companies',
        CMA: 'Strong in management accounting, growing international presence',
        ACCA: 'Widely recognized in UK, Europe, and Commonwealth countries'
      }
    },
    {
      category: 'Salary Potential',
      icon: DollarSign,
      description: 'Average salary and earning potential',
      scores: { CPA: 10, CMA: 7, ACCA: 8 },
      details: {
        CPA: '$85,000 - $150,000+ (Big 4: $120,000+)',
        CMA: '$65,000 - $120,000 (Management roles)',
        ACCA: '$55,000 - $110,000 (Varies by region)'
      }
    },
    {
      category: 'Exam Difficulty',
      icon: BookOpen,
      description: 'Complexity and pass rates',
      scores: { CPA: 6, CMA: 8, ACCA: 7 },
      details: {
        CPA: 'Challenging but focused (4 sections, 50% pass rate)',
        CMA: 'Moderate difficulty (2 parts, 65% pass rate)',
        ACCA: 'Long journey (13 papers, varies by paper)'
      }
    },
    {
      category: 'Time to Complete',
      icon: Clock,
      description: 'Average time to certification',
      scores: { CPA: 8, CMA: 9, ACCA: 5 },
      details: {
        CPA: '6-18 months (with proper preparation)',
        CMA: '6-12 months (2 parts)',
        ACCA: '2-4 years (13 papers, exemptions possible)'
      }
    },
    {
      category: 'Career Opportunities',
      icon: Briefcase,
      description: 'Job market and career paths',
      scores: { CPA: 10, CMA: 8, ACCA: 7 },
      details: {
        CPA: 'Public accounting, audit, tax, consulting, corporate finance',
        CMA: 'Management accounting, financial planning, corporate strategy',
        ACCA: 'Audit, taxation, financial management, consulting'
      }
    },
    {
      category: 'Industry Demand',
      icon: TrendingUp,
      description: 'Market demand and job availability',
      scores: { CPA: 10, CMA: 7, ACCA: 8 },
      details: {
        CPA: 'High demand across all industries, especially Big 4',
        CMA: 'Growing demand in corporate and manufacturing sectors',
        ACCA: 'Strong demand in UK/Europe, growing in Asia-Pacific'
      }
    },
    {
      category: 'Licensing Authority',
      icon: Award,
      description: 'Regulatory body and credibility',
      scores: { CPA: 10, CMA: 8, ACCA: 9 },
      details: {
        CPA: 'State boards (NASBA) - highest regulatory standard',
        CMA: 'Institute of Management Accountants (IMA)',
        ACCA: 'Association of Chartered Certified Accountants'
      }
    },
    {
      category: 'Big 4 Preference',
      icon: Building,
      description: 'Preference by top accounting firms',
      scores: { CPA: 10, CMA: 6, ACCA: 7 },
      details: {
        CPA: 'Strongly preferred by Deloitte, EY, PwC, KPMG',
        CMA: 'Valued for management consulting roles',
        ACCA: 'Recognized but CPA preferred for US operations'
      }
    }
  ];

  // Quiz questions for personalized recommendation
  const quizQuestions = [
    {
      question: "What's your primary career goal?",
      options: [
        { text: "Work at Big 4 accounting firms", value: "CPA" },
        { text: "Corporate management and strategy", value: "CMA" },
        { text: "International accounting career", value: "ACCA" },
        { text: "Public accounting and audit", value: "CPA" }
      ]
    },
    {
      question: "Where do you plan to work primarily?",
      options: [
        { text: "United States", value: "CPA" },
        { text: "Corporate sector globally", value: "CMA" },
        { text: "UK/Europe/Commonwealth", value: "ACCA" },
        { text: "Multinational companies", value: "CPA" }
      ]
    },
    {
      question: "How much time can you dedicate to studying?",
      options: [
        { text: "6-12 months intensive", value: "CPA" },
        { text: "6-12 months moderate", value: "CMA" },
        { text: "2-4 years part-time", value: "ACCA" },
        { text: "Want fastest route", value: "CMA" }
      ]
    }
  ];

  const handleQuizAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result based on most frequent answer
      const counts = newAnswers.reduce((acc, answer) => {
        acc[answer] = (acc[answer] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);
      
      const result = Object.entries(counts).reduce((a, b) => 
        counts[a[0]] > counts[b[0]] ? a : b
      )[0];
      
      setQuizResult(result);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setQuizResult(null);
    setShowQuiz(false);
  };

  const getScoreColor = (score: number) => {
    if (score >= 9) return 'text-green-600 bg-green-100';
    if (score >= 7) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 9) return '🏆';
    if (score >= 7) return '⭐';
    return '📊';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Target className="w-4 h-4" />
            SEO-Optimized Comparison Guide
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            CPA vs CMA vs ACCA: 
            <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent"> Complete Comparison</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Comprehensive comparison of CPA, CMA, and ACCA certifications. Make an informed decision with our detailed analysis and personalized quiz.
          </motion.p>

          {/* Quick CTA */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowQuiz(true)}
            className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              Help me choose → 30 sec quiz
              <ArrowRight className="w-5 h-5" />
            </div>
          </motion.button>
        </div>

        {/* Winner Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white mb-12"
        >
          <div className="text-center">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold mb-4">CPA: The Clear Winner for 2024</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">$120,000+</div>
                <div className="opacity-90">Average Big 4 Salary</div>
              </div>
              <div>
                <div className="text-3xl font-bold">95%</div>
                <div className="opacity-90">Job Placement Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold">#1</div>
                <div className="opacity-90">Global Recognition</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Decision Helper Tables: Complete Comparison
          </h3>
          
          <div className="overflow-x-auto">
            <div className="min-w-full">
              {/* Header */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="font-bold text-gray-900 text-lg">Categories</div>
                {Object.entries(certifications).map(([key, cert]) => (
                  <div key={key} className={`text-center p-4 rounded-xl bg-gradient-to-r ${cert.bgColor}`}>
                    <div className="text-2xl mb-2">{cert.logo}</div>
                    <div className="font-bold text-gray-900">{key}</div>
                    {cert.winner && (
                      <div className="text-xs bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full mt-2 inline-block">
                        WINNER
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Comparison Rows */}
              <div className="space-y-4">
                {comparisonCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <motion.div
                      key={category.category}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="grid grid-cols-4 gap-4 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{category.category}</div>
                          <div className="text-sm text-gray-600">{category.description}</div>
                        </div>
                      </div>
                      
                      {Object.keys(certifications).map((cert) => (
                        <div key={cert} className="text-center">
                          <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg ${getScoreColor(category.scores[cert as keyof typeof category.scores])}`}>
                            <span>{getScoreIcon(category.scores[cert as keyof typeof category.scores])}</span>
                            <span className="font-bold">{category.scores[cert as keyof typeof category.scores]}/10</span>
                          </div>
                          <div className="text-xs text-gray-600 mt-2">
                            {category.details[cert as keyof typeof category.details]}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Key Differences Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {Object.entries(certifications).map(([key, cert]) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-r ${cert.bgColor} rounded-2xl p-6 relative overflow-hidden`}
            >
              {cert.winner && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                  RECOMMENDED
                </div>
              )}
              
              <div className="text-4xl mb-4">{cert.logo}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{key}</h3>
              <p className="text-gray-700 mb-4">{cert.fullName}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Overall Score:</span>
                  <span className="font-bold">
                    {Math.round(comparisonCategories.reduce((sum, cat) => 
                      sum + cat.scores[key as keyof typeof cat.scores], 0
                    ) / comparisonCategories.length * 10) / 10}/10
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r ${cert.color} h-2 rounded-full transition-all duration-1000`}
                    style={{ 
                      width: `${(comparisonCategories.reduce((sum, cat) => 
                        sum + cat.scores[key as keyof typeof cat.scores], 0
                      ) / comparisonCategories.length) * 10}%` 
                    }}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowQuiz(true)}
            className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-12 py-4 rounded-xl font-semibold text-xl hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <Target className="w-6 h-6" />
              Help me choose → 30 sec quiz
              <ArrowRight className="w-6 h-6" />
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Quiz Modal */}
      <AnimatePresence>
        {showQuiz && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Find Your Perfect Certification
                </h3>
                <button
                  onClick={() => setShowQuiz(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {!quizResult ? (
                <div>
                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                      <span>{Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-red-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">
                      {quizQuestions[currentQuestion].question}
                    </h4>
                    <div className="space-y-3">
                      {quizQuestions[currentQuestion].options.map((option, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleQuizAnswer(option.value)}
                          className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all duration-300"
                        >
                          {option.text}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Your Recommended Certification: {quizResult}
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Based on your answers, {quizResult} is the best fit for your career goals and circumstances.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={resetQuiz}
                      className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300"
                    >
                      Retake Quiz
                    </button>
                    <button
                      onClick={() => setShowQuiz(false)}
                      className="px-6 py-3 bg-gradient-to-r from-red-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      Start {quizResult} Journey
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CPAComparison;