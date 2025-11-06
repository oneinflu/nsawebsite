/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronRightIcon, 
  ChevronLeftIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  DocumentCheckIcon,
  MapPinIcon,
  CheckCircleIcon,
  StarIcon,
  ArrowPathIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

interface WizardStep {
  id: string
  question: string
  options: Array<{
    id: string
    label: string
    description?: string
    icon?: any
  }>
}

interface StateBoard {
  name: string
  code: string
  requirements: string[]
  benefits: string[]
  difficulty: 'Easy' | 'Medium' | 'Hard'
  popularity: number
  recommended: boolean
}

export default function StateBoardWizard() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)

  const wizardSteps: WizardStep[] = [
    {
      id: 'education',
      question: 'What is your educational background?',
      options: [
        {
          id: 'bcom',
          label: 'B.Com / B.Com (Hons)',
          description: 'Bachelor of Commerce',
          icon: AcademicCapIcon
        },
        {
          id: 'ca',
          label: 'CA / CA Inter',
          description: 'Chartered Accountant',
          icon: DocumentCheckIcon
        },
        {
          id: 'mba',
          label: 'MBA Finance',
          description: 'Master of Business Administration',
          icon: AcademicCapIcon
        },
        {
          id: 'other',
          label: 'Other Degree',
          description: 'Engineering, Science, Arts, etc.',
          icon: AcademicCapIcon
        }
      ]
    },
    {
      id: 'license',
      question: 'Do you need a CPA license to practice in a US state?',
      options: [
        {
          id: 'yes',
          label: 'Yes, I want to practice in the US',
          description: 'Need license for public accounting practice',
          icon: DocumentCheckIcon
        },
        {
          id: 'no',
          label: 'No, just the certification',
          description: 'For career advancement & credibility',
          icon: CheckCircleIcon
        },
        {
          id: 'maybe',
          label: 'Not sure yet',
          description: 'Want to keep options open',
          icon: ArrowPathIcon
        }
      ]
    },
    {
      id: 'mobility',
      question: 'What are your international career goals?',
      options: [
        {
          id: 'usa',
          label: 'Work in USA',
          description: 'Relocate to United States',
          icon: GlobeAltIcon
        },
        {
          id: 'middle_east',
          label: 'Middle East opportunities',
          description: 'UAE, Saudi Arabia, Qatar, etc.',
          icon: GlobeAltIcon
        },
        {
          id: 'india',
          label: 'Stay in India',
          description: 'Work with MNCs in India',
          icon: MapPinIcon
        },
        {
          id: 'global',
          label: 'Global flexibility',
          description: 'Want maximum mobility options',
          icon: GlobeAltIcon
        }
      ]
    }
  ]

  const stateBoards: StateBoard[] = [
    {
      name: 'New York',
      code: 'NY',
      requirements: ['150 credit hours', '1 year experience', 'Ethics exam'],
      benefits: ['Global recognition', 'No residency requirement', 'Reciprocity with 54 jurisdictions'],
      difficulty: 'Medium',
      popularity: 95,
      recommended: true
    },
    {
      name: 'Washington',
      code: 'WA',
      requirements: ['150 credit hours', '1 year experience', 'No ethics exam'],
      benefits: ['No ethics exam', 'Easy licensing process', 'Good for international candidates'],
      difficulty: 'Easy',
      popularity: 88,
      recommended: true
    },
    {
      name: 'Guam',
      code: 'GU',
      requirements: ['120 credit hours', '2 years experience', 'No ethics exam'],
      benefits: ['Lower education requirement', 'US territory benefits', 'Cost-effective'],
      difficulty: 'Easy',
      popularity: 75,
      recommended: true
    },
    {
      name: 'California',
      code: 'CA',
      requirements: ['150 credit hours', '1 year experience', 'Ethics exam', 'Additional requirements'],
      benefits: ['Large market', 'High demand', 'Premium opportunities'],
      difficulty: 'Hard',
      popularity: 70,
      recommended: false
    }
  ]

  const getRecommendedBoards = () => {
    const education = answers.education
    const license = answers.license
    const mobility = answers.mobility

    let recommended = [...stateBoards]

    // Filter based on answers
    if (education === 'other' || license === 'no') {
      // Prioritize easier options
      recommended = recommended.sort((a, b) => {
        if (a.difficulty === 'Easy' && b.difficulty !== 'Easy') return -1
        if (b.difficulty === 'Easy' && a.difficulty !== 'Easy') return 1
        return b.popularity - a.popularity
      })
    }

    if (mobility === 'usa') {
      // Prioritize NY and WA for US work
      recommended = recommended.sort((a, b) => {
        if ((a.code === 'NY' || a.code === 'WA') && !(b.code === 'NY' || b.code === 'WA')) return -1
        if ((b.code === 'NY' || b.code === 'WA') && !(a.code === 'NY' || a.code === 'WA')) return 1
        return b.popularity - a.popularity
      })
    }

    return recommended.slice(0, 3)
  }

  const handleAnswer = (optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [wizardSteps[currentStep].id]: optionId
    }))

    if (currentStep < wizardSteps.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      setShowResults(true)
    }
  }

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const resetWizard = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResults(false)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-50'
      case 'Medium': return 'text-yellow-600 bg-yellow-50'
      case 'Hard': return 'text-red-600 bg-red-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  if (showResults) {
    const recommendedBoards = getRecommendedBoards()
    
    return (
      <section className="py-20 bg-gradient-to-br from-red-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <CheckCircleIcon className="w-4 h-4" />
              Analysis Complete
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Your Recommended CPA State Boards
            </h2>
            <p className="text-xl text-slate-600">
              Based on your profile, here are the best options for you
            </p>
          </motion.div>

          <div className="space-y-6 mb-12">
            {recommendedBoards.map((board, index) => (
              <motion.div
                key={board.code}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${
                  index === 0 ? 'border-red-500 ring-4 ring-red-100' : 'border-slate-200'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    {index === 0 && (
                      <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        #1 RECOMMENDED
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-slate-900">
                      {board.name} ({board.code})
                    </h3>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(board.popularity / 20)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-slate-500 ml-1">
                        {board.popularity}% match
                      </span>
                    </div>
                  </div>
                  
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(board.difficulty)}`}>
                    {board.difficulty}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {board.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center gap-2 text-slate-600">
                          <CheckCircleIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {board.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2 text-slate-600">
                          <StarIcon className="w-4 h-4 text-red-500 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-red-600 to-red-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Need Expert Guidance on State Board Selection?
            </h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Our CPA advisors have helped 1000+ students choose the right state board. 
              Get personalized guidance based on your specific situation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowContactModal(true)}
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <PhoneIcon className="w-5 h-5" />
                Talk to CPA Advisor
              </button>
              
              <button
                onClick={resetWizard}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ArrowPathIcon className="w-5 h-5" />
                Retake Quiz
              </button>
            </div>
          </motion.div>
        </div>

        {/* Contact Modal */}
        <AnimatePresence>
          {showContactModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
              >
                <div className="text-center mb-6">
                  <PhoneIcon className="w-16 h-16 text-red-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    Get Expert CPA Guidance
                  </h3>
                  <p className="text-slate-600">
                    Speak with our CPA advisor about your state board selection
                  </p>
                </div>
                
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                    <option value="">Preferred Time to Call</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Schedule Call Back
                  </button>
                </form>
                
                <div className="text-center mt-4">
                  <p className="text-sm text-slate-500">
                    ✅ Free consultation • ✅ Expert guidance • ✅ Call within 2 hours
                  </p>
                </div>
                
                <button
                  onClick={() => setShowContactModal(false)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-red-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <MapPinIcon className="w-4 h-4" />
            State Board Selection Wizard
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Which CPA State Board is Right for You?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Answer 3 quick questions to get personalized state board recommendations based on your background and career goals
          </motion.p>
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-slate-600">
              Question {currentStep + 1} of {wizardSteps.length}
            </span>
            <span className="text-sm font-medium text-slate-600">
              {Math.round(((currentStep + 1) / wizardSteps.length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-red-500 to-red-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / wizardSteps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              {wizardSteps[currentStep].question}
            </h3>

            <div className="space-y-4">
              {wizardSteps[currentStep].options.map((option, index) => {
                const IconComponent = option.icon
                return (
                  <motion.button
                    key={option.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleAnswer(option.id)}
                    className="w-full p-6 text-left border-2 border-slate-200 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-red-100 p-3 rounded-lg group-hover:bg-red-200 transition-colors">
                        <IconComponent className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800 mb-1">
                          {option.label}
                        </h4>
                        {option.description && (
                          <p className="text-slate-600 text-sm">
                            {option.description}
                          </p>
                        )}
                      </div>
                      <ChevronRightIcon className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors" />
                    </div>
                  </motion.button>
                )
              })}
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <button
                onClick={goBack}
                disabled={currentStep === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  currentStep === 0
                    ? 'text-slate-400 cursor-not-allowed'
                    : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100'
                }`}
              >
                <ChevronLeftIcon className="w-4 h-4" />
                Previous
              </button>
              
              <div className="text-sm text-slate-500 flex items-center">
                Click an option to continue
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Benefits Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-2 text-slate-600">
              <CheckCircleIcon className="w-5 h-5 text-green-500" />
              <span>Personalized recommendations</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-600">
              <CheckCircleIcon className="w-5 h-5 text-green-500" />
              <span>Expert CPA guidance</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-600">
              <CheckCircleIcon className="w-5 h-5 text-green-500" />
              <span>Free consultation included</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}