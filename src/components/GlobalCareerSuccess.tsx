'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MapPin, ArrowRight, TrendingUp, Users, Globe, CheckCircle, Star, Building, Award, Target } from 'lucide-react';

const GlobalCareerSuccess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredPin, setHoveredPin] = useState(null);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  // Company logos for carousel
  const companyLogos = [
    { name: 'Deloitte', tier: 'Big 4' },
    { name: 'EY', tier: 'Big 4' },
    { name: 'KPMG', tier: 'Big 4' },
    { name: 'PwC', tier: 'Big 4' },
    { name: 'Amazon', tier: 'MNC' },
    { name: 'Accenture', tier: 'MNC' },
    { name: 'Wipro', tier: 'MNC' },
    { name: 'Flipkart', tier: 'MNC' },
    { name: 'Microsoft', tier: 'MNC' },
    { name: 'Google', tier: 'MNC' },
    { name: 'JP Morgan', tier: 'Banking' },
    { name: 'Goldman Sachs', tier: 'Banking' }
  ];

  // Placement pipeline steps
  const placementSteps = [
    { phase: 'Train', description: 'Master concepts & questions', icon: Award },
    { phase: 'Coach', description: 'Mentorship from experts', icon: Users },
    { phase: 'Prepare', description: 'Soft skills, resume, LinkedIn', icon: Target },
    { phase: 'Apply', description: 'Job leads through NorthStar network', icon: Building },
    { phase: 'Interview', description: 'Mock rounds + confidence coaching', icon: Star },
    { phase: 'Get Hired', description: 'Offer support & documentation', icon: CheckCircle }
  ];

  // Global career map pins
  const careerPins = [
    {
      id: 1,
      city: 'New York',
      position: { left: '25%', top: '35%' },
      alumni: {
        name: 'Priya Sharma',
        role: 'Senior Financial Analyst',
        company: 'JP Morgan',
        certificate: 'CPA US',
        photo: '/api/placeholder/60/60'
      }
    },
    {
      id: 2,
      city: 'Dubai',
      position: { left: '60%', top: '45%' },
      alumni: {
        name: 'Rahul Patel',
        role: 'Finance Manager',
        company: 'Deloitte',
        certificate: 'CMA US',
        photo: '/api/placeholder/60/60'
      }
    },
    {
      id: 3,
      city: 'London',
      position: { left: '48%', top: '25%' },
      alumni: {
        name: 'Sneha Gupta',
        role: 'Audit Associate',
        company: 'EY',
        certificate: 'ACCA',
        photo: '/api/placeholder/60/60'
      }
    },
    {
      id: 4,
      city: 'Mumbai',
      position: { left: '70%', top: '55%' },
      alumni: {
        name: 'Amit Kumar',
        role: 'Financial Controller',
        company: 'KPMG',
        certificate: 'CMA US',
        photo: '/api/placeholder/60/60'
      }
    },
    {
      id: 5,
      city: 'Singapore',
      position: { left: '80%', top: '65%' },
      alumni: {
        name: 'Kavya Nair',
        role: 'Risk Analyst',
        company: 'PwC',
        certificate: 'CPA US',
        photo: '/api/placeholder/60/60'
      }
    },
    {
      id: 6,
      city: 'Dublin',
      position: { left: '45%', top: '30%' },
      alumni: {
        name: 'Rohan Singh',
        role: 'Tax Consultant',
        company: 'Accenture',
        certificate: 'ACCA',
        photo: '/api/placeholder/60/60'
      }
    }
  ];

  // Success outcome cards
  const outcomeCards = [
    {
      id: 1,
      beforeSalary: '₹3.5L',
      afterSalary: '₹12L',
      multiplier: '3x',
      student: 'Arjun Reddy',
      location: 'Vijayawada → EY GDS Hyderabad',
      testimony: 'Mentorship changed everything',
      company: 'EY',
      certificate: 'CMA US',
      photo: '/api/placeholder/80/80',
      offerLetter: '/api/placeholder/300/200'
    },
    {
      id: 2,
      beforeSalary: '₹4L',
      afterSalary: '₹15L',
      multiplier: '3.7x',
      student: 'Meera Shah',
      location: 'Ahmedabad → Deloitte Mumbai',
      testimony: 'Dream job achieved in 6 months',
      company: 'Deloitte',
      certificate: 'CPA US',
      photo: '/api/placeholder/80/80',
      offerLetter: '/api/placeholder/300/200'
    },
    {
      id: 3,
      beforeSalary: '₹2.8L',
      afterSalary: '₹11L',
      multiplier: '4x',
      student: 'Karthik Iyer',
      location: 'Chennai → KPMG Bangalore',
      testimony: 'From confusion to confidence',
      company: 'KPMG',
      certificate: 'ACCA',
      photo: '/api/placeholder/80/80',
      offerLetter: '/api/placeholder/300/200'
    },
    {
      id: 4,
      beforeSalary: '₹3L',
      afterSalary: '₹14L',
      multiplier: '4.6x',
      student: 'Pooja Agarwal',
      location: 'Jaipur → PwC Gurgaon',
      testimony: 'Personal guidance made the difference',
      company: 'PwC',
      certificate: 'CMA US',
      photo: '/api/placeholder/80/80',
      offerLetter: '/api/placeholder/300/200'
    },
    {
      id: 5,
      beforeSalary: '₹3.2L',
      afterSalary: '₹13L',
      multiplier: '4x',
      student: 'Vikram Joshi',
      location: 'Pune → Amazon Hyderabad',
      testimony: 'Tech finance role unlocked',
      company: 'Amazon',
      certificate: 'CPA US',
      photo: '/api/placeholder/80/80',
      offerLetter: '/api/placeholder/300/200'
    },
    {
      id: 6,
      beforeSalary: '₹2.5L',
      afterSalary: '₹10L',
      multiplier: '4x',
      student: 'Divya Menon',
      location: 'Kochi → Accenture Bangalore',
      testimony: 'Global career from small city',
      company: 'Accenture',
      certificate: 'ACCA',
      photo: '/api/placeholder/80/80',
      offerLetter: '/api/placeholder/300/200'
    }
  ];

  // Scroll-based step activation
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        const newActiveStep = Math.floor(scrollProgress * placementSteps.length);
        setActiveStep(Math.min(newActiveStep, placementSteps.length - 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Row 1: Career Destination - Big Visual Statement */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center relative">
          {/* Background company logos halo */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="grid grid-cols-4 gap-8 text-6xl font-bold text-slate-300">
              <span>Deloitte</span>
              <span>EY</span>
              <span>KPMG</span>
              <span>PwC</span>
              <span>Amazon</span>
              <span>Accenture</span>
              <span>Wipro</span>
              <span>Flipkart</span>
            </div>
          </div>

          <div className="relative z-10">
            <h2 className="text-5xl lg:text-6xl font-light text-slate-900 leading-tight mb-6">
              From Classroom to
              <span className="block text-indigo-600 font-medium">Big 4 & Beyond</span>
              <span className="block text-2xl lg:text-3xl font-light text-slate-600 mt-4">
                Handheld Career Launch
              </span>
            </h2>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              We don&apos;t stop at teaching.<br />
              <span className="font-medium text-slate-800">We take you all the way to your global finance career.</span>
            </p>

            {/* Hero visual placeholder */}
            <div className="relative max-w-md mx-auto mb-8">
              <img 
                src="/api/placeholder/400/300" 
                alt="Student with certificate and company logos"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-amber-400 text-slate-900 px-4 py-2 rounded-full font-semibold shadow-lg">
                Your Future
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Hiring Partners Carousel */}
      <div className="bg-white py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-light text-slate-900 mb-4">Trusted by 200+ Recruitment Partners</h3>
            <p className="text-slate-600">Big companies trust NorthStar graduates</p>
          </div>

          {/* Scrolling logos */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12 items-center">
              {[...companyLogos, ...companyLogos].map((company, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 group cursor-pointer"
                  title={`${company.tier} • 200+ recruitment connections`}
                >
                  <div className="bg-slate-100 hover:bg-white border border-slate-200 hover:border-slate-300 rounded-xl px-8 py-4 transition-all duration-300 hover:shadow-lg">
                    <span className="text-xl font-semibold text-slate-400 group-hover:text-slate-700 transition-colors">
                      {company.name}
                    </span>
                    <div className="text-xs text-slate-400 mt-1">{company.tier}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Placement Support Pipeline */}
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-light text-slate-900 mb-4">Your Success Pipeline</h3>
          <p className="text-xl text-slate-600">Six proven steps from learning to landing your dream job</p>
        </div>

        <div className="relative">
          {/* Progress line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 transform -translate-y-1/2 hidden lg:block">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-amber-400 transition-all duration-1000 ease-out"
              style={{ width: `${((activeStep + 1) / placementSteps.length) * 100}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {placementSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index <= activeStep;
              
              return (
                <div key={index} className="relative">
                  <div className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-500 ${
                    isActive 
                      ? 'border-indigo-500 shadow-xl transform -translate-y-2' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${
                      isActive 
                        ? 'bg-indigo-500 text-white' 
                        : 'bg-slate-100 text-slate-400'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <h4 className={`font-semibold mb-2 transition-colors duration-500 ${
                      isActive ? 'text-slate-900' : 'text-slate-600'
                    }`}>
                      {step.phase}
                    </h4>
                    
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Step number */}
                  <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                    isActive 
                      ? 'bg-amber-400 text-slate-900' 
                      : 'bg-slate-200 text-slate-500'
                  }`}>
                    {index + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

     

      {/* Row 5: Student Job Outcome Cards */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-light text-slate-900 mb-4">Real Transformations, Real Results</h3>
          <p className="text-xl text-slate-600">Success stories that prove our placement promise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomeCards.map((card) => (
            <div 
              key={card.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 hover:border-slate-300 cursor-pointer transform hover:-translate-y-2"
            >
              {/* Front of card */}
              <div className="p-6 group-hover:opacity-0 transition-opacity duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={card.photo} 
                    alt={card.student}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-900">{card.student}</h4>
                    <p className="text-sm text-slate-600">{card.location}</p>
                  </div>
                </div>

                {/* Salary transformation */}
                <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <p className="text-sm text-slate-600">Before</p>
                      <p className="text-xl font-bold text-red-600">{card.beforeSalary}</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-slate-400" />
                    <div className="text-center">
                      <p className="text-sm text-slate-600">After</p>
                      <p className="text-xl font-bold text-green-600">{card.afterSalary}</p>
                    </div>
                  </div>
                  <div className="text-center mt-2">
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-bold">
                      {card.multiplier} salary jump
                    </span>
                  </div>
                </div>

                <blockquote className="text-slate-700 italic text-center mb-4">
                  &quot;{card.testimony}&quot;
                </blockquote>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-indigo-600">{card.company}</span>
                  <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm">
                    {card.certificate}
                  </span>
                </div>
              </div>

              {/* Back of card (offer letter) */}
              <div className="absolute inset-0 p-6 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center">
                <div className="text-center">
                  <h5 className="font-semibold text-slate-900 mb-4">Offer Letter Preview</h5>
                  <img 
                    src={card.offerLetter} 
                    alt="Offer letter"
                    className="w-full h-48 object-cover rounded-lg border border-slate-200 mb-4"
                  />
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-sm text-green-800 font-medium">
                      ✓ Verified Placement Success
                    </p>
                    <p className="text-xs text-green-600 mt-1">
                      100% authentic documentation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA: Become the Next NorthStar Success */}
      <div className="bg-gradient-to-r from-indigo-900 via-slate-800 to-indigo-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-light mb-6">
            Become the Next NorthStar Success
          </h3>
          <p className="text-xl text-slate-300 mb-8">
            Launch Your Global Career with 100% Placement Support
          </p>
          
          <button className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-12 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl mb-8 animate-pulse-slow">
            Book Free Counselling
          </button>

          <div className="space-y-4 text-slate-300">
            <p className="text-lg font-medium">
              100% Career support included in every program
            </p>
            <p className="text-amber-400 font-medium">
              Only 40 seats per batch — fill fast
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default GlobalCareerSuccess;