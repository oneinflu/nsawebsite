'use client';

import React, { useState, useEffect } from 'react';
import TrustLogosMarquee from './TrustLogosMarquee';
import Link from 'next/link';
import {  CheckIcon, PlayIcon, StarIcon, AcademicCapIcon, CurrencyRupeeIcon, ChatBubbleLeftRightIcon, BriefcaseIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import LeadFormButton from './LeadFormButton';

interface Certification {
  id: string;
  name: string;
  fullName: string;
  country: string;
  flag: string;
  duration: string;
  format: string;
  authority: string;
  color: string;
  bgColor: string;
  description: string;
  parts: string;
}

interface Location {
  id: string;
  name: string;
  flag: string;
  salary: string;
  currency: string;
}

const Hero: React.FC = () => {
  const [selectedCertification, setSelectedCertification] = useState<string>('cma');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [showROIModal, setShowROIModal] = useState<boolean>(false);
  const [animatedStats, setAnimatedStats] = useState({ students: 0, passRate: 0, salary: 0 });

  const certifications: Record<string, Certification> = {
    cma: {
      id: 'cma',
      name: 'CMA',
      fullName: 'Certified Management Accountant',
      country: 'USA',
      flag: '🇺🇸',
      duration: '6-9 months',
      format: '2 parts',
      authority: 'IMA (Institute of Management Accountants)',
      color: 'text-red-600',
      bgColor: 'bg-red-50 border-red-200',
      description: 'Strategic financial management and decision-making',
      parts: 'Part 1: Financial Planning • Part 2: Strategic Financial Management'
    },
    cpa: {
      id: 'cpa',
      name: 'CPA',
      fullName: 'Certified Public Accountant',
      country: 'USA',
      flag: '🇺🇸',
      duration: '12-18 months',
      format: '4 sections',
      authority: 'AICPA (American Institute of CPAs)',
      color: 'text-green-600',
      bgColor: 'bg-green-50 border-green-200',
      description: 'Highest authority in accounting and auditing',
      parts: 'AUD • BEC • FAR • REG - Complete CPA Licensure'
    },
    acca: {
      id: 'acca',
      name: 'ACCA',
      fullName: 'Association of Chartered Certified Accountants',
      country: 'UK',
      flag: '🇬🇧',
      duration: '18-24 months',
      format: '13 papers',
      authority: 'ACCA UK (Global Accounting Body)',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 border-purple-200',
      description: 'Global accounting with maximum exemptions',
      parts: 'Knowledge • Skills • Strategic Professional - Global Recognition'
    }
  };

  const locations: Record<string, Location> = {
    usa: { id: 'usa', name: 'USA', flag: '🇺🇸', salary: '$65,000 - $120,000', currency: 'USD' },
    dubai: { id: 'dubai', name: 'Dubai', flag: '🇦🇪', salary: 'AED 180,000 - 350,000', currency: 'AED' },
    uk: { id: 'uk', name: 'UK', flag: '🇬🇧', salary: '£35,000 - £65,000', currency: 'GBP' },
    india: { id: 'india', name: 'India', flag: '🇮🇳', salary: '₹8 - 20 LPA', currency: 'INR' },
    anywhere: { id: 'anywhere', name: 'Anywhere', flag: '🌎', salary: 'Global Opportunities', currency: 'Multi' }
  };

  
  // Animate statistics on mount
  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedStats({
          students: Math.floor(25000 * progress),
          passRate: Math.floor(98 * progress),
          salary: Math.floor(20 * progress)
        });
        
        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
    };
    
    animateStats();
  }, []);

  const handleLocationSelect = (locationId: string) => {
    setSelectedLocation(locationId);
    setShowROIModal(true);
  };

  const currentCert = certifications[selectedCertification];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-red-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e0e7ff%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* LEFT SIDE - Sales Psychology + Funnel Entry */}
          <div className="space-y-8">
            
            {/* 1️⃣ Identity Badge */}
            <div className="inline-flex items-center space-x-3 bg-green-50 border border-green-200 rounded-full px-6 py-3 animate-slide-in-left">
              <CheckIcon className="w-5 h-5 text-green-600 animate-pulse" />
              <span className="text-green-800 font-medium">
                Same Certification as USA Students — CMA / CPA / ACCA Global Recognition
              </span>
            </div>

            {/* 2️⃣ Core Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-red-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                  Become a Globally Certified
                </span>
                <br />
                <span className="text-slate-800">
                  Finance Professional
                </span>
                <br />
                <span className="text-2xl lg:text-4xl text-slate-600">
                  in the Smartest Indian Way 🇮🇳
                </span>
              </h1>
            </div>

            {/* 3️⃣ Subtext */}
            <div className="text-lg text-slate-600 space-y-2">
              <p className="font-semibold text-slate-800">CMA (US), CPA (US) & ACCA (UK)</p>
              <p>Mentor-led learning · Big 4 Opportunities · Proven Success Systems</p>
            </div>

            {/* 4️⃣ Guided CTA Funnel */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                 <LeadFormButton 
               formType='general'
               variant='primary'
                className="w-full bg-gradient-to-r from-red-600 to-red-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
              >  <span>Book Free Counselling</span>
                  
                </LeadFormButton>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#courses"
                  className="flex-1 bg-white border-2 border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-medium hover:border-red-300 hover:shadow-md transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <AcademicCapIcon className="w-5 h-5" />
                  <span>Find My Best Course</span>
                </Link>

                <Link
                  href="#video-stories"
                  className="flex-1 bg-white border-2 border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-medium hover:border-red-300 hover:shadow-md transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <PlayIcon className="w-5 h-5" />
                  <span>Watch 100+ Success Stories</span>
                </Link>
              </div>
            </div>

            {/* 5️⃣ Statistics Row */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-red-600">
                  {animatedStats.students.toLocaleString()}+
                </div>
                <div className="text-sm text-slate-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-green-600">
                  {animatedStats.passRate}%
                </div>
                <div className="text-sm text-slate-600">Pass Success</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-purple-600">
                  ₹{animatedStats.salary}L
                </div>
                <div className="text-sm text-slate-600">Avg Careers</div>
              </div>
            </div>

            {/* 6️⃣ Quick Assurance Icons */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <CurrencyRupeeIcon className="w-5 h-5 text-green-600" />
                <span>₹3,999 EMI</span>
              </div>
              <div className="flex items-center space-x-2">
                <BriefcaseIcon className="w-5 h-5 text-red-600" />
                <span>Big 4 Placement Assistance</span>
              </div>
              <div className="flex items-center space-x-2">
                <ChatBubbleLeftRightIcon className="w-5 h-5 text-purple-600" />
                <span>WhatsApp Support</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Visual Conversion Engine */}
          <div className="relative">
            
            {/* 3D Interactive Passport Card */}
            <div className="relative z-20 bg-white rounded-2xl shadow-2xl p-8 border border-slate-200 transform hover:scale-105 transition-all duration-300">
              
              {/* Certification Toggles */}
              <div className="flex space-x-2 mb-6">
                {Object.values(certifications).map((cert) => (
                  <button
                    key={cert.id}
                    onClick={() => setSelectedCertification(cert.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedCertification === cert.id
                        ? `${cert.bgColor} ${cert.color} border-2`
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cert.name} {cert.flag}
                  </button>
                ))}
              </div>

              {/* Dynamic Card Content */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-full ${currentCert.bgColor} flex items-center justify-center`}>
                    <span className="text-xl font-bold">{currentCert.flag}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{currentCert.fullName}</h3>
                    <p className="text-slate-600">{currentCert.authority}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-500">Duration:</span>
                    <p className="font-medium text-black">{currentCert.duration}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Format:</span>
                    <p className="font-medium text-black">{currentCert.format}</p>
                  </div>
                </div>
                
                <div>
                  <span className="text-slate-500">Structure:</span>
                  <p className="font-medium text-slate-700">{currentCert.parts}</p>
                </div>
                
                <p className="text-slate-600 italic">{currentCert.description}</p>
              </div>
            </div>

            {/* Floating Micro Cards */}
            <div className="absolute inset-0 pointer-events-none z-30">
              
              {/* Certified Badge */}
              <div className="absolute -top-4 -left-4 bg-green-100 border border-green-200 rounded-lg p-3 shadow-xl animate-float pointer-events-auto z-40">
                <div className="flex items-center space-x-2">
                  <CheckIcon className="w-4 h-4 text-green-600" />
                  <div className="text-xs">
                    <div className="font-medium text-green-800">Certified by IMA/AICPA/ACCA</div>
                    <div className="text-green-600">Same certificate worldwide</div>
                  </div>
                </div>
              </div>

              {/* Big 4 Careers */}
              <div className="absolute -top-8 -right-8 bg-red-100 border border-red-200 rounded-lg p-3 shadow-xl animate-float-slow pointer-events-auto z-40">
                <div className="flex items-center space-x-2">
                  <BriefcaseIcon className="w-4 h-4 text-red-600" />
                  <div className="text-xs">
                    <div className="font-medium text-red-800">Big 4 & MNC Careers</div>
                    <div className="text-red-600">Deloitte • EY • KPMG • PwC</div>
                  </div>
                </div>
              </div>

              {/* Pass Rate */}
              <div className="absolute -bottom-4 -left-8 bg-yellow-100 border border-yellow-200 rounded-lg p-3 shadow-xl animate-float-slow-reverse pointer-events-auto z-40">
                <div className="flex items-center space-x-2">
                  <StarIcon className="w-4 h-4 text-yellow-600" />
                  <div className="text-xs">
                    <div className="font-medium text-yellow-800">98% Pass Rate</div>
                    <div className="text-yellow-600">Results that speak</div>
                  </div>
                </div>
              </div>

              {/* Irfat Sir */}
              <div className="absolute bottom-8 -right-4 bg-purple-100 border border-purple-200 rounded-lg p-3 shadow-xl animate-float pointer-events-auto z-40">
                <div className="flex items-center space-x-2">
                  <UserGroupIcon className="w-4 h-4 text-purple-600" />
                  <div className="text-xs">
                    <div className="font-medium text-purple-800">Irfat Sir</div>
                    <div className="text-purple-600">India&apos;s #1 CMA Coach</div>
                  </div>
                </div>
              </div>

              {/* EMI */}
              <div className="absolute top-1/2 -left-12 bg-green-200 border-2 border-green-300 rounded-lg p-3 shadow-xl animate-pulse-gentle pointer-events-auto z-40">
                <div className="flex items-center space-x-2">
                  <CurrencyRupeeIcon className="w-4 h-4 text-green-700" />
                  <div className="text-xs">
                    <div className="font-medium text-green-900">EMI ₹3,999</div>
                    <div className="text-green-700">Smarter Investment</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Self-Identification Prompt */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Where do you want to work?</h4>
              <div className="grid grid-cols-3 gap-3">
                {Object.values(locations).map((location) => (
                  <button
                    key={location.id}
                    onClick={() => handleLocationSelect(location.id)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 text-center ${
                      selectedLocation === location.id
                        ? 'border-red-500 bg-red-50'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-2xl mb-1">{location.flag}</div>
                    <div className="text-sm font-medium text-slate-700">{location.name}</div>
                  </button>
                ))}
              </div>
              
              {selectedLocation && (
                <div className="mt-4 p-4 bg-gradient-to-r from-red-50 to-red-50 rounded-lg border border-red-200">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-red-800">
                      Expected Salary: {locations[selectedLocation].salary}
                    </div>
                    <div className="text-sm text-red-600 mt-1">
                      &quot;This career changes my future&quot;
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Logo Auto-Scroller */}
      <div className="relative z-10 bg-white border-t border-slate-200 py-8 overflow-hidden">
        <div className="text-center mb-6">
          <p className="text-slate-600 font-medium">Trusted by students who now work at</p>
        </div>
        
        <TrustLogosMarquee />
      </div>

      {/* ROI Modal */}
      {showROIModal && selectedLocation && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowROIModal(false)}
        >
          <div 
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-slate-800">Your Career ROI</h3>
              <button 
                onClick={() => setShowROIModal(false)}
                className="text-slate-400 hover:text-slate-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              <div className="text-center p-6 bg-gradient-to-r from-green-50 to-red-50 rounded-xl">
                <div className="text-3xl mb-2">{locations[selectedLocation].flag}</div>
                <div className="text-xl font-semibold text-slate-800">{locations[selectedLocation].name}</div>
                <div className="text-lg text-green-600 font-medium">{locations[selectedLocation].salary}</div>
              </div>
              
              <div className="text-center">
                <p className="text-slate-600 mb-4">Investment: ₹3,999/month for 6-9 months</p>
                <p className="text-lg font-semibold text-red-600">ROI: 300-500% within 2 years</p>
              </div>
              
              <LeadFormButton 
               formType='general'
               variant='primary'
                className="w-full bg-gradient-to-r from-red-600 to-red-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
              >
                Start My Journey Now
              </LeadFormButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;