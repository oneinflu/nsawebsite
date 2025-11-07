'use client';

import { HelpCircle, CheckCircle2, Globe2, MapPin, GraduationCap } from 'lucide-react';

const faqs = [
  {
    q: 'Is CMA (US) useful in India?',
    a: 'Yes. CMA (US) is valued across MNCs, GBS centres, and Indian HQs for FP&A, cost accounting, controls, and reporting roles.'
  },
  {
    q: 'Do I need to relocate to get roles?',
    a: 'Most roles are centred around Mumbai, Bengaluru, Gurugram, Pune, and Hyderabad. Remote and hybrid options exist in GBS centres.'
  },
  {
    q: 'What sectors hire CMA (US) in India?',
    a: 'Manufacturing, IT services, e‑commerce, BFSI, pharma, automotive, and consumer goods — with strong FP&A and cost needs.'
  },
  {
    q: 'How does CMA (US) compare with Indian credentials?',
    a: 'CMA (US) complements Indian qualifications by focusing on management accounting, performance management, and decision support.'
  },
  {
    q: 'Can I start CMA (US) from India while studying/working?',
    a: 'Yes. Many candidates prepare alongside jobs or university. With a structured plan and mentorship, you can clear Parts 1 & 2 efficiently.'
  },
];

const FaqIndiaForCma = () => {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Common Questions About CMA (US) Jobs in India</h2>
          <p className="mt-2 text-slate-600">Direct, practical answers to help you plan your path.</p>
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
            <div className="text-sm text-slate-700">Merit-first hiring in FP&A and cost roles</div>
          </div>
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm flex items-center gap-3">
            <Globe2 className="w-5 h-5 text-indigo-600" />
            <div className="text-sm text-slate-700">Global standards and internal mobility opportunities</div>
          </div>
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm flex items-center gap-3">
            <GraduationCap className="w-5 h-5 text-purple-600" />
            <div className="text-sm text-slate-700">Structured mentorship to clear CMA (US) quickly</div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl ring-1 ring-slate-200 p-6 bg-gradient-to-br from-slate-50 to-white">
          <div className="flex items-center gap-2 text-slate-700">
            <MapPin className="w-5 h-5 text-indigo-600" />
            <span>Want local guidance? We support candidates in Mumbai, Bengaluru, Gurugram, Pune, and Hyderabad.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqIndiaForCma;