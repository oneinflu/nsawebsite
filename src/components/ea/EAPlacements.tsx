'use client';

import { motion } from 'framer-motion';

const companies = [
  'Deloitte',
  'PwC',
  'KPMG',
  'EY',
  'H&R Block',
  'BDO',
  'Grant Thornton',
  'RSM',
];

const EAPlacements = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">EA Placements</h2>
          <p className="text-xl text-gray-600">Common hiring firms and tax employers</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {companies.map((name, idx) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center"
            >
              <span className="text-sm font-semibold text-gray-800">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EAPlacements;