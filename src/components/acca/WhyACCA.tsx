'use client';

import { motion } from 'framer-motion';
import { 
  GlobeAltIcon, 
  AcademicCapIcon, 
  BriefcaseIcon,
  ArrowRightIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';
import LeadFormButton from '../LeadFormButton';

const WhyACCA = () => {
  const features = [
    {
      icon: GlobeAltIcon,
      title: "Global Recognition",
      description: "180+ countries + Global MNC acceptance",
      details: [
        "Recognized in 180+ countries worldwide",
        "Accepted by Big 4 and Fortune 500 companies",
        "Global mobility for career opportunities",
        "International networking opportunities"
      ],
      color: "from-red-500 to-red-800",
      bgColor: "from-red-50 to-cyan-50"
    },
    {
      icon: AcademicCapIcon,
      title: "Future-ready Curriculum",
      description: "IFRS, Analytics, Business Strategy",
      details: [
        "Latest IFRS standards and regulations",
        "Data analytics and digital skills",
        "Strategic business management",
        "Ethics and professional values"
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      icon: BriefcaseIcon,
      title: "Global Work Mobility",
      description: "UK, UAE, Singapore, India + more",
      details: [
        "Work authorization in multiple countries",
        "Higher salary packages globally",
        "Diverse career opportunities",
        "International exposure and experience"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    }
  ];

  const careerPath = [
    {
      role: "Financial Analyst",
      icon: ChartBarIcon,
      salary: "₹4-8 LPA",
      description: "Entry-level analysis and reporting"
    },
    {
      role: "Tax Consultant",
      icon: CurrencyDollarIcon,
      salary: "₹6-12 LPA",
      description: "Tax planning and compliance"
    },
    {
      role: "Audit Manager",
      icon: BuildingOfficeIcon,
      salary: "₹10-18 LPA",
      description: "Leading audit engagements"
    },
    {
      role: "CFO",
      icon: AcademicCapIcon,
      salary: "₹25-50 LPA",
      description: "Strategic financial leadership"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  

  return (
    <section className="py-8 md:py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">ACCA (UK)?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock global opportunities with the world&apos;s most recognized accounting qualification
          </p>
        </motion.div>

        {/* Premium Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
             
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-gradient-to-br ${feature.bgColor} rounded-3xl p-8 shadow-xl border border-white/50 overflow-hidden group`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent transform rotate-45"></div>
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-md md:text-lg mb-6">{feature.description}</p>

                {/* Details */}
                <ul className="space-y-2 md:space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Career Path Infographic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-4 md:p-12 shadow-xl border border-gray-100"
        >
          <div className="text-center mb-12">
            <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
              Finance Roles ACCA Unlocks
            </h3>
            <p className="text-gray-600 text-md md:text-lg">
              Your aspirational career journey with ACCA qualification
            </p>
          </div>

          {/* Career Path Flow */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
              {careerPath.map((role, index) => (
                <div key={index} className="flex-1 relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-gradient-to-br from-red-50 to-purple-50 rounded-2xl p-6 text-center border border-red-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${
                      index === 0 ? 'from-red-500 to-cyan-500' :
                      index === 1 ? 'from-purple-500 to-pink-500' :
                      index === 2 ? 'from-green-500 to-emerald-500' :
                      'from-orange-500 to-red-500'
                    } flex items-center justify-center mx-auto mb-4`}>
                      <role.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{role.role}</h4>
                    <div className="text-2xl font-bold text-green-600 mb-2">{role.salary}</div>
                    <p className="text-gray-600 text-sm">{role.description}</p>
                  </motion.div>

                  {/* Arrow */}
                  {index < careerPath.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <ArrowRightIcon className="w-6 h-6 text-red-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Arrows */}
            <div className="md:hidden flex flex-col items-center space-y-4 absolute left-1/2 transform -translate-x-1/2 top-0 h-full justify-evenly">
              {[1, 2, 3].map((_, index) => (
                <ArrowRightIcon key={index} className="w-6 h-6 text-red-500 transform rotate-90" />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
           <LeadFormButton formType='acca-journey' variant='primary' isSendOtp={true} >
              Start Your ACCA Journey
            </LeadFormButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyACCA;