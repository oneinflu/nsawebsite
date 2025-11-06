'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Super300TrustBand = () => {
  const [currentCount, setCurrentCount] = useState(25000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const companies = [
    { name: 'Deloitte', logo: 'DT' },
    { name: 'EY', logo: 'EY' },
    { name: 'PwC', logo: 'PwC' },
    { name: 'KPMG', logo: 'KG' },
    { name: 'Amazon', logo: 'AMZ' },
    { name: 'Goldman Sachs', logo: 'GS' },
    { name: 'JP Morgan', logo: 'JPM' },
    { name: 'McKinsey', logo: 'McK' }
  ];

  return (
    <div className="bg-white border-t border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-gray-600 text-lg">
            Trusted by{' '}
            <motion.span
              key={currentCount}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-semibold text-gray-900"
            >
              {currentCount.toLocaleString()}+
            </motion.span>{' '}
            learners | Alumni at leading global firms
          </p>
        </motion.div>

        {/* Company Logos Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -100 * companies.length] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex space-x-12 items-center"
            style={{ width: `${companies.length * 200}px` }}
          >
            {/* First set of logos */}
            {companies.map((company, index) => (
              <motion.div
                key={`first-${index}`}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="flex-shrink-0 w-24 h-16 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer group"
              >
                <div className="text-center">
                  <div className="text-sm font-bold text-gray-700 group-hover:text-amber-600 transition-colors">
                    {company.logo}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {company.name}
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <motion.div
                key={`second-${index}`}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="flex-shrink-0 w-24 h-16 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer group"
              >
                <div className="text-center">
                  <div className="text-sm font-bold text-gray-700 group-hover:text-amber-600 transition-colors">
                    {company.logo}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {company.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center items-center space-x-8 mt-8 text-sm text-gray-500"
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>98% Placement Rate</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span>₹12L Average Package</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <span>50+ Countries</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Super300TrustBand;