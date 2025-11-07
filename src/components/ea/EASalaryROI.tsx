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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">EA Salary & ROI</h2>
          <p className="text-xl text-gray-600">Typical U.S. ranges and payback outlook</p>
        </motion.div>

        {/* Salary tiles */}
        

        {/* ROI highlights + CTA panel */}
      

        {/* Country & Job Roles ROI (patterned after CPAFeesROI) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
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
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(salaryByCountry[selectedCountry].roles).map(([key, role]) => (
              <div key={key} className="bg-white rounded-2xl border border-slate-200 shadow p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <BriefcaseIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{role.title}</p>
                    <p className="text-sm text-slate-600">{role.subtitle}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">Typical Salary</p>
                      <p className="text-xl font-bold text-slate-900">
                        {formatCurrency(role.salary, salaryByCountry[selectedCountry].currency)}
                      </p>
                      {salaryByCountry[selectedCountry].currency === 'USD' && (
                        <p className="text-xs text-slate-500">≈ {formatCurrency(Math.round(role.salary * usdToInrRate), 'INR')}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                        <ArrowTrendingUpIcon className="w-4 h-4" />
                        {calcRoiPercent(role.salary, salaryByCountry[selectedCountry].currency)}% ROI
                      </span>
                      <div className="mt-2 text-xs text-slate-500">
                        Payback: {calcPaybackMonths(role.salary, salaryByCountry[selectedCountry].currency)} months
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Investment summary */}
          <div className="mt-8 bg-gradient-to-r from-slate-50 to-red-50 border border-slate-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <CalculatorIcon className="w-5 h-5 text-red-600" />
              <p className="font-semibold text-slate-900">ROI Assumptions</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border">
                <p className="text-slate-600">Total Investment</p>
                <p className="text-lg font-bold text-slate-900">{formatCurrency(totalInvestmentINR, 'INR')}</p>
                <p className="text-xs text-slate-500">Coaching + Exam Fees (illustrative)</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <p className="text-slate-600">Conversion Rate</p>
                <p className="text-lg font-bold text-slate-900">$1 = ₹{usdToInrRate}</p>
                <p className="text-xs text-slate-500">For USD to INR comparisons</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <p className="text-slate-600">Method</p>
                <p className="text-lg font-bold text-slate-900">ROI% = Annual Salary / Investment</p>
                <p className="text-xs text-slate-500">Payback estimated in months</p>
              </div>
            </div>
            {/* CTA: Placement Report Download */}
            <div className="mt-6 flex flex-col items-center text-center">
              <p className="text-slate-700 mb-3">Want detailed placement data and salary trends?</p>
              <LeadFormButton
                formType="download-placement-report"
                variant="secondary"
                isSendOtp={true}
                courseId="EA"
                className="px-6 py-3"
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