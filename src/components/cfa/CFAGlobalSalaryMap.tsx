'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GlobeAltIcon,
  DocumentArrowDownIcon,
  ArrowRightIcon,
  XMarkIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

interface SalaryRegion {
  id: string;
  name: string;
  salary: string;
  companies: string[];
  description: string;
  coordinates: { x: number; y: number };
  color: string;
}

interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
}

const salaryRegions: SalaryRegion[] = [
  {
    id: 'india',
    name: 'India',
    salary: '₹12–20 LPA',
    companies: ['Goldman Sachs', 'JP Morgan', 'HDFC Bank', 'ICICI Bank', 'Kotak Mahindra'],
    description: 'Growing financial hub with increasing CFA demand',
    coordinates: { x: 70, y: 45 },
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'uae',
    name: 'UAE',
    salary: 'AED 10k–25k/month',
    companies: ['Emirates NBD', 'ADCB', 'EFG Hermes', 'Mashreq Bank', 'HSBC Middle East'],
    description: 'Regional financial center with tax-free income',
    coordinates: { x: 60, y: 40 },
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'usa',
    name: 'USA',
    salary: '$80k–150k/year',
    companies: ['BlackRock', 'Vanguard', 'Fidelity', 'Morgan Stanley', 'Bank of America'],
    description: 'Largest CFA market with highest compensation',
    coordinates: { x: 25, y: 35 },
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'singapore',
    name: 'Singapore',
    salary: 'SGD 70k–120k/year',
    companies: ['DBS Bank', 'UOB', 'OCBC', 'Temasek Holdings', 'GIC'],
    description: 'Asia-Pacific financial gateway',
    coordinates: { x: 78, y: 55 },
    color: 'from-orange-500 to-red-500'
  }
];

export default function CFAGlobalSalaryMap() {
  const [isClient, setIsClient] = useState(false);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: '',
    country: ''
  });
  const [glowingRegions, setGlowingRegions] = useState<string[]>([]);

  useEffect(() => {
    setTimeout(() => setIsClient(true), 100);
  }, []);

  // Animate glowing regions
  useEffect(() => {
    if (!isClient) return;
    
    const interval = setInterval(() => {
      const randomRegion = salaryRegions[Math.floor(Math.random() * salaryRegions.length)];
      setGlowingRegions(prev => {
        const newGlowing = [...prev, randomRegion.id];
        // Keep only last 2 glowing regions
        return newGlowing.slice(-2);
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isClient]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setShowLeadForm(false);
    // Reset form
    setFormData({ name: '', email: '', phone: '', country: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  if (!isClient) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Global CFA Salary Comparison
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore CFA compensation across major financial hubs worldwide
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl font-bold text-white mb-4">
            Global CFA Salary Comparison
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore CFA compensation across major financial hubs worldwide
          </p>
        </motion.div>

        {/* Interactive World Map */}
        <motion.div 
          className="relative mb-16"
          variants={itemVariants}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Interactive Salary Map
            </h3>
            
            {/* Simplified World Map SVG */}
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl overflow-hidden">
              {/* World Map Background */}
              <svg 
                viewBox="0 0 100 60" 
                className="w-full h-full"
                style={{ filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))' }}
              >
                {/* Simplified continents */}
                <path
                  d="M15 20 L35 18 L38 25 L32 35 L28 38 L20 35 L15 30 Z"
                  fill="rgba(59, 130, 246, 0.3)"
                  stroke="rgba(59, 130, 246, 0.6)"
                  strokeWidth="0.5"
                />
                <path
                  d="M40 15 L85 12 L88 20 L85 35 L82 40 L75 42 L65 40 L55 35 L45 30 L40 25 Z"
                  fill="rgba(59, 130, 246, 0.3)"
                  stroke="rgba(59, 130, 246, 0.6)"
                  strokeWidth="0.5"
                />
                <path
                  d="M70 35 L85 33 L88 40 L85 50 L80 52 L75 50 L70 45 Z"
                  fill="rgba(59, 130, 246, 0.3)"
                  stroke="rgba(59, 130, 246, 0.6)"
                  strokeWidth="0.5"
                />
              </svg>

              {/* Interactive Region Markers */}
              {salaryRegions.map((region) => (
                <motion.div
                  key={region.id}
                  className="absolute cursor-pointer"
                  style={{
                    left: `${region.coordinates.x}%`,
                    top: `${region.coordinates.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onMouseEnter={() => setHoveredRegion(region.id)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  whileHover={{ scale: 1.2 }}
                >
                  {/* Pulsing Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 w-8 h-8 rounded-full bg-gradient-to-r ${region.color} opacity-60`}
                    animate={{
                      scale: glowingRegions.includes(region.id) ? [1, 1.5, 1] : 1,
                      opacity: glowingRegions.includes(region.id) ? [0.6, 0.9, 0.6] : 0.6
                    }}
                    transition={{ duration: 2, repeat: glowingRegions.includes(region.id) ? Infinity : 0 }}
                  />
                  
                  {/* Main Marker */}
                  <div className={`relative w-6 h-6 rounded-full bg-gradient-to-r ${region.color} border-2 border-white shadow-lg flex items-center justify-center`}>
                    <MapPinIcon className="w-3 h-3 text-white" />
                  </div>

                  {/* Hover Tooltip */}
                  <AnimatePresence>
                    {hoveredRegion === region.id && (
                      <motion.div
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-80 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-2xl border border-gray-200"
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-gray-900">
                          <h4 className="font-bold text-lg mb-2 flex items-center">
                            <GlobeAltIcon className="w-5 h-5 mr-2 text-blue-600" />
                            {region.name}
                          </h4>
                          
                          <div className="mb-3">
                            <div className="flex items-center mb-1">
                              <CurrencyDollarIcon className="w-4 h-4 mr-2 text-green-600" />
                              <span className="font-semibold text-green-700">{region.salary}</span>
                            </div>
                            <p className="text-sm text-gray-600">{region.description}</p>
                          </div>

                          <div>
                            <div className="flex items-center mb-2">
                              <BuildingOfficeIcon className="w-4 h-4 mr-2 text-purple-600" />
                              <span className="font-medium text-gray-700">Top Employers:</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {region.companies.slice(0, 3).map((company) => (
                                <span
                                  key={company}
                                  className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                                >
                                  {company}
                                </span>
                              ))}
                              {region.companies.length > 3 && (
                                <span className="text-xs text-gray-500">
                                  +{region.companies.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Tooltip Arrow */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white/95"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Salary Comparison Table */}
        <motion.div 
          className="mb-16"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Regional Salary Breakdown
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {salaryRegions.map((region, index) => (
              <motion.div
                key={region.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${region.color} p-3 mb-4 mx-auto`}>
                  <GlobeAltIcon className="w-full h-full text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-white text-center mb-2">
                  {region.name}
                </h4>
                
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    {region.salary}
                  </div>
                  <p className="text-sm text-blue-100">
                    {region.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-blue-100 font-medium">Top Companies:</div>
                  {region.companies.slice(0, 2).map((company) => (
                    <div key={company} className="text-xs text-gray-300 flex items-center">
                      <BuildingOfficeIcon className="w-3 h-3 mr-1" />
                      {company}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Get the Complete 2025 Salary Guide
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Download our comprehensive PDF guide with detailed salary data, career progression paths, and market insights across 50+ countries.
            </p>
            
            <motion.button
              onClick={() => setShowLeadForm(true)}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <DocumentArrowDownIcon className="w-5 h-5" />
              <span>Get the 2025 Salary Guide (PDF)</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Lead Form Modal */}
      <AnimatePresence>
        {showLeadForm && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Download Salary Guide
                </h3>
                <button
                  onClick={() => setShowLeadForm(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country/Region
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select your country</option>
                    <option value="india">India</option>
                    <option value="uae">UAE</option>
                    <option value="usa">USA</option>
                    <option value="singapore">Singapore</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Download Salary Guide
                </motion.button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                By downloading, you agree to receive updates about CFA programs and career opportunities.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}