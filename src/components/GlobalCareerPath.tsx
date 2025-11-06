/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ChartBarIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  CalculatorIcon,
  ChartPieIcon,
  BriefcaseIcon,
  ScaleIcon,
  ComputerDesktopIcon,
  ChevronRightIcon,
  XMarkIcon,
  
  CurrencyDollarIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

// Data Structures
interface Career {
  id: string;
  title: string;
  courses: string[];
  salaryRange: string;
  description: string;
  skills: string[];
  topCompanies: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  slug: string;
}

interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  careers: Career[];
}

interface Course {
  id: string;
  name: string;
  fullName: string;
}

const GlobalCareerPath: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('finance');
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  // Course data
  const courses: Course[] = [
    { id: 'cfa', name: 'CFA', fullName: 'Chartered Financial Analyst' },
    { id: 'cma', name: 'CMA', fullName: 'Certified Management Accountant' },
    { id: 'cpa', name: 'CPA', fullName: 'Certified Public Accountant' },
    { id: 'acca', name: 'ACCA', fullName: 'Association of Chartered Certified Accountants' },
    { id: 'cia', name: 'CIA', fullName: 'Certified Internal Auditor' },
    { id: 'ea', name: 'EA', fullName: 'Enrolled Agent' }
  ];

  // Categories and careers data
  const categories: Category[] = [
    {
      id: 'finance',
      name: 'Finance',
      icon: ChartBarIcon,
      careers: [
        {
          id: 'investment-banking',
          title: 'Investment Banking',
          courses: ['CFA', 'CMA'],
          salaryRange: '₹15-50 LPA',
          description: 'Build valuation & financial modeling expertise',
          skills: ['Financial Modeling', 'Valuation', 'M&A Analysis', 'Capital Markets'],
          topCompanies: ['Goldman Sachs', 'JP Morgan', 'Morgan Stanley', 'Citibank'],
          icon: BanknotesIcon,
          slug: 'investment-banking'
        },
        {
          id: 'equity-research',
          title: 'Equity Research Analyst',
          courses: ['CFA', 'CMA', 'CPA'],
          salaryRange: '₹12-35 LPA',
          description: 'Analyse global markets, recommend investments',
          skills: ['Market Analysis', 'Research', 'Financial Modeling', 'Report Writing'],
          topCompanies: ['Motilal Oswal', 'ICICI Securities', 'Kotak Securities', 'HDFC Securities'],
          icon: ChartPieIcon,
          slug: 'equity-research-analyst'
        },
        {
          id: 'portfolio-manager',
          title: 'Portfolio Manager',
          courses: ['CFA'],
          salaryRange: '₹20-60 LPA',
          description: 'Manage funds & portfolios worldwide',
          skills: ['Portfolio Management', 'Risk Assessment', 'Asset Allocation', 'Client Relations'],
          topCompanies: ['Blackrock', 'Vanguard', 'Fidelity', 'HDFC AMC'],
          icon: BriefcaseIcon,
          slug: 'portfolio-manager'
        },
        {
          id: 'fpa-specialist',
          title: 'FP&A Specialist',
          courses: ['CMA', 'CPA'],
          salaryRange: '₹10-25 LPA',
          description: 'Help businesses plan & grow profitably',
          skills: ['Financial Planning', 'Budgeting', 'Forecasting', 'Business Analysis'],
          topCompanies: ['Deloitte', 'PwC', 'EY', 'KPMG'],
          icon: CalculatorIcon,
          slug: 'fpa-specialist'
        },
        {
          id: 'corporate-finance',
          title: 'Corporate Finance Manager',
          courses: ['CMA', 'CFA'],
          salaryRange: '₹15-40 LPA',
          description: 'Oversee budgeting, cost & ROI decisions',
          skills: ['Corporate Finance', 'Capital Structure', 'Investment Analysis', 'Risk Management'],
          topCompanies: ['Tata Group', 'Reliance', 'Infosys', 'TCS'],
          icon: BanknotesIcon,
          slug: 'corporate-finance-manager'
        }
      ]
    },
    {
      id: 'accounting',
      name: 'Accounting',
      icon: CalculatorIcon,
      careers: [
        {
          id: 'chartered-accountant',
          title: 'Chartered Accountant (Global)',
          courses: ['ACCA', 'CPA'],
          salaryRange: '₹8-30 LPA',
          description: 'Global accounting expertise & compliance',
          skills: ['Financial Reporting', 'Taxation', 'Audit', 'Compliance'],
          topCompanies: ['Big 4', 'MNCs', 'Banks', 'Consulting Firms'],
          icon: AcademicCapIcon,
          slug: 'chartered-accountant'
        },
        {
          id: 'financial-controller',
          title: 'Financial Controller',
          courses: ['CPA', 'CMA'],
          salaryRange: '₹15-40 LPA',
          description: 'Oversee financial operations & reporting',
          skills: ['Financial Control', 'Reporting', 'Compliance', 'Team Management'],
          topCompanies: ['Multinational Corporations', 'Large Enterprises', 'Financial Services'],
          icon: ShieldCheckIcon,
          slug: 'financial-controller'
        },
        {
          id: 'finance-executive',
          title: 'Finance Executive',
          courses: ['CMA', 'CPA', 'ACCA'],
          salaryRange: '₹6-12 LPA',
          description: 'Handle day-to-day financial operations',
          skills: ['Bookkeeping', 'Financial Analysis', 'Reporting', 'Process Management'],
          topCompanies: ['Corporates', 'SMEs', 'Startups', 'Service Companies'],
          icon: BriefcaseIcon,
          slug: 'finance-executive'
        }
      ]
    },
    {
      id: 'audit',
      name: 'Audit & Risk',
      icon: ShieldCheckIcon,
      careers: [
        {
          id: 'internal-auditor',
          title: 'Internal Auditor',
          courses: ['CIA'],
          salaryRange: '₹8-20 LPA',
          description: 'Risk control & assurance',
          skills: ['Internal Audit', 'Risk Assessment', 'Compliance', 'Process Review'],
          topCompanies: ['Big 4', 'Banks', 'Insurance', 'Large Corporates'],
          icon: ShieldCheckIcon,
          slug: 'internal-auditor'
        },
        {
          id: 'risk-analyst',
          title: 'Risk Analyst',
          courses: ['CIA', 'CFA'],
          salaryRange: '₹10-25 LPA',
          description: 'Compliance & mitigation',
          skills: ['Risk Analysis', 'Compliance', 'Data Analysis', 'Reporting'],
          topCompanies: ['Banks', 'Financial Services', 'Insurance', 'Consulting'],
          icon: ChartBarIcon,
          slug: 'risk-analyst'
        },
        {
          id: 'audit-manager',
          title: 'Audit Manager',
          courses: ['CIA', 'CPA'],
          salaryRange: '₹12-25 LPA',
          description: 'Lead audit teams & processes',
          skills: ['Audit Management', 'Team Leadership', 'Client Relations', 'Quality Control'],
          topCompanies: ['Big 4', 'Regional Firms', 'Internal Audit Departments'],
          icon: BriefcaseIcon,
          slug: 'audit-manager'
        }
      ]
    },
    {
      id: 'taxation',
      name: 'Taxation',
      icon: ScaleIcon,
      careers: [
        {
          id: 'us-tax-analyst',
          title: 'US Tax Analyst',
          courses: ['EA', 'CPA'],
          salaryRange: '₹8-20 LPA',
          description: 'US taxation expertise',
          skills: ['US Tax Law', 'Tax Preparation', 'Compliance', 'Client Advisory'],
          topCompanies: ['Big 4', 'Tax Firms', 'Outsourcing Companies'],
          icon: ScaleIcon,
          slug: 'us-tax-analyst'
        },
        {
          id: 'tax-consultant',
          title: 'International Tax Consultant',
          courses: ['ACCA', 'CPA'],
          salaryRange: '₹10-25 LPA',
          description: 'Global tax planning & compliance',
          skills: ['International Tax', 'Transfer Pricing', 'Tax Planning', 'Advisory'],
          topCompanies: ['Big 4', 'MNCs', 'Tax Advisory Firms'],
          icon: ScaleIcon,
          slug: 'international-tax-consultant'
        }
      ]
    },
    {
      id: 'analytics',
      name: 'Analytics',
      icon: ComputerDesktopIcon,
      careers: [
        {
          id: 'financial-analyst',
          title: 'Financial Data Analyst',
          courses: ['CMA', 'CFA'],
          salaryRange: '₹8-18 LPA',
          description: 'Data, BI, Dashboard expertise',
          skills: ['Data Analysis', 'Financial Modeling', 'BI Tools', 'Dashboard Creation'],
          topCompanies: ['Tech Companies', 'Financial Services', 'Consulting'],
          icon: ComputerDesktopIcon,
          slug: 'financial-data-analyst'
        },
        {
          id: 'esg-analyst',
          title: 'ESG Analyst',
          courses: ['CFA'],
          salaryRange: '₹12-30 LPA',
          description: 'Sustainability & Risk analysis',
          skills: ['ESG Analysis', 'Sustainability Reporting', 'Risk Assessment', 'Research'],
          topCompanies: ['Investment Firms', 'Rating Agencies', 'Consulting Firms'],
          icon: ChartPieIcon,
          slug: 'esg-analyst'
        }
      ]
    }
  ];

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleCareerClick = (career: Career) => {
    setSelectedCareer(career);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedCareer(null);
  };

  const activeCategories = categories.find(cat => cat.id === activeCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div className="lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Build Your Global Career Path
                <span className="block text-blue-600">Start from Any Course.</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Choose your stream and see where each qualification can take you.
              </p>
            </div>
            <div className="mt-6 lg:mt-0">
              <Link
                href="/career-fit-quiz"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Find My Fit →
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex overflow-x-auto scrollbar-hide space-x-2 pb-4 lg:justify-center">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Career Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {activeCategories?.careers.map((career, index) => {
              const IconComponent = career.icon;
              return (
                <motion.div
                  key={career.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
                  onClick={() => handleCareerClick(career)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      {career.salaryRange}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {career.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {career.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {career.courses.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {career.topCompanies.length}+ top companies
                    </span>
                    <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Want to see where you fit?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Get Personalized Global Career Roadmap
          </p>
          <p className="text-sm mb-8 opacity-75">
            AI-powered roadmap based on your background.
          </p>
          <Link
            href="/book-counselling"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ChatBubbleLeftRightIcon className="w-5 h-5" />
            <span>Get My Career Roadmap</span>
          </Link>
        </motion.div>
      </div>

      {/* Career Detail Popup */}
      <AnimatePresence>
        {showPopup && selectedCareer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={closePopup}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedCareer.title}
                  </h3>
                  <p className="text-gray-600">{selectedCareer.description}</p>
                </div>
                <button
                  onClick={closePopup}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <XMarkIcon className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CurrencyDollarIcon className="w-5 h-5 mr-2 text-green-600" />
                    Salary Range
                  </h4>
                  <p className="text-2xl font-bold text-green-600">
                    {selectedCareer.salaryRange}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <AcademicCapIcon className="w-5 h-5 mr-2 text-blue-600" />
                    Recommended Courses
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCareer.courses.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Skills Required</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCareer.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-3">Top Hiring Companies</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedCareer.topCompanies.map((company) => (
                    <div key={company} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{company}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <Link
                  href={`/career-roadmap/${selectedCareer.slug}`}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  View Career Roadmap
                </Link>
                <Link
                  href="/book-counselling"
                  className="flex-1 bg-gray-100 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center"
                >
                  Get Guidance
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GlobalCareerPath;