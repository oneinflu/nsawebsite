'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import LeadFormButton from './LeadFormButton'
import type { FormType } from './lead-form/formConfigs'

export default function LeadMagnet() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 2,
    minutes: 17,
    seconds: 45
  })

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  type LeadMagnetItem = {
    title: string;
    description: string;
    icon: string;
    cta: string;
    type: FormType;
    accent: string; // tailwind gradient classes for the top accent bar
  }

  const leadMagnets: LeadMagnetItem[] = [
    {
      title: 'Free Career Webinar',
      description: 'Live session on global finance career opportunities',
      icon: '🎥',
      cta: 'Register Now',
      type: 'book-webinar',
      accent: 'from-red-500 to-rose-500'
    },
    {
      title: 'Download CMA/CPA/ACCA Syllabus PDFs',
      description: 'Complete syllabus breakdown and study materials',
      icon: '📚',
      cta: 'Unlock for Free',
      type: 'download-syllabus',
      accent: 'from-red-500 to-red-600'
    },
    {
      title: 'Mock Test Access',
      description: 'Practice with real exam-style questions',
      icon: '📝',
      cta: 'Try Now',
      type: 'general',
      accent: 'from-rose-500 to-red-600'
    },
    {
      title: 'Placement & Salary Report 2025',
      description: 'Latest industry insights and salary benchmarks',
      icon: '📊',
      cta: 'Get Report',
      type: 'download-placement-report',
      accent: 'from-red-600 to-orange-500'
    }
  ]

  const whatsappNumber = "+919876543210" // Replace with actual number

  // Playful gradient backgrounds for cards
  const cardGradients = [
    'from-indigo-600 via-violet-500 to-fuchsia-500',
    'from-sky-500 via-cyan-500 to-teal-500',
    'from-amber-500 via-orange-500 to-red-500',
    'from-emerald-500 via-green-500 to-lime-500'
  ]

  return (
    <section className="py-20 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-sm font-medium mb-4">Resources</div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Helpful Tools To Start Your Finance Journey</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">Access webinars, study material, mock tests, and industry reports designed to help you make confident decisions.</p>
        </motion.div>

        {/* Lead Magnet Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14 items-stretch"
        >
          {leadMagnets.map((magnet, index) => (
            <motion.div
              key={magnet.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className={`relative overflow-hidden rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group h-full flex flex-col bg-gradient-to-br ${cardGradients[index % cardGradients.length]}`}
            >
              {/* Top accent bar */}
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${magnet.accent}`} />
              {/* Pattern overlay for fun */}
              <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, white 0%, transparent 40%)' }} />

              <div className="text-center px-6 pt-6 pb-4 flex-1 flex flex-col items-center text-white">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {magnet.icon}
                </div>
                <h3 className="text-lg font-semibold mb-1 drop-shadow-md">
                  {magnet.title}
                </h3>
                <p className="text-white/85 text-sm mb-5 leading-relaxed max-w-[20ch] drop-shadow">
                  {magnet.description}
                </p>
                <LeadFormButton formType={magnet.type} variant='primary' className="mt-auto">
                  {magnet.cta} →
                </LeadFormButton>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Support strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl p-6 mb-14 bg-white border border-gray-200"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold">Need help deciding?</h3>
              <p className="text-gray-600">Talk to a mentor and get personalised guidance.</p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={`tel:+919876543210`}
                className="inline-flex items-center px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call us
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in learning more about global finance career opportunities.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

        {/* Countdown Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl p-6 mb-14 bg-white border border-gray-200 text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <span className="text-2xl mr-3">🔥</span>
            <h3 className="text-2xl font-semibold">Next Batch: Jan 15 — Only 13 seats left</h3>
          </div>
          
          <div className="flex justify-center items-center space-x-4 mb-4">
            <div className="bg-gray-100 rounded-lg px-4 py-2 min-w-[60px]">
              <div className="text-2xl font-semibold">{countdown.days.toString().padStart(2, '0')}</div>
              <div className="text-xs text-gray-600">DAYS</div>
            </div>
            <div className="text-2xl text-gray-400">:</div>
            <div className="bg-gray-100 rounded-lg px-4 py-2 min-w-[60px]">
              <div className="text-2xl font-semibold">{countdown.hours.toString().padStart(2, '0')}</div>
              <div className="text-xs text-gray-600">HOURS</div>
            </div>
            <div className="text-2xl text-gray-400">:</div>
            <div className="bg-gray-100 rounded-lg px-4 py-2 min-w-[60px]">
              <div className="text-2xl font-semibold">{countdown.minutes.toString().padStart(2, '0')}</div>
              <div className="text-xs text-gray-600">MINS</div>
            </div>
            <div className="text-2xl text-gray-400">:</div>
            <div className="bg-gray-100 rounded-lg px-4 py-2 min-w-[60px]">
              <div className="text-2xl font-semibold">{countdown.seconds.toString().padStart(2, '0')}</div>
              <div className="text-xs text-gray-600">SECS</div>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4">Lock your mentorship spot now.</p>
          
          <LeadFormButton formType="general" variant="primary">
            Reserve Your Seat Now
          </LeadFormButton>
        </motion.div>

        {/* Final CTA Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-12 border border-gray-200">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Book your free counselling session and take the first step towards your global finance career.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <LeadFormButton formType="general" variant="primary" className="px-8 py-4 text-lg">
                Book Free Counselling — Reserve Your Seat →
              </LeadFormButton>
            </div>

            <p className="text-sm text-gray-500">✅ No spam. Pure guidance.</p>
          </div>
        </motion.div>
      </div>
      {/* Local modal removed; using LeadFormButton for all flows */}
    </section>
  )
}