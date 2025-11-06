'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  DocumentCheckIcon, 
  CheckCircleIcon, 
  
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const ACCAExemptionsChecker = () => {
  const [selectedQualification, setSelectedQualification] = useState('');
  const [experience, setExperience] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadFormData, setLeadFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const qualifications = [
    { value: 'bcom', label: 'B.Com', exemptions: 3 },
    { value: 'bba', label: 'BBA', exemptions: 2 },
    { value: 'ca_inter', label: 'CA Inter', exemptions: 5 },
    { value: 'cs_inter', label: 'CS Inter', exemptions: 4 },
    { value: 'cma_inter', label: 'CMA Inter', exemptions: 4 },
    { value: 'mba_finance', label: 'MBA (Finance)', exemptions: 4 },
    { value: 'mcom', label: 'M.Com', exemptions: 4 },
    { value: 'ca_final', label: 'CA Final', exemptions: 9 },
    { value: 'cs_final', label: 'CS Final', exemptions: 7 },
    { value: 'cma_final', label: 'CMA Final', exemptions: 8 },
    { value: 'other', label: 'Other', exemptions: 0 }
  ];

  const experienceOptions = [
    { value: '0', label: '0 years' },
    { value: '1-2', label: '1-2 years' },
    { value: '3-5', label: '3-5 years' },
    { value: '5+', label: '5+ years' }
  ];

  const getExemptionResult = () => {
    const qualification = qualifications.find(q => q.value === selectedQualification);
    if (!qualification) return null;

    let exemptions = qualification.exemptions;
    
    // Add experience-based exemptions
    if (experience === '3-5') exemptions += 1;
    if (experience === '5+') exemptions += 2;

    // Cap at 9 (maximum possible exemptions)
    exemptions = Math.min(exemptions, 9);

    const remainingPapers = 13 - exemptions; // Total 13 papers in ACCA
    const startingLevel = exemptions >= 3 ? (exemptions >= 6 ? 'Strategic Professional' : 'Applied Skills') : 'Applied Knowledge';

    return {
      exemptions,
      remainingPapers,
      startingLevel,
      qualification: qualification.label
    };
  };

  const handleCheckExemptions = () => {
    if (selectedQualification && experience) {
      setShowResult(true);
    }
  };

  const handleGetReport = () => {
    setShowLeadForm(true);
  };

  const handleSubmitLeadForm = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Lead form submitted:', leadFormData);
    setShowLeadForm(false);
    // Show success message or redirect
  };

  const result = getExemptionResult();

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <DocumentCheckIcon className="w-12 h-12 text-blue-600 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              ACCA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Exemptions Checker</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how many papers you can skip and fast-track your ACCA journey
          </p>
        </motion.div>

        {/* Main Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100"
        >
          <AnimatePresence mode="wait">
            {!showResult ? (
              /* Input Form */
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                {/* Qualification Selection */}
                <div>
                  <label className="block text-lg font-bold text-gray-900 mb-4">
                    Your Current Qualification
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {qualifications.map((qual) => (
                      <motion.button
                        key={qual.value}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedQualification(qual.value)}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                          selectedQualification === qual.value
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-blue-300 text-gray-700'
                        }`}
                      >
                        <div className="font-medium">{qual.label}</div>
                        <div className="text-sm text-gray-500">{qual.exemptions} exemptions</div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Experience Selection */}
                <div>
                  <label className="block text-lg font-bold text-gray-900 mb-4">
                    Relevant Work Experience
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {experienceOptions.map((exp) => (
                      <motion.button
                        key={exp.value}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setExperience(exp.value)}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                          experience === exp.value
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-200 hover:border-purple-300 text-gray-700'
                        }`}
                      >
                        <div className="font-medium">{exp.label}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Check Button */}
                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCheckExemptions}
                    disabled={!selectedQualification || !experience}
                    className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                      selectedQualification && experience
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl hover:shadow-2xl'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Check My Exemptions
                    <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              /* Results Display */
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center space-y-8"
              >
                {/* Success Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto"
                >
                  <CheckCircleIcon className="w-12 h-12 text-white" />
                </motion.div>

                {/* Result Text */}
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Great News! 🎉
                  </h3>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200">
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      You get {result?.exemptions} exemptions!
                    </div>
                    <div className="text-lg text-gray-700">
                      Start at <span className="font-bold text-blue-600">{result?.startingLevel}</span> level
                    </div>
                  </div>
                </div>

                {/* Detailed Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <div className="text-3xl font-bold text-blue-600">{result?.exemptions}</div>
                    <div className="text-gray-700">Papers Exempted</div>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                    <div className="text-3xl font-bold text-purple-600">{result?.remainingPapers}</div>
                    <div className="text-gray-700">Papers to Study</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <div className="text-3xl font-bold text-green-600">2-4</div>
                    <div className="text-gray-700">Years to Complete</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleGetReport}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 w-full md:w-auto"
                  >
                    Get Detailed Exemption Report
                    <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
                  </motion.button>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="flex items-center justify-center text-blue-600 hover:text-blue-700 font-medium">
                      <PhoneIcon className="w-5 h-5 mr-2" />
                      Call for Free Counselling
                    </button>
                    <button className="flex items-center justify-center text-green-600 hover:text-green-700 font-medium">
                      <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                      WhatsApp Consultation
                    </button>
                  </div>
                </div>

                {/* Reset Button */}
                <button
                  onClick={() => {
                    setShowResult(false);
                    setSelectedQualification('');
                    setExperience('');
                  }}
                  className="text-gray-500 hover:text-gray-700 font-medium"
                >
                  Check for Different Qualification
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Lead Form Modal */}
        <AnimatePresence>
          {showLeadForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={() => setShowLeadForm(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-3xl p-8 max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Get Your Detailed Report
                </h3>
                
                <form onSubmit={handleSubmitLeadForm} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={leadFormData.name}
                      onChange={(e) => setLeadFormData({...leadFormData, name: e.target.value})}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={leadFormData.phone}
                      onChange={(e) => setLeadFormData({...leadFormData, phone: e.target.value})}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={leadFormData.email}
                      onChange={(e) => setLeadFormData({...leadFormData, email: e.target.value})}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setShowLeadForm(false)}
                      className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg"
                    >
                      Get Report
                    </button>
                  </div>
                </form>
                
                <div className="mt-6 flex justify-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <EnvelopeIcon className="w-4 h-4 mr-1" />
                    Email
                  </div>
                  <div className="flex items-center">
                    <ChatBubbleLeftRightIcon className="w-4 h-4 mr-1" />
                    WhatsApp
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ACCAExemptionsChecker;