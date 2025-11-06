'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Video, 
  Play, 
  Users, 
  BarChart3, 
 
  CheckCircle, 
  Star,
  TrendingUp,
  Award,
  BookOpen,
  Target
} from 'lucide-react';

const CPAStudyPlanner = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [showMockAnalytics, setShowMockAnalytics] = useState(false);

  const studyFeatures = [
    {
      id: 'weekly-planner',
      title: 'Weekly Planner',
      icon: Calendar,
      description: 'Personalized study schedule adapted to your pace',
      color: 'from-red-500 to-red-600',
      stats: '40+ hrs/week',
      details: [
        'Adaptive scheduling based on your availability',
        'Progress tracking with milestone rewards',
        'Automatic rescheduling for missed sessions',
        'Integration with live class timings'
      ]
    },
    {
      id: 'live-classes',
      title: 'Live Classes',
      icon: Video,
      description: 'Interactive sessions with expert instructors',
      color: 'from-green-500 to-green-600',
      stats: '200+ hours',
      details: [
        'Real-time Q&A with instructors',
        'Small batch sizes (max 25 students)',
        'Recorded for later review',
        'Weekend intensive sessions available'
      ]
    },
    {
      id: 'recorded-content',
      title: 'Recorded Content',
      icon: Play,
      description: 'Comprehensive video library for self-paced learning',
      color: 'from-purple-500 to-purple-600',
      stats: '500+ videos',
      details: [
        'HD quality with subtitles',
        'Downloadable for offline viewing',
        'Chapter-wise organization',
        'Speed control and bookmarking'
      ]
    },
    {
      id: 'doubt-sessions',
      title: 'One-on-One Doubt Sessions',
      icon: Users,
      description: 'Personal mentoring for complex topics',
      color: 'from-orange-500 to-orange-600',
      stats: 'Unlimited',
      details: [
        'Book sessions with subject experts',
        'Screen sharing for problem solving',
        'Follow-up notes and resources',
        '24-hour response guarantee'
      ]
    },
    {
      id: 'mock-analytics',
      title: 'Mock + Analytics',
      icon: BarChart3,
      description: 'AI-powered performance insights',
      color: 'from-red-500 to-red-600',
      stats: '50+ mocks',
      details: [
        'Detailed performance analytics',
        'Weakness identification',
        'Improvement recommendations',
        'Exam simulation environment'
      ]
    }
  ];

  const mockAnalyticsData = {
    overallScore: 78,
    sections: [
      { name: 'AUD', score: 82, trend: '+5%' },
      { name: 'FAR', score: 75, trend: '+8%' },
      { name: 'REG', score: 80, trend: '+3%' },
      { name: 'BEC', score: 76, trend: '+12%' }
    ],
    strengths: ['Financial Reporting', 'Audit Procedures', 'Tax Planning'],
    improvements: ['Government Accounting', 'IT Controls', 'Business Processes']
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-red-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
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
            <Award className="w-4 h-4" />
            Designed for first attempt success
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Study Structure + 
            <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent"> Planner Engine</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A comprehensive learning ecosystem designed to maximize your CPA success rate with personalized study plans and expert guidance
          </motion.p>
        </div>

        {/* Study Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Feature Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {studyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative group cursor-pointer ${
                    activeCard === index ? 'scale-105' : ''
                  }`}
                  onClick={() => setActiveCard(index)}
                  onMouseEnter={() => setActiveCard(index)}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-semibold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                        {feature.stats}
                      </span>
                      <motion.div
                        animate={{ x: activeCard === index ? 5 : 0 }}
                        className="text-gray-400 group-hover:text-gray-600"
                      >
                        →
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Active Feature Details */}
          <div className="lg:col-span-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  {React.createElement(studyFeatures[activeCard].icon, {
                    className: `w-6 h-6 text-transparent bg-gradient-to-r ${studyFeatures[activeCard].color} bg-clip-text`
                  })}
                  <h3 className="text-xl font-bold text-gray-900">
                    {studyFeatures[activeCard].title}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {studyFeatures[activeCard].details.map((detail, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mock Analytics Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Performance Analytics Dashboard</h3>
                <p className="text-gray-600">Real-time insights into your preparation</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowMockAnalytics(!showMockAnalytics)}
              className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            >
              {showMockAnalytics ? 'Hide' : 'View'} Analytics
            </motion.button>
          </div>

          <AnimatePresence>
            {showMockAnalytics && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {/* Overall Score */}
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-red-600" />
                    <h4 className="font-semibold text-gray-900">Overall Score</h4>
                  </div>
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    {mockAnalyticsData.overallScore}%
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">+15% from last month</span>
                  </div>
                </div>

                {/* Section Scores */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-6 h-6 text-green-600" />
                    <h4 className="font-semibold text-gray-900">Section Scores</h4>
                  </div>
                  <div className="space-y-3">
                    {mockAnalyticsData.sections.map((section, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="font-medium text-gray-700">{section.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-900">{section.score}%</span>
                          <span className="text-xs text-green-600 font-medium">{section.trend}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Insights */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-6 h-6 text-purple-600" />
                    <h4 className="font-semibold text-gray-900">Key Insights</h4>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-2">Strengths</h5>
                      <div className="flex flex-wrap gap-1">
                        {mockAnalyticsData.strengths.slice(0, 2).map((strength, index) => (
                          <span key={index} className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">
                            {strength}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-2">Focus Areas</h5>
                      <div className="flex flex-wrap gap-1">
                        {mockAnalyticsData.improvements.slice(0, 2).map((improvement, index) => (
                          <span key={index} className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded">
                            {improvement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300"
          >
            <Calendar className="w-5 h-5" />
            Get Your Personalized Study Plan
          </motion.button>
          <p className="text-gray-600 mt-4">
            Join 5,000+ students who achieved first-attempt success with our structured approach
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CPAStudyPlanner;