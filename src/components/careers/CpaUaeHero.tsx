'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, ArrowRight, BadgeCheck } from 'lucide-react';
import LeadFormButton from '../LeadFormButton';

const CpaUaeHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-red-50">
      {/* Decorative background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-red-100 blur-3xl opacity-40" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-purple-100 blur-3xl opacity-40" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div className="space-y-6">
            {/* Stat badge */}
            <div className="inline-flex items-center px-4 py-2 bg-red-50 border border-red-200 rounded-full text-red-800 text-sm font-medium shadow-sm">
              <BadgeCheck className="w-4 h-4 mr-2" />
              300+ active CPA (US) job openings in UAE right now
            </div>

            {/* Headline */}
            <h1 className="text-2xl md:text-5xl font-bold text-slate-900 leading-tight">
              Launch Your Global Career:
              <span className="block">
                <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">CPA (US) Jobs in UAE</span> Await
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-sm text-center md:text-left md:text-xl text-slate-700 leading-relaxed">
              From Dubai to Abu Dhabi — earn top salaries, work with global firms, and leverage your CPA (US) qualification for Middle East finance roles.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <LeadFormButton
                courseId="CPA"
                className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </LeadFormButton>
            </div>
          </div>

          {/* Visual right: city chips + stat card */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-purple-600 text-white flex items-center justify-center shadow-md">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-600">Finance & Accounting Roles</div>
                  <div className="font-bold text-slate-900">Big 4 and Global Firms</div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { city: 'Dubai', color: 'from-red-500 to-red-600' },
                  { city: 'Abu Dhabi', color: 'from-purple-500 to-purple-600' },
                  { city: 'Sharjah', color: 'from-amber-500 to-red-600' },
                ].map((c) => (
                  <span
                    key={c.city}
                    className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${c.color} text-white shadow-sm`}
                  >
                    <MapPin className="w-4 h-4" /> {c.city}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs text-slate-600">Average Salaries</div>
                  <div className="font-bold text-slate-900">AED 18k–45k/mo</div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs text-slate-600">Visa & Mobility</div>
                  <div className="font-bold text-slate-900">Global Transfers</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CpaUaeHero;