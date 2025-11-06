/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon, XCircleIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { useLeadForm } from '@/context/LeadFormContext';
import LeadFormButton from '../LeadFormButton';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface EligibilityQuestion {
  id: string;
  question: string;
  type: 'select' | 'radio';
  options: { value: string; label: string; points: number }[];
  required: boolean;
}

export default function CMAEligibilityChecker() {
  const { leadVerified, setLeadVerified, formData, updateFormData } = useLeadForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [eligibilityScore, setEligibilityScore] = useState(0);
  const [inlineStep, setInlineStep] = useState<'details' | 'otp'>('details');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [otpDigits, setOtpDigits] = useState<string[]>(['', '', '', '']);
  const otpRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [leadId, setLeadId] = useState<string | null>(null);
  const inlineLocationRef = useRef<HTMLInputElement | null>(null);
  const [inlineAutocomplete, setInlineAutocomplete] = useState<any>(null);

  const questions: EligibilityQuestion[] = [
    {
      id: 'education',
      question: 'What is your highest level of education?',
      type: 'radio',
      options: [
        { value: 'bachelor', label: "Bachelor's degree from accredited institution", points: 10 },
        { value: 'master', label: "Master's degree or higher", points: 15 },
        { value: 'diploma', label: 'Diploma/Associate degree', points: 5 },
        { value: 'high_school', label: 'High school/12th grade', points: 0 }
      ],
      required: true
    },
    {
      id: 'field',
      question: 'What field is your degree in?',
      type: 'radio',
      options: [
        { value: 'business', label: 'Business/Commerce/Finance/Accounting', points: 10 },
        { value: 'engineering', label: 'Engineering/Technology', points: 8 },
        { value: 'science', label: 'Science/Mathematics', points: 6 },
        { value: 'other', label: 'Other field', points: 4 }
      ],
      required: true
    },
    {
      id: 'experience',
      question: 'How much professional work experience do you have?',
      type: 'radio',
      options: [
        { value: '0', label: 'No professional experience', points: 0 },
        { value: '1-2', label: '1-2 years', points: 5 },
        { value: '3-5', label: '3-5 years', points: 10 },
        { value: '5+', label: '5+ years', points: 15 }
      ],
      required: true
    }
  ];

  const handlePhoneChange = (value: string) => {
    updateFormData({ phone: value });
    setPhoneError('');
  };

  useEffect(() => {
    if (
      !leadVerified &&
      inlineStep === 'details' &&
      inlineLocationRef.current &&
      typeof google !== 'undefined' &&
      google.maps?.places?.Autocomplete
    ) {
      const autocompleteInstance = new google.maps.places.Autocomplete(
        inlineLocationRef.current,
        {
          types: ['(cities)'],
          componentRestrictions: { country: 'in' },
        }
      );
      setInlineAutocomplete(autocompleteInstance);
      autocompleteInstance.addListener('place_changed', () => {
        const place = autocompleteInstance.getPlace();
        if (place && place.formatted_address) {
          updateFormData({ location: place.formatted_address });
        }
      });
    }
  }, [leadVerified, inlineStep, inlineLocationRef, updateFormData]);

  const handleDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneError) return;
    setIsSubmitting(true);

    const leadData = {
      form_id: '7e68ae1a-5765-489c-9b62-597b478c0fa0',
      visitor_id: '68303d80d71ba95da713026e',
      isSendOtp: true,
      answers: {
        full_name: formData.name,
        phone_number: formData.phone,
        email_address: formData.email,
        dob: formData.dob,
        gender: formData.gender,
        education: formData.education,
        professional: formData.professional,
        course_id: formData.course,
        study_mode: formData.studyMode || 'Online',
        accept_terms: formData.agreeToTerms,
        dynamic_fields: { how_did_you_hear_about_us: formData.howHeard },
      },
      utm_data: {
        utm_source: formData.utm_source,
        utm_medium: formData.utm_medium,
        utm_campaign: formData.utm_campaign,
        utm_term: formData.utm_term,
        utm_content: formData.utm_content,
        utm_tag: '',
        utm_keyword: '',
      },
      location_data: {
        country: 'India',
        state: '',
        city: formData.location,
        pin_code: '',
      },
      session_referrer: typeof document !== 'undefined' ? (document.referrer || 'direct') : 'direct',
      ip_address: '',
    };

    try {
      const response = await fetch('https://api.starforze.com/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Inline lead created successfully:', result);
        const id = result?.data?._id ?? result?.data?.id ?? null;
        setLeadId(id);
        console.log('Inline captured leadId:', id);
        setInlineStep('otp');
      } else {
        const errorData = await response.json();
        console.error('Inline form submission failed:', response.status, errorData);
      }
    } catch (error) {
      console.error('Inline lead error:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOtpVerificationInline = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadId) {
      setOtpError('Lead ID not found. Please try again.');
      return;
    }
    const otp = otpDigits.join('');
    if (otp.length !== 4) {
      setOtpError('OTP must be 4 digits.');
      return;
    }
    setIsSubmitting(true);
    setOtpError('');
    console.log('Inline verifying OTP with leadId:', leadId, 'otp:', otp);

    try {
      const response = await fetch(`https://api.starforze.com/api/leads/${leadId}/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp }),
      });
      if (response.ok) {
        const result = await response.json();
        console.log('Inline OTP verification success:', result);
        setLeadVerified(true);
      } else {
        const errorData = await response.json();
        console.error('Inline OTP verification failed:', response.status, errorData);
        setOtpError(errorData.message || 'Invalid OTP. Please try again.');
      }
    } catch (error) {
      setOtpError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendOtpInline = async () => {
    setIsSubmitting(true);
    setOtpError('');

    const leadData = {
      form_id: '7e68ae1a-5765-489c-9b62-597b478c0fa0',
      visitor_id: '68303d80d71ba95da713026e',
      isSendOtp: true,
      answers: {
        full_name: formData.name,
        phone_number: formData.phone,
        email_address: formData.email,
        course_id: formData.course || 'CMA USA',
      },
      utm_data: {
        utm_source: formData.utm_source,
        utm_medium: formData.utm_medium,
        utm_campaign: formData.utm_campaign,
        utm_term: formData.utm_term,
        utm_content: formData.utm_content,
        utm_tag: '',
        utm_keyword: '',
      },
      location_data: {
        country: 'India',
        state: '',
        city: formData.location,
        pin_code: '',
      },
      session_referrer: typeof document !== 'undefined' ? (document.referrer || 'direct') : 'direct',
      ip_address: '',
    };

    try {
      const response = await fetch('https://api.starforze.com/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData),
      });
      if (response.ok) {
        const result = await response.json();
        const id = result?.data?._id ?? result?.data?.id ?? null;
        setLeadId(id);
        setOtpDigits(['', '', '', '']);
      } else {
        console.error('Inline resend OTP failed');
      }
    } catch (error) {
      console.error('Inline resend OTP error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOtpInputChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, '').slice(0, 1);
    const next = [...otpDigits];
    next[index] = digit;
    setOtpDigits(next);
    if (digit && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateEligibility = () => {
    let totalScore = 0;
    let maxPossible = 0;
    questions.forEach(question => {
      const answer = answers[question.id];
      const maxForQuestion = Math.max(...question.options.map(opt => opt.points));
      maxPossible += maxForQuestion;
      if (answer) {
        const option = question.options.find(opt => opt.value === answer);
        if (option) {
          totalScore += option.points;
        }
      }
    });
    const percentage = maxPossible > 0 ? Math.round((totalScore / maxPossible) * 100) : 0;
    setEligibilityScore(percentage);
    setShowResults(true);
  };

  const getEligibilityStatus = (score: number) => {
    if (score >= 70) {
      return {
        status: 'Highly Eligible',
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        icon: CheckCircleIcon,
        message: 'Excellent! You meet all the requirements for CMA certification and are well-positioned for success.',
        recommendations: [
          'You can start immediately with our accelerated program',
          'Consider the 6-9 month completion track',
          'You qualify for advanced study materials'
        ]
      };
    } else if (score >= 50) {
      return {
        status: 'Eligible with Preparation',
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        icon: QuestionMarkCircleIcon,
        message: 'Good news! You are eligible for CMA, but some additional preparation would be beneficial.',
        recommendations: [
          'Consider our foundation course first',
          'Plan for a 9-12 month timeline',
          'Focus on strengthening accounting fundamentals'
        ]
      };
    } else {
      return {
        status: 'Need Foundation Building',
        color: 'text-red-600',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
        icon: XCircleIcon,
        message: 'You can still pursue CMA! We recommend building a strong foundation first.',
        recommendations: [
          'Start with our comprehensive foundation program',
          'Plan for a 12-18 month timeline',
          'Consider gaining relevant work experience'
        ]
      };
    }
  };

  const resetChecker = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    setEligibilityScore(0);
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateEligibility();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const eligibilityResult = getEligibilityStatus(eligibilityScore);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          {/* Mobile-only layout */}
          <div className="md:hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-slate-900">Check Your CMA USA Eligibility</h2>
              <p className="mt-2 text-slate-600 text-sm">Quick 3-step check with personalized guidance. Verify your phone to begin.</p>
            </div>
            <div className="border-t border-slate-100" />
            <div className="p-6">
              <AnimatePresence mode="wait">
                {!leadVerified ? (
                  <motion.div
                    key="mobile-inline-form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    {inlineStep === 'details' && (
                      <form onSubmit={handleDetailsSubmit}>
                        <div className="mb-4">
                          <label htmlFor="name" className="block text-sm font-medium text-black mb-1">Full Name</label>
                          <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) => updateFormData({ name: e.target.value })}
                            className="w-full px-4 py-2.5 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="email" className="block text-sm font-medium text-black mb-1">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => updateFormData({ email: e.target.value })}
                            className="w-full px-4 py-2.5 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Enter your email address"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="phone" className="block text-sm font-medium text-black mb-1">Phone Number</label>
                          <PhoneInput
                            country={'in'}
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            containerClass="w-full"
                            inputClass="w-full px-4 py-2.5 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                          />
                          {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
                        </div>
                        <div className="mb-4">
                          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                          <input
                            ref={inlineLocationRef}
                            type="text"
                            id="location"
                            value={formData.location}
                            onChange={(e) => updateFormData({ location: e.target.value })}
                            className="w-full px-4 py-2.5 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Enter your city"
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-4 rounded-md transition duration-300"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Processing...' : 'Submit'}
                        </button>
                      </form>
                    )}
                    {inlineStep === 'otp' && (
                      <form onSubmit={handleOtpVerificationInline}>
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Enter OTP</label>
                          <div className="grid grid-cols-4 gap-3">
                            {otpDigits.map((d, i) => (
                              <input
                                key={i}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={d}
                                ref={(el) => { otpRefs.current[i] = el; }}
                                onChange={(e) => handleOtpInputChange(i, e.target.value)}
                                onKeyDown={(e) => handleOtpKeyDown(i, e)}
                                className="text-center text-lg w-full px-3 py-2.5 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                              />
                            ))}
                          </div>
                          {otpError && (
                            <p className="mt-2 text-sm text-red-600">{otpError}</p>
                          )}
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-4 rounded-md transition duration-300"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Verifying...' : 'Verify OTP'}
                        </button>
                        <div className="mt-4 text-sm text-center">
                          <button type="button" onClick={() => setInlineStep('details')} className="text-red-600 hover:underline">Wrong number? Change it</button>
                          <span className="mx-2 text-gray-400">|</span>
                          <button type="button" onClick={handleResendOtpInline} className="text-red-600 hover:underline">Resend OTP</button>
                        </div>
                      </form>
                    )}
                  </motion.div>
                ) : !showResults ? (
                  <motion.div
                    key="mobile-quiz"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-slate-50 px-4 py-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-600">Step {currentStep + 1} of {questions.length}</span>
                        <span className="text-xs font-medium text-slate-600">{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2">
                        <motion.div className="bg-gradient-to-r from-red-600 to-red-500 h-1.5 rounded-full" initial={{ width: 0 }} animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }} transition={{ duration: 0.3 }} />
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-6">{questions[currentStep].question}</h3>
                      <div className="space-y-3">
                        {questions[currentStep].options.map((option, index) => (
                          <motion.label
                            key={option.value}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, delay: index * 0.08 }}
                            className={`block p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                              answers[questions[currentStep].id] === option.value ? 'border-red-500 bg-red-50' : 'border-slate-200 hover:border-red-300 hover:bg-slate-50'
                            }`}
                          >
                            <div className="flex items-center">
                              <input type="radio" name={questions[currentStep].id} value={option.value} checked={answers[questions[currentStep].id] === option.value} onChange={(e) => handleAnswer(questions[currentStep].id, e.target.value)} className="w-4 h-4 text-red-600 border-slate-300 focus:ring-red-500" />
                              <span className="ml-3 text-slate-900 text-sm font-medium">{option.label}</span>
                            </div>
                          </motion.label>
                        ))}
                      </div>
                    </div>

                    <div className="sticky bottom-0 bg-white border-t border-slate-200 p-3 flex justify-between">
                      <button onClick={prevStep} className={`px-4 py-2 rounded-lg font-semibold bg-slate-200 text-slate-700 hover:bg-slate-300 ${currentStep === 0 ? 'invisible' : ''}`}>Back</button>
                      <button onClick={nextStep} disabled={!answers[questions[currentStep].id]} className={`px-4 py-2 rounded-lg font-semibold ${!answers[questions[currentStep].id] ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-gradient-to-r from-red-600 to-red-500 text-white'}`}>{currentStep === questions.length - 1 ? 'See Results' : 'Next'}</button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="mobile-results" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="p-6 text-center">
                    <eligibilityResult.icon className={`w-16 h-16 mx-auto ${eligibilityResult.color}`} />
                    <h3 className={`text-2xl font-bold mt-4 ${eligibilityResult.color}`}>{eligibilityResult.status}</h3>
                    <p className="mt-3 text-base text-slate-700">Your score: <strong>{eligibilityScore}/100</strong></p>
                    <p className="mt-3 text-slate-600">{eligibilityResult.message}</p>
                    <div className={`mt-6 p-4 rounded-lg ${eligibilityResult.bgColor} border ${eligibilityResult.borderColor} text-left`}>
                      <h4 className="text-lg font-bold text-slate-800 mb-3">Next Steps</h4>
                      <ul className="space-y-2 text-slate-700">
                        {eligibilityResult.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5" /><span>{rec}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <LeadFormButton formType="cma" variant="primary" className="w-full">Download Full Syllabus</LeadFormButton>
                      <button onClick={resetChecker} className="mt-3 w-full px-4 py-2 rounded-lg font-semibold text-slate-700 bg-slate-200">Check Again</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          {/* Desktop layout */}
          <div className="hidden md:grid grid-cols-2">
            <div className="hidden md:block bg-gradient-to-br from-red-700 to-red-900 p-8 text-white">
              <h2 className="text-3xl font-bold text-white">Check Your CMA USA Eligibility</h2>
              <p className="mt-4 text-lg text-white">
                Find out if you&apos;re eligible to become a Certified Management Accountant (CMA) in the USA. Our quick and easy eligibility checker will guide you through the requirements.
              </p>
              <ul className="mt-6 space-y-4 text-white">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3" />
                  <span>Instant eligibility results</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3" />
                  <span>Personalized guidance based on your profile</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3" />
                  <span>Start your journey to becoming a CMA today</span>
                </li>
              </ul>
            </div>

            <div className="p-8">
              <AnimatePresence mode="wait">
                {!leadVerified ? (
                  <motion.div
                    key="inline-form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
                    {inlineStep === 'details' && (
                      <form onSubmit={handleDetailsSubmit}>
                        <div className="mb-4">
                          <label htmlFor="name" className="block text-sm font-medium text-black mb-1">Full Name</label>
                          <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) => updateFormData({ name: e.target.value })}
                            className="w-full px-4 py-2.5 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="email" className="block text-sm font-medium text-black mb-1">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => updateFormData({ email: e.target.value })}
                            className="w-full px-4 py-2.5 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Enter your email address"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="phone" className="block text-sm font-medium text-black mb-1">Phone Number</label>
                          <PhoneInput
                            country={'in'}
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            containerClass="w-full"
                            inputClass="w-full px-4 py-2.5 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                          />
                          {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
                        </div>
                        <div className="mb-4">
                          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                          <input
                            ref={inlineLocationRef}
                            type="text"
                            id="location"
                            value={formData.location}
                            onChange={(e) => updateFormData({ location: e.target.value })}
                            className="w-full px-4 py-2.5 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Enter your city"
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-4 rounded-md transition duration-300 flex items-center justify-center"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                          ) : null}
                          {isSubmitting ? 'Processing...' : 'Submit'}
                        </button>
                      </form>
                    )}
                    {inlineStep === 'otp' && (
                      <form onSubmit={handleOtpVerificationInline}>
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Enter OTP</label>
                          <div className="grid grid-cols-4 gap-3">
                            {otpDigits.map((d, i) => (
                              <input
                                key={i}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={d}
                                ref={(el) => {
                                  otpRefs.current[i] = el;
                                }}
                                onChange={(e) => handleOtpInputChange(i, e.target.value)}
                                onKeyDown={(e) => handleOtpKeyDown(i, e)}
                                className="text-center text-lg w-full px-3 py-2.5 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                              />
                            ))}
                          </div>
                          {otpError && (
                            <p className="mt-2 text-sm text-red-600">{otpError}</p>
                          )}
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-4 rounded-md transition duration-300 flex items-center justify-center"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                          ) : null}
                          {isSubmitting ? 'Verifying...' : 'Verify OTP'}
                        </button>
                        <div className="mt-4 text-sm text-center">
                          <button
                            type="button"
                            onClick={() => setInlineStep('details')}
                            className="text-red-600 hover:underline"
                          >
                            Wrong number? Change it
                          </button>
                          <span className="mx-2 text-gray-400">|</span>
                          <button
                            type="button"
                            onClick={handleResendOtpInline}
                            className="text-red-600 hover:underline"
                          >
                            Resend OTP
                          </button>
                        </div>
                      </form>
                    )}
                  </motion.div>
                ) : !showResults ? (
                  <motion.div
                    key="quiz-form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="bg-slate-50 px-6 py-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-600">
                          Question {currentStep + 1} of {questions.length}
                        </span>
                        <span className="text-sm font-medium text-slate-600">
                          {Math.round(((currentStep + 1) / questions.length) * 100)}% Complete
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-red-600 to-red-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>

                    <div className="p-8">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentStep}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-2xl font-bold text-slate-900 mb-8">
                            {questions[currentStep].question}
                          </h3>

                          <div className="space-y-4">
                            {questions[currentStep].options.map((option, index) => (
                              <motion.label
                                key={option.value}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className={`block p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                                  answers[questions[currentStep].id] === option.value
                                    ? 'border-red-500 bg-red-50'
                                    : 'border-slate-200 hover:border-red-300 hover:bg-slate-50'
                                }`}
                              >
                                <div className="flex items-center">
                                  <input
                                    type="radio"
                                    name={questions[currentStep].id}
                                    value={option.value}
                                    checked={answers[questions[currentStep].id] === option.value}
                                    onChange={(e) => handleAnswer(questions[currentStep].id, e.target.value)}
                                    className="w-4 h-4 text-red-600 border-slate-300 focus:ring-red-500"
                                  />
                                  <span className="ml-3 text-slate-900 font-medium">
                                    {option.label}
                                  </span>
                                </div>
                              </motion.label>
                            ))}
                          </div>
                        </motion.div>
                      </AnimatePresence>

                      <div className="flex justify-between mt-8">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={prevStep}
                          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 bg-slate-200 text-slate-700 hover:bg-slate-300 ${currentStep === 0 ? 'invisible' : ''}`}
                        >
                          Back
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={nextStep}
                          disabled={!answers[questions[currentStep].id]}
                          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                            !answers[questions[currentStep].id]
                              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                              : 'bg-gradient-to-r from-red-600 to-red-500 text-white hover:shadow-lg'
                          }`}
                        >
                          {currentStep === questions.length - 1 ? 'See Results' : 'Next'}
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-8 text-center"
                  >
                    <eligibilityResult.icon className={`w-20 h-20 mx-auto ${eligibilityResult.color}`} />
                    <h3 className={`text-3xl font-bold mt-6 ${eligibilityResult.color}`}>{eligibilityResult.status}</h3>
                    <p className="mt-4 text-lg text-slate-700">Your eligibility score: <strong>{eligibilityScore}/100</strong></p>
                    <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">{eligibilityResult.message}</p>

                    <div className={`mt-8 p-6 rounded-lg ${eligibilityResult.bgColor} border ${eligibilityResult.borderColor}`}>
                      <h4 className="text-xl font-bold text-slate-800 mb-4">Next Steps & Recommendations</h4>
                      <ul className="space-y-3 text-left text-slate-700">
                        {eligibilityResult.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8">
                      <h4 className="text-xl font-bold text-slate-800 mb-4">Ready to start your CMA journey?</h4>
                      <p className="text-slate-600 mb-6">Take the first step towards a globally recognized certification.</p>
                      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <LeadFormButton
                          formType="cma"
                          variant="primary"
                          className="mt-4 w-full"
                        >
                          Download Full Syllabus
                        </LeadFormButton>
                        <button
                          onClick={resetChecker}
                          className="w-full sm:w-auto px-8 py-3 rounded-lg font-semibold text-slate-700 bg-slate-200 hover:bg-slate-300 transition-all duration-200"
                        >
                          Check Eligibility Again
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}