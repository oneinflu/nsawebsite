/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircleIcon,
  XCircleIcon,
  QuestionMarkCircleIcon,
  ArrowRightIcon,
  XMarkIcon,
  ClockIcon,
  CurrencyDollarIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';
import LeadFormButton from '../LeadFormButton';

interface ComparisonData {
  feature: string;
  icon: React.ComponentType<{ className?: string }>;
  cfa: {
    value: string;
    rating: 'high' | 'medium' | 'low';
    description: string;
  };
  mba: {
    value: string;
    rating: 'high' | 'medium' | 'low';
    description: string;
  };
  frm: {
    value: string;
    rating: 'high' | 'medium' | 'low';
    description: string;
  };
  ca: {
    value: string;
    rating: 'high' | 'medium' | 'low';
    description: string;
  };
}

interface QuizQuestion {
  id: string;
  question: string;
  options: {
    text: string;
    points: { cfa: number; mba: number; frm: number; ca: number };
  }[];
}

const comparisonData: ComparisonData[] = [
  {
    feature: 'Global Value',
    icon: GlobeAltIcon,
    cfa: { value: '✅✅✅', rating: 'high', description: 'Globally recognized across 165+ countries' },
    mba: { value: '✅', rating: 'medium', description: 'Varies by school ranking and location' },
    frm: { value: '✅', rating: 'medium', description: 'Strong in risk management globally' },
    ca: { value: '❌', rating: 'low', description: 'Limited to specific countries' }
  },
  {
    feature: 'Focus',
    icon: AcademicCapIcon,
    cfa: { value: 'Investment & Finance', rating: 'high', description: 'Deep specialization in investment analysis' },
    mba: { value: 'Management', rating: 'medium', description: 'Broad business management skills' },
    frm: { value: 'Risk', rating: 'medium', description: 'Specialized in financial risk management' },
    ca: { value: 'Accounting', rating: 'medium', description: 'Focus on accounting and auditing' }
  },
  {
    feature: 'Cost',
    icon: CurrencyDollarIcon,
    cfa: { value: 'Medium', rating: 'medium', description: '$1,000 - $4,000 total program cost' },
    mba: { value: 'High', rating: 'low', description: '$50,000 - $200,000+ depending on school' },
    frm: { value: 'Medium', rating: 'medium', description: '$1,500 - $3,500 total program cost' },
    ca: { value: 'Low', rating: 'high', description: 'Relatively affordable with articleship' }
  },
  {
    feature: 'Duration',
    icon: ClockIcon,
    cfa: { value: '2–3 yrs', rating: 'medium', description: 'Self-paced with 3 levels' },
    mba: { value: '2 yrs', rating: 'medium', description: 'Full-time program duration' },
    frm: { value: '1.5 yrs', rating: 'high', description: 'Fastest professional certification' },
    ca: { value: '5 yrs', rating: 'low', description: 'Includes articleship and exams' }
  },
  {
    feature: 'Jobs',
    icon: BriefcaseIcon,
    cfa: { value: 'Finance', rating: 'high', description: 'Portfolio management, research, investment banking' },
    mba: { value: 'General Mgmt', rating: 'medium', description: 'Consulting, strategy, general management' },
    frm: { value: 'Risk', rating: 'medium', description: 'Risk management, compliance, banking' },
    ca: { value: 'Audit', rating: 'medium', description: 'Auditing, taxation, financial reporting' }
  }
];

const quizQuestions: QuizQuestion[] = [
  {
    id: 'career_goal',
    question: 'What\'s your primary career goal?',
    options: [
      { text: 'Investment Management & Analysis', points: { cfa: 3, mba: 1, frm: 1, ca: 0 } },
      { text: 'General Business Leadership', points: { cfa: 0, mba: 3, frm: 0, ca: 1 } },
      { text: 'Risk Management & Compliance', points: { cfa: 1, mba: 1, frm: 3, ca: 1 } },
      { text: 'Accounting & Auditing', points: { cfa: 0, mba: 0, frm: 0, ca: 3 } }
    ]
  },
  {
    id: 'time_commitment',
    question: 'How much time can you dedicate?',
    options: [
      { text: 'Part-time while working (2-3 years)', points: { cfa: 3, mba: 0, frm: 2, ca: 1 } },
      { text: 'Full-time study (1-2 years)', points: { cfa: 1, mba: 3, frm: 3, ca: 0 } },
      { text: 'Long-term commitment (3-5 years)', points: { cfa: 2, mba: 1, frm: 0, ca: 3 } }
    ]
  },
  {
    id: 'budget',
    question: 'What\'s your budget range?',
    options: [
      { text: 'Under $5,000', points: { cfa: 3, mba: 0, frm: 3, ca: 3 } },
      { text: '$5,000 - $20,000', points: { cfa: 2, mba: 1, frm: 2, ca: 2 } },
      { text: '$20,000+', points: { cfa: 1, mba: 3, frm: 1, ca: 1 } }
    ]
  }
];

export default function CFADecisionHelper() {
  const [isClient, setIsClient] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizResult, setQuizResult] = useState<string | null>(null);
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => setIsClient(true), 100);
  }, []);

  const getRatingColor = (rating: 'high' | 'medium' | 'low') => {
    switch (rating) {
      case 'high': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-red-600 bg-red-100';
    }
  };

  const getRatingIcon = (rating: 'high' | 'medium' | 'low') => {
    switch (rating) {
      case 'high': return CheckCircleIcon;
      case 'medium': return QuestionMarkCircleIcon;
      case 'low': return XCircleIcon;
    }
  };

  const handleQuizAnswer = (optionIndex: number) => {
    const question = quizQuestions[currentQuestion];
    const selectedOption = question.options[optionIndex];
    
    setQuizAnswers(prev => {
      const newAnswers = { ...prev };
      Object.entries(selectedOption.points).forEach(([cert, points]) => {
        newAnswers[cert] = (newAnswers[cert] || 0) + points;
      });
      return newAnswers;
    });

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Calculate result
      const maxScore = Math.max(...Object.values(quizAnswers));
      const winner = Object.entries(quizAnswers).find(([_, score]) => score === maxScore)?.[0];
      setQuizResult(winner || 'cfa');
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setQuizAnswers({});
    setQuizResult(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  if (!isClient) {
    return (
      <section className="py-10 sm:py-16 lg:py-20 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              CFA vs MBA vs FRM vs CA
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Compare certifications to find your perfect fit
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="sm:py-15 py-10 bg-gradient-to-br from-red-50 to-red-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div className="text-center sm:mb-16 mb-10" variants={itemVariants}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            CFA vs MBA vs FRM vs CA — Decision Helper
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare certifications across key factors to make the right choice for your career
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div 
          className="sm:mb-16 mb-10"
          variants={itemVariants}
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-red-600 to-red-600 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold">CFA</th>
                    <th className="px-6 py-4 text-center font-semibold">MBA</th>
                    <th className="px-6 py-4 text-center font-semibold">FRM</th>
                    <th className="px-6 py-4 text-center font-semibold">CA</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => {
                    const Icon = row.icon;
                    return (
                      <tr key={row.feature} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 font-medium text-gray-900">
                          <div className="flex items-center space-x-3">
                            <Icon className="w-5 h-5 text-red-600" />
                            <span>{row.feature}</span>
                          </div>
                        </td>
                        
                        {(['cfa', 'mba', 'frm', 'ca'] as const).map((cert) => {
                          const cellData = row[cert];
                          const RatingIcon = getRatingIcon(cellData.rating);
                          const cellId = `${row.feature}-${cert}`;
                          
                          return (
                            <td 
                              key={cert}
                              className="px-6 py-4 text-center relative cursor-pointer"
                              onMouseEnter={() => setHoveredCell(cellId)}
                              onMouseLeave={() => setHoveredCell(null)}
                            >
                              <div className="flex flex-col items-center space-y-2">
                                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getRatingColor(cellData.rating)}`}>
                                  <RatingIcon className="w-4 h-4 mr-1" />
                                  {cellData.value}
                                </div>
                              </div>

                              {/* Hover Tooltip */}
                              <AnimatePresence>
                                {hoveredCell === cellId && (
                                  <motion.div
                                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-gray-900 text-white text-sm rounded-lg p-3 shadow-lg z-10"
                                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    {cellData.description}
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-red-600/10 to-red-600/10 backdrop-blur-sm rounded-3xl p-8 border border-red-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not sure which suits you?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Take our quick 30-second fit quiz to get a personalized recommendation based on your goals, timeline, and budget.
            </p>
            
            <LeadFormButton formType='general' variant='secondary' isSendOtp={true} >
              <span>Schedule a call</span>
            
            </LeadFormButton>
          </div>
        </motion.div>
      </motion.div>

      {/* Quiz Modal */}
      <AnimatePresence>
        {showQuiz && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Career Fit Quiz
                </h3>
                <button
                  onClick={() => {
                    setShowQuiz(false);
                    resetQuiz();
                  }}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
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
                        className="bg-gradient-to-r from-red-600 to-red-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Question */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">
                      {quizQuestions[currentQuestion].question}
                    </h4>
                    
                    <div className="space-y-3">
                      {quizQuestions[currentQuestion].options.map((option, index) => (
                        <motion.button
                          key={index}
                          onClick={() => handleQuizAnswer(index)}
                          className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-red-300 hover:bg-red-50 transition-all duration-200"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {option.text}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircleIcon className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      Your Best Fit: {quizResult?.toUpperCase()}
                    </h4>
                    <p className="text-gray-600">
                      Based on your answers, {quizResult?.toUpperCase()} appears to be the best match for your career goals and circumstances.
                    </p>
                  </div>

                  <div className="flex space-x-4 justify-center">
                    <motion.button
                      onClick={() => {
                        setShowQuiz(false);
                        resetQuiz();
                      }}
                      className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Close
                    </motion.button>
                    <motion.button
                      onClick={resetQuiz}
                      className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Retake Quiz
                    </motion.button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}