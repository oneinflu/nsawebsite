'use client'

import { useState, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { 
  ShieldCheckIcon, 
   
  CurrencyDollarIcon,
 
  TrophyIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'

export default function WhyCPA() {
  const [activePin, setActivePin] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const mapOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.8])

  const companies = [
    { name: 'Deloitte', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop', demand: '2,500+ openings' },
    { name: 'PwC', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop', demand: '1,800+ openings' },
    { name: 'KPMG', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop', demand: '1,200+ openings' },
    { name: 'EY', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop', demand: '2,000+ openings' },
    { name: 'Goldman Sachs', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop', demand: '800+ openings' },
    { name: 'JP Morgan', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop', demand: '1,500+ openings' }
  ]

  const salaryData = [
    { level: 'Entry Level', salary: 60, color: 'bg-red-500' },
    { level: 'Senior Associate', salary: 85, color: 'bg-red-500' },
    { level: 'Manager', salary: 110, color: 'bg-purple-500' },
    { level: 'Senior Manager', salary: 140, color: 'bg-pink-500' },
    { level: 'Director', salary: 180, color: 'bg-red-500' }
  ]

  const globalLocations = [
    { id: 'usa', name: 'United States', x: '25%', y: '35%', jobs: '50K+ jobs', flag: '🇺🇸' },
    { id: 'uae', name: 'UAE', x: '60%', y: '45%', jobs: '8K+ jobs', flag: '🇦🇪' },
    { id: 'india', name: 'India', x: '70%', y: '50%', jobs: '25K+ jobs', flag: '🇮🇳' },
    { id: 'singapore', name: 'Singapore', x: '80%', y: '55%', jobs: '5K+ jobs', flag: '🇸🇬' },
    { id: 'canada', name: 'Canada', x: '20%', y: '25%', jobs: '12K+ jobs', flag: '🇨🇦' },
    { id: 'uk', name: 'United Kingdom', x: '45%', y: '30%', jobs: '15K+ jobs', flag: '🇬🇧' }
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 via-red-50 to-red-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Why CPA (US)?
            <span className="block text-3xl font-medium text-red-600 mt-2">
              The Ultimate Accounting Authority
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            More than a certification — it&apos;s a professional license that opens doors to the highest levels of accounting and finance globally
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Key Benefits */}
          <div className="space-y-12">
            
            {/* 3D Shield Badge - Highest Authority */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-red-600 via-red-600 to-purple-700 rounded-3xl p-8 shadow-2xl transform perspective-1000 hover:rotate-y-12 transition-transform duration-500">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-xl transform rotate-12">
                      <ShieldCheckIcon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                  </div>
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Highest Accounting Authority</h3>
                    <p className="text-red-100">Recognized by AICPA & all 55 US jurisdictions</p>
                    <div className="mt-3 flex items-center gap-2 text-sm">
                      <TrophyIcon className="w-4 h-4" />
                      <span>Gold Standard in Accounting</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* License Visual Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-800">Professional License</h3>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  License ≠ Certificate
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <div className="text-2xl mb-2">📜</div>
                  <p className="font-semibold text-slate-700">Certificate</p>
                  <p className="text-sm text-slate-500">Knowledge proof</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl border-2 border-green-200">
                  <div className="text-2xl mb-2">🏛️</div>
                  <p className="font-semibold text-green-700">License</p>
                  <p className="text-sm text-green-600">Legal authority</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-red-50 to-red-50 p-4 rounded-xl">
                <p className="text-sm text-slate-700">
                  <strong>CPA License gives you:</strong> Legal authority to sign audit reports, represent clients before IRS, and practice public accounting
                </p>
              </div>
            </motion.div>

            {/* Company Logos - Big 4 + MNC Demand */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-xl"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">
                Big 4 + MNC Demand for CPAs
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {companies.map((company, index) => (
                  <motion.div
                    key={company.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="text-center p-4 border border-slate-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-red-300"
                  >
                    <div className="w-16 h-8 bg-slate-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-xs font-bold text-slate-600">{company.name}</span>
                    </div>
                    <p className="text-xs text-green-600 font-semibold">{company.demand}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center bg-gradient-to-r from-green-50 to-red-50 p-4 rounded-xl">
                <p className="text-sm font-semibold text-slate-700">
                  🔥 <span className="text-green-600">9,800+ active CPA job openings</span> across Big 4 firms
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Salary Graph & Interactive Map */}
          <div className="space-y-12">
            
            {/* Salary Graph */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-800">CPA Salary Progression</h3>
                <div className="flex items-center gap-2 text-green-600">
                  <CurrencyDollarIcon className="w-5 h-5" />
                  <span className="font-semibold">$60K - $180K+</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {salaryData.map((item, index) => (
                  <motion.div
                    key={item.level}
                    initial={{ opacity: 0, width: 0 }}
                    animate={isInView ? { opacity: 1, width: '100%' } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-700">{item.level}</span>
                      <span className="font-bold text-slate-800">${item.salary}K</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${(item.salary / 180) * 100}%` } : {}}
                        transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                        className={`h-3 rounded-full ${item.color} relative`}
                      >
                        <div className="absolute right-2 top-0 w-2 h-3 bg-white/30 rounded-full"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-purple-50 rounded-xl">
                <p className="text-sm text-slate-700">
                  💡 <strong>Pro tip:</strong> CPA license holders earn 25-40% more than non-licensed accountants
                </p>
              </div>
            </motion.div>

            {/* Interactive Global Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-gradient-to-br from-slate-800 via-red-900 to-red-900 rounded-2xl p-6 shadow-2xl relative overflow-hidden"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                Global CPA Opportunities
              </h3>
              
              {/* World Map Background */}
              <motion.div
                style={{ opacity: mapOpacity }}
                className="relative h-64 bg-gradient-to-br from-red-800 to-red-800 rounded-xl mb-6 overflow-hidden"
              >
                {/* Animated background grid */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-12 grid-rows-8 h-full">
                    {Array.from({ length: 96 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.5, 0] }}
                        transition={{ duration: 2, delay: i * 0.02, repeat: Infinity }}
                        className="border border-red-400/20"
                      />
                    ))}
                  </div>
                </div>
                
                {/* Location Pins */}
                {globalLocations.map((location, index) => (
                  <motion.div
                    key={location.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    style={{ left: location.x, top: location.y }}
                    onMouseEnter={() => setActivePin(location.id)}
                    onMouseLeave={() => setActivePin(null)}
                  >
                    <motion.div
                      animate={{ 
                        scale: activePin === location.id ? 1.2 : 1,
                        y: [0, -5, 0]
                      }}
                      transition={{ 
                        scale: { duration: 0.2 },
                        y: { duration: 2, repeat: Infinity }
                      }}
                      className="relative"
                    >
                      <MapPinIcon className="w-6 h-6 text-yellow-400 drop-shadow-lg" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </motion.div>
                    
                    {/* Tooltip */}
                    {activePin === location.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-3 shadow-xl border border-slate-200 min-w-max z-10"
                      >
                        <div className="text-center">
                          <div className="text-lg mb-1">{location.flag}</div>
                          <p className="font-semibold text-slate-800 text-sm">{location.name}</p>
                          <p className="text-xs text-green-600 font-semibold">{location.jobs}</p>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Key Markets */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center text-white">
                  <div className="text-2xl mb-1">🇺🇸</div>
                  <p className="font-semibold text-sm">USA</p>
                  <p className="text-xs text-red-200">Primary Market</p>
                </div>
                <div className="text-center text-white">
                  <div className="text-2xl mb-1">🌍</div>
                  <p className="font-semibold text-sm">Middle East</p>
                  <p className="text-xs text-red-200">High Demand</p>
                </div>
                <div className="text-center text-white">
                  <div className="text-2xl mb-1">🇮🇳</div>
                  <p className="font-semibold text-sm">India</p>
                  <p className="text-xs text-red-200">Growing Market</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-red-600 to-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Become a Licensed CPA?</h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Join 650,000+ CPAs worldwide and unlock unlimited career opportunities in accounting and finance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Start Your CPA Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
                Download CPA Guide
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
      `}</style>
    </section>
  )
}