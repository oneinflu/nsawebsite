'use client';

import { motion } from 'framer-motion';
import { 
  GlobeAltIcon,
  ChartBarIcon,
  BriefcaseIcon,
  BuildingOffice2Icon
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import LeadFormButton from '../LeadFormButton';

const WhyCFA = () => {
  const [isClient, setIsClient] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsClient(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: GlobeAltIcon,
      emoji: "🌍",
      title: "Global Investment Credential",
      description: "Recognized by every major finance firm worldwide",
      details: [
        "165+ countries recognition",
        "Universal finance language",
        "Cross-border career mobility",
        "International networking opportunities"
      ],
      color: "from-red-600 to-red-700",
      bgColor: "from-red-50 to-red-100",
      borderColor: "border-red-200"
    },
    {
      icon: ChartBarIcon,
      emoji: "📈",
      title: "Deep Financial Knowledge",
      description: "Learn equity, fixed income, portfolio, valuation, ethics",
      details: [
        "Comprehensive investment analysis",
        "Portfolio management mastery",
        "Advanced valuation techniques",
        "Ethical & professional standards"
      ],
      color: "from-green-600 to-green-700",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200"
    },
    {
      icon: BriefcaseIcon,
      emoji: "💼",
      title: "Elite Finance Roles",
      description: "Investment Banking, Asset Mgmt, Research, Corporate Finance",
      details: [
        "Investment banking analyst/associate",
        "Portfolio manager positions",
        "Equity research analyst",
        "Corporate finance leadership"
      ],
      color: "from-purple-600 to-purple-700",
      bgColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200"
    }
  ];

  const eliteCompanies = [
    { name: "Goldman Sachs", logo: "GS", tier: "Bulge Bracket" },
    { name: "Morgan Stanley", logo: "MS", tier: "Bulge Bracket" },
    { name: "JP Morgan", logo: "JPM", tier: "Bulge Bracket" },
    { name: "Deloitte", logo: "DTT", tier: "Big Four" },
    { name: "PwC", logo: "PwC", tier: "Big Four" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7
      }
    }
  };

  if (!isClient) {
    return (
      <section className="py-10 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why CFA <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">(US)?</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Positioning for Ambition — Join the Elite Global Tribe
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-red-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-5 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-20 right-5 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
          >
            Why CFA <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">(US)?</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-3 sm:mb-4"
          >
            Positioning for Ambition — Join the Elite Global Tribe
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full border border-amber-200"
          >
            <span className="text-amber-800 font-semibold text-xs sm:text-sm">✨ CFA = Elite Global Tribe</span>
          </motion.div>
        </motion.div>

        {/* Three Horizontal Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4 sm:space-y-6 lg:space-y-8 mb-12 sm:mb-16 lg:mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border-2 ${feature.borderColor} hover:shadow-2xl transition-all duration-500 cursor-pointer group`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  {/* Icon Section */}
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <div className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-2`}>
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="text-2xl sm:text-3xl text-center">{feature.emoji}</div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Expandable Details */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: hoveredCard === index ? "auto" : 0,
                        opacity: hoveredCard === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-gray-200">
                        {feature.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color}`}></div>
                            <span className="text-sm text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Hover Indicator */}
                  <div className="flex-shrink-0">
                    <motion.div
                      animate={{ 
                        rotate: hoveredCard === index ? 90 : 0,
                        scale: hoveredCard === index ? 1.2 : 1
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-6 h-6 text-gray-400 group-hover:text-gray-600"
                    >
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Elite Companies Trust Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by Elite Finance Firms
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join the ranks of professionals at the world&apos;s most prestigious financial institutions
            </p>
          </motion.div>

          {/* Company Logos Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto"
          >
            {eliteCompanies.map((company, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-red-300">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm sm:text-lg">{company.logo}</span>
                    </div>
                    <h4 className="font-bold text-gray-900 text-xs sm:text-sm mb-1 truncate">{company.name}</h4>
                    <p className="text-[10px] sm:text-xs text-gray-500 truncate">{company.tier}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA Hint */}
           <LeadFormButton formType='general' variant='primary' isSendOtp={true} className='mt-6 sm:mt-8 lg:mt-10 w-full sm:w-auto mx-auto'>
               Ready to join the elite? Start your CFA journey
              </LeadFormButton>
           
        </motion.div>
      </div>
    </section>
  );
};

export default WhyCFA;