'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  UserGroupIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  
 
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';


const highlights = [
  { label: 'Unlimited Representation', desc: 'Practice before the IRS across all tax matters', icon: ShieldCheckIcon, chip: 'bg-red-100 text-red-700' },
  { label: 'Broad Client Base', desc: 'Individuals, SMBs, corporates, and non-profits', icon: UserGroupIcon, chip: 'bg-purple-100 text-purple-700' },
  { label: 'All-Year Demand', desc: 'Filing seasons + audits + advisory keep work steady', icon: CurrencyDollarIcon, chip: 'bg-green-100 text-green-700' },
  { label: 'No Degree Mandate', desc: 'PTIN + SEE exams + suitability → start fast', icon: AcademicCapIcon, chip: 'bg-slate-100 text-slate-700' },
];

const EACareerProspectus = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative blobs for on-brand feel */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-purple-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            EA Career Prospectus
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Where the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">EA</span> Credential Takes You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Strong positioning built on practice rights, broad client base, and steady demand — aligned with our on-brand Hero/CIA aesthetics.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((h, index) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                  <h.icon className="w-6 h-6 text-white" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${h.chip}`}>{h.label}</span>
              </div>
              <p className="text-sm text-gray-700">{h.desc}</p>
            </motion.div>
          ))}
        </div>


        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Build Your EA Career?</h3>
            <p className="text-gray-600 text-lg">Mentor support, mock analytics, and placement readiness — in sync with our CMA/CIA playbook</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm text-gray-600">Representation mastery</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <AcademicCapIcon className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm text-gray-600">Exam strategy + mocks</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BriefcaseIcon className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm text-gray-600">Career pathways & placements</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EACareerProspectus;