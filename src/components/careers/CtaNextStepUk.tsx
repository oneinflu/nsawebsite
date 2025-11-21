'use client';

import Link from 'next/link';
import LeadFormButton from '../LeadFormButton';

const CtaNextStepUk = () => {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 md:py-12">
        <div className="rounded-2xl ring-1 ring-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Get Started — Your UK ACCA Career Awaits</h2>
          <p className="mt-2 text-slate-600">ACCA gives you a direct path into audit, financial accounting, tax, and FP&A roles across the UK.</p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/acca-course-details"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 px-5 py-3 text-white shadow hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Apply for ACCA Course & Job Support
            </Link>

              <LeadFormButton formType='download-syllabus' isSendOtp={true}
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-slate-900 ring-1 ring-slate-200 shadow hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Download UK Finance Career Guide (Free PDF)
            </LeadFormButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaNextStepUk;