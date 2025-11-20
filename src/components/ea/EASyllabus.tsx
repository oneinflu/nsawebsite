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
  const [activePart, setActivePart] = useState<string | null>(null);

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

  const togglePart = (id: string) => setActivePart(activePart === id ? null : id);

  return (
    <section className="py-10 sm:py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AcademicCapIcon className="w-4 h-4 mr-2" />
            EA Certification Syllabus
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            SEE 3-Part Structure
            <span className="block text-red-600 mt-2">Clear Clarity</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Master U.S. taxation across individuals, businesses, and representation to earn the EA credential.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 items-stretch">
          {parts.map((part, index) => (
            <motion.div key={part.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className={`bg-gradient-to-r ${part.color} md:p-3 lg:p-6 text-white`}> 
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs opacity-90">{part.subtitle}</div>
                      <h3 className="text-lg font-bold">{part.title}</h3>
                    </div>
                    <part.icon className="w-8 h-8" />
                  </div>
                </div>

                <button onClick={() => togglePart(part.id)} className="w-full text-left lg:p-6 md:p-4 flex items-center justify-between">
                  <div>
                    <p className="text-gray-700 mb-2">{part.description}</p>
                    <div className="text-sm text-gray-600">{part.examFormat}</div>
                  </div>
                  {activePart === part.id ? (
                    <ChevronUpIcon className="w-10 h-6 text-black" />
                  ) : (
                    <ChevronDownIcon className="w-10 h-6 text-black" />
                  )}
                </button>

                {activePart === part.id && (
                  <div className={`bg-gradient-to-br ${part.bgColor} p-6 border-t border-gray-100`}> 
                    <h4 className="font-bold text-gray-900 mb-3">Key Topics</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {part.topics.map((t, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2"></span>
                          {t}
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
        <div className="mt-8 text-center bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Get Complete EA Syllabus Guide</h3>
            <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
              Download detailed EA syllabus with study schedules, exam strategies, and representation practice tips for all 3 parts.
            </p>
            <LeadFormButton
              formType="download-syllabus"
              isSendOtp={true}
              courseId="EA"
              variant="outline"
              className="inline-flex items-center gap-2"
            >
              <DocumentArrowDownIcon className="w-6 h-6" />
              Download Full Syllabus
            </LeadFormButton>
            <div className="mt-4 text-red-100 text-sm">
              ✅ Part-wise study hours ✅ Topic breakdown ✅ Exam format and tips
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EASyllabus;