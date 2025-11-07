'use client';

import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  VideoCameraIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  DevicePhoneMobileIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

const headerVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ExamlyPartnerSection() {
  const features = [
    { icon: ChartBarIcon, title: 'AI Performance Analytics', desc: 'Real-time progress tracking & improvement insights.' },
    { icon: VideoCameraIcon, title: 'HD Class Recordings', desc: 'Live + recorded CMA sessions on any device.' },
    { icon: AcademicCapIcon, title: 'Smart Revision Engine', desc: 'Adaptive quizzes & topic-wise test series.' },
    { icon: ShieldCheckIcon, title: 'Secure Proctored Exams', desc: 'AI invigilation to ensure exam integrity.' },
    { icon: ChatBubbleLeftRightIcon, title: 'Doubt Discussion Rooms', desc: 'Instant Q&A with mentors inside the platform.' },
    { icon: DevicePhoneMobileIcon, title: 'Mobile-First Learning', desc: 'Fully responsive, lightweight, offline support.' },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* 1️⃣ Partner Header Band */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={headerVariants}
        transition={{ duration: 0.6 }}
        className="relative mb-8 overflow-hidden rounded-2xl border border-red-100 bg-gradient-to-r from-[#F1F6FF] to-white"
      >
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-red-500 text-white font-bold">EX</div>
            <div className="leading-tight">
              <div className="font-semibold text-gray-900">
                🤝 Official Technology Partner — Examly® Learning Platform
              </div>
              <div className="text-xs sm:text-sm text-slate-600">
                NorthStar Academy is a Premium Partner of Examly, India’s most trusted learning technology used by 100+ global universities.
              </div>
            </div>
          </div>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ repeat: Infinity, duration: 2.4 }}
            className="hidden sm:block rounded-lg bg-red-50 px-3 py-1 text-xs font-medium text-red-700"
          >
            Premium Partner
          </motion.div>
        </div>
      </motion.div>

      {/* 2️⃣ Main Split Layout — Powered by Examly */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center"
      >
        {/* Left visual (45%) */}
        <div className="md:col-span-5 relative">
          <div className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-red-200/40 via-red-200/30 to-transparent blur-2xl" />
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-3">
            {/* Desktop mockup */}
            <div className="relative h-40 rounded-xl bg-gradient-to-br from-red-50 to-red50">
              <div className="absolute inset-0 m-3 rounded-lg border border-slate-200 bg-white shadow-sm">
                <div className="p-3">
                  <div className="h-3 w-24 rounded bg-slate-200" />
                  <div className="mt-3 h-20 w-full rounded-lg bg-slate-100" />
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[1,2,3].map((i) => (
                      <div key={i} className="h-4 rounded bg-slate-200" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile mockup */}
            <div className="mt-3 flex items-center justify-center gap-3">
              <div className="h-24 w-14 rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="m-2 h-16 rounded-md bg-slate-100" />
              </div>
              <div className="h-24 w-14 rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="m-2 h-16 rounded-md bg-slate-100" />
              </div>
            </div>
          </div>
        </div>

        {/* Right text (55%)) */}
        <div className="md:col-span-7">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Your CMA (US) journey runs on Examly — a world-class learning engine trusted by global educators.
          </h3>
          <p className="mt-3 text-slate-600">
            Examly is an AI-powered Learning & Assessment Platform that delivers personalized learning, progress tracking, and secure exam environments for professionals worldwide. As a premium partner, NorthStar provides all CMA (US) students exclusive access to Examly’s technology for an advanced, seamless learning experience.
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { Icon: ChartBarIcon, text: 'Adaptive study plans & analytics' },
              { Icon: VideoCameraIcon, text: 'Live + recorded classes player' },
              { Icon: ShieldCheckIcon, text: 'Secure exam practice environments' },
              { Icon: ChatBubbleLeftRightIcon, text: 'Mentor Q&A inside platform' },
            ].map(({ Icon, text }, i) => (
              <div key={i} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                <Icon className="h-4 w-4 text-red-600" />
                <span className="text-sm font-medium text-slate-700">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 3️⃣ Feature Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="flex h-40 items-start gap-3 rounded-2xl border border-slate-200 bg-[#F9FAFB] p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-teal-400 text-white">
              <f.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">{f.title}</div>
              <div className="mt-1 text-sm text-slate-600">{f.desc}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 4️⃣ Trust & Impact Bar */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-10 rounded-2xl border border-red-100 bg-[#F1F6FF] p-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {[
            { label: 'Learners worldwide on Examly', value: '1.2M+' },
            { label: 'Universities & institutes powered', value: '100+' },
            { label: 'NorthStar CMA learners on Examly', value: '55,000+' },
          ].map((stat, i) => (
            <div key={i} className="rounded-xl bg-white p-4 border border-red-100">
              <div className="text-2xl font-bold text-red-700">{stat.value}</div>
              <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 5️⃣ CTA Strip (Optional) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 p-4 text-center"
      >
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <span className="text-white text-sm font-semibold">Experience NorthStar × Examly Advantage → Get Free Access Demo</span>
          <button className="group inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-red-700 shadow-sm hover:shadow-md">
            Explore Platform
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}