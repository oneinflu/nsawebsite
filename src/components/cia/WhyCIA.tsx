/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { motion } from 'framer-motion';
import { 
  LockClosedIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
  BuildingOffice2Icon
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import LeadFormButton from '../LeadFormButton';

const WhyCIA = () => {
  const [isClient, setIsClient] = useState(false);
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const pillars = [
    {
      icon: LockClosedIcon,
      emoji: "🔒",
      title: "Internal Audit Excellence",
      description: "Highest standard in governance & controls",
      details: [
        "Master risk assessment frameworks",
        "Advanced control testing methodologies", 
        "Regulatory compliance expertise",
        "Fraud detection & prevention"
      ],
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100",
      borderColor: "border-red-200"
    },
    {
      icon: BriefcaseIcon,
      emoji: "💼",
      title: "Rapid Leadership Path",
      description: "Quick growth into Audit Manager & Risk Head roles",
      details: [
        "Fast-track to management positions",
        "Leadership in audit teams",
        "Strategic risk advisory roles",
        "C-suite reporting opportunities"
      ],
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100",
      borderColor: "border-red-200"
    },
    {
      icon: GlobeAltIcon,
      emoji: "🌍",
      title: "Global Recognition",
      description: "Opportunities in GCC, USA, Singapore & India",
      details: [
        "International career mobility",
        "Premium salary packages abroad",
        "Visa sponsorship opportunities",
        "Global network of professionals"
      ],
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200"
    }
  ];

  const globalCorporations = [
    { name: "EY", logo: "EY" },
    { name: "KPMG", logo: "KPMG" },
    { name: "PwC", logo: "PwC" },
    { name: "Deloitte", logo: "DTT" },
    { name: "HSBC", logo: "HSBC" },
    { name: "JPMorgan", logo: "JPM" },
    { name: "Goldman Sachs", logo: "GS" },
    { name: "Microsoft", logo: "MSFT" }
  ];

  const careerLocations = [
    { country: "GCC", flag: "🇦🇪", opportunities: "Tax-free salaries" },
    { country: "USA", flag: "🇺🇸", opportunities: "Premium packages" },
    { country: "Singapore", flag: "🇸🇬", opportunities: "Regional hub roles" },
    { country: "India", flag: "🇮🇳", opportunities: "Leadership positions" }
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

  const pillarVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  if (!isClient) {
    return (
      <section className="py-8 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">CIA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strong Career Positioning with Three Powerful Pillars
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">CIA</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Strong Career Positioning with Three Powerful Pillars
          </motion.p>
        </motion.div>

        {/* Three Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 mb-20"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={pillarVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredPillar(index)}
              onHoverEnd={() => setHoveredPillar(null)}
              className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 ${pillar.borderColor} hover:shadow-2xl transition-all duration-500 cursor-pointer group`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Icon & Emoji */}
                <div className="flex items-center justify-center mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${pillar.color} mr-4`}>
                    <pillar.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl">{pillar.emoji}</div>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 text-center">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-lg text-gray-600 text-center mb-6 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Details - Show on Hover */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredPillar === index ? 1 : 0,
                    height: hoveredPillar === index ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2 pt-4 border-t border-gray-200">
                    {pillar.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-sm text-gray-700">
                        <ShieldCheckIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Pillar Number */}
                <div className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r ${pillar.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Career Map Visual */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative z-10">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h3 className="text-2xl md:text-4xl font-bold mb-4">
                Global Career Map
              </h3>
              <p className="text-red-100 text-md md:text-lg max-w-2xl mx-auto">
                CIA opens doors to premium opportunities across the world&apos;s leading corporations
              </p>
            </motion.div>

            {/* Global Locations */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-12">
              {careerLocations.map((location, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{location.flag}</div>
                  <div className="font-bold text-lg mb-2">{location.country}</div>
                  <div className="text-red-100 text-sm">{location.opportunities}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Corporate Logos */}
            <motion.div variants={itemVariants} className="text-center">
              <h4 className="text-xl font-semibold mb-6 text-red-100">
                Top Hiring Companies Worldwide
              </h4>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-4">
                {globalCorporations.map((corp, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                    className="bg-white rounded-xl p-4 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="font-bold text-gray-800 text-sm">
                      {corp.logo}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Career Growth Arrow */}
            <motion.div
              variants={itemVariants}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20"
            >
              <ArrowTrendingUpIcon className="w-32 h-32 text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <LeadFormButton 
        formType='download-placement-report'
        isSendOtp={true}
        courseId='CIA'
            className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center"
          >
            <BuildingOffice2Icon className="w-6 h-6 mr-3" />
            Explore CIA Career Opportunities
          </LeadFormButton>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyCIA;