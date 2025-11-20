'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon, ShieldCheckIcon, IdentificationIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { ChatBubbleLeftRightIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import LeadFormButton from '@/components/LeadFormButton';

const EAEligibility = () => {
  const facts = [
    {
      icon: IdentificationIcon,
      title: 'PTIN Required',
      description: 'Obtain a Preparer Tax Identification Number (PTIN) from the IRS',
      color: 'text-red-600 bg-red-100',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Suitability & Background',
      description: 'Pass IRS suitability checks after completing exams',
      color: 'text-red-600 bg-red-100',
    },
    {
      icon: AcademicCapIcon,
      title: 'No Degree Mandatory',
      description: 'EA pathway is open; tax knowledge and ethics are key',
      color: 'text-purple-600 bg-purple-100',
    },
  ];

  return (
    <section id="eligibility" className="py-10 sm:py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircleIcon className="w-4 h-4 mr-2" />
            Eligibility Made Simple
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            EA Eligibility &
            <span className="block text-red-600 mt-2">Registration Requirements</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Clear path to becoming an IRS Enrolled Agent. Start with PTIN, pass the SEE exams, and complete suitability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 md:p-12 text-white lg:mb-16 mb-8"
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Key Requirements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {facts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20 text-white"
                >
                  <fact.icon className="w-8 h-8 text-white mb-4 mx-auto" />
                  <h4 className="font-bold text-white mb-2">{fact.title}</h4>
                  <p className="text-white/80 text-sm">{fact.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-200">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Step 1: Get PTIN</h4>
            <p className="text-gray-600">Register and obtain your PTIN to prepare returns.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-200">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Step 2: Pass SEE (3 Parts)</h4>
            <p className="text-gray-600">Clear Individual Tax, Business Tax, and Representation.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-200">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Step 3: Suitability</h4>
            <p className="text-gray-600">Complete IRS suitability; maintain CE for renewal.</p>
          </div>
        </div>

        {/* CTA Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 relative overflow-hidden rounded-2xl p-8 text-white shadow border border-gray-200 bg-gradient-to-br from-red-600 to-red-600"
        >
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <CheckCircleIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Eligibility Quick Check</h3>
            </div>
            <p className="text-red-100 mb-6">
              Unsure if you qualify? Get a quick eligibility assessment and guidance on next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <LeadFormButton
                formType="general"
                isSendOtp={true}
                courseId="EA"
                variant="primary"
                className="inline-flex items-center gap-2 justify-center"
              >
                <DocumentArrowDownIcon className="w-5 h-5" />
                Check Eligibility
              </LeadFormButton>
              <LeadFormButton
                formType="general"
                isSendOtp={true}
                variant="outline"
                className="inline-flex items-center gap-2 justify-center"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5" />
                Talk to an Expert
              </LeadFormButton>
            </div>
            <div className="mt-3 text-xs text-red-100">
              ✅ Fast response • Personalized advice • IRS-compliant guidance
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EAEligibility;