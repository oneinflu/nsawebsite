'use client';

import { motion } from 'framer-motion';
import { ShieldCheckIcon, DocumentCheckIcon, PhoneIcon } from '@heroicons/react/24/solid';
import LeadFormButton from '@/components/LeadFormButton';

const EAHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left copy */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
              <ShieldCheckIcon className="w-4 h-4 mr-2" />
              IRS Enrolled Agent (EA)
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Become an IRS Enrolled Agent
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">(EA – USA)</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">Tax Representation & Advisory Career in 6–12 Months</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The highest credential awarded by the IRS. Demonstrate expertise in U.S. taxation and represent taxpayers before the IRS.
            </p>

            {/* CTAs */}
            <div className="space-y-4">
              <LeadFormButton
                formType="general"
                isSendOtp={true}
                courseId="EA"
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center"
              >
                <PhoneIcon className="w-6 h-6 mr-3" />
                Book Free Counselling
              </LeadFormButton>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  type="button"
                  onClick={() => {
                    const target = document.getElementById('eligibility');
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    } else {
                      window.location.hash = 'eligibility';
                    }
                  }}
                  aria-label="Scroll to EA eligibility section"
                  className="bg-white text-red-600 border-2 border-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-red-50 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <DocumentCheckIcon className="w-5 h-5 mr-2" />
                  Check Eligibility
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div variants={itemVariants} className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">EA Credential</h3>
              <div className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold inline-block">
                Tax Excellence
              </div>
            </div>
            <div className="space-y-2 text-left">
              <div className="flex justify-between"><span className="font-medium text-gray-700">Representation</span><span className="text-gray-600">Practice & Procedure</span></div>
              <div className="flex justify-between"><span className="font-medium text-gray-700">Individual Tax</span><span className="text-gray-600">Part 1</span></div>
              <div className="flex justify-between"><span className="font-medium text-gray-700">Business Tax</span><span className="text-gray-600">Part 2</span></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EAHero;