'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon,
  BuildingOfficeIcon, 
 
  CheckCircleIcon,
  PlayIcon,
  PhoneIcon,
  DocumentCheckIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

const CIAHero = () => {
  const [isClient, setIsClient] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  const credibilityBadges = [
    {
      icon: CheckCircleIcon,
      text: "IIA USA Certification",
      color: "from-red-500 to-red-600"
    },
    {
      icon: ShieldCheckIcon,
      text: "Internal Audit & Risk Careers",
      color: "from-red-500 to-red-600"
    },
    {
      icon: DocumentCheckIcon,
      text: "3-Part Exam Only",
      color: "from-green-500 to-green-600"
    },
    {
      icon: BuildingOfficeIcon,
      text: "High job demand in MNCs & Banks",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const careerPath = [
    {
      role: "Internal Auditor",
      description: "Entry-level audit positions",
      salary: "$55K - $75K",
      color: "from-red-400 to-red-600",
      position: "top"
    },
    {
      role: "Risk Analyst",
      description: "Risk assessment and management",
      salary: "$70K - $95K",
      color: "from-red-400 to-red-600",
      position: "middle"
    },
    {
      role: "Audit Manager",
      description: "Lead audit teams and projects",
      salary: "$95K - $130K",
      color: "from-green-400 to-green-600",
      position: "middle-right"
    },
    {
      role: "Chief Audit Executive",
      description: "Strategic audit leadership",
      salary: "$150K - $250K+",
      color: "from-purple-400 to-purple-600",
      position: "bottom"
    }
  ];

  const topHiringCompanies = [
    "EY", "KPMG", "PwC", "HSBC", "Deloitte"
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
      <section className="relative min-h-screen bg-gradient-to-br from-red-50 via-red-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Become a Certified Internal Auditor{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">
                    (CIA – USA)
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                  Audit Leadership Career in 12–18 Months
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  The only globally recognized internal audit credential by The IIA (USA)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-50 via-red-50 to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
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
                Become a Certified Internal Auditor{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">
                  (CIA – USA)
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                Audit Leadership Career in 12–18 Months
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                The only globally recognized internal audit credential by The IIA (USA)
              </p>
            </motion.div>

            {/* Key Badges */}
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center"
              >
                <PhoneIcon className="w-6 h-6 mr-3" />
                Book Free Counselling
              </motion.button>

              {/* Secondary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="bg-white text-red-600 border-2 border-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-red-50 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <DocumentCheckIcon className="w-5 h-5 mr-2" />
                  Check Eligibility
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="text-gray-600 hover:text-red-600 font-medium flex items-center justify-center transition-colors duration-300"
                >
                  <PlayIcon className="w-5 h-5 mr-2" />
                  Watch Career Stories
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
                <div className="font-bold text-gray-900">1,200+ Students</div>
                <div>Successfully certified globally</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Elements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* CIA Certificate Visual */}
            <motion.div
              variants={itemVariants}
              className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">CIA Certificate</h3>
                <div className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold inline-block">
                  Audit Excellence
                </div>
              </div>

              {/* Career Path Cards */}
              <div className="space-y-4">
                {careerPath.map((career, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                      hoveredCard === index 
                        ? 'border-red-300 bg-red-50 shadow-lg' 
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-gray-900">{career.role}</div>
                        <div className="text-sm text-gray-600">{career.description}</div>
                      </div>
                      <div className="text-right">
                        <div className={`font-bold bg-gradient-to-r ${career.color} bg-clip-text text-transparent`}>
                          {career.salary}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating Micro Tags - Top Hiring Companies */}
            <motion.div
              variants={itemVariants}
              className="absolute -bottom-6 left-4 right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-200"
            >
              <div className="text-center">
                <div className="text-sm font-semibold text-gray-700 mb-2">Top Hiring Companies</div>
                <div className="flex flex-wrap justify-center gap-2">
                  {topHiringCompanies.map((company, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className="bg-gradient-to-r from-red-100 to-purple-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium border border-red-200"
                    >
                      {company}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Stats */}
            <motion.div
              variants={itemVariants}
              className="absolute -top-6 -right-6 bg-gradient-to-r from-red-600 to-purple-600 text-white p-4 rounded-2xl shadow-xl"
            >
              <div className="text-center">
                <ChartBarIcon className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">95%</div>
                <div className="text-xs opacity-90">Job Placement</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CIAHero;