'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, StarIcon, GlobeAltIcon, ClockIcon, CurrencyDollarIcon, AcademicCapIcon, ChartBarIcon } from '@heroicons/react/24/solid';

export default function CMAComparison() {
  const [selectedComparison, setSelectedComparison] = useState('cpa-cma');

  const comparisons = {
    'cpa-cma': {
      title: 'CMA vs CPA',
      subtitle: 'Management Accounting vs Public Accounting',
      certifications: ['CMA', 'CPA']
    },
    'cma-acca': {
      title: 'CMA vs ACCA',
      subtitle: 'US Management Focus vs UK Global Recognition',
      certifications: ['CMA', 'ACCA']
    },
    'all-three': {
      title: 'CMA vs CPA vs ACCA',
      subtitle: 'Complete Comparison of Top Finance Certifications',
      certifications: ['CMA', 'CPA', 'ACCA']
    }
  };

  const certificationData = {
    CMA: {
      name: 'Certified Management Accountant',
      issuer: 'IMA (USA)',
      focus: 'Management Accounting & Strategic Finance',
      duration: '6-12 months',
      parts: '2 Parts',
      passingScore: '360/500',
      globalRecognition: '100+ countries',
      avgSalary: '$65K - $130K',
      examFee: '$830 (both parts)',
      workExperience: '2 years',
      color: 'blue',
      strengths: [
        'Strong focus on management accounting',
        'Strategic business analysis expertise',
        'High demand in corporate sector',
        'Excellent ROI and salary growth',
        'Faster completion time'
      ],
      weaknesses: [
        'Limited public accounting scope',
        'Newer compared to CPA',
        'Less known in some regions'
      ],
      bestFor: [
        'Corporate finance roles',
        'Management accounting positions',
        'Strategic planning careers',
        'Business analysis roles',
        'Quick career advancement'
      ]
    },
    CPA: {
      name: 'Certified Public Accountant',
      issuer: 'AICPA (USA)',
      focus: 'Public Accounting, Audit & Tax',
      duration: '12-18 months',
      parts: '4 Parts',
      passingScore: '75/100',
      globalRecognition: '100+ countries',
      avgSalary: '$70K - $150K',
      examFee: '$1,200+ (all parts)',
      workExperience: '1-2 years',
      color: 'green',
      strengths: [
        'Highest recognition globally',
        'Diverse career opportunities',
        'Strong in audit and tax',
        'Big 4 preference',
        'Established reputation'
      ],
      weaknesses: [
        'Longer completion time',
        'More expensive',
        'Complex eligibility requirements',
        'Limited management focus'
      ],
      bestFor: [
        'Public accounting careers',
        'Audit and assurance roles',
        'Tax advisory positions',
        'Big 4 aspirations',
        'Regulatory compliance'
      ]
    },
    ACCA: {
      name: 'Association of Chartered Certified Accountants',
      issuer: 'ACCA (UK)',
      focus: 'Global Accounting & Finance',
      duration: '18-36 months',
      parts: '13 Papers',
      passingScore: '50/100',
      globalRecognition: '180+ countries',
      avgSalary: '$55K - $120K',
      examFee: '$2,000+ (all papers)',
      workExperience: '3 years',
      color: 'purple',
      strengths: [
        'Widest global recognition',
        'Comprehensive curriculum',
        'Flexible exam structure',
        'Strong in emerging markets',
        'No degree requirement initially'
      ],
      weaknesses: [
        'Longest completion time',
        'Most expensive option',
        'Lower salary potential',
        'Less specialized focus'
      ],
      bestFor: [
        'International career goals',
        'Broad accounting knowledge',
        'Emerging market opportunities',
        'Flexible study approach',
        'Non-degree holders'
      ]
    }
  };

  const comparisonMetrics = [
    {
      metric: 'Global Recognition',
      icon: GlobeAltIcon,
      CMA: { score: 8, detail: '100+ countries, growing fast' },
      CPA: { score: 10, detail: 'Highest recognition worldwide' },
      ACCA: { score: 9, detail: '180+ countries, strongest in UK/Asia' }
    },
    {
      metric: 'Salary Potential',
      icon: CurrencyDollarIcon,
      CMA: { score: 9, detail: '$65K - $130K (Management roles)' },
      CPA: { score: 10, detail: '$70K - $150K (Diverse roles)' },
      ACCA: { score: 7, detail: '$55K - $120K (Global average)' }
    },
    {
      metric: 'Completion Time',
      icon: ClockIcon,
      CMA: { score: 10, detail: '6-12 months (Fastest)' },
      CPA: { score: 7, detail: '12-18 months (Moderate)' },
      ACCA: { score: 5, detail: '18-36 months (Longest)' }
    },
    {
      metric: 'Career Opportunities',
      icon: ChartBarIcon,
      CMA: { score: 8, detail: 'Strong in corporate/management' },
      CPA: { score: 10, detail: 'Widest range of opportunities' },
      ACCA: { score: 8, detail: 'Good global opportunities' }
    },
    {
      metric: 'Exam Difficulty',
      icon: AcademicCapIcon,
      CMA: { score: 7, detail: 'Moderate (65% pass rate)' },
      CPA: { score: 6, detail: 'Challenging (50% pass rate)' },
      ACCA: { score: 8, detail: 'Easier (70% pass rate)' }
    },
    {
      metric: 'Investment Required',
      icon: CurrencyDollarIcon,
      CMA: { score: 9, detail: 'Most cost-effective' },
      CPA: { score: 7, detail: 'Moderate investment' },
      ACCA: { score: 5, detail: 'Highest investment' }
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-600 text-white',
      green: 'bg-green-600 text-white',
      purple: 'bg-purple-600 text-white'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getScoreColor = (score: number) => {
    if (score >= 9) return 'text-green-600 bg-green-100';
    if (score >= 7) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const activeCertifications = comparisons[selectedComparison as keyof typeof comparisons].certifications;

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              CMA Comparison
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Compare CMA with other top finance certifications to make an informed decision 
            about your career path and choose the best certification for your goals.
          </p>
        </motion.div>

        {/* Comparison Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row justify-center">
            <div className="bg-white rounded-lg p-2 shadow-lg">
              {Object.entries(comparisons).map(([key, comparison]) => (
                <button
                  key={key}
                  onClick={() => setSelectedComparison(key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedComparison === key
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <div className="text-center">
                    <div className="font-bold">{comparison.title}</div>
                    <div className="text-xs opacity-75">{comparison.subtitle}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-12"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-6 py-4 text-left font-bold text-slate-900">Comparison Metrics</th>
                  {activeCertifications.map((cert) => (
                    <th key={cert} className="px-6 py-4 text-center">
                      <div className={`inline-flex items-center px-4 py-2 rounded-lg font-bold ${getColorClasses(certificationData[cert as keyof typeof certificationData].color)}`}>
                        {cert}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonMetrics.map((metric, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="hover:bg-slate-50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <metric.icon className="w-5 h-5 text-slate-600 mr-3" />
                        <span className="font-semibold text-slate-900">{metric.metric}</span>
                      </div>
                    </td>
                    {activeCertifications.map((cert) => {
                      const data = metric[cert as keyof typeof metric] as { score: number; detail: string };
                      return (
                        <td key={cert} className="px-6 py-4 text-center">
                          <div className="space-y-2">
                            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold ${getScoreColor(data.score)}`}>
                              {data.score}/10
                            </div>
                            <div className="text-sm text-slate-600">{data.detail}</div>
                          </div>
                        </td>
                      );
                    })}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Detailed Comparison Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {activeCertifications.map((cert, index) => {
            const data = certificationData[cert as keyof typeof certificationData];
            return (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className={`${getColorClasses(data.color)} p-6`}>
                  <h3 className="text-2xl font-bold mb-2">{cert}</h3>
                  <p className="opacity-90">{data.name}</p>
                </div>

                <div className="p-6 space-y-6">
                  {/* Key Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500">Issuer:</span>
                      <div className="font-semibold">{data.issuer}</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Duration:</span>
                      <div className="font-semibold">{data.duration}</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Parts:</span>
                      <div className="font-semibold">{data.parts}</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Avg Salary:</span>
                      <div className="font-semibold">{data.avgSalary}</div>
                    </div>
                  </div>

                  {/* Strengths */}
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                      Strengths
                    </h4>
                    <ul className="space-y-2">
                      {data.strengths.map((strength, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-slate-700">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For */}
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                      <StarIcon className="w-5 h-5 text-yellow-500 mr-2" />
                      Best For
                    </h4>
                    <ul className="space-y-2">
                      {data.bestFor.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Decision Helper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-6">
            Still Confused? Let Us Help You Decide
          </h3>
          <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
            Our expert counselors will analyze your background, career goals, and preferences 
            to recommend the best certification path for your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Personalized Recommendation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300"
            >
              Take Comparison Quiz
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}