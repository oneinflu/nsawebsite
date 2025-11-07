'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  AcademicCapIcon,
  ChartBarIcon,
  CalculatorIcon,
  ShieldCheckIcon,
  StarIcon,
  ClockIcon,
  UserGroupIcon,
  ChevronRightIcon,
  XMarkIcon,
  CheckIcon,
  ArrowUpRightIcon,
 
 
  GlobeAltIcon,
  BriefcaseIcon,
 
} from '@heroicons/react/24/outline';
import LeadFormButton from './LeadFormButton';

// Enhanced Data Structures for SEO and Interactivity
interface Course {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  rating: number;
  students: string;
  badge?: string;
  description: string;
  highlights: string[];
  skills: string[];
  careerOutcomes: string[];
  certificationBody: string;
  globalRecognition: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  slug: string;
  popular?: boolean;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  jobRoles: string[];
}

interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const GlobalCoursesHub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showCourseModal, setShowCourseModal] = useState(false);

  // Enhanced course data with SEO-focused content
  const courses: Course[] = [
    {
      id: 'cma-usa',
      title: 'CMA (USA)',
      subtitle: 'Certified Management Accountant',
      category: 'accounting',
      duration: '12-18 months',
      rating: 4.9,
      students: '5,000+',
      badge: 'Most Popular',
      description: 'Master strategic financial management and become a globally recognized management accountant with IMA certification.',
      highlights: ['IMA Global Certification', 'Strategic Finance Focus', 'Big 4 Ready'],
      skills: ['Financial Planning & Analysis', 'Cost Management', 'Strategic Decision Making', 'Performance Management'],
      careerOutcomes: ['Management Accountant', 'Financial Analyst', 'Budget Manager', 'Corporate Controller'],
      certificationBody: 'Institute of Management Accountants (IMA)',
      globalRecognition: 'Recognized in 180+ countries worldwide',
      icon: CalculatorIcon,
      slug: 'cma-usa-course-details',
      popular: true,
      difficulty: 'Intermediate',
      jobRoles: ['Financial Analyst', 'Management Accountant', 'Budget Manager', 'Cost Accountant']
    },
    {
      id: 'cpa-us',
      title: 'CPA (US)',
      subtitle: 'Certified Public Accountant',
      category: 'accounting',
      duration: '15-24 months',
      rating: 4.8,
      students: '3,500+',
      badge: 'High ROI',
      description: 'Become a licensed CPA and unlock opportunities in public accounting, audit, and financial advisory services.',
      highlights: ['AICPA License', 'Public Accounting Ready', 'Global Recognition'],
      skills: ['Financial Reporting', 'Auditing', 'Taxation', 'Business Law & Ethics'],
      careerOutcomes: ['Public Accountant', 'Audit Manager', 'Tax Consultant', 'CFO'],
      certificationBody: 'American Institute of CPAs (AICPA)',
      globalRecognition: 'Gold standard in accounting profession globally',
      icon: ShieldCheckIcon,
      slug: 'cpa-course-details',
      difficulty: 'Advanced',
      jobRoles: ['Public Accountant', 'Audit Manager', 'Tax Advisor', 'Financial Controller']
    },
    {
      id: 'cfa',
      title: 'CFA',
      subtitle: 'Chartered Financial Analyst',
      category: 'finance',
      duration: '18-36 months',
      rating: 4.7,
      students: '2,800+',
      badge: 'Gold Standard',
      description: 'The gold standard in investment analysis and portfolio management for finance professionals worldwide.',
      highlights: ['CFA Institute Charter', 'Investment Analysis', 'Portfolio Management'],
      skills: ['Investment Analysis', 'Portfolio Management', 'Financial Modeling', 'Risk Management'],
      careerOutcomes: ['Investment Analyst', 'Portfolio Manager', 'Research Analyst', 'Fund Manager'],
      certificationBody: 'CFA Institute',
      globalRecognition: 'Most respected credential in investment management',
      icon: ChartBarIcon,
      slug: 'cfa-us',
      difficulty: 'Advanced',
      jobRoles: ['Investment Analyst', 'Portfolio Manager', 'Research Analyst', 'Wealth Manager']
    },
    {
      id: 'acca',
      title: 'ACCA (UK)',
      subtitle: 'Association of Chartered Certified Accountants',
      category: 'accounting',
      duration: '24-36 months',
      rating: 4.6,
      students: '4,200+',
      description: 'Gain internationally recognized accounting qualification from the UK with global career opportunities.',
      highlights: ['UK Qualification', 'Global Mobility', 'Comprehensive Coverage'],
      skills: ['Financial Accounting', 'Management Accounting', 'Audit & Assurance', 'Corporate Reporting'],
      careerOutcomes: ['Chartered Accountant', 'Finance Director', 'Audit Partner', 'CFO'],
      certificationBody: 'Association of Chartered Certified Accountants (ACCA)',
      globalRecognition: 'Recognized by employers in over 180 countries',
      icon: AcademicCapIcon,
      slug: 'acca-course-details',
      difficulty: 'Intermediate',
      jobRoles: ['Chartered Accountant', 'Finance Manager', 'Audit Senior', 'Financial Analyst']
    },
    {
      id: 'cia',
      title: 'CIA',
      subtitle: 'Certified Internal Auditor',
      category: 'audit',
      duration: '8-12 months',
      rating: 4.5,
      students: '1,500+',
      description: 'Specialize in internal auditing, risk management, and governance with IIA certification.',
      highlights: ['IIA Certification', 'Risk Management', 'Governance Expertise'],
      skills: ['Internal Auditing', 'Risk Assessment', 'Governance', 'Compliance Management'],
      careerOutcomes: ['Internal Auditor', 'Risk Manager', 'Compliance Officer', 'Audit Director'],
      certificationBody: 'Institute of Internal Auditors (IIA)',
      globalRecognition: 'Premier certification for internal audit professionals',
      icon: ShieldCheckIcon,
      slug: 'cia',
      difficulty: 'Intermediate',
      jobRoles: ['Internal Auditor', 'Risk Analyst', 'Compliance Manager', 'Governance Specialist']
    },
    {
      id: 'ea',
      title: 'EA (US)',
      subtitle: 'Enrolled Agent',
      category: 'tax',
      duration: '6-9 months',
      rating: 4.4,
      students: '800+',
      description: 'Become a tax expert with IRS representation rights and specialized tax advisory capabilities.',
      highlights: ['IRS License', 'Tax Specialization', 'Quick Certification'],
      skills: ['Tax Preparation', 'Tax Planning', 'IRS Representation', 'Tax Law'],
      careerOutcomes: ['Tax Consultant', 'Tax Preparer', 'Tax Advisor', 'Tax Manager'],
      certificationBody: 'Internal Revenue Service (IRS)',
      globalRecognition: 'Highest credential awarded by the IRS',
      icon: CalculatorIcon,
      slug: 'enrolled-agent-course-details',
      difficulty: 'Beginner',
      jobRoles: ['Tax Consultant', 'Tax Preparer', 'Tax Advisor', 'Enrolled Agent']
    }
  ];

  // Simplified to 4 main categories
  const categories: Category[] = [
    { id: 'all', name: 'All Courses', icon: AcademicCapIcon },
    { id: 'accounting', name: 'Accounting', icon: CalculatorIcon },
    { id: 'finance', name: 'Finance', icon: ChartBarIcon },
    { id: 'audit', name: 'Audit & Tax', icon: ShieldCheckIcon }
  ];

  // Filter courses based on category
  const filteredCourses = courses.filter(course => 
    activeCategory === 'all' || 
    course.category === activeCategory || 
    (activeCategory === 'audit' && (course.category === 'audit' || course.category === 'tax'))
  );

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
    setShowCourseModal(true);
  };

  const closeCourseModal = () => {
    setShowCourseModal(false);
    setSelectedCourse(null);
  };

  return (
    <section id="courses" className="relative py-20 overflow-hidden">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "NorthStar Academy",
            "description": "Professional certification courses in Accounting, Finance, Taxation & Audit",
            "url": "https://northstaracademy.com",
            "hasCredential": courses.map(course => ({
              "@type": "EducationalOccupationalCredential",
              "name": course.title,
              "description": course.description,
              "credentialCategory": course.category,
              "educationalLevel": course.difficulty,
              "competencyRequired": course.skills,
              "occupationType": course.jobRoles
            }))
          })
        }}
      />
      
      {/* Enhanced Background with Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-30">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
              </pattern>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="#d1d5db" opacity="0.4"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
            <rect width="100%" height="100%" fill="url(#dots)"/>
          </svg>
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-red-100 to-red-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-200 rounded-full opacity-20 blur-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-green-100 to-emerald-200 rounded-full opacity-15 blur-2xl"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-orange-100 to-yellow-200 rounded-full opacity-20 blur-xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Enhanced SEO */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <AcademicCapIcon className="w-4 h-4" />
            Professional Certification Hub
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Master Global Finance &{' '}
            <span className="bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
              Accounting Certifications
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Master the world&apos;s most respected qualifications in Accounting, Finance, Taxation & Audit — CMA, CPA, CFA, ACCA, CIA & EA certifications all under one roof.
          </motion.p>

          {/* Enhanced Credibility Badges with SEO Keywords */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-600"
          >
            <div className="flex items-center gap-2">
              <StarIcon className="w-5 h-5 text-yellow-500" />
              <span className="font-medium">4.8/5 Certified Training Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <UserGroupIcon className="w-5 h-5 text-red-500" />
              <span className="font-medium">55,000+ Certified Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-green-500" />
              <span className="font-medium">98% Certification Success Rate</span>
            </div>
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-red-600 to-red-600 text-white shadow-lg shadow-red-500/25'
                    : 'bg-white text-gray-600 hover:text-red-600 hover:bg-red-50 border border-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </motion.button>
            );
          })}
        </div>

        {/* Course Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredCourses.map((course, index) => {
              const courseImagesBySlug: Record<string, string> = {
                'cma-usa-course-details': '/courses/cma.png',
                'cpa-course-details': '/courses/cpa.png',
                'cfa-us': '/courses/cfa.png',
                'acca-course-details': '/courses/acca.png',
                'cia': '/courses/cia.png',
                'enrolled-agent-course-details': '/courses/ea.png',
              };
              const imageSrc = courseImagesBySlug[course.slug] ?? courseImagesBySlug[course.id] ?? '/logo.svg';
              return (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => handleCourseClick(course)}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-red-200 relative overflow-hidden"
                >
                  {/* Badge */}
                  {course.badge && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {course.badge}
                    </div>
                  )}

                  {/* Course Image */}
                  <div className="flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 border border-red-100">
                    <Image
                      src={imageSrc}
                      alt={`${course.title} logo`}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                  </div>

                  {/* Course Info */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{course.subtitle}</p>
                    
                    {/* Stats */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <StarIcon className="w-4 h-4 text-yellow-500" />
                        <span className="font-medium">{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <UserGroupIcon className="w-4 h-4" />
                        <span>{course.students}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    {/* Skills Preview */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {course.skills?.slice(0, 2).map((skill, index) => (
                          <span key={index} className="px-2 py-1 bg-red-50 text-red-700 text-xs font-medium rounded-md border border-red-200">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Difficulty:</span> {course.difficulty}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-red-600 font-medium group-hover:text-red-700">
                      Learn More
                    </span>
                    <ChevronRightIcon className="w-5 h-5 text-red-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-red-600 to-red-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-red-600/90"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Career?
              </h3>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who have accelerated their careers with our globally recognized certifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
                <LeadFormButton  formType="general"
              isSendOtp={true}
             variant='outline' >
                   Talk to our counsellors
                </LeadFormButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {showCourseModal && selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeCourseModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-white rounded-2xl border border-red-100">
                    <Image
                      src={{
                        'cma-usa': '/courses/cma.png',
                        'cpa-us': '/courses/cpa.png',
                        'cfa-us': '/courses/cfa.png',
                        'acca': '/courses/acca-course-details.png',
                        'cia': '/courses/cia.png',
                        'ea': '/courses/ea.png',
                      }[selectedCourse.slug] ?? '/logo.svg'}
                      alt={`${selectedCourse.title} logo`}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedCourse.title}</h3>
                    <p className="text-gray-600">{selectedCourse.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={closeCourseModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <XMarkIcon className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              {/* Course Details */}
              <div className="space-y-6">
                <p className="text-gray-700 text-lg">{selectedCourse.description}</p>

                {/* Stats */}
                <div className="gridWatch grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">{selectedCourse.rating}</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">{selectedCourse.students}</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">{selectedCourse.duration}</div>
                    <div className="text-sm text-gray-600">Duration</div>
                  </div>
                </div>

                {/* Skills Section */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills You&apos;ll Master</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedCourse.skills?.map((skill, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-red-50 rounded-lg">
                        <CheckIcon className="w-4 h-4 text-red-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Outcomes */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Career Opportunities</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedCourse.careerOutcomes?.map((outcome, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                        <BriefcaseIcon className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certification Details */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Certification Details</h4>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <AcademicCapIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Certifying Body</p>
                        <p className="text-sm text-gray-600">{selectedCourse.certificationBody}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <GlobeAltIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Global Recognition</p>
                        <p className="text-sm text-gray-600">{selectedCourse.globalRecognition}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ChartBarIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Difficulty Level</p>
                        <p className="text-sm text-gray-600">{selectedCourse.difficulty}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-semibold text-gray-900 mb-1">Ready to get started?</p>
                      <p className="text-sm text-gray-600">Join thousands of successful professionals</p>
                    </div>
                    <Link
                      href={`/${selectedCourse.slug}`}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                    >
                      Learn More
                      <ArrowUpRightIcon className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GlobalCoursesHub;