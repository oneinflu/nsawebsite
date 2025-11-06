'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const ApplicationProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const applicationSteps = [
    {
      id: 1,
      title: 'Submit Application',
      subtitle: 'Quick & Simple Form',
      description: 'Fill out our streamlined application form with your academic details, career goals, and motivation. Takes just 5-10 minutes to complete.',
      icon: '📝',
      duration: '5-10 minutes',
      requirements: [
        'Personal & academic information',
        'Statement of purpose (200 words)',
        'Career goals & aspirations',
        'Contact details'
      ],
      color: 'from-blue-500 to-cyan-400',
      bgColor: 'from-blue-500/10 to-cyan-400/10'
    },
    {
      id: 2,
      title: 'Document Verification',
      subtitle: 'Secure & Fast Review',
      description: 'Our team reviews your application and verifies documents within 48 hours. You\'ll receive email updates throughout the process.',
      icon: '🔍',
      duration: '24-48 hours',
      requirements: [
        'Academic transcripts/marksheets',
        'Identity proof (Aadhar/Passport)',
        'Recent photograph',
        'Work experience (if applicable)'
      ],
      color: 'from-purple-500 to-pink-400',
      bgColor: 'from-purple-500/10 to-pink-400/10'
    },
    {
      id: 3,
      title: 'Selection & Enrollment',
      subtitle: 'Welcome to Super 300',
      description: 'Successful candidates receive scholarship confirmation and enrollment details. Begin your journey toward global finance excellence.',
      icon: '🎉',
      duration: '3-5 days',
      requirements: [
        'Scholarship award letter',
        'Course enrollment details',
        'Mentorship program access',
        'Welcome kit & resources'
      ],
      color: 'from-amber-500 to-orange-400',
      bgColor: 'from-amber-500/10 to-orange-400/10'
    }
  ];

  return (
    <section 
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 mb-6"
          >
            <span className="text-2xl">🚀</span>
            <span className="text-blue-300 font-medium">Simple Process</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              How to Apply
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Three simple steps to secure your ₹90,000 scholarship. 
            Our transparent process ensures every deserving candidate gets a fair opportunity.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-amber-500 rounded-full" />

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {applicationSteps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={stepVariants}
                onHoverStart={() => setActiveStep(index)}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Step Content */}
                <div className="flex-1 max-w-lg">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative group"
                  >
                    {/* Card Background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.bgColor} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`} />
                    
                    <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 group-hover:border-slate-600/70 transition-all duration-500">
                      {/* Step Number & Icon */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center text-white font-bold text-lg`}>
                          {step.id}
                        </div>
                        <div className="text-4xl">{step.icon}</div>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 font-medium mb-4">
                        {step.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-slate-300 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Duration Badge */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${step.color} rounded-full text-white text-sm font-medium mb-6`}>
                        <span>⏱️</span>
                        <span>{step.duration}</span>
                      </div>

                      {/* Requirements */}
                      <div>
                        <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                        <div className="space-y-2">
                          {step.requirements.map((req, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ duration: 0.5, delay: 0.1 * idx }}
                              className="flex items-center gap-3"
                            >
                              <div className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full flex-shrink-0`} />
                              <span className="text-slate-300 text-sm">
                                {req}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node (Desktop) */}
                <div className="hidden lg:block relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 * index }}
                    className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg z-10 relative`}
                  >
                    {step.id}
                  </motion.div>
                  
                  {/* Pulse Effect */}
                  <motion.div
                    animate={{
                      scale: activeStep === index ? [1, 1.5, 1] : 1,
                      opacity: activeStep === index ? [0.5, 0, 0.5] : 0
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full`}
                  />
                </div>

                {/* Visual Element */}
                <div className="flex-1 max-w-lg">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="relative"
                  >
                    <div className={`w-full h-64 bg-gradient-to-br ${step.bgColor} rounded-2xl border border-slate-700/50 flex items-center justify-center text-8xl`}>
                      {step.icon}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Application
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-slate-800/80 backdrop-blur-xl text-white font-semibold rounded-xl border border-slate-600 hover:border-slate-500 transition-all duration-300"
            >
              Download Checklist
            </motion.button>
          </div>

          <p className="text-slate-400 text-sm mt-6 max-w-2xl mx-auto">
            Need help with your application? Our support team is available 24/7 to assist you through every step of the process.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationProcess;