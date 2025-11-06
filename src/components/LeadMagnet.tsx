'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LeadMagnet() {
  const [showModal, setShowModal] = useState(false)
  const [selectedMagnet, setSelectedMagnet] = useState('')
  const [countdown, setCountdown] = useState({
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

  const leadMagnets = [
    {
      title: 'Free Career Webinar',
      description: 'Live session on global finance career opportunities',
      icon: '🎥',
      cta: 'Register Now',
      gradient: 'from-blue-500 to-indigo-600',
      purpose: 'Educate & convert'
    },
    {
      title: 'Download CMA/CPA/ACCA Syllabus PDFs',
      description: 'Complete syllabus breakdown and study materials',
      icon: '📚',
      cta: 'Unlock for Free',
      gradient: 'from-green-500 to-emerald-600',
      purpose: 'Lead capture'
    },
    {
      title: 'Mock Test Access',
      description: 'Practice with real exam-style questions',
      icon: '📝',
      cta: 'Try Now',
      gradient: 'from-purple-500 to-pink-600',
      purpose: 'Build confidence'
    },
    {
      title: 'Placement & Salary Report 2025',
      description: 'Latest industry insights and salary benchmarks',
      icon: '📊',
      cta: 'Get Report',
      gradient: 'from-orange-500 to-red-600',
      purpose: 'Show outcomes'
    }
  ]

  const whatsappNumber = "+919876543210" // Replace with actual number

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Don&apos;t Leave Empty-Handed
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Get valuable resources to kickstart your global finance career journey
          </p>
        </motion.div>

        {/* Lead Magnet Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {leadMagnets.map((magnet, index) => (
            <motion.div
              key={magnet.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {magnet.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">
                  {magnet.title}
                </h3>
                <p className="text-blue-200 text-sm mb-6 leading-relaxed">
                  {magnet.description}
                </p>
                <button
                  onClick={() => {
                    setSelectedMagnet(magnet.title)
                    setShowModal(true)
                  }}
                  className={`w-full bg-gradient-to-r ${magnet.gradient} text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  {magnet.cta} →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* WhatsApp Assistant Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 mb-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-1">
                  WhatsApp Career Assistant
                </h3>
                <p className="text-green-100">
                  Get instant answers to your career questions
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
              <div className="bg-white/20 rounded-lg p-3">
                <div className="font-semibold mb-1">✅ Instant Response</div>
                <div className="text-green-100">Human support, not bots</div>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <div className="font-semibold mb-1">🎯 Career Guidance</div>
                <div className="text-green-100">Personalized advice</div>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <div className="font-semibold mb-1">🔒 No Spam</div>
                <div className="text-green-100">Pure guidance only</div>
              </div>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in learning more about global finance career opportunities.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Start WhatsApp Chat
            </a>
          </div>
        </motion.div>

        {/* Countdown Strip */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-6 mb-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-4">
              <span className="text-2xl mr-3">🔥</span>
              <h3 className="text-2xl font-bold">Next Batch: Jan 15 — Only 13 seats left</h3>
            </div>
            
            <div className="flex justify-center items-center space-x-4 mb-4">
              <div className="bg-white/20 rounded-lg px-4 py-2 min-w-[60px]">
                <div className="text-2xl font-bold">{countdown.days.toString().padStart(2, '0')}</div>
                <div className="text-xs">DAYS</div>
              </div>
              <div className="text-2xl">:</div>
              <div className="bg-white/20 rounded-lg px-4 py-2 min-w-[60px]">
                <div className="text-2xl font-bold">{countdown.hours.toString().padStart(2, '0')}</div>
                <div className="text-xs">HOURS</div>
              </div>
              <div className="text-2xl">:</div>
              <div className="bg-white/20 rounded-lg px-4 py-2 min-w-[60px]">
                <div className="text-2xl font-bold">{countdown.minutes.toString().padStart(2, '0')}</div>
                <div className="text-xs">MINS</div>
              </div>
              <div className="text-2xl">:</div>
              <div className="bg-white/20 rounded-lg px-4 py-2 min-w-[60px]">
                <div className="text-2xl font-bold">{countdown.seconds.toString().padStart(2, '0')}</div>
                <div className="text-xs">SECS</div>
              </div>
            </div>
            
            <p className="text-pink-100 mb-4">Lock your mentorship spot now.</p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowModal(true)}
              className="bg-white text-red-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 shadow-lg animate-pulse"
            >
              Reserve Your Seat Now
            </motion.button>
          </div>
        </motion.div>

        {/* Final CTA Row */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Book your free counselling session and take the first step towards your global finance career
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowModal(true)}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg"
              >
                Book Free Counselling — Reserve Your Seat →
              </motion.button>
            </div>

            <div className="flex justify-center items-center space-x-6">
              <a
                href={`tel:+919876543210`}
                className="flex items-center text-blue-200 hover:text-white transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Now
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-200 hover:text-white transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
            </div>

            <p className="text-sm text-blue-300 mt-4">
              ✅ No spam. Pure guidance.
            </p>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedMagnet || 'Get Started Today'}
              </h3>
              <p className="text-gray-600 mb-6">
                Fill in your details to access your free resources
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select Course Interest</option>
                  <option>CMA</option>
                  <option>CPA</option>
                  <option>ACCA</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                >
                  Get My Free Resources
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
    </section>
  )
}