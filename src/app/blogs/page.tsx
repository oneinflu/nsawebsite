'use client';

import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
 
  TrendingUp, 
  Globe, 
  
  Award, 
  Users, 
  Download, 
  ChevronRight, 
 
  Clock, 
  Target,
  Briefcase,
 
  DollarSign,
  GraduationCap,
  Building,

  ArrowRight,
  CheckCircle,
  
  Sparkles,
  
} from 'lucide-react';

const GlobalFinanceHub = () => {
  const [, setSelectedPersona] = useState<string | null>(null);
  const [activeCarousel, setActiveCarousel] = useState(0);
  const [completedTools, setCompletedTools] = useState<string[]>([]);
  const [showPersonalization, setShowPersonalization] = useState(false);

  // Auto-rotate hero carousels
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCarousel((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Hero Carousels Data
  const heroCarousels = [
    {
      id: 'cpa-beginners',
      title: 'CPA for Beginners',
      subtitle: 'Complete roadmap from zero to certified',
      thumbnail: '/api/placeholder/400/250',
      duration: '12 min read',
      difficulty: 'Beginner',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'career-uae',
      title: 'Career in UAE',
      subtitle: 'Finance opportunities in Middle East',
      thumbnail: '/api/placeholder/400/250',
      duration: '8 min read',
      difficulty: 'Intermediate',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 'finance-salaries',
      title: 'Finance Salaries 2025',
      subtitle: 'Latest compensation trends globally',
      thumbnail: '/api/placeholder/400/250',
      duration: '15 min read',
      difficulty: 'Advanced',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  // Personalization Options
  const personaOptions = [
    {
      id: 'student',
      title: "I'm a B.Com student",
      icon: GraduationCap,
      description: 'Exploring finance career options',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'working',
      title: "I'm working in accounting",
      icon: Briefcase,
      description: 'Looking to advance my career',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'abroad',
      title: "I want to go abroad",
      icon: Globe,
      description: 'Seeking international opportunities',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'confused',
      title: "I'm confused which to choose",
      icon: Target,
      description: 'Need guidance on certifications',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  // Topic Lanes Data
  const topicLanes = [
    {
      title: 'CPA Mastery',
      items: [
        { title: 'CPA Exam Strategy 2025', views: '12.5K', duration: '10 min', thumbnail: '/api/placeholder/300/200', slug: 'cpa-exam-strategy-2025' },
        { title: 'State Board Selection Guide', views: '8.2K', duration: '7 min', thumbnail: '/api/placeholder/300/200', slug: 'state-board-selection-guide' },
        { title: 'CPA vs CMA: Which Wins?', views: '15.1K', duration: '12 min', thumbnail: '/api/placeholder/300/200', slug: 'cpa-vs-cma-comparison' },
        { title: 'Big 4 Interview Prep', views: '9.8K', duration: '15 min', thumbnail: '/api/placeholder/300/200', slug: 'big-4-career-guide' }
      ]
    },
    {
      title: 'Global Careers',
      items: [
        { title: 'Finance Jobs in Canada', views: '7.3K', duration: '8 min', thumbnail: '/api/placeholder/300/200', slug: 'finance-jobs-canada' },
        { title: 'UAE Finance Market 2025', views: '11.2K', duration: '11 min', thumbnail: '/api/placeholder/300/200', slug: 'uae-finance-market-2025' },
        { title: 'UK Accounting Opportunities', views: '6.9K', duration: '9 min', thumbnail: '/api/placeholder/300/200', slug: 'uk-accounting-opportunities' },
        { title: 'Australia CPA Migration', views: '8.7K', duration: '13 min', thumbnail: '/api/placeholder/300/200', slug: 'australia-cpa-migration' }
      ]
    },
    {
      title: 'Salary Intelligence',
      items: [
        { title: 'CPA Salary Breakdown 2025', views: '18.5K', duration: '6 min', thumbnail: '/api/placeholder/300/200', slug: 'cpa-salary-breakdown-2025' },
        { title: 'Big 4 Compensation Guide', views: '14.2K', duration: '9 min', thumbnail: '/api/placeholder/300/200', slug: 'big-4-compensation-guide' },
        { title: 'Finance Manager Salaries', views: '10.8K', duration: '7 min', thumbnail: '/api/placeholder/300/200', slug: 'finance-manager-salaries' },
        { title: 'CFO Career Path & Pay', views: '12.1K', duration: '11 min', thumbnail: '/api/placeholder/300/200', slug: 'cfo-career-path-pay' }
      ]
    }
  ];

  // Micro Tools Data
  const microTools = [
    {
      id: 'salary-predictor',
      title: 'Salary Predictor',
      description: 'Estimate your earning potential',
      icon: DollarSign,
      color: 'from-green-500 to-green-600',
      completionTime: '2 min'
    },
    {
      id: 'country-explorer',
      title: 'Country Career Explorer',
      description: 'Find opportunities worldwide',
      icon: Globe,
      color: 'from-red-500 to-red-600',
      completionTime: '3 min'
    },
    {
      id: 'eligibility-checker',
      title: 'CPA Eligibility Checker',
      description: 'Check if you qualify',
      icon: CheckCircle,
      color: 'from-purple-500 to-purple-600',
      completionTime: '1 min'
    },
    {
      id: 'roi-visualizer',
      title: 'ROI Visualizer',
      description: 'Calculate certification ROI',
      icon: TrendingUp,
      color: 'from-orange-500 to-orange-600',
      completionTime: '2 min'
    }
  ];

  // Success Stories Data
  const successStories = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Senior Auditor at Deloitte',
      story: 'From B.Com to Big 4 in 18 months',
      thumbnail: '/api/placeholder/200/200',
      company: 'Deloitte',
      salary: '$85K',
      location: 'Dubai'
    },
    {
      id: 2,
      name: 'Rahul Gupta',
      role: 'Finance Manager at EY',
      story: 'CPA opened doors to global career',
      thumbnail: '/api/placeholder/200/200',
      company: 'EY',
      salary: '$92K',
      location: 'Toronto'
    },
    {
      id: 3,
      name: 'Sneha Patel',
      role: 'Controller at PwC',
      story: 'From CA to CPA: Best decision ever',
      thumbnail: '/api/placeholder/200/200',
      company: 'PwC',
      salary: '$105K',
      location: 'New York'
    }
  ];

  const handlePersonaSelect = (personaId: string) => {
    setSelectedPersona(personaId);
    setShowPersonalization(false);
    // Trigger personalized content assembly
  };

  const handleToolComplete = (toolId: string) => {
    setCompletedTools(prev => [...prev, toolId]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Hero Title */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Global Finance Hub
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            >
              Explore. Learn. Decide.
              <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent block">
                Grow Globally.
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              One hub. Every answer. Built for Indian finance aspirants.
            </motion.p>

            {/* Shifting Finance Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center items-center gap-8 mb-12"
            >
              {[Award, Globe, Briefcase, DollarSign, Building].map((Icon, index) => (
                <motion.div
                  key={index}
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: index * 0.2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-500 rounded-xl flex items-center justify-center"
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Hero Carousels */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {heroCarousels.map((carousel, index) => (
              <motion.div
                key={carousel.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                  activeCarousel === index ? 'ring-4 ring-red-500' : ''
                }`}
              >
                <div className={`h-64 bg-gradient-to-br ${carousel.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <Play className="w-5 h-5" />
                      <span className="text-sm font-medium">{carousel.duration}</span>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{carousel.difficulty}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{carousel.title}</h3>
                    <p className="text-white/90 mb-4">{carousel.subtitle}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 group-hover:shadow-lg transition-all duration-300"
                    >
                      Start Learning
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Personalization CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPersonalization(true)}
              className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Tell us where you are — we&apos;ll build your learning feed
              <Sparkles className="w-5 h-5 ml-2 inline" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Personalization Modal */}
      <AnimatePresence>
        {showPersonalization && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowPersonalization(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Choose Your Journey
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {personaOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <motion.button
                      key={option.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handlePersonaSelect(option.id)}
                      className="p-6 border-2 border-gray-200 rounded-xl text-left hover:border-red-500 transition-all duration-300"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-xl flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{option.title}</h4>
                      <p className="text-gray-600 text-sm">{option.description}</p>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Topic Exploration Lanes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {topicLanes.map((lane, laneIndex) => (
            <div key={laneIndex} className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">{lane.title}</h2>
                <button className="text-red-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300">
                  View All
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                {lane.items.map((item, itemIndex) => (
                  <motion.a
                    key={itemIndex}
                    href={`/blogs/${item.slug || 'cpa-complete-guide-2025'}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                  >
                    <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative">
                      <div className="absolute top-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {item.duration}
                      </div>
                      <div className="absolute bottom-4 right-4 bg-white/90 text-gray-900 px-2 py-1 rounded text-sm font-medium">
                        {item.views} views
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {item.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {item.views}
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Micro Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Interactive Tools
              <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent"> & Calculators</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get instant insights with our smart tools designed for finance professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {microTools.map((tool, index) => {
              const Icon = tool.icon;
              const isCompleted = completedTools.includes(tool.id);
              
              return (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => handleToolComplete(tool.id)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    isCompleted 
                      ? 'bg-green-50 border-2 border-green-500' 
                      : 'bg-gray-50 hover:bg-white hover:shadow-lg border-2 border-gray-200'
                  }`}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-xl flex items-center justify-center mb-4 relative`}>
                    <Icon className="w-6 h-6 text-white" />
                    {isCompleted && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{tool.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{tool.completionTime}</span>
                    {isCompleted ? (
                      <span className="text-green-600 text-sm font-medium">Completed!</span>
                    ) : (
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories Reel */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Big 4 Transformation Stories
            </h2>
            <p className="text-xl text-red-200 max-w-3xl mx-auto">
              Real people, real journeys, real success in global finance careers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-500 rounded-full"></div>
                  <div>
                    <h3 className="font-bold text-white">{story.name}</h3>
                    <p className="text-red-200 text-sm">{story.role}</p>
                  </div>
                </div>
                <p className="text-white mb-4 font-medium">{story.story}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-red-200">{story.company}</span>
                  <span className="text-green-400 font-bold">{story.salary}</span>
                </div>
                <div className="mt-2 text-sm text-red-200">{story.location}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Center */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Free Resources
              <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent"> & Downloads</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guides, checklists, and templates to accelerate your finance career
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'CPA Complete Guide 2025', downloads: '15.2K', type: 'PDF Guide' },
              { title: 'Big 4 Interview Checklist', downloads: '8.7K', type: 'Checklist' },
              { title: 'Salary Negotiation Template', downloads: '12.1K', type: 'Template' }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{resource.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>{resource.type}</span>
                  <span>{resource.downloads} downloads</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-red-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Download Free
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready for Your Personalized Roadmap?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Get a custom learning path designed specifically for your career goals and current situation
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get My Personalized Roadmap
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GlobalFinanceHub;