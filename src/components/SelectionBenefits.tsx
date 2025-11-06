'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const SelectionBenefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  const benefitCategories = [
    {
      id: 'financial',
      title: 'Financial Benefits',
      icon: '💰',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'educational',
      title: 'Educational Excellence',
      icon: '🎓',
      color: 'from-red-500 to-purple-600'
    },
    {
      id: 'career',
      title: 'Career Advancement',
      icon: '🚀',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'exclusive',
      title: 'Exclusive Access',
      icon: '👑',
      color: 'from-amber-500 to-orange-600'
    }
  ];

  const benefitsData = {
    financial: [
      {
        title: '₹90,000 Direct Scholarship',
        description: 'Complete course fee coverage for your chosen global certification program',
        icon: '💵',
        value: '₹90,000',
        highlight: true
      },
      {
        title: 'Zero Hidden Costs',
        description: 'No additional fees, registration charges, or surprise costs throughout your journey',
        icon: '🔒',
        value: '100% Transparent',
        highlight: false
      },
      {
        title: 'Flexible Payment Options',
        description: 'EMI options available for any additional courses or materials you choose',
        icon: '💳',
        value: 'EMI Available',
        highlight: false
      },
      {
        title: 'Money-Back Guarantee',
        description: 'Full refund if you\'re not satisfied within the first 30 days of enrollment',
        icon: '🛡️',
        value: '30-Day Guarantee',
        highlight: false
      }
    ],
    educational: [
      {
        title: 'Global Certification Programs',
        description: 'Access to CPA, CMA, ACCA, CFA, and CIA certification courses',
        icon: '🌍',
        value: '5 Programs',
        highlight: true
      },
      {
        title: 'Expert Faculty & Mentors',
        description: 'Learn from industry professionals with 15+ years of global experience',
        icon: '👨‍🏫',
        value: '15+ Years Exp',
        highlight: false
      },
      {
        title: 'Live Interactive Classes',
        description: 'Real-time doubt clearing sessions with personalized attention',
        icon: '📹',
        value: 'Live Sessions',
        highlight: false
      },
      {
        title: 'Comprehensive Study Materials',
        description: 'Updated curriculum, practice tests, and exam preparation resources',
        icon: '📚',
        value: 'Complete Package',
        highlight: false
      }
    ],
    career: [
      {
        title: 'Job Placement Assistance',
        description: '100% job placement support with our network of 500+ partner companies',
        icon: '🎯',
        value: '500+ Partners',
        highlight: true
      },
      {
        title: 'Resume & Interview Prep',
        description: 'Professional resume building and mock interview sessions',
        icon: '📄',
        value: 'Professional Prep',
        highlight: false
      },
      {
        title: 'Industry Networking',
        description: 'Connect with alumni working in top MNCs and consulting firms',
        icon: '🤝',
        value: 'Global Network',
        highlight: false
      },
      {
        title: 'Salary Negotiation Training',
        description: 'Learn to negotiate better packages and advance your career faster',
        icon: '💼',
        value: 'Higher Packages',
        highlight: false
      }
    ],
    exclusive: [
      {
        title: 'Super 300 Alumni Network',
        description: 'Lifetime access to an exclusive community of high-achievers',
        icon: '🏆',
        value: 'Lifetime Access',
        highlight: true
      },
      {
        title: 'Priority Support',
        description: '24/7 dedicated support team for all your queries and concerns',
        icon: '⚡',
        value: '24/7 Support',
        highlight: false
      },
      {
        title: 'Exclusive Webinars',
        description: 'Monthly sessions with industry leaders and successful alumni',
        icon: '🎤',
        value: 'Monthly Sessions',
        highlight: false
      },
      {
        title: 'Certificate of Excellence',
        description: 'Special recognition certificate for being part of the Super 300',
        icon: '🏅',
        value: 'Special Recognition',
        highlight: false
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const currentBenefits = benefitsData[benefitCategories[activeTab].id as keyof typeof benefitsData];

  return (
    <section 
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-red-900 to-purple-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full border border-amber-400/30 mb-6">
            <span className="text-2xl">🎁</span>
            <span className="text-amber-300 font-semibold text-lg">What You Get</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Unmatched Value
            </span>
            <br />
            <span className="text-white">Beyond ₹90,000</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Your scholarship unlocks a comprehensive ecosystem designed to 
            <span className="text-red-400 font-semibold"> transform your career</span> and 
            <span className="text-purple-400 font-semibold"> accelerate your success</span>.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {benefitCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveTab(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
              }`}
            >
              <span className="flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                <span>{category.title}</span>
              </span>
              
              {activeTab === index && (
                <motion.div
                  layoutId="activeTab"
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl blur-lg opacity-50 -z-10`}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {currentBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative group p-8 rounded-2xl border transition-all duration-300 ${
                benefit.highlight
                  ? `bg-gradient-to-br ${benefitCategories[activeTab].color}/10 border-amber-400/30 shadow-lg`
                  : 'bg-slate-800/50 border-slate-700/50 hover:border-slate-600/50'
              }`}
            >
              {/* Highlight Badge */}
              {benefit.highlight && (
                <div className="absolute -top-3 -right-3">
                  <div className={`px-4 py-2 bg-gradient-to-r ${benefitCategories[activeTab].color} text-white text-sm font-bold rounded-full shadow-lg`}>
                    ⭐ Featured
                  </div>
                </div>
              )}

              {/* Icon and Value */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefitCategories[activeTab].color} flex items-center justify-center text-2xl shadow-lg`}>
                  {benefit.icon}
                </div>
                <div className="text-right">
                  <div className={`text-lg font-bold bg-gradient-to-r ${benefitCategories[activeTab].color} bg-clip-text text-transparent`}>
                    {benefit.value}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-slate-300 leading-relaxed">{benefit.description}</p>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${benefitCategories[activeTab].color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 blur-xl`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Total Value Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50">
            <h3 className="text-3xl font-bold text-white mb-6">
              Total Package Value
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2">
                  ₹90,000
                </div>
                <div className="text-slate-400">Direct Scholarship</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  ₹2,50,000
                </div>
                <div className="text-slate-400">Course & Materials Value</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                  Priceless
                </div>
                <div className="text-slate-400">Network & Opportunities</div>
              </div>
            </div>

            <div className="text-slate-300 text-lg">
              You receive <span className="text-green-400 font-bold">₹90,000 scholarship</span> + 
              <span className="text-red-400 font-bold"> ₹2,50,000 worth of premium education</span> + 
              <span className="text-purple-400 font-bold"> lifetime career support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SelectionBenefits;