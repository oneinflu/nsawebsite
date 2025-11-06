'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  CheckCircle, 
  AlertCircle, 
  Globe, 
  FileCheck, 
  RefreshCw, 
  MapPin,
  Clock,
 
  BookOpen,
 
  Users,
 
  Search
} from 'lucide-react';

const CPAFAQ = () => {
  const [activeCategory, setActiveCategory] = useState('recognition');
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // FAQ Categories
  const categories = [
    {
      id: 'recognition',
      title: 'CPA Recognition',
      icon: Globe,
      color: 'from-red-500 to-red-600',
      description: 'Global acceptance and credibility'
    },
    {
      id: 'evaluation',
      title: 'Evaluation Process',
      icon: FileCheck,
      color: 'from-green-500 to-green-600',
      description: 'Credential assessment and requirements'
    },
    {
      id: 'attempts',
      title: 'Attempts & Validity',
      icon: RefreshCw,
      color: 'from-purple-500 to-purple-600',
      description: 'Exam attempts and score validity'
    },
    {
      id: 'prometric',
      title: 'Prometric Details',
      icon: MapPin,
      color: 'from-orange-500 to-orange-600',
      description: 'Testing centers and scheduling'
    }
  ];

  // Comprehensive FAQ Data
  const faqData = {
    recognition: [
      {
        id: 'rec1',
        question: 'Is CPA recognized globally?',
        answer: 'Yes, CPA is globally recognized and highly valued. It\'s accepted in 180+ countries and is particularly prestigious in the US, Canada, Australia, and many multinational corporations worldwide.',
        tags: ['global', 'recognition', 'international'],
        priority: 'high'
      },
      {
        id: 'rec2',
        question: 'Which countries accept CPA certification?',
        answer: 'CPA is accepted in major economies including USA, Canada, Australia, UK, Singapore, Hong Kong, UAE, India, and most EU countries. Many countries have mutual recognition agreements with US CPA boards.',
        tags: ['countries', 'acceptance', 'mutual recognition'],
        priority: 'high'
      },
      {
        id: 'rec3',
        question: 'Do Big 4 firms prefer CPA over other certifications?',
        answer: 'Absolutely. Deloitte, EY, PwC, and KPMG strongly prefer CPA certification for their US operations and international assignments. CPA holders often get faster promotions and higher starting salaries.',
        tags: ['big 4', 'preference', 'career'],
        priority: 'high'
      },
      {
        id: 'rec4',
        question: 'How does CPA compare to CA or ACCA in terms of recognition?',
        answer: 'While CA and ACCA are respected, CPA has broader global recognition, especially in multinational corporations. CPA holders typically earn 15-25% more than CA/ACCA holders in similar roles.',
        tags: ['comparison', 'salary', 'ca', 'acca'],
        priority: 'medium'
      },
      {
        id: 'rec5',
        question: 'Can I work in India with a US CPA?',
        answer: 'Yes, US CPA is highly valued in India. You can work in MNCs, Big 4 firms, financial services, and consulting. However, for statutory audit in India, you\'ll need additional local certifications.',
        tags: ['india', 'work', 'statutory audit'],
        priority: 'medium'
      }
    ],
    evaluation: [
      {
        id: 'eval1',
        question: 'What is the CPA evaluation process?',
        answer: 'The evaluation involves: 1) Educational qualification assessment (150 credit hours), 2) Ethics exam completion, 3) Work experience verification (1-2 years), and 4) Application to state board for license.',
        tags: ['process', 'requirements', 'steps'],
        priority: 'high'
      },
      {
        id: 'eval2',
        question: 'Do I need 150 credit hours to sit for CPA exam?',
        answer: 'Requirements vary by state. Some states allow you to sit with 120 credit hours but require 150 for licensure. Popular states like California, Texas, and New York have different requirements.',
        tags: ['credit hours', '150 credits', 'requirements'],
        priority: 'high'
      },
      {
        id: 'eval3',
        question: 'How is foreign education evaluated for CPA?',
        answer: 'Foreign degrees are evaluated by NASBA-approved agencies like FACS, ERES, or IQAS. They assess if your education meets US accounting course requirements and credit hour equivalency.',
        tags: ['foreign education', 'evaluation', 'nasba'],
        priority: 'high'
      },
      {
        id: 'eval4',
        question: 'What if my degree doesn\'t meet CPA requirements?',
        answer: 'You can complete additional courses through US universities, community colleges, or online programs. Many candidates take courses in accounting, business law, and ethics to meet requirements.',
        tags: ['additional courses', 'requirements', 'education'],
        priority: 'medium'
      },
      {
        id: 'eval5',
        question: 'How long does the evaluation process take?',
        answer: 'Educational evaluation typically takes 4-8 weeks. The entire process from application to receiving NTS (Notice to Schedule) can take 2-3 months depending on the state.',
        tags: ['timeline', 'duration', 'nts'],
        priority: 'medium'
      }
    ],
    attempts: [
      {
        id: 'att1',
        question: 'How many times can I attempt each CPA section?',
        answer: 'There\'s no limit on attempts, but you must wait until the next testing window if you fail. You can retake sections as many times as needed within the 18-month rolling period.',
        tags: ['attempts', 'retake', 'limit'],
        priority: 'high'
      },
      {
        id: 'att2',
        question: 'What is the 18-month rule for CPA?',
        answer: 'You must pass all 4 sections within 18 months of passing your first section. If you don\'t, the earliest passed sections will expire and you\'ll need to retake them.',
        tags: ['18 month rule', 'expiry', 'validity'],
        priority: 'high'
      },
      {
        id: 'att3',
        question: 'When do CPA scores expire?',
        answer: 'Individual section scores are valid for 18 months from the date you passed. You must complete all sections within this rolling 18-month window to maintain your passing scores.',
        tags: ['score expiry', 'validity', '18 months'],
        priority: 'high'
      },
      {
        id: 'att4',
        question: 'Can I retake a section if I scored 74?',
        answer: 'Yes, you can retake any section even with a score of 74 (just below the 75 passing score). Many candidates retake sections to improve their scores or if they\'re close to passing.',
        tags: ['retake', 'score 74', 'passing score'],
        priority: 'medium'
      },
      {
        id: 'att5',
        question: 'How soon can I retake a failed CPA section?',
        answer: 'You must wait until the next testing window opens. Testing windows are typically 2 months long with 1-2 week breaks between them. Plan your retakes accordingly.',
        tags: ['retake timing', 'testing window', 'schedule'],
        priority: 'medium'
      }
    ],
    prometric: [
      {
        id: 'prom1',
        question: 'Where can I take the CPA exam?',
        answer: 'CPA exams are conducted at Prometric testing centers. There are 300+ centers across the US and international locations in Japan, Europe, Middle East, and select other countries.',
        tags: ['prometric centers', 'locations', 'international'],
        priority: 'high'
      },
      {
        id: 'prom2',
        question: 'Can I take CPA exam outside the US?',
        answer: 'Yes, international Prometric centers are available in Japan, Germany, UK, UAE, Bahrain, Kuwait, Lebanon, and Brazil. More locations are being added regularly.',
        tags: ['international exam', 'outside us', 'locations'],
        priority: 'high'
      },
      {
        id: 'prom3',
        question: 'How do I schedule my CPA exam at Prometric?',
        answer: 'After receiving your NTS, visit prometric.com/cpa to schedule. You can choose date, time, and location. Book early as popular slots fill up quickly, especially in major cities.',
        tags: ['scheduling', 'nts', 'booking'],
        priority: 'high'
      },
      {
        id: 'prom4',
        question: 'What should I bring to the Prometric center?',
        answer: 'Bring two forms of valid ID (passport, driver\'s license, etc.) and your NTS. No personal items allowed in testing room - Prometric provides calculator, scratch paper, and noise-canceling headphones.',
        tags: ['id requirements', 'what to bring', 'testing rules'],
        priority: 'medium'
      },
      {
        id: 'prom5',
        question: 'Can I reschedule my CPA exam appointment?',
        answer: 'Yes, you can reschedule up to 24 hours before your appointment without penalty. Changes within 24 hours or no-shows result in forfeiture of exam fees.',
        tags: ['reschedule', 'cancellation', 'fees'],
        priority: 'medium'
      },
      {
        id: 'prom6',
        question: 'What is the CPA exam format at Prometric?',
        answer: 'All sections are computer-based with multiple choice questions, task-based simulations, and written communication tasks (BEC only). Exam duration varies: AUD/FAR (4 hours), BEC/REG (4 hours).',
        tags: ['exam format', 'computer based', 'duration'],
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

  const toggleFAQ = (faqId: string) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <AlertCircle className="w-4 h-4 text-red-500" />;
      case 'medium': return <HelpCircle className="w-4 h-4 text-yellow-500" />;
      default: return <CheckCircle className="w-4 h-4 text-green-500" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <HelpCircle className="w-4 h-4" />
            CPA-Specific FAQ
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Frequently Asked Questions
            <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent"> About CPA</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Get answers to the most common questions about CPA recognition, evaluation process, exam attempts, and Prometric testing details
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-md mx-auto relative"
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="mb-12">
          <div className="grid md:grid-cols-4 gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              
              return (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`p-6 rounded-2xl text-left transition-all duration-300 ${
                    isActive 
                      ? 'bg-white shadow-lg border-2 border-red-500' 
                      : 'bg-white shadow-md hover:shadow-lg border-2 border-gray-100'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                  <div className="mt-3 text-sm text-red-600 font-medium">
                    {getFilteredFAQs(category.id).length} questions
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* FAQ Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {categories.find(cat => cat.id === activeCategory)?.title}
            </h3>
            <p className="text-gray-600">
              {categories.find(cat => cat.id === activeCategory)?.description}
            </p>
          </div>

          <div className="space-y-4">
            {getFilteredFAQs(activeCategory).map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    {getPriorityIcon(faq.priority)}
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                  </div>
                  {openFAQ === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                <AnimatePresence>
                  {openFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 pt-2 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed mb-4">{faq.answer}</p>
                        <div className="flex flex-wrap gap-2">
                          {faq.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full"
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
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No FAQs Found</h3>
              <p className="text-gray-600">Try adjusting your search terms or browse other categories.</p>
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-md text-center"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">180+</div>
            <div className="text-gray-600">Countries Recognize CPA</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-md text-center"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">18</div>
            <div className="text-gray-600">Months Score Validity</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-md text-center"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">∞</div>
            <div className="text-gray-600">Unlimited Attempts</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-md text-center"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">300+</div>
            <div className="text-gray-600">Prometric Centers</div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-lg opacity-90 mb-6">
            Get personalized answers from our CPA experts and start your journey today
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Talk to CPA Expert
              </div>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Download CPA Guide
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CPAFAQ;