'use client';

import { motion } from 'framer-motion';
import { ShieldCheckIcon, AcademicCapIcon, BuildingOfficeIcon } from '@heroicons/react/24/solid';

const comparisons = [
  {
    title: 'EA vs CPA',
    points: [
      'EA: IRS-granted; federal tax specialization',
      'CPA: State-licensed; broader accounting & audit',
      'EA: 3-part SEE exams; CPA: 4-part exam',
      'EA: Nationwide representation rights; CPA varies by state',
    ],
    color: 'from-red-500 to-purple-600',
    icon: ShieldCheckIcon,
  },
  {
    title: 'EA vs CMA',
    points: [
      'EA: Tax practice & representation',
      'CMA: Management accounting & corporate finance',
      'EA: Tax clients & advisory; CMA: FP&A, costing roles',
      'EA: IRS Circular 230 ethics; CMA: IMA ethics',
    ],
    color: 'from-green-500 to-emerald-600',
    icon: AcademicCapIcon,
  },
  {
    title: 'Who hires EAs?',
    points: [
      'Tax advisory firms & CPA firms',
      'SMBs & corporates needing tax experts',
      'Consultancies & payroll providers',
      'Independent practice serving individuals & businesses',
    ],
    color: 'from-orange-500 to-red-600',
    icon: BuildingOfficeIcon,
  },
];

const EAComparison = () => {
  return (
    <section className="py-10 sm:py-15 bg-gradient-to-br from-slate-50 via-white to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:mb-12 mb-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900">EA Comparison</h2>
          <p className="text-base sm:text-xl text-slate-600 mt-4">See how the EA credential stacks up against CPA and CMA</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisons.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow border border-gray-200"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${card.color} rounded-xl flex items-center justify-center mb-4`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {card.points.map((p, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2"></span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EAComparison;