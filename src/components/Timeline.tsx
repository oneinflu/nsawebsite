'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);

  const timelineData = [
    {
      id: 1,
      date: "Jan 15, 2025",
      title: "Applications Open",
      description: "Super 300 Scholarship applications go live. Early applications get priority review.",
      icon: "🚀",
      status: "completed",
      details: [
        "Online application portal opens",
        "Document upload begins",
        "Early bird advantage available"
      ]
    },
    {
      id: 2,
      date: "Jan 22, 2025",
      title: "Application Deadline",
      description: "Last date to submit your application. No extensions will be provided.",
      icon: "⏰",
      status: "current",
      details: [
        "Final submission deadline",
        "Document verification starts",
        "Application review process begins"
      ]
    },
    {
      id: 3,
      date: "Jan 30, 2025",
      title: "Selection Results",
      description: "Super 300 scholarship recipients will be announced via email and SMS.",
      icon: "🎯",
      status: "upcoming",
      details: [
        "Results announced via email/SMS",
        "Scholarship confirmation letters sent",
        "Next steps communicated"
      ]
    },
    {
      id: 4,
      date: "Feb 5, 2025",
      title: "Enrollment Begins",
      description: "Selected candidates can begin their enrollment process for global finance programs.",
      icon: "🎓",
      status: "upcoming",
      details: [
        "Course enrollment opens",
        "Scholarship amount credited",
        "Learning journey begins"
      ]
    },
    {
      id: 5,
      date: "Feb 15, 2025",
      title: "Classes Commence",
      description: "Official start of your global finance education journey with expert mentorship.",
      icon: "📚",
      status: "upcoming",
      details: [
        "Live classes begin",
        "Mentor assignment",
        "Study materials provided"
      ]
    }
  ];

  // Auto-advance timeline animation
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % timelineData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView, timelineData.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'from-green-500 to-emerald-600';
      case 'current':
        return 'from-red-500 to-purple-600';
      case 'upcoming':
        return 'from-slate-400 to-slate-500';
      default:
        return 'from-slate-400 to-slate-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return '✅';
      case 'current':
        return '🔥';
      case 'upcoming':
        return '⏳';
      default:
        return '⏳';
    }
  };

  return (
    <section 
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-red-50 to-purple-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-full border border-red-200 mb-6">
            <span className="text-2xl">📅</span>
            <span className="text-red-700 font-semibold text-lg">Application Timeline</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            Your Journey to
            <span className="bg-gradient-to-r from-red-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Success</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Follow these key milestones to secure your spot among the 
            <span className="text-red-600 font-semibold"> Super 300</span> scholarship recipients.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative mb-16"
        >
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={isInView ? { width: "40%" } : { width: "0%" }}
              transition={{ duration: 2, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-red-500 to-purple-600 rounded-full"
            />
          </div>
          <div className="absolute -top-1 left-[40%] transform -translate-x-1/2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-4 h-4 bg-gradient-to-r from-red-500 to-purple-600 rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </motion.div>

        {/* Timeline Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`relative ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex-row items-center gap-8`}
            >
              {/* Timeline Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative group p-8 bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    activeStep === index ? 'ring-2 ring-red-500 bg-gradient-to-br from-red-50 to-purple-50' : ''
                  }`}
                >
                  {/* Status Badge */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r ${getStatusColor(item.status)} text-white`}>
                    <span>{getStatusIcon(item.status)}</span>
                    <span className="capitalize">{item.status}</span>
                  </div>

                  {/* Date */}
                  <div className="text-sm font-semibold text-slate-500 mb-2">{item.date}</div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{item.title}</h3>

                  {/* Description */}
                  <p className="text-slate-600 mb-6 leading-relaxed">{item.description}</p>

                  {/* Details */}
                  <div className="space-y-2">
                    {item.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={activeStep === index ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                        transition={{ duration: 0.5, delay: detailIndex * 0.1 }}
                        className="flex items-center gap-3 text-sm text-slate-600"
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                        <span>{detail}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Glow Effect for Active Step */}
                  {activeStep === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl blur-xl -z-10"
                    />
                  )}
                </motion.div>
              </div>

              {/* Timeline Icon */}
              <div className="relative flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`relative w-20 h-20 rounded-full bg-gradient-to-r ${getStatusColor(item.status)} flex items-center justify-center text-3xl shadow-lg border-4 border-white`}
                >
                  <span>{item.icon}</span>
                  
                  {/* Pulse Animation for Current Step */}
                  {item.status === 'current' && (
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-red-500"
                    />
                  )}
                </motion.div>

                {/* Connecting Line */}
                {index < timelineData.length - 1 && (
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-slate-300 to-transparent" />
                )}
              </div>

              {/* Empty Space for Alternating Layout */}
              <div className="flex-1 hidden lg:block" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl p-8 border border-red-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Don&apos;t Miss Your Chance!
            </h3>
            <p className="text-slate-600 mb-6">
              Applications close in just <span className="text-red-500 font-bold">7 days</span>. 
              Secure your spot among the Super 300 today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Apply Now - Limited Time
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;