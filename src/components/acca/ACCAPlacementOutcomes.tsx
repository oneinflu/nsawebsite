'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  BuildingOfficeIcon,
  PlayIcon,
  DocumentTextIcon,
  ChartBarIcon,
  
  XMarkIcon
} from '@heroicons/react/24/outline';
import TrustLogosMarquee from '../TrustLogosMarquee';
import LeadFormButton from '../LeadFormButton';

const ACCAPlacementOutcomes = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);

 
  const successStories = [
    {
      name: 'Priya Sharma',
      role: 'Senior Financial Analyst',
      company: 'Deloitte',
      salary: '₹12 LPA',
      image: '/api/placeholder/80/80',
      score: 'ACCA Qualified',
      testimonial: 'NorthStar\'s comprehensive training helped me crack Deloitte. The mock interviews were game-changing!',
      videoThumbnail: '/api/placeholder/300/200',
      location: 'Mumbai'
    },
    {
      name: 'Rahul Patel',
      role: 'Audit Associate',
      company: 'EY',
      salary: '₹10 LPA',
      image: '/api/placeholder/80/80',
      score: 'ACCA Qualified',
      testimonial: 'The placement support team guided me through every step. Got placed within 3 months of completion!',
      videoThumbnail: '/api/placeholder/300/200',
      location: 'Bangalore'
    },
    {
      name: 'Sneha Gupta',
      role: 'Tax Consultant',
      company: 'KPMG',
      salary: '₹11 LPA',
      image: '/api/placeholder/80/80',
      score: 'ACCA Qualified',
      testimonial: 'From a commerce graduate to KPMG - NorthStar made this transformation possible!',
      videoThumbnail: '/api/placeholder/300/200',
      location: 'Delhi'
    },
    {
      name: 'Arjun Singh',
      role: 'Financial Controller',
      company: 'PwC',
      salary: '₹15 LPA',
      image: '/api/placeholder/80/80',
      score: 'ACCA Qualified',
      testimonial: 'The industry connections and placement support exceeded my expectations. Highly recommend!',
      videoThumbnail: '/api/placeholder/300/200',
      location: 'Hyderabad'
    }
  ];

  const offerLetters = [
    {
      company: 'Deloitte',
      role: 'Senior Associate',
      salary: '₹12,00,000',
      student: 'Priya S.',
      date: 'March 2024'
    },
    {
      company: 'EY',
      role: 'Audit Associate',
      salary: '₹10,50,000',
      student: 'Rahul P.',
      date: 'February 2024'
    },
    {
      company: 'KPMG',
      role: 'Tax Consultant',
      salary: '₹11,55,000',
      student: 'Sneha G.',
      date: 'January 2024'
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % successStories.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const openVideoModal = (index: number) => {
    setActiveVideo(index);
    setShowVideoModal(true);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <BuildingOfficeIcon className="w-12 h-12 text-red-600 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Placement <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">Outcomes</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            🔥 Real results from real students - Your success is our proof
          </p>
        </motion.div>

       <TrustLogosMarquee />
        {/* Success Stories Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 mt-14"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Student Success Stories
          </h3>
          
          <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                {/* Student Info */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-6">
                      {successStories[activeTestimonial].name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        {successStories[activeTestimonial].name}
                      </h4>
                      <p className="text-red-600 font-medium">
                        {successStories[activeTestimonial].role}
                      </p>
                      <p className="text-gray-600">
                        {successStories[activeTestimonial].company} • {successStories[activeTestimonial].location}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                      <div className="text-2xl font-bold text-green-600">
                        {successStories[activeTestimonial].salary}
                      </div>
                      <div className="text-sm text-green-700">Package</div>
                    </div>
                    <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                      <div className="text-lg font-bold text-red-600">
                        {successStories[activeTestimonial].score}
                      </div>
                      <div className="text-sm text-red-700">Qualification</div>
                    </div>
                  </div>

                  <blockquote className="text-gray-700 text-lg italic mb-6">
                    &quot;{successStories[activeTestimonial].testimonial}&quot;
                  </blockquote>

                  <button
                    onClick={() => openVideoModal(activeTestimonial)}
                    className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-red-700 transition-colors duration-300"
                  >
                    <PlayIcon className="w-5 h-5 mr-2" />
                    Watch Video Story
                  </button>
                </div>

                {/* Video Thumbnail */}
                <div className="relative">
                  <div className="bg-gray-200 rounded-2xl aspect-video flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors duration-300"
                       onClick={() => openVideoModal(activeTestimonial)}>
                    <PlayIcon className="w-16 h-16 text-gray-600" />
                  </div>
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Video
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-300"
              >
                ←
              </button>
              <div className="flex space-x-2 items-center">
                {successStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === activeTestimonial ? 'bg-red-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-300"
              >
                →
              </button>
            </div>
          </div>
        </motion.div>

        {/* Offer Letters Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Recent Offer Letters
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offerLetters.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <DocumentTextIcon className="w-8 h-8 text-red-600 mr-3" />
                  <div>
                    <h4 className="font-bold text-gray-900">{offer.company}</h4>
                    <p className="text-sm text-gray-600">{offer.date}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-lg font-bold text-gray-900 mb-1">{offer.role}</div>
                  <div className="text-2xl font-bold text-green-600">{offer.salary}</div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Student: {offer.student}</span>
                  <ChartBarIcon className="w-5 h-5 text-gray-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Micro CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-white inline-block">
            <p className="text-lg font-medium mb-4">
              💼 I want a job like this
            </p>
           <LeadFormButton formType='download-placement-report' variant='outline' isSendOtp={true} >
              Download Placement Team
          
            </LeadFormButton>
          </div>
        </motion.div>

        {/* Video Modal */}
        <AnimatePresence>
          {showVideoModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              onClick={() => setShowVideoModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {successStories[activeVideo].name}&apos;s Success Story
                  </h3>
                  <button
                    onClick={() => setShowVideoModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <XMarkIcon className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
                
                <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center mb-4">
                  <PlayIcon className="w-20 h-20 text-gray-600" />
                </div>
                
                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    Watch how {successStories[activeVideo].name} transformed their career with NorthStar
                  </p>
                  <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-red-700 transition-colors duration-300">
                    Play Video
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ACCAPlacementOutcomes;