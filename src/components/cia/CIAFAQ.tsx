'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
 
  HelpCircle, 
 
  Globe, 
  Calendar, 
  Briefcase, 
  Users,
  BookOpen,
  Award,
  Search,
  Shield,
  TrendingUp
} from 'lucide-react';

const CIAFAQ = () => {
  const [activeCategory, setActiveCategory] = useState('validity');
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // FAQ Categories
  const categories = [
    {
      id: 'validity',
      title: 'Global Validity',
      icon: Globe,
      color: 'from-green-500 to-green-600',
      description: 'CIA recognition worldwide'
    },
    {
      id: 'exams',
      title: 'Exam Windows',
      icon: Calendar,
      color: 'from-blue-500 to-blue-600',
      description: 'Testing schedule and availability'
    },
    {
      id: 'experience',
      title: 'Experience Requirements',
      icon: Briefcase,
      color: 'from-purple-500 to-purple-600',
      description: 'Work experience criteria'
    },
    {
      id: 'roles',
      title: 'CIA vs CPA Roles',
      icon: Users,
      color: 'from-orange-500 to-orange-600',
      description: 'Career differences explained'
    },
    {
      id: 'recognition',
      title: 'India Recognition',
      icon: Award,
      color: 'from-red-500 to-red-600',
      description: 'Indian market acceptance'
    }
  ];

  // Comprehensive FAQ Data with risk removal focus
  const faqData = {
    validity: [
      {
        id: 'global1',
        question: 'Is CIA globally valid and recognized?',
        answer: 'Yes, CIA is globally recognized in 190+ countries and is the world&apos;s only globally accepted internal audit certification. It&apos;s issued by The Institute of Internal Auditors (IIA), which has chapters in over 190 countries. Major multinational companies like Deloitte, PwC, EY, KPMG, and Fortune 500 companies actively seek CIA professionals.',
        tags: ['global', 'recognition', 'validity'],
        priority: 'high'
      },
      {
        id: 'global2',
        question: 'Which countries accept CIA certification?',
        answer: 'CIA is accepted in all major economies including USA, Canada, UK, Australia, Germany, Singapore, UAE, Saudi Arabia, and India. It&apos;s particularly valued in countries with strong corporate governance requirements. The certification follows international standards, making it universally applicable.',
        tags: ['countries', 'acceptance', 'international'],
        priority: 'high'
      },
      {
        id: 'global3',
        question: 'Do Big 4 companies recognize CIA?',
        answer: 'Absolutely! All Big 4 firms (Deloitte, PwC, EY, KPMG) highly value CIA certification for their risk advisory and internal audit services. Many Big 4 professionals pursue CIA to enhance their internal audit expertise. It&apos;s often preferred over other certifications for internal audit roles.',
        tags: ['big4', 'deloitte', 'pwc', 'ey', 'kpmg'],
        priority: 'high'
      }
    ],
    exams: [
      {
        id: 'exam1',
        question: 'When can I take CIA exams? Are there specific windows?',
        answer: 'CIA exams are available year-round through Pearson VUE testing centers. Unlike CPA, there are no blackout periods. You can schedule your exam any day of the year based on center availability. This flexibility allows you to plan around your work schedule and complete the certification faster.',
        tags: ['exam windows', 'pearson vue', 'scheduling'],
        priority: 'high'
      },
      {
        id: 'exam2',
        question: 'How many times can I attempt CIA exams?',
        answer: 'You have unlimited attempts for CIA exams. If you don&apos;t pass on the first try, you can retake the exam after a 30-day waiting period. There&apos;s no lifetime limit on attempts, reducing the pressure and allowing you to succeed at your own pace.',
        tags: ['attempts', 'retake', 'unlimited'],
        priority: 'medium'
      },
      {
        id: 'exam3',
        question: 'Where can I take CIA exams in India?',
        answer: 'CIA exams are available at Pearson VUE centers across major Indian cities including Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, Kolkata, and Ahmedabad. With 50+ centers nationwide, you can find a convenient location near you.',
        tags: ['india', 'pearson vue', 'test centers'],
        priority: 'medium'
      }
    ],
    experience: [
      {
        id: 'exp1',
        question: 'What work experience is required for CIA certification?',
        answer: 'You need 2 years of internal audit or related experience. This can include external audit, quality assurance, compliance, risk management, or finance roles. The experience requirement is flexible and can be completed before, during, or after passing the exams.',
        tags: ['experience', '2 years', 'internal audit'],
        priority: 'high'
      },
      {
        id: 'exp2',
        question: 'Can I get CIA without internal audit experience?',
        answer: 'Yes! You can substitute experience with education or other qualifications. A master&apos;s degree can reduce the requirement to 1 year. Additionally, experience in external audit, compliance, risk management, or finance roles counts toward the requirement.',
        tags: ['no experience', 'substitution', 'education'],
        priority: 'high'
      },
      {
        id: 'exp3',
        question: 'When do I need to complete the experience requirement?',
        answer: 'You have flexibility! You can complete the experience requirement before, during, or after passing all three CIA exams. Many candidates pass the exams first and then fulfill the experience requirement while working in relevant roles.',
        tags: ['timing', 'flexibility', 'when'],
        priority: 'medium'
      }
    ],
    roles: [
      {
        id: 'role1',
        question: 'What&apos;s the difference between CIA and CPA roles?',
        answer: 'CIA focuses on internal audit, risk management, and corporate governance within organizations. CPA focuses on external audit, tax, and public accounting. CIA professionals work as internal auditors, risk managers, and compliance officers. CPA professionals work in public accounting firms, tax advisory, and external audit.',
        tags: ['cia vs cpa', 'roles', 'career difference'],
        priority: 'high'
      },
      {
        id: 'role2',
        question: 'Which pays more - CIA or CPA?',
        answer: 'Both offer excellent salary potential. CIA professionals earn $75K-$140K globally, with senior roles reaching $200K+. CPA professionals earn $85K-$150K globally. CIA offers specialized expertise in high-demand areas like risk management and compliance, often commanding premium salaries.',
        tags: ['salary', 'pay', 'compensation'],
        priority: 'high'
      },
      {
        id: 'role3',
        question: 'Can I do both CIA and CPA?',
        answer: 'Absolutely! Many professionals hold both certifications. CIA + CPA combination is highly valued as it covers both internal and external audit expertise. This dual qualification opens doors to senior finance and audit leadership roles.',
        tags: ['dual certification', 'both', 'combination'],
        priority: 'medium'
      }
    ],
    recognition: [
      {
        id: 'india1',
        question: 'Who recognizes CIA in India?',
        answer: 'CIA is recognized by major Indian corporations, MNCs, Big 4 firms, banks, and government organizations. Companies like Tata, Reliance, Infosys, TCS, HDFC Bank, ICICI Bank, and all major consulting firms actively hire CIA professionals. RBI and SEBI also value CIA expertise for regulatory roles.',
        tags: ['india recognition', 'companies', 'rbi', 'sebi'],
        priority: 'high'
      },
      {
        id: 'india2',
        question: 'Is CIA better than CA in India?',
        answer: 'CIA and CA serve different purposes. CIA is specialized for internal audit and risk management roles, while CA is broader. For internal audit careers, CIA is preferred globally. For general accounting practice in India, CA is traditional. Many professionals pursue both for maximum career flexibility.',
        tags: ['cia vs ca', 'india', 'comparison'],
        priority: 'high'
      },
      {
        id: 'india3',
        question: 'Do Indian companies pay well for CIA?',
        answer: 'Yes! CIA professionals in India earn 30-50% more than general accountants. Entry-level CIA roles start at ₹8-12 lakhs, mid-level at ₹15-25 lakhs, and senior roles at ₹30-50 lakhs. MNCs and consulting firms offer even higher packages.',
        tags: ['india salary', 'pay scale', 'compensation'],
        priority: 'medium'
      }
    ]
  };

  // Filter FAQs based on search
  const getFilteredFAQs = (categoryId: string) => {
    const faqs = faqData[categoryId as keyof typeof faqData] || [];
    if (!searchTerm) return faqs;
    
    return faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  // Generate SEO Schema
  const generateFAQSchema = () => {
    const allFAQs = Object.values(faqData).flat();
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": allFAQs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    );
  };

  return (
    <>
      {generateFAQSchema()}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-12 h-12 text-green-600 mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                CIA <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">FAQs</span>
              </h2>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Get clear answers to remove all doubts about CIA certification and make an informed career decision
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search FAQs... global validity, exams, experience..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 text-lg border-2 border-slate-200 rounded-2xl focus:border-green-500 focus:ring-4 focus:ring-green-100 focus:outline-none transition-all duration-300"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-slate-400" />
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Category Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">FAQ Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                        activeCategory === category.id
                          ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                          : 'hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center">
                        <category.icon className="w-5 h-5 mr-3" />
                        <div>
                          <div className="font-semibold">{category.title}</div>
                          <div className={`text-sm ${activeCategory === category.id ? 'text-white/80' : 'text-slate-500'}`}>
                            {category.description}
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {categories.find(cat => cat.id === activeCategory)?.title}
                  </h3>
                  <p className="text-slate-600">
                    {categories.find(cat => cat.id === activeCategory)?.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {getFilteredFAQs(activeCategory).map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300"
                    >
                      <button
                        onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                        className="w-full text-left p-6 hover:bg-slate-50 transition-colors duration-200"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-start">
                            <div className={`w-2 h-2 rounded-full mr-4 mt-3 ${
                              faq.priority === 'high' ? 'bg-red-500' : 'bg-blue-500'
                            }`}></div>
                            <h4 className="text-lg font-semibold text-slate-800 pr-4">{faq.question}</h4>
                          </div>
                          <motion.div
                            animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                          </motion.div>
                        </div>
                      </button>

                      <AnimatePresence>
                        {openFAQ === faq.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-slate-100"
                          >
                            <div className="p-6 pt-4">
                              <p className="text-slate-700 leading-relaxed mb-4">{faq.answer}</p>
                              <div className="flex flex-wrap gap-2">
                                {faq.tags.map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>

                {getFilteredFAQs(activeCategory).length === 0 && (
                  <div className="text-center py-12">
                    <HelpCircle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">No FAQs Found</h3>
                    <p className="text-slate-600">Try adjusting your search terms or browse other categories.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-2">190+</div>
              <div className="text-slate-600">Countries Recognition</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-2">365</div>
              <div className="text-slate-600">Days Exam Available</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-md text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-2">2</div>
              <div className="text-slate-600">Years Experience Required</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-md text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-2">$140K</div>
              <div className="text-slate-600">Average Senior Salary</div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-lg opacity-90 mb-6">
              Get personalized answers from our CIA experts and start your journey today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Talk to CIA Expert
                </div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Download CIA Guide
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CIAFAQ;