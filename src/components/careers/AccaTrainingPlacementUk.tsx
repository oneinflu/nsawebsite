'use client';

import Link from 'next/link';
import { GraduationCap, Rocket, Users } from 'lucide-react';

const AccaTrainingPlacementUk = () => {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 md:py-12">
        <header className="mb-6 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Training + Placement Support</h2>
          <p className="mt-2 text-slate-600">Clear ACCA exams and transition into audit, financial accounting, tax, and FP&A roles across the UK.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Exam Mentorship</div>
                <div className="mt-1 text-sm text-slate-700">Study plans, concept clarity, and exam strategies across ACCA papers.</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-emerald-600 text-white flex items-center justify-center shadow-md">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Job Support</div>
                <div className="mt-1 text-sm text-slate-700">Profile building, UK role targeting, and interview practice for Big 4 and corporates.</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-red-600 text-white flex items-center justify-center shadow-md">
                <Rocket className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Career Launch</div>
                <div className="mt-1 text-sm text-slate-700">Guided transition into audit, accounting, tax, FP&A, and internal audit roles.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl ring-1 ring-slate-200 p-6 bg-gradient-to-br from-slate-50 to-white">
          <blockquote className="text-slate-800">
            “ACCA opened doors for me in London’s audit market. Mentorship and structured prep made the difference.”
          </blockquote>
          <div className="mt-3 text-sm text-slate-600">— Candidate testimonial placeholder</div>

          <div className="mt-6">
            <Link
              href="/acca-course-details"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 px-5 py-3 text-white shadow hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Learn About ACCA →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccaTrainingPlacementUk;