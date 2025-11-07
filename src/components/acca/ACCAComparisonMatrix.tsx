'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  
  
  ChartBarIcon,

  StarIcon,
  
} from '@heroicons/react/24/outline';
import LeadFormButton from '../LeadFormButton';

const ACCAComparisonMatrix = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const comparisonData = {
    'Global Recognition': {
      ACCA: { status: 'excellent', value: '180+ Countries', icon: '✅' },
      'CA India': { status: 'limited', value: 'Limited to India', icon: '🇮🇳' },
      'CMA US': { status: 'good', value: '140+ Countries', icon: '✅' },
      'CPA US': { status: 'good', value: 'US + Others', icon: '✅' }
    },
    'Duration': {
      ACCA: { status: 'medium', value: 'Medium (2-4 years)', icon: '⏱️' },
      'CA India': { status: 'long', value: 'Long (4-6 years)', icon: '⏳' },
      'CMA US': { status: 'short', value: 'Short (1-2 years)', icon: '⚡' },
      'CPA US': { status: 'medium', value: 'Medium (2-3 years)', icon: '⏱️' }
    },
    'Subjects Focus': {
      ACCA: { status: 'excellent', value: 'Practical + IFRS', icon: '🎯' },
      'CA India': { status: 'good', value: 'Deep Audit/Tax', icon: '📊' },
      'CMA US': { status: 'good', value: 'Finance Management', icon: '💼' },
      'CPA US': { status: 'medium', value: 'US GAAP-focused', icon: '🇺🇸' }
    },
    'Job Mobility': {
      ACCA: { status: 'excellent', value: 'High', icon: '🚀' },
      'CA India': { status: 'limited', value: 'Low-Medium', icon: '📍' },
      'CMA US': { status: 'medium', value: 'Medium', icon: '📈' },
      'CPA US': { status: 'good', value: 'High', icon: '🌟' }
    }
  };

  const qualifications = ['ACCA', 'CA India', 'CMA US', 'CPA US'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-green-100 text-green-800 border-green-200';
      case 'good': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'limited': return 'bg-red-100 text-red-800 border-red-200';
      case 'long': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'short': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

   

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <ChartBarIcon className="w-12 h-12 text-red-600 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              ACCA vs CA India vs CMA vs <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">CPA</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The most searched comparison - see which qualification wins in each category
          </p>
        </motion.div>

        {/* Comparison Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden mb-12"
        >
          {/* Table Header */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6">
            <div className="grid grid-cols-5 gap-4 items-center">
              <div className="font-bold text-lg">Feature</div>
              {qualifications.map((qual) => (
                <div key={qual} className="text-center">
                  <div className="font-bold text-lg">{qual}</div>
                  {qual === 'ACCA' && (
                    <div className="text-xs bg-green-500 text-white rounded-full px-3 py-1 mt-2 inline-block">
                      ✅ WINNER
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {Object.entries(comparisonData).map(([feature, data], index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="grid grid-cols-5 gap-4 p-6 hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="font-semibold text-gray-900 flex items-center">
                  <div className="w-3 h-8 bg-gradient-to-b from-red-500 to-purple-500 rounded-full mr-3"></div>
                  {feature}
                </div>
                {qualifications.map((qual) => {
                  const qualData = data[qual as keyof typeof data];
                  return (
                    <div key={qual} className="text-center">
                      <div className={`inline-flex items-center px-4 py-3 rounded-xl text-sm font-semibold border-2 ${getStatusColor(qualData.status)} transition-all duration-300 hover:scale-105`}>
                        <span className="text-lg mr-2">{qualData.icon}</span>
                        <div className="flex flex-col">
                          <span>{qualData.value}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            ))}
          </div>

          {/* Winner Summary */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 border-t-2 border-green-200">
            <div className="grid grid-cols-5 gap-4 items-center">
              <div className="font-bold text-xl text-gray-900 flex items-center">
                <StarIcon className="w-6 h-6 text-green-600 mr-2" />
                Overall Winner
              </div>
              {qualifications.map((qual) => (
                <div key={qual} className="text-center">
                  {qual === 'ACCA' ? (
                    <div className="text-center">
                      <div className="text-3xl mb-2">🏆</div>
                      <div className="text-lg font-bold text-green-600">WINNER</div>
                      <div className="text-sm text-green-700">Best Overall Choice</div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="text-2xl mb-2">
                        {qual === 'CA India' ? '🇮🇳' : qual === 'CMA US' ? '⚡' : '🇺🇸'}
                      </div>
                      <div className="text-sm text-gray-600">
                        {qual === 'CA India' ? 'India Focused' : 
                         qual === 'CMA US' ? 'Fastest Route' : 'US Market'}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Why ACCA Wins - Quick Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-green-50 to-red-50 rounded-3xl p-8 mb-12 border-2 border-green-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🏆 Why ACCA is the Clear Winner
            </h3>
            <p className="text-gray-700 text-lg">
              Based on the most important factors students consider
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🌍</div>
              <h4 className="font-bold text-gray-900 mb-2">Global Recognition</h4>
              <p className="text-sm text-gray-600">Work in 180+ countries vs limited options</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="font-bold text-gray-900 mb-2">Practical Skills</h4>
              <p className="text-sm text-gray-600">IFRS + real-world application</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="font-bold text-gray-900 mb-2">Career Mobility</h4>
              <p className="text-sm text-gray-600">Highest job flexibility globally</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-bold text-gray-900 mb-2">Smart Route</h4>
              <p className="text-sm text-gray-600">Up to 9 exemptions available</p>
            </div>
          </div>
        </motion.div>

        {/* Course Fit Quiz CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Still Confused Which One to Choose?
              </h3>
              <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
                Take our 30-second Course Fit Quiz and get personalized recommendations based on your background and goals
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                
               <LeadFormButton formType='general' variant='outline' isSendOtp={true} > Book Free Counsellor</LeadFormButton>
               
              </div>

              <div className="mt-8 text-red-200 text-sm">
                ⚡ Get instant results | 🎯 Personalized recommendations | 📞 Free expert guidance
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quiz Modal Placeholder */}
        {showQuiz && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowQuiz(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Course Fit Quiz</h3>
                <p className="text-gray-600 mb-6">
                  This will redirect you to our personalized quiz to find the perfect qualification for your career goals.
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => setShowQuiz(false)}
                    className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      // Here you would redirect to the actual quiz
                      setShowQuiz(false);
                    }}
                    className="flex-1 bg-gradient-to-r from-red-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Start Quiz
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ACCAComparisonMatrix;