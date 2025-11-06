/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  ChevronDownIcon,
  ChevronUpIcon,
  BookOpenIcon,
  ClockIcon,
  ChartBarIcon,
  StarIcon,
  DocumentArrowDownIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

// Type definitions
interface BaseSubject {
  code: string;
  name: string;
  weightage: string;
  practicalSkills: string[];
  difficulty: number;
  studyHours: string;
  examFormat: string;
}

interface EssentialSubject extends BaseSubject {
  isEssential: true;
  isOption?: never;
}

interface OptionSubject extends BaseSubject {
  isOption: true;
  isEssential?: never;
}

interface RegularSubject extends BaseSubject {
  isEssential?: never;
  isOption?: never;
}

type Subject = EssentialSubject | OptionSubject | RegularSubject;

interface Level {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  bgColor: string;
  subjects: Subject[];
}

const ACCASyllabus = () => {
  const [activeLevel, setActiveLevel] = useState<string | null>(null);
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [leadFormData, setLeadFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const syllabusData = [
    {
      id: 'applied-knowledge',
      title: 'Applied Knowledge',
      subtitle: 'Foundation Level - 3 Papers',
      description: 'Build fundamental business and accounting knowledge',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      subjects: [
        {
          code: 'BT',
          name: 'Business and Technology',
          weightage: '100%',
          practicalSkills: [
            'Business environment analysis',
            'Digital technology in business',
            'Data analytics fundamentals',
            'Professional ethics'
          ],
          difficulty: 3,
          studyHours: '150-200',
          examFormat: '2 hours, 100 marks'
        },
        {
          code: 'MA',
          name: 'Management Accounting',
          weightage: '100%',
          practicalSkills: [
            'Cost accounting techniques',
            'Budgeting and forecasting',
            'Performance measurement',
            'Decision making analysis'
          ],
          difficulty: 4,
          studyHours: '180-220',
          examFormat: '2 hours, 100 marks'
        },
        {
          code: 'FA',
          name: 'Financial Accounting',
          weightage: '100%',
          practicalSkills: [
            'Double entry bookkeeping',
            'Financial statements preparation',
            'Trial balance and adjustments',
            'Basic consolidations'
          ],
          difficulty: 4,
          studyHours: '200-250',
          examFormat: '2 hours, 100 marks'
        }
      ]
    },
    {
      id: 'applied-skills',
      title: 'Applied Skills',
      subtitle: 'Intermediate Level - 6 Papers',
      description: 'Develop technical expertise in core accounting areas',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      subjects: [
        {
          code: 'LW',
          name: 'Corporate and Business Law',
          weightage: '100%',
          practicalSkills: [
            'Legal system understanding',
            'Contract law application',
            'Company law compliance',
            'Employment law basics'
          ],
          difficulty: 3,
          studyHours: '150-180',
          examFormat: '2 hours, 100 marks'
        },
        {
          code: 'PM',
          name: 'Performance Management',
          weightage: '100%',
          practicalSkills: [
            'Advanced costing techniques',
            'Performance measurement systems',
            'Strategic planning',
            'Risk management'
          ],
          difficulty: 5,
          studyHours: '200-250',
          examFormat: '3 hours, 100 marks'
        },
        {
          code: 'TX',
          name: 'Taxation',
          weightage: '100%',
          practicalSkills: [
            'Income tax calculations',
            'Corporation tax planning',
            'VAT compliance',
            'Tax planning strategies'
          ],
          difficulty: 4,
          studyHours: '180-220',
          examFormat: '3 hours, 100 marks'
        },
        {
          code: 'FR',
          name: 'Financial Reporting',
          weightage: '100%',
          practicalSkills: [
            'IFRS application',
            'Complex consolidations',
            'Group accounts preparation',
            'Financial analysis'
          ],
          difficulty: 5,
          studyHours: '220-280',
          examFormat: '3 hours, 100 marks'
        },
        {
          code: 'AA',
          name: 'Audit and Assurance',
          weightage: '100%',
          practicalSkills: [
            'Audit planning and execution',
            'Risk assessment',
            'Internal controls evaluation',
            'Audit reporting'
          ],
          difficulty: 4,
          studyHours: '200-240',
          examFormat: '3 hours, 100 marks'
        },
        {
          code: 'FM',
          name: 'Financial Management',
          weightage: '100%',
          practicalSkills: [
            'Investment appraisal',
            'Working capital management',
            'Financial risk management',
            'Corporate finance'
          ],
          difficulty: 5,
          studyHours: '220-260',
          examFormat: '3 hours, 100 marks'
        }
      ]
    },
    {
      id: 'strategic-professional',
      title: 'Strategic Professional',
      subtitle: 'Advanced Level - 4 Papers (2 Essentials + 2 Options)',
      description: 'Master strategic thinking and leadership skills',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      subjects: [
        {
          code: 'SBL',
          name: 'Strategic Business Leader',
          weightage: '100%',
          practicalSkills: [
            'Strategic leadership',
            'Governance and ethics',
            'Risk and control',
            'Professional skills'
          ],
          difficulty: 6,
          studyHours: '300-350',
          examFormat: '4 hours, Case study based',
          isEssential: true
        },
        {
          code: 'SBR',
          name: 'Strategic Business Reporting',
          weightage: '100%',
          practicalSkills: [
            'Advanced IFRS',
            'Group reporting',
            'Ethical considerations',
            'Professional judgment'
          ],
          difficulty: 6,
          studyHours: '280-320',
          examFormat: '3.25 hours, 100 marks',
          isEssential: true
        },
        {
          code: 'AFM',
          name: 'Advanced Financial Management',
          weightage: '100%',
          practicalSkills: [
            'Advanced investment decisions',
            'Risk management strategies',
            'International finance',
            'Emerging issues in finance'
          ],
          difficulty: 7,
          studyHours: '300-350',
          examFormat: '3.25 hours, 100 marks',
          isOption: true
        },
        {
          code: 'APM',
          name: 'Advanced Performance Management',
          weightage: '100%',
          practicalSkills: [
            'Strategic performance management',
            'Environmental management accounting',
            'Social and environmental reporting',
            'Current issues in management'
          ],
          difficulty: 6,
          studyHours: '280-320',
          examFormat: '3.25 hours, 100 marks',
          isOption: true
        },
        {
          code: 'ATX',
          name: 'Advanced Taxation',
          weightage: '100%',
          practicalSkills: [
            'Advanced tax planning',
            'International taxation',
            'Tax compliance',
            'Ethical tax planning'
          ],
          difficulty: 6,
          studyHours: '300-340',
          examFormat: '3.25 hours, 100 marks',
          isOption: true
        },
        {
          code: 'AAA',
          name: 'Advanced Audit and Assurance',
          weightage: '100%',
          practicalSkills: [
            'Advanced audit techniques',
            'Quality control',
            'Professional ethics',
            'Current audit issues'
          ],
          difficulty: 6,
          studyHours: '280-320',
          examFormat: '3.25 hours, 100 marks',
          isOption: true
        }
      ]
    }
  ];

  const toggleLevel = (levelId: string) => {
    setActiveLevel(activeLevel === levelId ? null : levelId);
  };

  const getDifficultyStars = (difficulty: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon
        key={i}
        className={`w-4 h-4 ${
          i < difficulty ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const handleDownloadSyllabus = () => {
    setShowLeadModal(true);
  };

  const handleSubmitLeadForm = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Syllabus download request:', leadFormData);
    setShowLeadModal(false);
    // Show success message or trigger download
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <BookOpenIcon className="w-12 h-12 text-blue-600 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              ACCA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Syllabus & Levels</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Clear and digestible breakdown of all ACCA papers with practical skills and study guidance
          </p>
        </motion.div>

        {/* Accordion Levels */}
        <div className="space-y-6">
          {syllabusData.map((level, levelIndex) => (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: levelIndex * 0.1 }}
              className={`bg-gradient-to-r ${level.bgColor} rounded-3xl border border-white/50 shadow-lg overflow-hidden`}
            >
              {/* Level Header */}
              <motion.button
                onClick={() => toggleLevel(level.id)}
                className="w-full p-8 text-left flex items-center justify-between hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${level.color} flex items-center justify-center mr-6`}>
                    <span className="text-white font-bold text-xl">{levelIndex + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {level.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-1">{level.subtitle}</p>
                    <p className="text-gray-700">{level.description}</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  {activeLevel === level.id ? (
                    <ChevronUpIcon className="w-8 h-8 text-gray-600" />
                  ) : (
                    <ChevronDownIcon className="w-8 h-8 text-gray-600" />
                  )}
                </div>
              </motion.button>

              {/* Level Content */}
              <AnimatePresence>
                {activeLevel === level.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8">
                      <div className="bg-white rounded-2xl p-6 shadow-lg">
                        {/* Subjects Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {level.subjects.map((subject, subjectIndex) => (
                            <motion.div
                              key={subject.code}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: subjectIndex * 0.1 }}
                              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300"
                            >
                              {/* Subject Header */}
                              <div className="flex items-center justify-between mb-4">
                                <div>
                                  <div className="flex items-center mb-2">
                                    <span className={`bg-gradient-to-r ${level.color} text-white px-3 py-1 rounded-full text-sm font-bold mr-3`}>
                                      {subject.code}
                                    </span>
                                    {'isEssential' in subject && subject.isEssential && (
                                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                                        Essential
                                      </span>
                                    )}
                                    {'isOption' in subject && subject.isOption && (
                                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                                        Option
                                      </span>
                                    )}
                                  </div>
                                  <h4 className="text-lg font-bold text-gray-900">{subject.name}</h4>
                                </div>
                              </div>

                              {/* Subject Details */}
                              <div className="space-y-4">
                                {/* Exam Format & Study Hours */}
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                                    <div className="flex items-center mb-1">
                                      <ClockIcon className="w-4 h-4 text-blue-600 mr-2" />
                                      <span className="text-sm font-medium text-gray-700">Study Hours</span>
                                    </div>
                                    <div className="text-lg font-bold text-blue-600">{subject.studyHours}</div>
                                  </div>
                                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                                    <div className="flex items-center mb-1">
                                      <ChartBarIcon className="w-4 h-4 text-green-600 mr-2" />
                                      <span className="text-sm font-medium text-gray-700">Difficulty</span>
                                    </div>
                                    <div className="flex items-center">
                                      {getDifficultyStars(subject.difficulty)}
                                    </div>
                                  </div>
                                </div>

                                {/* Exam Format */}
                                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                                  <div className="text-sm font-medium text-blue-800 mb-1">Exam Format</div>
                                  <div className="text-sm text-blue-700">{subject.examFormat}</div>
                                </div>

                                {/* Practical Skills */}
                                <div>
                                  <h5 className="text-sm font-bold text-gray-900 mb-2">Practical Skills Gained:</h5>
                                  <ul className="space-y-1">
                                    {subject.practicalSkills.map((skill, skillIndex) => (
                                      <li key={skillIndex} className="flex items-start text-sm text-gray-700">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                        {skill}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Level Summary */}
                        <div className="mt-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                            <div>
                              <div className="text-2xl font-bold text-blue-600">{level.subjects.length}</div>
                              <div className="text-sm text-gray-600">Papers</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-purple-600">
                                {level.subjects.reduce((total, subject) => {
                                  const hours = subject.studyHours.split('-')[1] || subject.studyHours.split('-')[0];
                                  return total + parseInt(hours);
                                }, 0)}
                              </div>
                              <div className="text-sm text-gray-600">Max Study Hours</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-green-600">
                                {Math.round(level.subjects.reduce((total, subject) => total + subject.difficulty, 0) / level.subjects.length)}
                              </div>
                              <div className="text-sm text-gray-600">Avg Difficulty</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Get Complete ACCA Syllabus Guide
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Download detailed syllabus with study tips, exam strategies, and recommended study schedules
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadSyllabus}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center"
            >
              <DocumentArrowDownIcon className="w-6 h-6 mr-3" />
              Download Full Syllabus
            </motion.button>
          </div>
        </motion.div>

        {/* Lead Form Modal */}
        <AnimatePresence>
          {showLeadModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={() => setShowLeadModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-3xl p-8 max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Download ACCA Syllabus
                  </h3>
                  <button
                    onClick={() => setShowLeadModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <XMarkIcon className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
                
                <form onSubmit={handleSubmitLeadForm} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={leadFormData.name}
                      onChange={(e) => setLeadFormData({...leadFormData, name: e.target.value})}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={leadFormData.phone}
                      onChange={(e) => setLeadFormData({...leadFormData, phone: e.target.value})}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={leadFormData.email}
                      onChange={(e) => setLeadFormData({...leadFormData, email: e.target.value})}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300"
                  >
                    Download Syllabus Guide
                  </button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    📧 Instant download link sent to your email
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ACCASyllabus;