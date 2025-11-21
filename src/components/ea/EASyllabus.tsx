'use client';

import { motion } from 'framer-motion';
import { BookOpenIcon, AcademicCapIcon, ShieldCheckIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import LeadFormButton from '@/components/LeadFormButton';
import { useState } from 'react';

interface EAPart {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
  examFormat: string;
  color: string;
  bgColor: string;
  icon: React.ComponentType<{ className?: string }>; 
}

const EASyllabus = () => {
  const [openPartId, setOpenPartId] = useState<string | null>(null);

  const handleToggle = (partId: string) => {
    setOpenPartId(openPartId === partId ? null : partId);
  };

  const parts: EAPart[] = [
    {
      id: 'part-1',
      title: 'SEE Part 1: Individuals',
      subtitle: 'Individual Taxation',
      description: 'Master U.S. individual tax returns, filing rules, and credits',
      topics: [
        'Filing requirements & statuses',
        'Gross income & adjustments',
        'Credits & deductions',
        'Property transactions',
        'Retirement & investment income',
      ],
      examFormat: '100 MCQs, 3.5 hours',
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-50 to-red-50',
      icon: BookOpenIcon,
    },
    {
      id: 'part-2',
      title: 'SEE Part 2: Businesses',
      subtitle: 'Business Taxation',
      description: 'Learn taxation of business entities and their operations',
      topics: [
        'Sole proprietorships & partnerships',
        'Corporations & S corps',
        'Business income & deductions',
        'Specialty areas & trusts',
        'Payroll & employment taxes',
      ],
      examFormat: '100 MCQs, 3.5 hours',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-50 to-violet-50',
      icon: AcademicCapIcon,
    },
    {
      id: 'part-3',
      title: 'SEE Part 3: Representation',
      subtitle: 'Practice, Procedures & Representation ',
      description: 'Understand IRS practice rules, ethics, and representatn',
      topics: [
        'Circular 230 & ethics',
        'Representation before IRS',
        'Assessment & appeals',
        'Examination procedures',
        'Client communications',
      ],
      examFormat: '100 MCQs, 3.5 hours',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50',
      icon: ShieldCheckIcon,
    },
  ];



  return (
    <section className="py-10 sm:py-15 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4 sm:mb-6">
            <AcademicCapIcon className="w-4 h-4 mr-2" />
            EA Certification Syllabus
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            SEE 3-Part Structure
            <span className="block text-red-600 mt-2">Clear Clarity</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Master U.S. taxation across individuals, businesses, and representation to earn the EA credential.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 sm:mb-16">
          {parts.map((part, index) => (
            <motion.div 
              key={part.id} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: index * 0.1 }} 
              className="flex"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col w-full">
                <div className={`bg-gradient-to-r ${part.color} p-6 sm:p-5 md:p-4 text-white`}> 
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="text-xs md:text-[10px] opacity-90 mb-1">{part.subtitle}</div>
                      <h3 className="text-base sm:text-md font-bold leading-tight">{part.title}</h3>
                    </div>
                    <part.icon className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0" />
                  </div>
                </div>

                <button 
                  type="button"
                  onClick={() => handleToggle(part.id)} 
                  className="w-full text-left p-4 sm:p-5 lg:p-6 flex items-start justify-between gap-3 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-700 mb-2 text-sm sm:text-base leading-snug">{part.description}</p>
                    <div className="text-xs sm:text-sm text-gray-600">{part.examFormat}</div>
                  </div>
                  {openPartId === part.id ? (
                    <ChevronUpIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 flex-shrink-0 mt-1" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 flex-shrink-0 mt-1" />
                  )}
                </button>

                {openPartId === part.id && (
                  <div className={`bg-gradient-to-br ${part.bgColor} p-4 sm:p-5 lg:p-6 border-t border-gray-100`}> 
                    <h4 className="font-bold text-gray-900 mb-3 text-sm sm:text-base">Key Topics</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                      {part.topics.map((t, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                          <span className="flex-1">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Download CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mt-6 sm:mt-8 text-center bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Get Complete EA Syllabus Guide</h3>
            <p className="text-red-100 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Download detailed EA syllabus with study schedules, exam strategies, and representation practice tips for all 3 parts.
            </p>
            <LeadFormButton
              formType="download-syllabus"
              isSendOtp={true}
              courseId="EA"
              variant="outline"
              className="inline-flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <DocumentArrowDownIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              Download Full Syllabus
            </LeadFormButton>
            <div className="mt-4 text-red-100 text-xs sm:text-sm leading-relaxed">
              ✅ Part-wise study hours ✅ Topic breakdown ✅ Exam format and tips
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EASyllabus;