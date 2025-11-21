'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {  ArrowTrendingUpIcon } from '@heroicons/react/24/solid';
import {  BriefcaseIcon, GlobeAltIcon, MapPinIcon, CalculatorIcon } from '@heroicons/react/24/outline';
import LeadFormButton from '@/components/LeadFormButton';





const EASalaryROI = () => {
  // Country-wise salaries and ROI inputs (approximate, illustrative)
  const [selectedCountry, setSelectedCountry] = useState<'india' | 'us'>('india');

  const usdToInrRate = 83; // approximate
  const totalInvestmentINR = 150000; // typical combined cost (coaching + exams), illustrative

  const salaryByCountry = {
    india: {
      label: 'India Market',
      currency: 'INR' as const,
      roles: {
        entry: { title: 'Entry (0-2 yrs)', subtitle: 'Tax Associate, Analyst', salary: 600000 },
        mid: { title: 'Mid (3-5 yrs)', subtitle: 'Senior Tax Associate, Supervisor', salary: 1100000 },
        senior: { title: 'Senior (6+ yrs)', subtitle: 'Tax Manager, Lead', salary: 1800000 },
      },
    },
    us: {
      label: 'US Market',
      currency: 'USD' as const,
      roles: {
        entry: { title: 'Entry (0-2 yrs)', subtitle: 'Staff EA, Tax Preparer', salary: 55000 },
        mid: { title: 'Mid (3-5 yrs)', subtitle: 'Senior EA, Advisor', salary: 80000 },
        senior: { title: 'Senior (6+ yrs)', subtitle: 'Tax Manager, Consultant', salary: 115000 },
      },
    },
  };

  const formatCurrency = (amount: number, currency: 'INR' | 'USD' = 'INR') => {
    if (currency === 'USD') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
      }).format(amount);
    }
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const calcRoiPercent = (annualSalary: number, currency: 'INR' | 'USD') => {
    const salaryINR = currency === 'USD' ? Math.round(annualSalary * usdToInrRate) : annualSalary;
    return Math.round((salaryINR / totalInvestmentINR) * 100);
  };

  const calcPaybackMonths = (annualSalary: number, currency: 'INR' | 'USD') => {
    const salaryINR = currency === 'USD' ? Math.round(annualSalary * usdToInrRate) : annualSalary;
    const monthly = salaryINR / 12;
    return Math.max(1, Math.round(totalInvestmentINR / monthly));
  };

  return (
    <section className="py-10 sm:py-16 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center lg:mb-12 mb-6"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900">EA Salary & ROI</h2>
          <p className="text-base sm:text-xl text-gray-600 mt-4">Typical U.S. ranges and payback outlook</p>
        </motion.div>

        {/* Salary tiles */}
        

        {/* ROI highlights + CTA panel */}
      

        {/* Country & Job Roles ROI (patterned after CPAFeesROI) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:mt-10 mt-8"
        >
          {/* Section header */}
         

          {/* Country toggle */}
          <div className="flex justify-center gap-3 mb-8">
            {(['india', 'us'] as const).map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCountry(c)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border transition ${
                  selectedCountry === c
                    ? 'bg-red-600 text-white border-red-600'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                }`}
              >
                {c === 'india' ? (
                  <MapPinIcon className="w-4 h-4" />
                ) : (
                  <GlobeAltIcon className="w-4 h-4" />
                )}
                {salaryByCountry[c].label}
              </button>
            ))}
          </div>

          {/* Roles grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {Object.entries(salaryByCountry[selectedCountry].roles).map(([key, role]) => (
              <div key={key} className="bg-white rounded-2xl border border-slate-200 shadow p-5 md:p-3 lg:p-4">
                <div className="flex items-start gap-2 md:gap-2 mb-3 md:mb-3">
                  <div className="w-10 h-10 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-red-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BriefcaseIcon className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-slate-900 text-base md:text-sm lg:text-base leading-tight">{role.title}</p>
                    <p className="text-sm md:text-xs lg:text-sm text-slate-600 truncate">{role.subtitle}</p>
                  </div>
                </div>
                <div className="space-y-2 md:space-y-2 flex justify-between mt-4">
                  <div>
                    <p className="text-xs md:text-[10px] lg:text-xs uppercase tracking-wide text-slate-500 mb-1">TYPICAL SALARY</p>
                    <p className="text-xl md:text-[15px] lg:text-xl font-bold text-slate-900">
                      {formatCurrency(role.salary, salaryByCountry[selectedCountry].currency)}
                    </p>
                    {salaryByCountry[selectedCountry].currency === 'USD' && (
                      <p className="text-xs md:text-[10px] lg:text-xs text-slate-500">≈ {formatCurrency(Math.round(role.salary * usdToInrRate), 'INR')}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 md:px-2 lg:px-3 py-1 rounded-full text-xs md:text-[10px] lg:text-xs font-semibold w-fit">
                      <ArrowTrendingUpIcon className="w-3 h-3 flex-shrink-0" />
                      <span className="whitespace-nowrap">{calcRoiPercent(role.salary, salaryByCountry[selectedCountry].currency)}% ROI</span>
                    </span>
                    <p className="text-xs md:text-[10px] lg:text-xs text-slate-500">
                      Payback: {calcPaybackMonths(role.salary, salaryByCountry[selectedCountry].currency)} months
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Investment summary */}
          <div className="mt-8 bg-gradient-to-r from-slate-50 to-red-50 border border-slate-200 rounded-xl p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <CalculatorIcon className="w-5 h-5 text-red-600 flex-shrink-0" />
              <p className="font-semibold text-slate-900 text-sm sm:text-base">ROI Assumptions</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border">
                <p className="text-slate-600 text-xs sm:text-sm mb-1">Total Investment</p>
                <p className="text-base sm:text-lg font-bold text-slate-900 break-words">{formatCurrency(totalInvestmentINR, 'INR')}</p>
                <p className="text-xs text-slate-500 mt-1">Coaching + Exam Fees (illustrative)</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <p className="text-slate-600 text-xs sm:text-sm mb-1">Conversion Rate</p>
                <p className="text-base sm:text-lg font-bold text-slate-900">$1 = ₹{usdToInrRate}</p>
                <p className="text-xs text-slate-500 mt-1">For USD to INR comparisons</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <p className="text-slate-600 text-xs sm:text-sm mb-1">Method</p>
                <p className="text-sm sm:text-base md:text-lg font-bold text-slate-900 break-words leading-tight">ROI% = Annual Salary / Investment</p>
                <p className="text-xs text-slate-500 mt-1">Payback estimated in months</p>
              </div>
            </div>
            {/* CTA: Placement Report Download */}
            <div className="mt-6 flex flex-col items-center text-center">
              <p className="text-slate-700 mb-3 text-sm sm:text-base">Want detailed placement data and salary trends?</p>
              <LeadFormButton
                formType="download-placement-report"
                variant="secondary"
                isSendOtp={true}
                courseId="EA"
                className="px-6 py-3 w-full sm:w-auto"
              >
                Download Placement Report
              </LeadFormButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EASalaryROI;