'use client';

import { Globe, BadgeDollarSign, TrendingUp } from 'lucide-react';

const cards = [
  {
    title: 'Global Finance Hub',
    text:
      'UAE is home to major global finance centres: Dubai, Abu Dhabi and free-zones hosting Big 4, MNCs & regional headquarters.',
    icon: Globe,
    color: 'from-red-600 to-purple-600',
  },
  {
    title: 'Tax-Friendly & High Compensation',
    text:
      'Low personal tax + high salaries make UAE a top destination for certified accountants.',
    icon: BadgeDollarSign,
    color: 'from-amber-500 to-red-600',
  },
  {
    title: 'Rapid Growth & Demand',
    text:
      'Jobs for CPA (US) professionals are rising — as companies adopt US GAAP, IFRS and global controls in the UAE.',
    icon: TrendingUp,
    color: 'from-green-600 to-emerald-600',
  },
];

const WhyUaeForCpa = () => {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Why UAE for CPA (US) Professionals</h2>
          <p className="mt-2 text-slate-600">Three reasons the UAE is a powerful launchpad for global finance careers.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(({ title, text, icon: Icon, color }) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-white bg-gradient-to-r ${color} shadow-sm`}>
                <Icon className="w-5 h-5" />
                <span className="text-sm font-semibold">{title}</span>
              </div>
              <p className="mt-4 text-slate-700 text-sm md:text-base leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUaeForCpa;