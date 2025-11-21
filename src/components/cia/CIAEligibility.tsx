'use client';

import { motion } from 'framer-motion';
import { 
  CheckCircleIcon,
  ClockIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  DocumentCheckIcon,
  ArrowRightIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const CIAEligibility = () => {
  const timelineSteps = [
    {
      id: 1,
      title: 'Study',
      description: 'Prepare for CIA exams',
      icon: AcademicCapIcon,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      duration: '6-12 months',
      details: [
        'No prior experience required',
        'Bachelor\'s degree preferred',
        'Self-paced learning available'
      ]
    },
    {
      id: 2,
      title: 'Pass Exams',
      description: 'Complete all 3 parts',
      icon: DocumentCheckIcon,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      duration: '12-18 months',
      details: [
        'Pass all 3 parts within 4 years',
        'Minimum 600/800 score required',
        'Can appear without experience'
      ]
    },
    {
      id: 3,
      title: 'Gain Experience',
      description: 'Build relevant work experience',
      icon: BriefcaseIcon,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      duration: '2 years',
      details: [
        'Internal audit experience',
        'Can be gained after exams',
        'Various roles qualify'
      ]
    },
    {
      id: 4,
      title: 'Earn Certificate',
      description: 'Receive CIA certification',
      icon: CheckCircleIcon,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      duration: 'Lifetime',
      details: [
        'Global recognition',
        'Professional credibility',
        'Career advancement'
      ]
    }
  ];

  const eligibilityFacts = [
    {
      icon: CheckCircleIcon,
      title: 'No Prior Experience Required',
      description: 'You can start CIA preparation and appear for exams without any work experience',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: ClockIcon,
      title: 'Experience After Exams',
      description: 'Gain the required 2 years of experience after passing all exam parts',
      color: 'text-red-600 bg-red-100'
    },
    {
      icon: AcademicCapIcon,
      title: 'Educational Flexibility',
      description: 'Bachelor\'s degree preferred but alternative qualifications accepted',
      color: 'text-purple-600 bg-purple-100'
    }
  ];

  return (
    <section id="eligibility" className="py-8 md:py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircleIcon className="w-4 h-4 mr-2" />
            Eligibility Made Simple
          </div>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6">
            CIA Eligibility & 
            <span className="block text-green-600 mt-2">Experience Requirements</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Clear path to CIA certification. No experience barriers to get started.
          </p>
        </motion.div>

        {/* Fear Removal Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 md:p-12 text-white mb-16"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <ExclamationTriangleIcon className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl md:text-3xl font-bold mb-4">
              &quot;Am I Eligible?&quot; Fear Removed ✅
            </h3>
            <p className="text-white text-md md:text-lg mb-8 max-w-2xl mx-auto">
              <strong>No prior experience required to appear for CIA exams.</strong> You can start your journey today 
              and gain experience while or after completing your certification.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {eligibilityFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm"
                >
                  <fact.icon className="w-8 h-8 text-black mb-4 mx-auto" />
                  <h4 className="font-bold text-black mb-2">{fact.title}</h4>
                  <p className="text-green-600 text-sm">{fact.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline Visual */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Your CIA Journey Timeline
          </motion.h3>

          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-green-500 via-purple-500 to-orange-500 rounded-full transform -translate-y-1/2"></div>
              
              {/* Timeline Steps */}
              <div className="grid grid-cols-4 gap-8 relative">
                {timelineSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="text-center"
                  >
                    {/* Step Circle */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Step Content */}
                    <div className={`${step.bgColor} rounded-2xl p-6 shadow-lg`}>
                      <div className="flex items-center justify-center mb-3">
                        <span className="text-2xl font-bold text-gray-900">{step.id}</span>
                        <ArrowRightIcon className="w-5 h-5 text-gray-400 ml-2" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <div className="text-sm font-medium text-gray-700 mb-4">
                        Duration: {step.duration}
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`${step.bgColor} rounded-2xl p-6 flex-1`}>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {step.id}. {step.title}
                  </h4>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <div className="text-sm font-medium text-gray-700 mb-3">
                    Duration: {step.duration}
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why This Path Works
            </h3>
            <p className="text-sm md:text-lg text-gray-600 text-lg">
              Flexible approach that removes barriers and accelerates your career growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <AcademicCapIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Start Immediately</h4>
              <p className="text-sm text-gray-600">Begin preparation without waiting for experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Flexible Timeline</h4>
              <p className="text-sm text-gray-600">Gain experience while or after studying</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BriefcaseIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Career Boost</h4>
              <p className="text-sm text-gray-600">Certification enhances job prospects</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Global Recognition</h4>
              <p className="text-sm text-gray-600">Worldwide acceptance and credibility</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CIAEligibility;