'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  CurrencyDollarIcon,
  CalculatorIcon,
 
  GlobeAltIcon,
  CreditCardIcon,
  PhoneIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,

  StarIcon,
  ClockIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'

export default function CPAFeesROI() {
  const [selectedEMI, setSelectedEMI] = useState(12)
  const [showEMIModal, setShowEMIModal] = useState(false)
  const [activeTab, setActiveTab] = useState('breakdown')

  const feeBreakdown = {
    examFees: 956, // USD
    evaluation: 350, // USD
    coaching: 199000, // INR
    totalUSD: 1306,
    totalINR: 199000,
    totalCombined: 308000 // Approximate total in INR
  }

  const salaryComparison = {
    india: {
      entry: 800000,
      mid: 1500000,
      senior: 2500000
    },
    us: {
      entry: 4500000, // 55k USD in INR
      mid: 6500000, // 80k USD in INR
      senior: 9500000 // 115k USD in INR
    }
  }

  const emiOptions = [
    { months: 6, amount: 33167, interest: 0 },
    { months: 12, amount: 16583, interest: 8 },
    { months: 18, amount: 11389, interest: 12 },
    { months: 24, amount: 8750, interest: 15 }
  ]

  const calculateROI = () => {
    const investment = feeBreakdown.totalCombined
    const firstYearSalary = salaryComparison.us.entry
    return Math.round(firstYearSalary / investment * 10) / 10
  }

  const formatCurrency = (amount: number, currency: 'INR' | 'USD' = 'INR') => {
    if (currency === 'USD') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
      }).format(amount)
    }
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(amount)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <CurrencyDollarIcon className="w-4 h-4" />
            Investment & Returns
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            CPA Investment & ROI Calculator
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Complete fee breakdown, flexible EMI options, and salary comparison to justify your CPA investment
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-white rounded-xl p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('breakdown')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'breakdown'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              Fee Breakdown
            </button>
            <button
              onClick={() => setActiveTab('emi')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'emi'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              EMI Calculator
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'comparison'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              Salary Comparison
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* Fee Breakdown Tab */}
          {activeTab === 'breakdown' && (
            <motion.div
              key="breakdown"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid lg:grid-cols-2 gap-8"
            >
              {/* Fee Structure */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <BanknotesIcon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Complete Fee Structure</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-slate-800">CPA Exam Fees</p>
                      <p className="text-sm text-slate-600">All 4 sections (AICPA fees)</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-slate-900">
                        {formatCurrency(feeBreakdown.examFees, 'USD')}
                      </p>
                      <p className="text-sm text-slate-500">≈ ₹79,648</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-slate-800">Credential Evaluation</p>
                      <p className="text-sm text-slate-600">NASBA/State board evaluation</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-slate-900">
                        {formatCurrency(feeBreakdown.evaluation, 'USD')}
                      </p>
                      <p className="text-sm text-slate-500">≈ ₹29,167</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg border-2 border-red-200">
                    <div>
                      <p className="font-semibold text-slate-800">NorthStar CPA Coaching</p>
                      <p className="text-sm text-slate-600">Complete program + materials</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-red-600">
                        {formatCurrency(feeBreakdown.coaching)}
                      </p>
                      <p className="text-sm text-green-600">Best value in market</p>
                    </div>
                  </div>

                  <div className="border-t-2 border-slate-200 pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold text-xl text-slate-900">Total Investment</p>
                        <p className="text-sm text-slate-600">Complete CPA journey</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-2xl text-green-600">
                          {formatCurrency(feeBreakdown.totalCombined)}
                        </p>
                        <p className="text-sm text-slate-500">One-time investment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROI Highlight */}
              <div className="bg-gradient-to-br from-green-600 to-red-600 rounded-2xl shadow-xl p-8 text-white">
                <div className="text-center mb-8">
                  <ArrowTrendingUpIcon className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <h3 className="text-3xl font-bold mb-2">Return on Investment</h3>
                  <p className="text-green-100">Your CPA investment pays back quickly</p>
                </div>

                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-2">{calculateROI()}x</div>
                    <p className="text-green-100">ROI in first year alone</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-black">{formatCurrency(feeBreakdown.totalCombined)}</p>
                      <p className="text-black text-sm">Total Investment</p>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-black">{formatCurrency(salaryComparison.us.entry)}</p>
                      <p className="text-black text-sm">First Year Salary</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-5 h-5" />
                      <span>Break-even in 3-4 months</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-5 h-5" />
                      <span>5-year career ROI: 25-30x</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-5 h-5" />
                      <span>Lifetime earning boost: ₹5+ Crores</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* EMI Calculator Tab */}
          {activeTab === 'emi' && (
            <motion.div
              key="emi"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <CalculatorIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">EMI Calculator</h3>
                    <p className="text-slate-600">Choose your comfortable payment plan</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {emiOptions.map((option) => (
                    <motion.button
                      key={option.months}
                      onClick={() => setSelectedEMI(option.months)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                        selectedEMI === option.months
                          ? 'border-green-500 bg-green-50 shadow-lg'
                          : 'border-slate-200 hover:border-green-300'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl font-bold text-slate-900 mb-1">
                          {option.months} Months
                        </div>
                        <div className="text-lg font-semibold text-green-600 mb-2">
                          {formatCurrency(option.amount)}/mo
                        </div>
                        <div className="text-sm text-slate-500">
                          {option.interest === 0 ? 'No Interest' : `${option.interest}% Interest`}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Selected EMI Details */}
                <div className="bg-gradient-to-r from-green-50 to-red-50 rounded-xl p-6 mb-8">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Monthly EMI</p>
                      <p className="text-2xl font-bold text-green-600">
                        {formatCurrency(emiOptions.find(opt => opt.months === selectedEMI)?.amount || 0)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Total Amount</p>
                      <p className="text-2xl font-bold text-slate-900">
                        {formatCurrency((emiOptions.find(opt => opt.months === selectedEMI)?.amount || 0) * selectedEMI)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Interest Rate</p>
                      <p className="text-2xl font-bold text-red-600">
                        {emiOptions.find(opt => opt.months === selectedEMI)?.interest || 0}%
                      </p>
                    </div>
                  </div>
                </div>

                {/* EMI Benefits */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-800 mb-3">EMI Benefits</h4>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-green-500" />
                      <span className="text-slate-600">No processing fees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-green-500" />
                      <span className="text-slate-600">Flexible payment dates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-green-500" />
                      <span className="text-slate-600">Early closure option</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-green-500" />
                      <span className="text-slate-600">Digital documentation</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-800 mb-3">Quick Approval</h4>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-5 h-5 text-red-500" />
                      <span className="text-slate-600">2-minute application</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-5 h-5 text-red-500" />
                      <span className="text-slate-600">Instant approval</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-5 h-5 text-red-500" />
                      <span className="text-slate-600">Start learning immediately</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-5 h-5 text-red-500" />
                      <span className="text-slate-600">No income proof required</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setShowEMIModal(true)}
                  className="w-full bg-gradient-to-r from-green-600 to-red-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Request EMI Plan - Get Instant Approval
                </button>
              </div>
            </motion.div>
          )}

          {/* Salary Comparison Tab */}
          {activeTab === 'comparison' && (
            <motion.div
              key="comparison"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-6xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <GlobeAltIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">India vs US Salary Comparison</h3>
                    <p className="text-slate-600">See the dramatic difference CPA makes to your earning potential</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* India Salaries */}
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-2">
                        <MapPinIcon className="w-4 h-4" />
                        India Market
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">Traditional Accounting Roles</h4>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-slate-50 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold text-slate-800">Entry Level (0-2 years)</p>
                            <p className="text-sm text-slate-600">Junior Accountant, Analyst</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-slate-900">
                              {formatCurrency(salaryComparison.india.entry)}
                            </p>
                            <p className="text-sm text-slate-500">per annum</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-50 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold text-slate-800">Mid Level (3-5 years)</p>
                            <p className="text-sm text-slate-600">Senior Analyst, Manager</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-slate-900">
                              {formatCurrency(salaryComparison.india.mid)}
                            </p>
                            <p className="text-sm text-slate-500">per annum</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-50 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold text-slate-800">Senior Level (6+ years)</p>
                            <p className="text-sm text-slate-600">Finance Manager, Controller</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-slate-900">
                              {formatCurrency(salaryComparison.india.senior)}
                            </p>
                            <p className="text-sm text-slate-500">per annum</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* US Salaries */}
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-2">
                        <StarIcon className="w-4 h-4" />
                        With CPA (US Market)
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">CPA Professional Roles</h4>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold text-slate-800">Entry Level CPA</p>
                            <p className="text-sm text-slate-600">Staff Accountant, Auditor</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-green-600">
                              {formatCurrency(salaryComparison.us.entry)}
                            </p>
                            <p className="text-sm text-green-600">≈ $55,000 USD</p>
                          </div>
                        </div>
                        <div className="mt-2 text-center">
                          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                            5.6x Higher!
                          </span>
                        </div>
                      </div>

                      <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold text-slate-800">Mid Level CPA</p>
                            <p className="text-sm text-slate-600">Senior Accountant, Manager</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-green-600">
                              {formatCurrency(salaryComparison.us.mid)}
                            </p>
                            <p className="text-sm text-green-600">≈ $80,000 USD</p>
                          </div>
                        </div>
                        <div className="mt-2 text-center">
                          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                            4.3x Higher!
                          </span>
                        </div>
                      </div>

                      <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold text-slate-800">Senior Level CPA</p>
                            <p className="text-sm text-slate-600">Controller, Finance Director</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-green-600">
                              {formatCurrency(salaryComparison.us.senior)}
                            </p>
                            <p className="text-sm text-green-600">≈ $115,000 USD</p>
                          </div>
                        </div>
                        <div className="mt-2 text-center">
                          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                            3.8x Higher!
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lifetime Earnings Comparison */}
                <div className="mt-12 bg-gradient-to-r from-purple-50 to-red-50 rounded-xl p-8">
                  <h4 className="text-2xl font-bold text-center text-slate-900 mb-8">
                    Lifetime Earnings Comparison (30-year career)
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="bg-slate-100 rounded-lg p-6">
                        <p className="text-lg font-semibold text-slate-600 mb-2">Without CPA (India)</p>
                        <p className="text-4xl font-bold text-slate-900">₹6.2 Cr</p>
                        <p className="text-sm text-slate-500 mt-2">Average lifetime earnings</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-green-500 to-red-500 rounded-lg p-6 text-white">
                        <p className="text-lg font-semibold mb-2">With CPA (Global)</p>
                        <p className="text-4xl font-bold">₹18.5 Cr</p>
                        <p className="text-sm opacity-90 mt-2">Average lifetime earnings</p>
                        <div className="mt-4">
                          <span className="bg-white text-green-600 px-4 py-2 rounded-full font-bold">
                            ₹12.3 Cr MORE!
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-red-600 to-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Career?</h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Join 5000+ professionals who chose NorthStar for their CPA journey. 
              Get personalized guidance and flexible payment options.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowEMIModal(true)}
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <CreditCardIcon className="w-5 h-5" />
                Request EMI Plan
              </button>
              
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center justify-center gap-2">
                <PhoneIcon className="w-5 h-5" />
                Talk to Advisor
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* EMI Request Modal */}
      <AnimatePresence>
        {showEMIModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            >
              <div className="text-center mb-6">
                <CreditCardIcon className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Request EMI Plan
                </h3>
                <p className="text-slate-600">
                  Get instant approval for your preferred EMI option
                </p>
              </div>
              
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="">Select EMI Duration</option>
                  <option value="6">6 Months - ₹33,167/month</option>
                  <option value="12">12 Months - ₹16,583/month</option>
                  <option value="18">18 Months - ₹11,389/month</option>
                  <option value="24">24 Months - ₹8,750/month</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Get Instant EMI Approval
                </button>
              </form>
              
              <div className="text-center mt-4">
                <p className="text-sm text-slate-500">
                  ✅ 2-minute approval • ✅ No income proof • ✅ Start learning today
                </p>
              </div>
              
              <button
                onClick={() => setShowEMIModal(false)}
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