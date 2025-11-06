'use client'

import { motion } from 'framer-motion'

export default function Accreditation() {
  const certificationBodies = [
    {
      name: 'IMA (USA)',
      fullName: 'Institute of Management Accountants',
      description: 'Certified Management Accountant',
      logo: '🏛️',
      country: 'United States'
    },
    {
      name: 'AICPA (USA)',
      fullName: 'American Institute of CPAs',
      description: 'Certified Public Accountant',
      logo: '🏛️',
      country: 'United States'
    },
    {
      name: 'ACCA (UK)',
      fullName: 'Association of Chartered Certified Accountants',
      description: 'Global Finance Professional',
      logo: '🏛️',
      country: 'United Kingdom'
    },
    {
      name: 'Prometric',
      fullName: 'Global Testing Centers',
      description: 'Secure Exam Delivery',
      logo: '🏢',
      country: 'Worldwide'
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Enroll at NorthStar',
      description: 'Choose your certification path',
      icon: '📝'
    },
    {
      step: 2,
      title: 'Prepare with Mentorship',
      description: 'Live classes & personal guidance',
      icon: '👨‍🏫'
    },
    {
      step: 3,
      title: 'Register with Official Body',
      description: 'IMA/AICPA/ACCA registration',
      icon: '📋'
    },
    {
      step: 4,
      title: 'Attempt Exams at Prometric',
      description: 'Secure testing centers globally',
      icon: '🏢'
    },
    {
      step: 5,
      title: 'Earn Global Credential',
      description: 'Official certification issued',
      icon: '🏆'
    },
    {
      step: 6,
      title: 'Career Worldwide',
      description: 'Opportunities in 100+ countries',
      icon: '🌍'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Internationally Recognized Certifications.
          </h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            Official Exam Centers. Zero Ambiguity.
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            CMA (US), CPA (US) & ACCA (UK) are the highest finance credentials recognized worldwide.
          </p>
        </motion.div>

        {/* Official Bodies Logos */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificationBodies.map((body, index) => (
              <motion.div
                key={body.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{body.logo}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{body.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{body.fullName}</p>
                <p className="text-sm font-medium text-red-600">{body.description}</p>
                <div className="mt-3 text-xs text-gray-500">{body.country}</div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8 space-y-2">
            <p className="text-gray-600">
              <strong>Exams are conducted at global Prometric centers</strong>
            </p>
            <p className="text-gray-600">
              Certificates issued by IMA / AICPA / ACCA — not any institute
            </p>
          </div>
        </motion.div>

        {/* Process Flow */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Your Path to Global Recognition
          </h3>
          
          <div className="relative">
            {/* Desktop Flow */}
            <div className="hidden lg:block">
              <div className="flex items-center justify-between">
                {processSteps.map((step, index) => (
                  <div key={step.step} className="flex flex-col items-center relative">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 shadow-lg"
                    >
                      {step.step}
                    </motion.div>
                    <div className="text-center max-w-[140px]">
                      <div className="text-2xl mb-2">{step.icon}</div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">{step.title}</h4>
                      <p className="text-xs text-gray-600">{step.description}</p>
                    </div>
                    
                    {/* Arrow */}
                    {index < processSteps.length - 1 && (
                      <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                        className="absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-red-300 to-red-300 origin-left"
                        style={{ width: 'calc(100vw / 6 - 64px)' }}
                      >
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-red-400 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Flow */}
            <div className="lg:hidden space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-xl">{step.icon}</span>
                      <h4 className="font-semibold text-gray-900">{step.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-6 mt-12 w-0.5 h-6 bg-red-200"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final Trust Message */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-2xl p-8 border border-gray-100">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Global Validity. No Limitations.
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Every certification you earn here is valid across <strong>100+ countries</strong>.
              </p>
              <p className="text-gray-600">
                No local limitation. No brand dependency. Pure global recognition.
              </p>
              
              <div className="flex justify-center items-center mt-6 space-x-8">
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Official Certification
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Secure Prometric Exams
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Worldwide Recognition
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}