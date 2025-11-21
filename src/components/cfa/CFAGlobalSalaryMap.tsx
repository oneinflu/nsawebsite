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
import LeadFormButton from '../LeadFormButton';

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
    color: 'from-red-500 to-cyan-500'
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
      <section className="sm:py-16 py-10 bg-gradient-to-br from-slate-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Global CFA Salary Comparison
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Explore CFA compensation across major financial hubs worldwide
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-red-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
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
        <motion.div className="text-center sm:mb-16 mb-10" variants={itemVariants}>
          <h2 className="text-4xl font-bold text-white mb-4">
            Global CFA Salary Comparison
          </h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Explore CFA compensation across major financial hubs worldwide
          </p>
        </motion.div>

        {/* Interactive World Map */}
        

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
                  <p className="text-sm text-red-100">
                    {region.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-red-100 font-medium">Top Companies:</div>
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
          <div className="bg-gradient-to-r from-red-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Get the Complete 2025 Salary Guide
            </h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Download our comprehensive PDF guide with detailed salary data, career progression paths, and market insights across 50+ countries.
            </p>
            
            <LeadFormButton formType='salary-guide' variant='outline' isSendOtp={true} className='sm:mt-10 mt-4 text-white'>
              <span>Get the 2025 Salary Guide (PDF)</span>
              
            </LeadFormButton>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select your country</option>
                    <option value="india">India</option>
                    <option value="uae">UAE</option>
                    <option value="usa">USA</option>
                    <option value="singapore">Singapore</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                
                <LeadFormButton formType='download-placement-report' variant='outline' isSendOtp={true} className='w-full'>
                  Download Salary Guide
                </LeadFormButton>
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