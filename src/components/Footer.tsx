'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import LeadFormButton from './LeadFormButton'

export default function Footer() {
  const [showLeadModal, setShowLeadModal] = useState(false)
  const [pulseAnimation, setPulseAnimation] = useState(false)

  // Pulse animation every 12 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseAnimation(true)
      setTimeout(() => setPulseAnimation(false), 2000)
    }, 12000)

    return () => clearInterval(interval)
  }, [])

  const programs = [
    { name: 'CMA (US)', href: '/cma-usa-course-details' },
    { name: 'CPA (US)', href: '/cpa-course-details' , special: true },
    { name: 'ACCA (UK)', href: '/acca-course-details' },
    { name: 'CFA', href: '/cfa-us',  },
    { name: 'CIA', href: '/cia' },
    { name: 'Enrolled Agent', href: '/enrolled-agent-course-details' }
  ]

  // Footer link groups
  
  const salaryPages = [
    { name: 'CPA vs CA Salaries', href: '/salary/cpa-vs-ca' },
  ]

  const careerPages = [
    { name: 'CPA Jobs in UAE', href: '/careers/cpa-uae' },
    { name: 'CMA in India', href: '/careers/cma-india' },
    { name: 'ACCA in UK', href: '/careers/acca-course-details-uk' },
    { name: 'CFA Career Paths', href: '/careers/cfa-paths' },
  ]

  const support = [
    { name: 'Contact Us', href: '#contact' },
    { name: 'WhatsApp Help', href: 'https://wa.me/919876543210', verified: true },
    { name: 'Student Onboarding Helpdesk', href: '#helpdesk' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Refund Policy', href: '#refund' }
  ]

  const accreditations = [
    { name: 'IMA (USA)', logo: '🏛️' },
    { name: 'AICPA (USA)', logo: '🏛️' },
    { name: 'ACCA (UK)', logo: '🏛️' },
    { name: 'Prometric', logo: '🏢' },
    { name: 'ISO Certified', logo: '🔒' }
  ]

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/school/northstaracademy/', icon: 'linkedin' },
    { name: 'Facebook', href: 'https://www.facebook.com/NorthStarAcad', icon: 'facebook' },
    { name: 'X (Twitter)', href: 'https://twitter.com/NorthStar_Acad', icon: 'x' },
    { name: 'Instagram', href: 'https://www.instagram.com/northstaracad/', icon: 'instagram' },
    { name: 'YouTube', href: 'https://www.youtube.com/channel/UCVhLjuXs5z5ZYJBxpeRbI1g', icon: 'youtube' },
  ]

  const brandBadges = [
    { icon: '⭐', text: '55,000+ Students' },
    { icon: '🧠', text: 'Mentor-Led' },
    { icon: '🌍', text: 'International Certifications' },
    { icon: '🏢', text: 'Big 4 Career Pathways' }
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative">
        {/* Secondary Conversion Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-b border-gray-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-gradient-to-r from-red-900 to-red-900 rounded-2xl p-8 text-center border border-red-800">
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl mr-3">📩</span>
                <h3 className="text-2xl font-bold">Download the Ultimate Guide to Global Finance Careers</h3>
              </div>
              <p className="text-red-200 mb-6 text-lg">
                Free PDF: CMA vs CPA vs ACCA Comparison Guide
              </p>
              <LeadFormButton formType='general' isSendOtp={true}
                className={`bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg transform hover:scale-105 ${
                  pulseAnimation ? 'animate-pulse ring-4 ring-yellow-400' : ''
                }`}
              
              >
                Get Free Guide →
              </LeadFormButton>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8">
            
            {/* Column 1 - Brand Credibility */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <Link href="/" className="inline-flex items-center mb-4">
                  <Image src="/logo.svg" alt="NorthStar Academy" width={140} height={40} className="h-10 w-auto" />
                </Link>
                <p className="text-gray-300 font-medium mb-4">
                  Global Finance Careers Made in India
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {brandBadges.map((badge, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-300">
                    <span className="mr-2">{badge.icon}</span>
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-400 leading-relaxed">
                Trusted by ambitious finance students across India, Middle East & beyond.
              </p>
            </motion.div>

            {/* Column 2 - Programs */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-1"
            >
              <h3 className="text-lg font-bold mb-6 text-white">Programs</h3>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <li key={index}>
                    <a
                      href={program.href}
                      className={`text-gray-300 hover:text-white transition-colors duration-300 flex items-center group ${
                        program.special ? 'text-yellow-400 hover:text-yellow-300' : ''
                      }`}
                    >
                      <span className="relative">
                        {program.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      {program.special && (
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3 - Explore */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <h3 className="text-lg font-bold mb-6 text-white">Explore</h3>
              <div className="space-y-6">
               
                <div>
                  <p className="text-sm font-semibold text-gray-200 mb-3">Salary Pages</p>
                  <ul className="space-y-2">
                    {salaryPages.map((item, idx) => (
                      <li key={idx}>
                        <a href={item.href} className="text-gray-300 hover:text-white transition-colors duration-300 group">
                          <span className="relative">
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-200 mb-3">Career Pages</p>
                  <ul className="space-y-2">
                    {careerPages.map((item, idx) => (
                      <li key={idx}>
                        <a href={item.href} className="text-gray-300 hover:text-white transition-colors duration-300 group">
                          <span className="relative">
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0.5 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Column 4 - Support */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1"
            >
              <h3 className="text-lg font-bold mb-6 text-white">Support</h3>
              <ul className="space-y-3">
                {support.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      {item.verified && (
                        <svg className="w-4 h-4 ml-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-400 mt-4">
                We&apos;re here to help, every step of the way.
              </p>
            </motion.div>

            {/* Column 5 - Compliance & Accreditation */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-1"
            >
              <h3 className="text-lg font-bold mb-6 text-white">Accreditation</h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {accreditations.map((acc, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800 rounded-lg p-3 text-center hover:bg-gray-700 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300">{acc.logo}</div>
                    <div className="text-xs text-gray-300">{acc.name}</div>
                  </motion.div>
                ))}
              </div>
              <div className="text-xs text-gray-400 space-y-1">
                <p>Exams conducted strictly at authorized global Prometric centers</p>
                <p>Certifications issued by IMA/AICPA/ACCA globally</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social Proof & Follow Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-gray-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-300 text-center md:text-left">
                  Join 100K+ finance aspirants learning with us
                </p>
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300"
                  >
                    <span className="sr-only">{social.name}</span>
                    {social.icon === 'linkedin' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )}
                    {social.icon === 'youtube' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    )}
                    {social.icon === 'instagram' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.036.388a5.918 5.918 0 0 0-2.14 1.393A5.918 5.918 0 0 0 .503 4.021c-.184.484-.306 1.058-.34 2.005C.128 7.024.115 7.431.115 11.052s.013 4.028.048 4.976c.034.947.156 1.521.34 2.005a5.918 5.918 0 0 0 1.393 2.14 5.918 5.918 0 0 0 2.14 1.393c.484.184 1.058.306 2.005.34.948.035 1.355.048 4.976.048s4.028-.013 4.976-.048c.947-.034 1.521-.156 2.005-.34a5.918 5.918 0 0 0 2.14-1.393 5.918 5.918 0 0 0 1.393-2.14c.184-.484.306-1.058.34-2.005.035-.948.048-1.355.048-4.976s-.013-4.028-.048-4.976c-.034-.947-.156-1.521-.34-2.005a5.918 5.918 0 0 0-1.393-2.14A5.918 5.918 0 0 0 19.063.388c-.484-.184-1.058-.306-2.005-.34C16.11.013 15.703 0 12.082 0h-.065zm-.051 2.188c3.539 0 3.959.014 5.356.048.294.013.605.052.916.126.315.086.594.201.85.457.256.256.371.535.457.85.074.311.113.622.126.916.034 1.397.048 1.817.048 5.356s-.014 3.959-.048 5.356c-.013.294-.052.605-.126.916-.086.315-.201.594-.457.85-.256.256-.535.371-.85.457-.311.074-.622.113-.916.126-1.397.034-1.817.048-5.356.048s-3.959-.014-5.356-.048c-.294-.013-.605-.052-.916-.126a2.83 2.83 0 0 1-.85-.457 2.83 2.83 0 0 1-.457-.85c-.074-.311-.113-.622-.126-.916-.034-1.397-.048-1.817-.048-5.356s.014-3.959.048-5.356c.013-.294.052-.605.126-.916.086-.315.201-.594.457-.85.256-.256.535-.371.85-.457.311-.074.622-.113.916-.126 1.397-.034 1.817-.048 5.356-.048z"/>
                        <path d="M12.017 15.33a3.33 3.33 0 1 1 0-6.66 3.33 3.33 0 0 1 0 6.66zm0-8.468a5.138 5.138 0 1 0 0 10.276 5.138 5.138 0 0 0 0-10.276zm6.532-1.325a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/>
                      </svg>
                    )}
                    {social.icon === 'x' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    )}
                    {social.icon === 'facebook' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35C.596 0 0 .596 0 1.333v21.333C0 23.404.596 24 1.325 24h11.495v-9.294H9.691V11.06h3.129V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.244l-1.919.001c-1.505 0-1.796.716-1.796 1.766v2.316h3.59l-.467 3.646h-3.123V24h6.127C23.404 24 24 23.404 24 22.667V1.333C24 .596 23.404 0 22.675 0z"/>
                      </svg>
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Legal Bar */}
        <div className="border-t border-gray-800 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
              <div className="mb-4 md:mb-0">
                <p>© 2025 NorthStar Academy. All rights reserved.</p>
              </div>
              <div className="flex space-x-6">
                <a href="#terms" className="hover:text-white transition-colors duration-300">Terms & Conditions</a>
                <a href="#privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                <a href="#cookies" className="hover:text-white transition-colors duration-300">Cookie Preferences</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Modal */}
      <AnimatePresence>
        {showLeadModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowLeadModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">📩</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Get Your Free Career Guide
                </h3>
                <p className="text-gray-600">
                  CMA vs CPA vs ACCA - Complete Comparison Guide
                </p>
              </div>
              
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
                  <option>Current Education Level</option>
                  <option>12th Pass</option>
                  <option>Graduate</option>
                  <option>Post Graduate</option>
                  <option>Working Professional</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300"
                >
                  Download Free Guide (Worth ₹999)
                </button>
              </form>
              
              <div className="text-center mt-4">
                <p className="text-sm text-gray-500">
                  ✅ Instant download • ✅ No spam • ✅ 100% Free
                </p>
              </div>
              
              <button
                onClick={() => setShowLeadModal(false)}
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
    </footer>
  )
}