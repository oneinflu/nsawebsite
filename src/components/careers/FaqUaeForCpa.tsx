'use client';

import { HelpCircle, Globe2, Building2, BarChart3, Plane } from 'lucide-react';

type QA = {
  icon: React.ElementType;
  question: string;
  answer: string;
  color: string;
};

const faqs: QA[] = [
  {
    icon: Plane,
    question: 'Do I need UAE residency to apply for these roles?',
    answer:
      'Not initially. Many employers hire international certified accountants remotely or relocate them once employment is finalised. Having a valid work visa/housing helps later.',
    color: 'from-teal-600 to-emerald-600',
  },
  {
    icon: Globe2,
    question: 'Is the CPA (US) qualification recognised in UAE?',
    answer:
      'Yes. Multinationals, audit firms and regional HQs in UAE value the CPA (US) due to its rigorous standards, US GAAP focus and global mobility.',
    color: 'from-indigo-600 to-purple-600',
  },
  {
    icon: Building2,
    question: 'Which sectors hire CPAs most in UAE?',
    answer:
      'Audit & consulting (Big 4), free-zone MNCs, real-estate & construction, aviation, fintech and shared-service centres are top recruiters.',
    color: 'from-red-600 to-pink-600',
  },
  {
    icon: BarChart3,
    question: 'What is the job market like?',
    answer:
      'There are hundreds of active listings for CPA professionals in UAE. With the right skills + certification, you can enter the market strongly.',
    color: 'from-amber-500 to-red-600',
  },
  {
    icon: HelpCircle,
    question: 'Can I start the CPA course from India and then move to UAE?',
    answer:
      'Absolutely. Many students complete exams and then apply for UAE roles once certified.',
    color: 'from-green-600 to-emerald-600',
  },
];

const FaqUaeForCpa = () => {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Common Questions About CPA (US) Jobs in UAE</h2>
          <p className="mt-2 text-slate-600">Aspirational yet practical guidance to help you plan your move.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map(({ icon: Icon, question, answer, color }) => (
            <div
              key={question}
              className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} text-white flex items-center justify-center shadow-md`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{question}</div>
                  <div className="mt-1 text-sm text-slate-700">{answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqUaeForCpa;