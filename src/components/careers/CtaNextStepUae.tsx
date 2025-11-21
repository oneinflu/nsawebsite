'use client';

import { ArrowRight, FileDown } from 'lucide-react';
import Link from 'next/link';
import LeadFormButton from '../LeadFormButton';

const CtaNextStepUae = () => {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 md:py-12">
        <div className="rounded-2xl ring-1 ring-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Get Started — Your UAE Finance Career Awaits</h2>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/cpa-course-details"
              className="text-sm md:text-md inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 px-5 py-3 text-white shadow hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Apply for CPA (US) Course & Job Support
              <ArrowRight className="h-4 w-4" />
            </Link>

              <LeadFormButton formType='download-syllabus' isSendOtp={true}
              className="text-sm md:text-md inline-flex items-center gap-2 rounded-xl px-5 py-3 text-slate-800 ring-1 ring-slate-300 hover:bg-slate-50"
            >
              <FileDown className="h-4 w-4" />
              Download UAE Finance Career Guide (Free PDF)
            </LeadFormButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaNextStepUae;