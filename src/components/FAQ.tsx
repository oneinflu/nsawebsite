'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('')
  const [openCategory, setOpenCategory] = useState<string | null>('Certifications')
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  const faqCategories = [
    {
      category: 'Certifications',
      icon: '🏆',
      questions: [
        {
          q: 'Is CMA/CPA/ACCA globally recognized?',
          a: 'Yes, absolutely. CMA (US), CPA (US), and ACCA (UK) are the most prestigious finance certifications worldwide, recognized in 100+ countries including USA, UK, Canada, Australia, UAE, Singapore, and India.'
        },
        {
          q: 'Which certification should I choose for my career goals?',
          a: 'CMA is ideal for management accounting and corporate finance roles. CPA opens doors to public accounting, audit, and tax advisory. ACCA provides the broadest global recognition for all finance roles. Our counselors help you choose based on your specific career aspirations.'
        }
      ]
    },
    {
      category: 'Eligibility',
      icon: '✅',
      questions: [
        {
          q: 'Can B.Com students pursue CPA/CMA/ACCA?',
          a: 'Yes! B.Com graduates are eligible for all three certifications. For CPA, you need 150 credit hours (which B.Com typically provides). CMA requires a bachelor\'s degree in any field. ACCA can be started even during graduation.'
        },
        {
          q: 'What if I don\'t have a commerce background?',
          a: 'No problem! Students from any background - Engineering, Science, Arts - can pursue these certifications. We provide foundation courses to bridge any knowledge gaps and ensure you\'re fully prepared.'
        }
      ]
    },
    {
      category: 'Exam Process',
      icon: '📝',
      questions: [
        {
          q: 'How are exams scheduled at Prometric centers?',
          a: 'You can schedule your exams online through the official websites (IMA for CMA, AICPA for CPA, ACCA for ACCA). Prometric centers are available in major Indian cities. You can choose your preferred date, time, and location based on availability.'
        },
        {
          q: 'What happens if I fail an exam section?',
          a: 'You can retake individual sections without repeating passed sections. There\'s a waiting period (typically 30-90 days) between attempts. Our mentorship includes focused preparation for retakes with personalized study plans.'
        }
      ]
    },
    {
      category: 'Fees & EMI',
      icon: '💳',
      questions: [
        {
          q: 'Can I start with partial payment?',
          a: 'Yes! We offer flexible EMI options starting from ₹2,499/month. You can also apply for scholarships (merit-based up to 30% off) and need-based financial assistance. No hidden fees - everything is transparent.'
        },
        {
          q: 'Are there any additional costs beyond course fees?',
          a: 'Course fees cover all learning materials, live classes, mentorship, and placement support. Additional costs include official exam fees (paid directly to IMA/AICPA/ACCA) and Prometric center charges, which are standard globally.'
        }
      ]
    },
    {
      category: 'Placements',
      icon: '🎯',
      questions: [
        {
          q: 'Are Big 4 interviews guaranteed?',
          a: 'We provide placement support and have partnerships with leading firms including Big 4. While we can\'t guarantee specific company placements, our track record shows 85%+ placement success with top-tier companies for qualified candidates.'
        },
        {
          q: 'What salary can I expect after certification?',
          a: 'Freshers typically start at ₹8-15 LPA, experienced professionals see 40-100% salary jumps. In international markets, salaries range from $60,000-$120,000+ annually. Your earning potential grows significantly with experience and specialization.'
        }
      ]
    },
    {
      category: 'Learning',
      icon: '📚',
      questions: [
        {
          q: 'What if I miss live classes?',
          a: 'All live classes are recorded and available within 24 hours. You also get lifetime access to all recordings. Our learning management system tracks your progress and sends personalized catch-up plans if you fall behind.'
        },
        {
          q: 'How much time should I dedicate daily?',
          a: 'We recommend 2-3 hours daily for optimal progress. Our study planners are designed for working professionals and students. The program is flexible - you can adjust pace based on your schedule while maintaining quality preparation.'
        }
      ]
    }
  ]

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-red-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Questions? We have clear answers.
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Everything you need to know about global finance certifications
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Type anything… eligibility, attempts, fees…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-red-500 focus:ring-4 focus:ring-red-100 focus:outline-none transition-all duration-300"
            />
            <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-4">
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => setOpenCategory(openCategory === category.category ? null : category.category)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-4">{category.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                  <span className="ml-3 bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                    {category.questions.length} questions
                  </span>
                </div>
                <motion.svg
                  animate={{ rotate: openCategory === category.category ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              {/* Questions */}
              <AnimatePresence>
                {openCategory === category.category && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-100"
                  >
                    {category.questions.map((faq, questionIndex) => (
                      <div key={questionIndex} className="border-b border-gray-50 last:border-b-0">
                        <button
                          onClick={() => setOpenQuestion(openQuestion === `${category.category}-${questionIndex}` ? null : `${category.category}-${questionIndex}`)}
                          className="w-full px-8 py-5 text-left hover:bg-gray-25 transition-colors duration-200"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="text-lg font-semibold text-gray-800 pr-4">{faq.q}</h4>
                            <motion.svg
                              animate={{ rotate: openQuestion === `${category.category}-${questionIndex}` ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="w-5 h-5 text-gray-400 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </motion.svg>
                          </div>
                        </button>
                        
                        <AnimatePresence>
                          {openQuestion === `${category.category}-${questionIndex}` && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="px-8 pb-5"
                            >
                              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Quick Help Prompt */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-red-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Didn&apos;t find what you need?</h3>
            <p className="text-red-100 mb-6 text-lg">
              You won&apos;t get stuck. We&apos;re here to help with personalized guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/919876543210?text=Hi! I have some questions about the certification programs."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="tel:+919876543210"
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center border border-white/30"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}