'use client';

import { HelpCircle, CheckCircle2, Globe2, MapPin, Scale } from 'lucide-react';

const faqs = [
  {
    q: 'Is ACCA recognized in the UK?',
    a: 'Yes. ACCA is widely recognized across the UK and is a common pathway into audit, financial accounting, and advisory roles.'
  },
  {
    q: 'Do international graduates need visa sponsorship for roles?',
    a: 'Many firms sponsor visas for strong candidates, especially in audit. Eligibility and policies vary by employer and role; check firm guidance.'
  },
  {
    q: 'What entry roles can ACCA candidates target?',
    a: 'Audit Associate, Assistant Accountant, Tax Associate, and FP&A Analyst are common entry points in Big 4, mid-tier, and corporates.'
  },
  {
    q: 'How competitive is the UK market in 2025?',
    a: 'Competitive but active. Demand remains strong in audit and reporting, with opportunities expanding in FP&A and internal audit.'
  },
  {
    q: 'Can I start ACCA from India and move to the UK?',
    a: 'Yes. Many candidates prepare and gain experience in India before applying to UK roles. Strong exam progress, relevant experience, and interview prep help.'
  },
];

const FaqUkForAcca = () => {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 md:py-12">
        <header className="mb-6 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Common Questions About ACCA Jobs in the UK</h2>
          <p className="mt-2 text-slate-600">Candid answers to help you plan and launch your UK career.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((item, idx) => (
            <div key={idx} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-md">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{item.q}</div>
                  <div className="mt-2 text-slate-700">{item.a}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <div className="text-sm text-slate-700">Merit-first hiring in audit and reporting roles</div>
          </div>
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm flex items-center gap-3">
            <Globe2 className="w-5 h-5 text-indigo-600" />
            <div className="text-sm text-slate-700">Global standards, mobility, and internal transfers</div>
          </div>
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm flex items-center gap-3">
            <Scale className="w-5 h-5 text-purple-600" />
            <div className="text-sm text-slate-700">IFRS and UK GAAP exposure boosts employability</div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl ring-1 ring-slate-200 p-6 bg-gradient-to-br from-slate-50 to-white">
          <div className="flex items-center gap-2 text-slate-700">
            <MapPin className="w-5 h-5 text-indigo-600" />
            <span>We support candidates targeting London, Manchester, Birmingham, Edinburgh, and Leeds.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqUkForAcca;