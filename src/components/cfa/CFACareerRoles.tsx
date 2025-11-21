'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  ChartBarIcon,
  ArrowTrendingUpIcon,
  BriefcaseIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  DocumentArrowDownIcon,
  XMarkIcon,
  
  StarIcon
} from '@heroicons/react/24/outline';
import LeadFormButton from '../LeadFormButton';

interface CareerRole {
  id: string;
  role: string;
  salaryRange: string;
  topEmployers: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
}

interface CareerStep {
  id: string;
  title: string;
  level: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const careerRoles: CareerRole[] = [
  {
    id: 'equity-analyst',
    role: 'Equity Analyst',
    salaryRange: '₹10–18 LPA',
    topEmployers: ['JP Morgan', 'UBS', 'HSBC'],
    icon: ChartBarIcon,
    color: 'from-red-500 to-red-600',
    bgColor: 'from-red-50 to-red-100'
  },
  {
    id: 'investment-banker',
    role: 'Investment Banker',
    salaryRange: '₹15–40 LPA',
    topEmployers: ['Goldman Sachs', 'Credit Suisse'],
    icon: BuildingOfficeIcon,
    color: 'from-green-500 to-green-600',
    bgColor: 'from-green-50 to-green-100'
  },
  {
    id: 'portfolio-manager',
    role: 'Portfolio Manager',
    salaryRange: '₹25–60 LPA',
    topEmployers: ['BlackRock', 'ICICI Prudential'],
    icon: ArrowTrendingUpIcon,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100'
  },
  {
    id: 'risk-consultant',
    role: 'Risk Consultant',
    salaryRange: '₹12–25 LPA',
    topEmployers: ['KPMG', 'Deloitte'],
    icon: BriefcaseIcon,
    color: 'from-amber-500 to-amber-600',
    bgColor: 'from-amber-50 to-amber-100'
  }
];

const careerProgression: CareerStep[] = [
  {
    id: 'analyst',
    title: 'Financial Analyst',
    level: 'Entry Level',
    description: 'Build analytical foundation',
    icon: ChartBarIcon
  },
  {
    id: 'research',
    title: 'Equity Research',
    level: 'Mid Level',
    description: 'Develop valuation expertise',
    icon: ArrowTrendingUpIcon
  },
  {
    id: 'portfolio',
    title: 'Portfolio Manager',
    level: 'Senior Level',
    description: 'Lead investment strategies',
    icon: BriefcaseIcon
  },
  {
    id: 'executive',
    title: 'CFO / CIO',
    level: 'Executive Level',
    description: 'Strategic leadership role',
    icon: StarIcon
  }
];

export default function CFACareerRoles() {
  const [isClient, setIsClient] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [showCareerModal, setShowCareerModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    interest: ''
  });

  useEffect(() => {
    setTimeout(() => setIsClient(true), 100);
  }, []);

  // Animate through career progression
  useEffect(() => {
    if (!isClient) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % careerProgression.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isClient]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Career report form submitted:', formData);
    setShowCareerModal(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      experience: '',
      interest: ''
    });
  };

  if (!isClient) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-50 via-red-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Career &amp; Job Roles
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Impact Section
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="sm:py-15 py-10 bg-gradient-to-br from-slate-50 via-red-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center sm:mb-16 mb-10">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-medium sm:mb-6 mb-3">
              <span className="text-2xl">5️⃣</span>
              <span>Career Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 sm:mb-6 mb-3">
              Career &amp; <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">Job Roles</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover your career trajectory and earning potential with CFA certification
            </p>
          </motion.div>

          {/* Animated Career Progression Infographic */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 text-center sm:mb-12 mb-10">
                Your CFA Career Journey
              </h3>
              
              <div className="relative">
                {/* Progress Line */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-200 via-purple-200 to-amber-200 rounded-full transform -translate-y-1/2 z-0" />
                
                {/* Career Steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                  {careerProgression.map((step, index) => {
                    const IconComponent = step.icon;
                    const isActive = activeStep === index;
                    
                    return (
                      <motion.div
                        key={step.id}
                        className="text-center"
                        animate={{
                          scale: isActive ? 1.1 : 1,
                          y: isActive ? -10 : 0
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isActive 
                            ? 'bg-gradient-to-r from-red-500 to-purple-500 text-white shadow-lg' 
                            : 'bg-white border-2 border-slate-200 text-slate-400'
                        }`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                        
                        <div className={`transition-all duration-500 ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                          <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                          <p className="text-sm text-slate-500 mb-1">{step.level}</p>
                          <p className="text-xs">{step.description}</p>
                        </div>
                        
                        {index < careerProgression.length - 1 && (
                          <div className="hidden md:block absolute top-8 right-0 transform translate-x-1/2">
                            <ArrowRightIcon className="w-6 h-6 text-slate-300" />
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Role Cards Grid */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
              High-Impact Roles &amp; Salaries
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {careerRoles.map((role, ) => {
                const IconComponent = role.icon;
                
                return (
                  <motion.div
                    key={role.id}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`bg-gradient-to-br ${role.bgColor} rounded-2xl p-6 border border-white/50 shadow-sm hover:shadow-lg transition-all duration-300`}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${role.color} rounded-xl flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h4 className="font-bold text-slate-900 text-lg mb-2">{role.role}</h4>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CurrencyDollarIcon className="w-4 h-4 text-green-600" />
                        <span className="font-semibold text-green-700">{role.salaryRange}</span>
                      </div>
                      
                      <div>
                        <p className="text-sm text-slate-600 mb-2 font-medium">Top Employers:</p>
                        <div className="space-y-1">
                          {role.topEmployers.map((employer, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <BuildingOfficeIcon className="w-3 h-3 text-slate-400" />
                              <span className="text-sm text-slate-700">{employer}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Career Report CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-purple-600/20" />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Want the Complete Career Roadmap?
                </h3>
                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                  Download our comprehensive global career report with salary benchmarks, growth trajectories, and insider tips
                </p>
                <LeadFormButton formType='download-placement-report' variant='secondary' isSendOtp={true} >
                 
                  View Global Career Report
                 
                </LeadFormButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Career Report Modal */}
      <AnimatePresence>
        {showCareerModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowCareerModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Global Career Report</h3>
                <button
                  onClick={() => setShowCareerModal(false)}
                  className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors"
                >
                  <XMarkIcon className="w-5 h-5 text-slate-600" />
                </button>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Current Experience</label>
                  <select
                    required
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select your experience</option>
                    <option value="fresher">Fresher (0 years)</option>
                    <option value="1-3">1-3 years</option>
                    <option value="4-7">4-7 years</option>
                    <option value="8+">8+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Career Interest</label>
                  <select
                    required
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select your interest</option>
                    <option value="equity-research">Equity Research</option>
                    <option value="investment-banking">Investment Banking</option>
                    <option value="portfolio-management">Portfolio Management</option>
                    <option value="risk-management">Risk Management</option>
                    <option value="corporate-finance">Corporate Finance</option>
                  </select>
                </div>

                 <LeadFormButton formType='download-placement-report' variant='outline' isSendOtp={true} className='mt-10'>
                  
                  Download Career Report (PDF)
                </LeadFormButton>
              </form>

              <p className="text-xs text-slate-500 mt-4 text-center">
                Get personalized career insights and salary benchmarks for your experience level
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}