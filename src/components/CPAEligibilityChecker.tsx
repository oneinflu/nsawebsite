/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  CheckCircleIcon,
 
  QuestionMarkCircleIcon,
  AcademicCapIcon,
  ClockIcon,
  DocumentCheckIcon,
  PhoneIcon,
  EnvelopeIcon,
  UserIcon,
  ExclamationTriangleIcon,
  SparklesIcon,
  ArrowRightIcon,
 
} from '@heroicons/react/24/outline'

interface EligibilityResult {
  status: 'eligible' | 'maybe' | 'not-eligible'
  title: string
  message: string
  nextSteps: string[]
  color: string
  icon: any
}

export default function CPAEligibilityChecker() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [result, setResult] = useState<EligibilityResult | null>(null)
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const questions = [
    {
      id: 'education',
      question: 'What is your highest educational qualification?',
      options: [
        { value: 'bcom', label: 'B.Com (Bachelor of Commerce)' },
        { value: 'bba', label: 'BBA (Bachelor of Business Administration)' },
        { value: 'ca', label: 'CA (Chartered Accountant)' },
        { value: 'mcom', label: 'M.Com (Master of Commerce)' },
        { value: 'mba', label: 'MBA (Master of Business Administration)' },
        { value: 'other', label: 'Other Bachelor\'s/Master\'s Degree' },
        { value: 'diploma', label: 'Diploma/12th Pass' }
      ]
    },
    {
      id: 'experience',
      question: 'How many years of accounting/finance experience do you have?',
      options: [
        { value: '0', label: 'No experience (Fresher)' },
        { value: '1-2', label: '1-2 years' },
        { value: '3-5', label: '3-5 years' },
        { value: '5+', label: '5+ years' }
      ]
    },
    {
      id: 'goal',
      question: 'What is your primary goal with CPA?',
      options: [
        { value: 'us-job', label: 'Work in the USA' },
        { value: 'india-mnc', label: 'Work for MNCs in India' },
        { value: 'middle-east', label: 'Work in Middle East' },
        { value: 'freelance', label: 'Start freelance practice' },
        { value: 'career-growth', label: 'Career advancement' }
      ]
    },
    {
      id: 'timeline',
      question: 'When do you want to start your CPA journey?',
      options: [
        { value: 'immediately', label: 'Immediately' },
        { value: '1-3months', label: 'Within 1-3 months' },
        { value: '3-6months', label: 'Within 3-6 months' },
        { value: '6months+', label: 'After 6 months' }
      ]
    }
  ]

  const calculateEligibility = (): EligibilityResult => {
    const education = answers.education
   

    // Highly Eligible Cases
    if (['bcom', 'ca', 'mcom', 'mba', 'bba'].includes(education)) {
      return {
        status: 'eligible',
        title: '🎉 Congratulations! You\'re Highly Eligible for CPA',
        message: 'Your educational background perfectly aligns with CPA requirements. You can start your CPA journey immediately!',
        nextSteps: [
          'Choose your preferred state board (NY, WA, or Guam)',
          'Get your transcripts evaluated by NASBA',
          'Start with our comprehensive CPA prep program',
          'Begin studying for your first CPA section'
        ],
        color: 'green',
        icon: CheckCircleIcon
      }
    }

    // Maybe Eligible Cases
    if (education === 'other') {
      return {
        status: 'maybe',
        title: '🤔 You Might Be Eligible - Let\'s Verify!',
        message: 'Your degree may qualify for CPA, but we need to review your specific coursework and credits.',
        nextSteps: [
          'Get a free transcript evaluation',
          'Identify any additional courses needed',
          'Consider credit-bridging programs if required',
          'Plan your CPA preparation timeline'
        ],
        color: 'yellow',
        icon: QuestionMarkCircleIcon
      }
    }

    // Not Currently Eligible
    return {
      status: 'not-eligible',
      title: '⚠️ Additional Requirements Needed',
      message: 'You\'ll need to complete additional educational requirements before starting CPA, but don\'t worry - we can help!',
      nextSteps: [
        'Complete a bachelor\'s degree in accounting/business',
        'Consider our bridge programs for faster qualification',
        'Explore alternative certifications like ACCA',
        'Plan your educational pathway with our counselors'
      ],
      color: 'red',
      icon: ExclamationTriangleIcon
    }
  }

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value }
    setAnswers(newAnswers)

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Calculate result
      const eligibilityResult = calculateEligibility()
      setResult(eligibilityResult)
      setShowLeadForm(true)
    }
  }

  const resetChecker = () => {
    setCurrentStep(0)
    setAnswers({})
    setResult(null)
    setShowLeadForm(false)
    setIsSubmitted(false)
  }

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const getProgressPercentage = () => {
    return ((currentStep + 1) / questions.length) * 100
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <DocumentCheckIcon className="w-4 h-4" />
            Eligibility Assessment
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Check Your CPA Eligibility
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Take our quick 4-question assessment to discover if you&apos;re eligible for CPA and get personalized guidance
          </motion.p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          
          {!result && (
            <>
              {/* Progress Bar */}
              <div className="bg-slate-50 p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-slate-600">
                    Question {currentStep + 1} of {questions.length}
                  </span>
                  <span className="text-sm font-medium text-blue-600">
                    {Math.round(getProgressPercentage())}% Complete
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${getProgressPercentage()}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="p-8">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">
                    {questions[currentStep].question}
                  </h3>

                  <div className="space-y-3">
                    {questions[currentStep].options.map((option, index) => (
                      <motion.button
                        key={option.value}
                        onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full p-4 text-left border-2 border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-slate-800 group-hover:text-blue-800">
                            {option.label}
                          </span>
                          <ArrowRightIcon className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </>
          )}

          {/* Results & Lead Form */}
          {result && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8"
              >
                {!showLeadForm ? (
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
                      result.color === 'green' ? 'bg-green-100' :
                      result.color === 'yellow' ? 'bg-yellow-100' : 'bg-red-100'
                    }`}>
                      <result.icon className={`w-10 h-10 ${
                        result.color === 'green' ? 'text-green-600' :
                        result.color === 'yellow' ? 'text-yellow-600' : 'text-red-600'
                      }`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {result.title}
                    </h3>
                    
                    <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                      {result.message}
                    </p>

                    <button
                      onClick={() => setShowLeadForm(true)}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Get Personalized Guidance
                    </button>
                  </div>
                ) : !isSubmitted ? (
                  <div className="max-w-2xl mx-auto">
                    {/* Result Summary */}
                    <div className={`p-6 rounded-xl mb-8 ${
                      result.color === 'green' ? 'bg-green-50 border border-green-200' :
                      result.color === 'yellow' ? 'bg-yellow-50 border border-yellow-200' : 'bg-red-50 border border-red-200'
                    }`}>
                      <div className="flex items-start gap-4">
                        <result.icon className={`w-8 h-8 mt-1 ${
                          result.color === 'green' ? 'text-green-600' :
                          result.color === 'yellow' ? 'text-yellow-600' : 'text-red-600'
                        }`} />
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">{result.title}</h4>
                          <p className="text-slate-700 mb-4">{result.message}</p>
                          
                          <div className="space-y-2">
                            <p className="font-semibold text-slate-800">Your Next Steps:</p>
                            <ul className="space-y-1">
                              {result.nextSteps.map((step, index) => (
                                <li key={index} className="flex items-start gap-2 text-slate-600">
                                  <span className="text-blue-500 font-bold">{index + 1}.</span>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Lead Capture Form */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
                      <div className="text-center mb-6">
                        <SparklesIcon className="w-12 h-12 mx-auto mb-4 opacity-80" />
                        <h3 className="text-2xl font-bold mb-2">Get Your Personalized CPA Roadmap</h3>
                        <p className="text-blue-100">
                          Our CPA experts will create a customized plan based on your eligibility results
                        </p>
                      </div>

                      <form onSubmit={handleLeadSubmit} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="relative">
                            <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                              type="text"
                              placeholder="Your Full Name"
                              required
                              className="w-full pl-10 pr-4 py-3 bg-white text-slate-900 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                            />
                          </div>
                          <div className="relative">
                            <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                              type="tel"
                              placeholder="Phone Number"
                              required
                              className="w-full pl-10 pr-4 py-3 bg-white text-slate-900 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                            />
                          </div>
                        </div>
                        
                        <div className="relative">
                          <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="email"
                            placeholder="Email Address"
                            required
                            className="w-full pl-10 pr-4 py-3 bg-white text-slate-900 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-white text-blue-600 py-4 px-6 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                          Get My Personalized CPA Roadmap
                        </button>
                      </form>

                      <div className="text-center mt-4">
                        <p className="text-sm text-blue-100">
                          ✅ Free consultation • ✅ Personalized guidance • ✅ No spam, ever
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center max-w-2xl mx-auto">
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircleIcon className="w-10 h-10 text-green-600" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Thank You! Your Roadmap is Being Prepared
                    </h3>
                    
                    <p className="text-lg text-slate-600 mb-8">
                      Our CPA experts will contact you within 24 hours with your personalized roadmap and next steps.
                    </p>

                    <div className="bg-blue-50 rounded-xl p-6 mb-8">
                      <h4 className="font-bold text-slate-900 mb-4">What happens next?</h4>
                      <div className="space-y-3 text-left">
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                          <span className="text-slate-700">Expert review of your eligibility results</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                          <span className="text-slate-700">Personalized CPA roadmap creation</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                          <span className="text-slate-700">One-on-one consultation call</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                          <span className="text-slate-700">Enrollment guidance and support</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={resetChecker}
                      className="bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors duration-300"
                    >
                      Take Assessment Again
                    </button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-500" />
              <span className="text-sm">5000+ Students Assessed</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-5 h-5 text-blue-500" />
              <span className="text-sm">2-Minute Assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <AcademicCapIcon className="w-5 h-5 text-purple-500" />
              <span className="text-sm">Expert Guidance</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}