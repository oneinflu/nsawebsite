'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  MessageCircle, 
  Calendar, 
  Star, 
  MapPin, 
  DollarSign, 
  Award,
  CheckCircle,
  ArrowRight,
  Globe
} from 'lucide-react';

export default function CPAHero() {
  const [selectedState, setSelectedState] = useState('California');
  const [showCounsellingModal, setShowCounsellingModal] = useState(false);

  const usStates = [
    'California', 'New York', 'Texas', 'Florida', 'Illinois', 
    'Pennsylvania', 'Ohio', 'Georgia', 'North Carolina', 'Michigan'
  ];

  const keyBenefits = [
    'Work in USA, UAE, India & 50+ countries',
    'Average salary: $85,000 - $150,000',
    'Fastest route to US immigration',
    'Global recognition & prestige'
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Floating elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1.5,
              ease: 'easeInOut',
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
            >
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Highest Global Accounting License</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-6xl font-bold leading-tight"
              >
                Become a{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Certified Public Accountant
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl lg:text-2xl font-semibold text-red-100"
              >
                (CPA – USA)
              </motion.div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg lg:text-xl text-red-100 leading-relaxed"
            >
              Work in USA, UAE, India & More • Global Recognition • Premium Salaries
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-3"
            >
              {keyBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-red-100">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                onClick={() => setShowCounsellingModal(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Free Counselling
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Success Stories
              </motion.button>
            </motion.div>

            {/* WhatsApp Assistant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-3 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-full shadow-lg transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Query Assistant
              </motion.button>
              <span className="text-red-200 text-sm">Quick replies guaranteed</span>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl">
              {/* US Skyline Illustration */}
              <div className="mb-6">
                <div className="flex items-end justify-center gap-2 h-32 mb-4">
                  {[60, 80, 100, 75, 90, 65, 85].map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                      className="bg-gradient-to-t from-red-400 to-red-200 rounded-t-lg"
                      style={{ width: '20px' }}
                    />
                  ))}
                </div>
                <div className="text-center text-white/80 text-sm font-medium">
                  🇺🇸 Work Across USA
                </div>
              </div>

              {/* CPA Certificate */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="bg-white rounded-xl p-4 mb-6 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">CPA License</div>
                    <div className="text-sm text-gray-600">Certified Public Accountant</div>
                  </div>
                </div>
              </motion.div>

              {/* Salary Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="bg-green-500 text-white rounded-xl p-4 mb-6"
              >
                <div className="flex items-center gap-3">
                  <DollarSign className="w-8 h-8" />
                  <div>
                    <div className="font-bold text-lg">$85K - $150K</div>
                    <div className="text-sm opacity-90">Average Annual Salary</div>
                  </div>
                </div>
              </motion.div>

              {/* State Board Selection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">Choose Your State Board:</span>
                </div>
                
                <div className="relative">
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    {usStates.map((state) => (
                      <option key={state} value={state} className="text-gray-800">
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </motion.div>

              {/* Global Recognition */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
                className="mt-6 pt-4 border-t border-white/20"
              >
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Globe className="w-4 h-4" />
                  <span>Recognized in 50+ countries worldwide</span>
                </div>
              </motion.div>
            </div>

            {/* Floating elements around the visual */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 rounded-full p-3 shadow-lg"
            >
              <Star className="w-6 h-6" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 rounded-full p-3 shadow-lg"
            >
              <CheckCircle className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Counselling Modal */}
      {showCounsellingModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowCounsellingModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Book Free CPA Counselling</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
              />
              <button
                type="submit"
                className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Book Free Session
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}