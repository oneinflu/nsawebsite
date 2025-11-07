'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  AcademicCapIcon,
  DocumentTextIcon,
  UserGroupIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  XMarkIcon,
  ArrowRightIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import LeadFormButton from '../LeadFormButton';

interface EligibilityRequirement {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface IdealCandidate {
  id: string;
  category: string;
  profiles: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const eligibilityRequirements: EligibilityRequirement[] = [
  {
    id: 'education',
    title: 'Educational Qualification',
    description: 'Final-year graduation or completed bachelor&apos;s degree from a recognized university',
    icon: AcademicCapIcon
  },
  {
    id: 'passport',
    title: 'Valid Passport',
    description: 'Passport mandatory for exam registration and identification purposes',
    icon: DocumentTextIcon
  }
];

const idealCandidates: IdealCandidate[] = [
  {
    id: 'academic',
    category: 'Academic Backgrounds',
    profiles: ['B.Com graduates', 'BBA graduates', 'MBA students/graduates', 'CA/CPA professionals', 'Finance degree holders'],
    icon: AcademicCapIcon
  },
  {
    id: 'professional',
    category: 'Professional Roles',
    profiles: ['Investment Banking professionals', 'Financial Planning & Analysis (FP&A)', 'Equity Research analysts', 'Commercial Banking', 'Portfolio Management'],
    icon: BriefcaseIcon
  }
];

export default function CFAEligibility() {
  const [isClient, setIsClient] = useState(false);
  const [showEligibilityModal, setShowEligibilityModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: ''
  });

  useEffect(() => {
    setTimeout(() => setIsClient(true), 100);
  }, []);

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
    console.log('Eligibility check form submitted:', formData);
    setShowEligibilityModal(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      education: '',
      experience: ''
    });
  };

  if (!isClient) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Who Can Pursue CFA?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Eligibility & Ideal Profiles
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="text-2xl">4️⃣</span>
              <span>Eligibility & Requirements</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Who Can Pursue <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">CFA?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover if you meet the requirements and see if you&apos;re an ideal candidate for the CFA program
            </p>
          </motion.div>

          {/* Main Content - 2 Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Eligibility Requirements */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-red-50 to-red-50 rounded-3xl p-8 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                    <CheckCircleIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Eligibility Requirements</h3>
                    <p className="text-slate-600">Basic requirements to register for CFA</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {eligibilityRequirements.map((requirement) => {
                    const IconComponent = requirement.icon;
                    return (
                      <div key={requirement.id} className="bg-white rounded-2xl p-6 shadow-sm border border-red-100">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-5 h-5 text-red-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2">{requirement.title}</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">{requirement.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Ideal Candidates */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                    <UserGroupIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Ideal Candidates</h3>
                    <p className="text-slate-600">Perfect profiles for CFA success</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {idealCandidates.map((candidate) => {
                    const IconComponent = candidate.icon;
                    return (
                      <div key={candidate.id} className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-5 h-5 text-purple-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-slate-900 mb-3">{candidate.category}</h4>
                            <ul className="space-y-2">
                              {candidate.profiles.map((profile, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                                  <span className="text-lg">🎯</span>
                                  <span>{profile}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Micro CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-purple-600/20" />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Not Sure if You&apos;re Eligible?
                </h3>
                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                  Get instant clarity on your CFA eligibility with our quick assessment
                </p>
               <LeadFormButton formType='general' variant='outline' isSendOtp={true} className='mt-10'>
                
                 
                  Check Eligibility Instantly
                
                </LeadFormButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Eligibility Check Modal */}
      <AnimatePresence>
        {showEligibilityModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowEligibilityModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-900">CFA Eligibility Check</h3>
                <button
                  onClick={() => setShowEligibilityModal(false)}
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
                  <label className="block text-sm font-medium text-slate-700 mb-2">Educational Background</label>
                  <select
                    required
                    value={formData.education}
                    onChange={(e) => setFormData({...formData, education: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select your education</option>
                    <option value="final-year">Final year graduation</option>
                    <option value="bachelor-completed">Bachelor&apos;s degree completed</option>
                    <option value="master-pursuing">Master&apos;s degree pursuing</option>
                    <option value="master-completed">Master&apos;s degree completed</option>
                    <option value="professional">Professional qualification (CA/CPA/etc.)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Work Experience</label>
                  <select
                    required
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select your experience</option>
                    <option value="fresher">Fresher (0 years)</option>
                    <option value="1-2">1-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg hover:from-red-600 hover:to-purple-600 transition-all duration-200"
                >
                  Check My Eligibility
                </button>
              </form>

              <p className="text-xs text-slate-500 mt-4 text-center">
                We&apos;ll send you a detailed eligibility report and personalized CFA roadmap
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}