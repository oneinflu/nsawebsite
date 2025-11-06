'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  ChevronDownIcon,
  ChevronUpIcon,
  BookOpenIcon,
  ClockIcon,
  ChartBarIcon,
  
  DocumentArrowDownIcon,
  XMarkIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

// Type definitions
interface CIAPart {
  id: string;
  partNumber: number;
  title: string;
  subtitle: string;
  description: string;
  whatYouLearn: string[];
  outcome: string;
  studyHours: string;
  difficulty: number;
  roleImpact: string[];
  examFormat: string;
  passingScore: string;
  color: string;
  bgColor: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CIASyllabus = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [leadFormData, setLeadFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const ciaParts: CIAPart[] = [
    {
      id: 'part-1',
      partNumber: 1,
      title: 'Essentials of Internal Auditing',
      subtitle: 'Foundation & Standards',
      description: 'Master the fundamental principles, standards, and ethics of internal auditing',
      whatYouLearn: [
        'Internal Audit Basics & Standards',
        'Independence and Objectivity',
        'Proficiency and Due Professional Care',
        'Quality Assurance Programs',
        'Governance, Risk Management & Control',
        'Fraud Risks and Controls'
      ],
      outcome: 'Internal Audit Fundamentals',
      studyHours: '150-200 hours',
      difficulty: 6,
      roleImpact: [
        'Foundation for audit career',
        'Understanding of IA standards',
        'Risk assessment capabilities',
        'Compliance knowledge'
      ],
      examFormat: '125 questions, 2.5 hours',
      passingScore: '600/800 points',
      color: 'from-red-500 to-indigo-600',
      bgColor: 'from-red-50 to-indigo-50',
      icon: BookOpenIcon
    },
    {
      id: 'part-2',
      partNumber: 2,
      title: 'Practice of Internal Auditing',
      subtitle: 'Perform Engagements',
      description: 'Learn to plan, execute, and communicate internal audit engagements effectively',
      whatYouLearn: [
        'Managing the Internal Audit Activity',
        'Planning the Engagement',
        'Performing the Engagement',
        'Communicating Engagement Results',
        'Monitoring Progress',
        'Information Technology Risks',
        'Financial Management & Finance'
      ],
      outcome: 'Risk & Control Execution',
      studyHours: '180-250 hours',
      difficulty: 7,
      roleImpact: [
        'Hands-on audit execution',
        'Project management skills',
        'Communication abilities',
        'Technical audit competence'
      ],
      examFormat: '100 questions, 2 hours',
      passingScore: '600/800 points',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50',
      icon: ShieldCheckIcon
    },
    {
      id: 'part-3',
      partNumber: 3,
      title: 'Business Knowledge for Internal Auditing',
      subtitle: 'Business + IT + Risk Strategy',
      description: 'Develop strategic business acumen and advanced risk management expertise',
      whatYouLearn: [
        'Business Acumen',
        'Information Security',
        'Information Technology',
        'Financial Management',
        'Global Business Environment',
        'Strategic Management',
        'Operations Management'
      ],
      outcome: 'Leadership Readiness',
      studyHours: '200-280 hours',
      difficulty: 8,
      roleImpact: [
        'Strategic thinking ability',
        'Business advisory skills',
        'Leadership preparation',
        'C-suite communication'
      ],
      examFormat: '100 questions, 2 hours',
      passingScore: '600/800 points',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-50 to-violet-50',
      icon: AcademicCapIcon
    }
  ];

  const togglePart = (partId: string) => {
    setActivePart(activePart === partId ? null : partId);
  };

  const handleDownloadSyllabus = () => {
    setShowLeadModal(true);
  };

  const handleSubmitLeadForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('CIA Syllabus download request:', leadFormData);
    setShowLeadModal(false);
    // Handle form submission and trigger download
  };

  const getDifficultyColor = (difficulty: number) => {
    if (difficulty <= 4) return 'text-green-600 bg-green-100';
    if (difficulty <= 6) return 'text-yellow-600 bg-yellow-100';
    if (difficulty <= 7) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

  const getDifficultyLabel = (difficulty: number) => {
    if (difficulty <= 4) return 'Moderate';
    if (difficulty <= 6) return 'Challenging';
    if (difficulty <= 7) return 'Difficult';
    return 'Very Difficult';
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AcademicCapIcon className="w-4 h-4 mr-2" />
            CIA Certification Syllabus
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            CIA 3-Part Structure
            <span className="block text-red-600 mt-2">Easy Clarity</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Master internal auditing through a structured 3-part journey. Each part builds your expertise 
            from fundamentals to strategic leadership readiness.
          </p>
        </motion.div>

        {/* Parts Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ciaParts.map((part, index) => (
            <motion.div
              key={part.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${part.bgColor} rounded-2xl p-6 border border-gray-200`}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${part.color} rounded-xl flex items-center justify-center mb-4`}>
                <part.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center mb-3">
                <span className="text-2xl font-bold text-gray-900">Part {part.partNumber}</span>
                <span className={`ml-3 px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(part.difficulty)}`}>
                  {getDifficultyLabel(part.difficulty)}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{part.title}</h3>
              <p className="text-gray-600 mb-4">{part.subtitle}</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-700">
                  <ClockIcon className="w-4 h-4 mr-2 text-red-500" />
                  {part.studyHours}
                </div>
                <div className="flex items-center text-gray-700">
                  <BriefcaseIcon className="w-4 h-4 mr-2 text-green-500" />
                  {part.outcome}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Accordion */}
        <div className="space-y-6">
          {ciaParts.map((part, index) => (
            <motion.div
              key={part.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                onClick={() => togglePart(part.id)}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${part.color} rounded-xl flex items-center justify-center`}>
                      <part.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-1">
                        <h3 className="text-xl font-bold text-gray-900">
                          Part {part.partNumber}: {part.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(part.difficulty)}`}>
                          {getDifficultyLabel(part.difficulty)}
                        </span>
                      </div>
                      <p className="text-gray-600">{part.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right text-sm text-gray-600">
                      <div className="font-medium">{part.studyHours}</div>
                      <div>{part.examFormat}</div>
                    </div>
                    {activePart === part.id ? (
                      <ChevronUpIcon className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronDownIcon className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {activePart === part.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200"
                  >
                    <div className="p-6 bg-gray-50">
                      <div className="grid md:grid-cols-3 gap-8">
                        {/* What You Learn */}
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                            <BookOpenIcon className="w-5 h-5 mr-2 text-red-500" />
                            What You Learn
                          </h4>
                          <ul className="space-y-2">
                            {part.whatYouLearn.map((topic, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-700 text-sm">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Role Impact */}
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                            <BriefcaseIcon className="w-5 h-5 mr-2 text-green-500" />
                            Role Impact
                          </h4>
                          <ul className="space-y-2">
                            {part.roleImpact.map((impact, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-700 text-sm">{impact}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Exam Details */}
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                            <ChartBarIcon className="w-5 h-5 mr-2 text-purple-500" />
                            Exam Details
                          </h4>
                          <div className="space-y-3">
                            <div className="bg-white rounded-lg p-3 border">
                              <div className="text-sm text-gray-600">Format</div>
                              <div className="font-medium text-gray-900">{part.examFormat}</div>
                            </div>
                            <div className="bg-white rounded-lg p-3 border">
                              <div className="text-sm text-gray-600">Passing Score</div>
                              <div className="font-medium text-gray-900">{part.passingScore}</div>
                            </div>
                            <div className="bg-white rounded-lg p-3 border">
                              <div className="text-sm text-gray-600">Study Time</div>
                              <div className="font-medium text-gray-900">{part.studyHours}</div>
                            </div>
                            <div className="bg-white rounded-lg p-3 border">
                              <div className="text-sm text-gray-600">Difficulty</div>
                              <div className="flex items-center">
                                <div className="flex space-x-1 mr-2">
                                  {[...Array(10)].map((_, i) => (
                                    <div
                                      key={i}
                                      className={`w-2 h-2 rounded-full ${
                                        i < part.difficulty ? 'bg-red-500' : 'bg-gray-200'
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm font-medium text-gray-900">
                                  {part.difficulty}/10
                                </span>
                              </div>
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
          <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Download CIA Syllabus & Study Plan
            </h3>
            <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
              Get detailed syllabus breakdown, study schedules, exam strategies, and preparation tips for all 3 parts
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadSyllabus}
              className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center"
            >
              <DocumentArrowDownIcon className="w-6 h-6 mr-3" />
              Download Complete Study Guide 🚀
            </motion.button>
            <div className="mt-4 text-red-100 text-sm">
              ✅ Part-wise study hours ✅ Difficulty breakdown ✅ Role impact analysis
            </div>
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
                    Download CIA Study Guide
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
                      className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={leadFormData.phone}
                      onChange={(e) => setLeadFormData({...leadFormData, phone: e.target.value})}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={leadFormData.email}
                      onChange={(e) => setLeadFormData({...leadFormData, email: e.target.value})}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:border-red-500 focus:outline-none"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-red-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300"
                  >
                    Download Study Guide
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

export default CIASyllabus;