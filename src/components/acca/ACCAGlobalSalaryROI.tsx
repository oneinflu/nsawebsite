'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  GlobeAltIcon,
  
  ArrowUpIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline';
import { TrendingUp } from 'lucide-react';

const ACCAGlobalSalaryROI = () => {
  const [activeRegion, setActiveRegion] = useState('India');
 

  const regions = {
    India: {
      currency: '₹',
      salaryRanges: [
        { role: 'Junior Accountant', range: '3-5 LPA', growth: '+25%' },
        { role: 'Senior Accountant', range: '6-10 LPA', growth: '+40%' },
        { role: 'Finance Manager', range: '12-18 LPA', growth: '+60%' },
        { role: 'Finance Director', range: '25-40 LPA', growth: '+120%' },
        { role: 'CFO', range: '50-80 LPA', growth: '+200%' }
      ],
      averageIncrease: '150%',
      topRoles: ['Financial Controller', 'Audit Manager', 'Tax Consultant', 'Risk Manager'],
      flag: '🇮🇳'
    },
    UAE: {
      currency: 'AED',
      salaryRanges: [
        { role: 'Junior Accountant', range: '8-12K AED', growth: '+30%' },
        { role: 'Senior Accountant', range: '15-22K AED', growth: '+45%' },
        { role: 'Finance Manager', range: '25-35K AED', growth: '+70%' },
        { role: 'Finance Director', range: '45-65K AED', growth: '+130%' },
        { role: 'CFO', range: '80-120K AED', growth: '+250%' }
      ],
      averageIncrease: '180%',
      topRoles: ['Financial Analyst', 'Internal Auditor', 'Treasury Manager', 'FP&A Manager'],
      flag: '🇦🇪'
    },
    UK: {
      currency: '£',
      salaryRanges: [
        { role: 'Junior Accountant', range: '22-28K GBP', growth: '+20%' },
        { role: 'Senior Accountant', range: '32-45K GBP', growth: '+35%' },
        { role: 'Finance Manager', range: '50-70K GBP', growth: '+55%' },
        { role: 'Finance Director', range: '80-120K GBP', growth: '+100%' },
        { role: 'CFO', range: '150-250K GBP', growth: '+180%' }
      ],
      averageIncrease: '120%',
      topRoles: ['Management Accountant', 'Financial Controller', 'Compliance Manager', 'Investment Analyst'],
      flag: '🇬🇧'
    },
    Singapore: {
      currency: 'S$',
      salaryRanges: [
        { role: 'Junior Accountant', range: '3.5-5K SGD', growth: '+25%' },
        { role: 'Senior Accountant', range: '6-9K SGD', growth: '+40%' },
        { role: 'Finance Manager', range: '10-15K SGD', growth: '+65%' },
        { role: 'Finance Director', range: '18-28K SGD', growth: '+120%' },
        { role: 'CFO', range: '35-55K SGD', growth: '+220%' }
      ],
      averageIncrease: '160%',
      topRoles: ['Financial Planning Manager', 'Corporate Finance Analyst', 'Risk Analyst', 'Treasury Specialist'],
      flag: '🇸🇬'
    }
  };

  

 
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <GlobeAltIcon className="w-12 h-12 text-red-600 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-red-600">Salary & ROI</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your earning potential across different regions and calculate your investment returns
          </p>
        </motion.div>

        {/* Region Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.keys(regions).map((region) => (
            <motion.button
              key={region}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveRegion(region)}
              className={`px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 ${
                activeRegion === region
                  ? 'bg-gradient-to-r from-red-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-red-500'
              }`}
            >
              {regions[region as keyof typeof regions].flag} {region}
            </motion.button>
          ))}
        </motion.div>

        {/* Salary Information */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRegion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {/* Salary Ranges */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BanknotesIcon className="w-8 h-8 text-green-600 mr-3" />
                Salary Ranges in {activeRegion}
              </h3>
              
              <div className="space-y-4">
                {regions[activeRegion as keyof typeof regions].salaryRanges.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-red-50 rounded-xl border border-green-200"
                  >
                    <div>
                      <div className="font-bold text-gray-900">{item.role}</div>
                      <div className="text-2xl font-bold text-green-600">{item.range}</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-green-600 font-bold">
                        <ArrowUpIcon className="w-4 h-4 mr-1" />
                        {item.growth}
                      </div>
                      <div className="text-sm text-gray-600">vs non-ACCA</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-red-600 to-purple-600 rounded-xl text-white text-center">
                <div className="text-3xl font-bold mb-1">
                  {regions[activeRegion as keyof typeof regions].averageIncrease}
                </div>
                <div className="text-red-100">Average Salary Increase</div>
              </div>
            </div>

            {/* Top Hiring Roles & Growth Ladder */}
            <div className="space-y-6">
              {/* Top Roles */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-8 h-8 text-red-600 mr-3" />
                  Top Hiring Roles
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {regions[activeRegion as keyof typeof regions].topRoles.map((role, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-red-50 to-purple-50 rounded-xl p-4 border border-red-200 text-center"
                    >
                      <div className="font-bold text-gray-900 text-sm">{role}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Growth Ladder Animation */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Growth Ladder</h3>
                
                <div className="relative">
                  {regions[activeRegion as keyof typeof regions].salaryRanges.slice().reverse().map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className={`flex items-center mb-4 ${index === 0 ? 'text-yellow-600' : 'text-gray-700'}`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white mr-4 ${
                        index === 0 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}>
                        {regions[activeRegion as keyof typeof regions].salaryRanges.length - index}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold">{item.role}</div>
                        <div className="text-sm opacity-75">{item.range}</div>
                      </div>
                      {index === 0 && <div className="text-2xl">👑</div>}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      
      </div>
    </section>
  );
};

export default ACCAGlobalSalaryROI;