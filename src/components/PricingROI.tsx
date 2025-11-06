/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PricingROI() {
  const [salaryExpectation, ] = useState(15)
  const [showModal, setShowModal] = useState(false)
  const [, setSelectedTier] = useState('')
  const [, setCountdown] = useState({
    days: 0,
    hours: 2,
    minutes: 17,
    seconds: 45
  })

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // ROI calculations
  const monthlySalary = salaryExpectation * 1000 / 12 // Convert annual to monthly
  const breakEvenMonths = Math.ceil(90000 / monthlySalary)
  const fiveYearIncome = (salaryExpectation * 5) // 5 years total income in lakhs
  const roiMultiplier = Math.round((fiveYearIncome * 100000) / 90000) // ROI calculation

  const pricingTiers = [
    {
      name: 'Smart',
      badge: 'Basic',
      badgeColor: 'bg-gray-100 text-gray-700',
      price: '₹45,000',
      emi: '₹2,499/mo',
      duration: '12 months',
      features: [
        'Recorded Video Lectures',
        'Study Notes & Materials',
        'Practice Tests & Mock Exams',
        'Study Planner',
        'Email Support'
      ],
      cta: 'View Details',
      ctaStyle: 'border border-gray-300 text-gray-700 hover:bg-gray-50'
    },
    {
      name: 'Pro',
      badge: 'Best Value',
      badgeColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white',
      price: '₹90,000',
      emi: '₹4,499/mo',
      duration: '18 months',
      features: [
        'Live Interactive Classes',
        'All Smart features included',
        '1-on-1 Mentorship Sessions',
        'Placement Support & Guidance',
        'Industry Expert Sessions',
        'Priority Support'
      ],
      cta: 'Enroll with EMI',
      ctaStyle: 'bg-gradient-to-r from-red-600 to-red-600 text-white hover:from-red-700 hover:to-red-700',
      popular: true
    },
    {
      name: 'Elite',
      badge: 'Premium',
      badgeColor: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white',
      price: '₹1,35,000',
      emi: '₹6,999/mo',
      duration: '24 months',
      features: [
        'All Pro features included',
        'Personal Mentor Review (Weekly)',
        'Guaranteed Job Placement',
        'Resume & Interview Coaching',
        'Salary Negotiation Support',
        'Lifetime Career Support'
      ],
      cta: 'Apply for Counsel Call',
      ctaStyle: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
    }
  ]

  const scholarships = [
    'Merit-based scholarships up to 30%',
    'Need-based financial assistance',
    'Early enrollment offers',
    'Referral program benefits'
  ]

  const trustSeals = [
    { icon: '🔒', text: 'Secure Payment' },
    { icon: '📄', text: 'GST Invoice' },
    { icon: '↩️', text: 'Refund Policy' },
    { icon: '🎓', text: 'Completion Certificate' }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Investment Value Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-red-900 to-red-900 bg-clip-text text-transparent mb-6">
            Invest Once. Grow for a Lifetime.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your first salary after CMA/CPA/ACCA recovers your course fees.
          </p>
        </motion.div>

        
        {/* Pricing Tiers */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Investment Plan</h3>
            <p className="text-gray-600 text-lg">Transparent. Fair. No hidden fees.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-xl p-8 border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  tier.popular ? 'border-red-500 ring-4 ring-red-100' : 'border-gray-200'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-600 to-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${tier.badgeColor}`}>
                    {tier.badge}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h4>
                  <div className="text-4xl font-bold text-gray-900 mb-1">{tier.price}</div>
                  <div className="text-gray-600">or {tier.emi}</div>
                  <div className="text-sm text-gray-500 mt-2">{tier.duration} program</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    setSelectedTier(tier.name)
                    setShowModal(true)
                  }}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${tier.ctaStyle}`}
                >
                  {tier.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scholarships & EMI */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Scholarships Available</h3>
            </div>
            <ul className="space-y-3 mb-6">
              {scholarships.map((scholarship, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {scholarship}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => setShowModal(true)}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300"
            >
              Check Scholarship Eligibility
            </button>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Cost Savings</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 border border-green-200">
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  Clear in First Attempt
                </div>
                <div className="text-green-600 font-bold text-xl">
                  Save ₹40k–₹60k
                </div>
                <div className="text-sm text-gray-600">
                  in exam reattempt fees
                </div>
              </div>
              <p className="text-gray-700">
                Our mentor-success system actually reduces total money spent on your certification journey.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trust Seals */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustSeals.map((seal, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl mb-2">{seal.icon}</div>
                <div className="text-sm font-medium text-gray-700">{seal.text}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-600 to-red-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Get your personalized pricing & EMI plan
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => setShowModal(true)}
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Your Personalized Pricing & EMI Plan →
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
                Talk to an Advisor on WhatsApp
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get Your Personalized Plan
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                  <option>Select Course Interest</option>
                  <option>CMA</option>
                  <option>CPA</option>
                  <option>ACCA</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-red-700 hover:to-red-700 transition-all duration-300"
                >
                  Get My Personalized Plan
                </button>
              </form>
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
        }
        
        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
        }
      `}</style>
    </section>
  )
}