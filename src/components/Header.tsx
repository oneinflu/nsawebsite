'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDownIcon, 
  XMarkIcon, 
  Bars3Icon,
  UserIcon,
  PhoneIcon,
 
  AcademicCapIcon,
  BriefcaseIcon,
  
  InformationCircleIcon,

  CurrencyDollarIcon,
  
  CalendarDaysIcon,
 
  FireIcon
} from '@heroicons/react/24/outline';
import LeadFormButton from './LeadFormButton';
import { useLeadForm } from '@/context/LeadFormContext';
import { useToolsModal } from '@/context/ToolsModalContext';

interface MegaMenuData {
  courses: {
    category: string;
    courses: Array<{
      name: string;
      href: string;
      description: string;
      flag: string;
      logo: string;
      avgSalary: string;
      duration: string;
    }>;
  }[];
  careers: {
    category: string;
    items: Array<{
      name: string;
      href: string;
    }>;
  }[];
  resources: {
    category: string;
    items: Array<{
      name: string;
      href: string;
      icon?: React.ComponentType<{ className?: string }>;
    }>;
  }[];
  trending: Array<{
    title: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
}

const megaMenuData: MegaMenuData = {
  courses: [
    {
      category: 'Finance',
      courses: [
        {
          name: 'CFA (US)',
          href: '/cfa-us',
          description: 'Investment & Portfolio Management',
          flag: '🇺🇸',
          logo: 'CFA®',
          avgSalary: '$95K - $180K',
          duration: '2-4 years'
        },
        {
          name: 'CMA (US)',
          href: '/cma-usa-course-details',
          description: 'Management Accounting',
          flag: '🇺🇸',
          logo: 'CMA®',
          avgSalary: '$85K - $150K',
          duration: '1-2 years'
        }
      ]
    },
    {
      category: 'Accounting',
      courses: [
        {
          name: 'CPA (US)',
          href: '/cpa-course-details',
          description: 'Global Accounting License',
          flag: '🇺🇸',
          logo: 'CPA®',
          avgSalary: '$75K - $140K',
          duration: '1-2 years'
        },
        {
          name: 'ACCA (UK)',
          href: '/acca-course-details',
          description: 'Global Accounting Qualification',
          flag: '🇬🇧',
          logo: 'ACCA®',
          avgSalary: '$60K - $120K',
          duration: '2-3 years'
        }
      ]
    },
    {
      category: 'Audit & Risk',
      courses: [
        {
          name: 'CIA (US)',
          href: '/cia',
          description: 'Internal Audit Specialization',
          flag: '🇺🇸',
          logo: 'CIA®',
          avgSalary: '$70K - $130K',
          duration: '1-2 years'
        }
      ]
    },
    {
      category: 'Taxation',
      courses: [
        {
          name: 'Enrolled Agent (EA)',
          href: '/enrolled-agent-course-details',
          description: 'US Taxation Expert Path',
          flag: '🇺🇸',
          logo: 'EA®',
          avgSalary: '$55K - $95K',
          duration: 'Coming Soon'
        }
      ]
    }
  ],
  careers: [
    {
      category: 'Global Careers',
      items: [
        { name: 'CPA Jobs in UAE', href: '/careers/cpa-uae' },
        { name: 'CMA in India', href: '/careers/cma-india' },
        { name: 'ACCA in UK', href: '/careers/acca-uk' },
        { name: 'CFA Career Paths', href: '/careers/cfa-paths' }
      ]
    },
    {
      category: 'Salary Insights',
      items: [
        { name: 'CPA vs CA Salaries', href: '/salary/cpa-vs-ca' },
       
      ]
    },
    {
      category: 'Career Tools',
      items: [
        { name: 'Career Fit Quiz', href: '/quiz/career-fit' },
        { name: 'Salary Calculator', href: '/tools/salary-calculator' },
        { name: 'ROI Calculator', href: '/tools/roi-calculator' }
      ]
    }
  ],
  resources: [],
  trending: []
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredCourse, setHoveredCourse] = useState<typeof megaMenuData.courses[0]['courses'][0] | null>(null);
  const { openLeadForm, setSuppressThankYouOnOtp, setAfterOtpAction } = useLeadForm();
  const { openTool } = useToolsModal();

  const handleOpenCalculator = (tool: 'quiz' | 'salary' | 'roi') => {
    // Gate calculators behind OTP verification and suppress thank-you redirect
    setSuppressThankYouOnOtp(true);
    setAfterOtpAction(() => () => openTool(tool));
    openLeadForm('general', true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const closeAllMenus = () => {
    setActiveMenu(null);
  };

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white backdrop-blur-md shadow-lg border-b border-gray-200' 
            : 'bg-white backdrop-blur-sm border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <Link href="/" className="flex items-center">
                <div className="relative">
                  <Image
                    src="/nsa.png"
                    alt="NorthStar Academy"
                    width={140}
                    height={45}
                    className="h-10 w-auto"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-400/20 rounded-lg opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Courses Mega Menu */}
              <div className="relative">
                <motion.button
                  onClick={() => handleMenuToggle('courses')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-red-600 transition-colors font-medium py-2 px-1 relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  <AcademicCapIcon className="w-4 h-4" />
                  <span>Courses</span>
                  <motion.div
                    animate={{ rotate: activeMenu === 'courses' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-red-500 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </div>

              {/* Careers Menu */}
              <div className="relative">
                <motion.button
                  onClick={() => handleMenuToggle('careers')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-red-600 transition-colors font-medium py-2 px-1 relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  <BriefcaseIcon className="w-4 h-4" />
                  <span>Careers</span>
                  <motion.div
                    animate={{ rotate: activeMenu === 'careers' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-red-500 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </div>

              {/* Resources Menu */}
              {/* <div className="relative">
                <motion.button
                  onClick={() => handleMenuToggle('resources')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-red-600 transition-colors font-medium py-2 px-1 relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  <DocumentTextIcon className="w-4 h-4" />
                  <span>Resources</span>
                  <motion.div
                    animate={{ rotate: activeMenu === 'resources' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-red-500 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </div> */}

              {/* About Menu */}
              <div className="relative">
                <motion.button
                  onClick={() => handleMenuToggle('about')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-red-600 transition-colors font-medium py-2 px-1 relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  <InformationCircleIcon className="w-4 h-4" />
                  <span>About</span>
                  <motion.div
                    animate={{ rotate: activeMenu === 'about' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-red-500 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </div>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.link/rwc7kj"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center justify-center w-10 h-10 text-green-600 hover:text-green-700 transition-colors rounded-full hover:bg-green-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </motion.a>

              {/* Primary CTA */}
              <LeadFormButton
              formType="general"
              isSendOtp={true}
             variant='primary'
             
             
            >
            
                Book Free Call
              </LeadFormButton>

              {/* Login Icon */}
              {/* <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 hover:border-red-500 text-gray-600 hover:text-red-600 transition-colors"
              >
                <UserIcon className="w-4 h-4" />
              </motion.button> */}

              {/* Mobile menu button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-700 hover:text-red-600 focus:outline-none rounded-lg hover:bg-gray-100"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="w-5 h-5" />
                ) : (
                  <Bars3Icon className="w-5 h-5" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mega Menus */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl border-t border-gray-200/50"
              onMouseLeave={closeAllMenus}
            >
              {/* Courses Mega Menu */}
              {activeMenu === 'courses' && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <div className="grid grid-cols-4 gap-8">
                    {megaMenuData.courses.map((category, idx) => (
                      <div key={idx} className="space-y-4">
                        <h3 className="font-semibold text-gray-900 text-lg border-b border-red-200 pb-2">
                          {category.category}
                        </h3>
                        <div className="space-y-3">
                          {category.courses.map((course, courseIdx) => (
                            <motion.div
                              key={courseIdx}
                              whileHover={{ scale: 1.02 }}
                              onMouseEnter={() => setHoveredCourse(course)}
                              onMouseLeave={() => setHoveredCourse(null)}
                            >
                              <Link
                                href={course.href}
                                className="block p-3 rounded-lg hover:bg-red-50 transition-colors group"
                              >
                                <div className="flex items-center space-x-3">
                                  <span className="text-2xl">{course.flag}</span>
                                  <div>
                                    <div className="flex items-center space-x-2">
                                      <span className="font-semibold text-gray-900 group-hover:text-red-600">
                                        {course.name}
                                      </span>
                                      <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                                        {course.logo}
                                      </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">
                                      {course.description}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Course Preview Card */}
                  <AnimatePresence>
                    {hoveredCourse && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="absolute right-8 top-8 w-80 bg-white rounded-xl shadow-xl border border-gray-200 p-6"
                      >
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <span className="text-3xl">{hoveredCourse.flag}</span>
                            <div>
                              <h4 className="font-bold text-lg text-gray-900">
                                {hoveredCourse.name}
                              </h4>
                              <p className="text-gray-600">{hoveredCourse.description}</p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-green-50 rounded-lg">
                              <CurrencyDollarIcon className="w-6 h-6 text-green-600 mx-auto mb-1" />
                              <p className="text-sm font-semibold text-green-800">Avg Salary</p>
                              <p className="text-xs text-green-600">{hoveredCourse.avgSalary}</p>
                            </div>
                            <div className="text-center p-3 bg-red-50 rounded-lg">
                              <CalendarDaysIcon className="w-6 h-6 text-red-600 mx-auto mb-1" />
                              <p className="text-sm font-semibold text-red-800">Duration</p>
                              <p className="text-xs text-red-600">{hoveredCourse.duration}</p>
                            </div>
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-gradient-to-r from-red-600 to-red-600 text-white py-2 px-4 rounded-lg font-semibold text-sm"
                          >
                            Book Free Counselling
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Careers Menu */}
              {activeMenu === 'careers' && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <div className="grid grid-cols-3 gap-8">
                    {megaMenuData.careers.map((category, idx) => (
                      <div key={idx} className="space-y-4">
                        <h3 className="font-semibold text-gray-900 text-lg border-b border-red-200 pb-2">
                          {category.category}
                        </h3>
                        <div className="space-y-2">
                          {category.items.map((item, itemIdx) => {
                            const isCalculatorItem = ['Career Fit Quiz', 'Salary Calculator', 'ROI Calculator'].includes(item.name);
                            if (isCalculatorItem) {
                              const tool = item.name === 'Career Fit Quiz' ? 'quiz' : item.name === 'Salary Calculator' ? 'salary' : 'roi';
                              return (
                                <button
                                  key={itemIdx}
                                  onClick={() => handleOpenCalculator(tool)}
                                  className="block w-full text-left p-2 rounded-lg hover:bg-red-50 text-gray-700 hover:text-red-600 transition-colors"
                                >
                                  {item.name}
                                </button>
                              );
                            }
                            return (
                              <Link
                                key={itemIdx}
                                href={item.href}
                                className="block p-2 rounded-lg hover:bg-red-50 text-gray-700 hover:text-red-600 transition-colors"
                              >
                                {item.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <LeadFormButton
                    formType='general'
                    isSendOtp={true}
                      className="bg-gradient-to-r from-red-600 to-red-600 text-white px-8 py-3 rounded-xl font-semibold"
                    >
                      Get Personalized Career Plan →
                    </LeadFormButton>
                  </div>
                </div>
              )}

              {/* Resources Menu */}
              {activeMenu === 'resources' && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <div className="grid grid-cols-5 gap-8">
                    <div className="col-span-3 grid grid-cols-2 gap-8">
                      {megaMenuData.resources.slice(0, 4).map((category, idx) => (
                        <div key={idx} className="space-y-4">
                          <h3 className="font-semibold text-gray-900 text-lg border-b border-red-200 pb-2">
                            {category.category}
                          </h3>
                          <div className="space-y-2">
                            {category.items.map((item, itemIdx) => (
                              <Link
                                key={itemIdx}
                                href={item.href}
                                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-red-50 text-gray-700 hover:text-red-600 transition-colors"
                              >
                                {item.icon && <item.icon className="w-4 h-4" />}
                                <span>{item.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="col-span-2 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <FireIcon className="w-5 h-5 text-orange-500" />
                        <h3 className="font-bold text-gray-900">🔥 Trending</h3>
                      </div>
                      <div className="space-y-3">
                        {megaMenuData.trending.map((item, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                          >
                            <Link
                              href={item.href}
                              className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                            >
                              <item.icon className="w-6 h-6 text-red-600" />
                              <div>
                                <p className="font-semibold text-gray-900 text-sm">
                                  {item.title}
                                </p>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* About Menu */}
              {activeMenu === 'about' && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900 text-lg border-b border-red-200 pb-2">
                        Company
                      </h3>
                      <div className="space-y-2">
                        <Link href="/about" className="block p-2 rounded-lg hover:bg-red-50 text-gray-700 hover:text-red-600 transition-colors">
                          About NorthStar Academy
                        </Link>
                        <Link href="/about#mentors" className="block p-2 rounded-lg hover:bg-red-50 text-gray-700 hover:text-red-600 transition-colors">
                          Mentors & Team
                        </Link>
                        <Link href="/success-stories" className="block p-2 rounded-lg hover:bg-red-50 text-gray-700 hover:text-red-600 transition-colors">
                          Success Stories
                        </Link>
                       
                        <Link href="/contact" className="block p-2 rounded-lg hover:bg-red-50 text-gray-700 hover:text-red-600 transition-colors">
                          Contact Us
                        </Link>
                      </div>
                    </div>
                    
                    <div className="bg-red-50 rounded-xl p-6">
                      <h4 className="font-bold text-red-900 mb-3">Why Students Trust Us</h4>
                      <p className="text-red-700 text-sm mb-4">
                        Join 2,00,000+ successful professionals who chose NorthStar Academy for their career transformation.
                      </p>
                      
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-2xl overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <Image
                    src="/nsa.png"
                    alt="NorthStar Academy"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <div className="space-y-6">
                  {/* Courses */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Courses</h3>
                    <div className="space-y-2 ml-4">
                      {megaMenuData.courses.flatMap(category => 
                        category.courses.map((course, idx) => (
                          <Link
                            key={idx}
                            href={course.href}
                            className="block py-2 text-gray-700 hover:text-red-600"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="flex items-center space-x-2">
                              <span>{course.flag}</span>
                              <span>{course.name}</span>
                            </div>
                            <p className="text-xs text-gray-500 ml-6">{course.description}</p>
                          </Link>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Other Menu Items */}
                  <div className="space-y-4">
                    <Link href="/careers" className="block py-2 font-medium text-gray-900 hover:text-red-600">
                      Careers
                    </Link>
                    <Link href="/resources" className="block py-2 font-medium text-gray-900 hover:text-red-600">
                      Resources
                    </Link>
                    <Link href="/about" className="block py-2 font-medium text-gray-900 hover:text-red-600">
                      About
                    </Link>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-4 pt-6 border-t border-gray-200">
                    <Link
                      href="/book-counselling"
                      className="block w-full bg-gradient-to-r from-red-600 to-red-600 text-white text-center py-3 px-4 rounded-xl font-semibold"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Book Free Counselling
                    </Link>
                    
                    <div className="flex items-center justify-center space-x-4">
                      <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-green-600 hover:text-green-700"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        <span>WhatsApp</span>
                      </a>
                      
                      <a
                        href="tel:+1234567890"
                        className="flex items-center space-x-2 text-red-600 hover:text-red-700"
                      >
                        <PhoneIcon className="w-5 h-5" />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
     
    </>
  );
};

export default Header;