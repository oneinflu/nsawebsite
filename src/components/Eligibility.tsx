'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Eligibility = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const eligibilityProfiles = [
    {
      id: 'students',
      title: 'Current Students',
      subtitle: 'Undergraduate & Postgraduate',
      icon: '🎓',
      criteria: [
        'Currently enrolled in any degree program',
        'Commerce, Finance, or related field preferred',
        'Minimum 60% aggregate marks',
        'Strong academic performance record'
      ],
      highlight: 'Perfect for ambitious students',
      color: 'from-red-500 to-cyan-400'
    },
    {
      id: 'professionals',
      title: 'Working Professionals',
      subtitle: 'Career Advancement Seekers',
      icon: '💼',
      criteria: [
        'Minimum 1 year work experience',
        'Finance, Accounting, or Business background',
        'Commitment to career growth',
        'Employer support preferred'
      ],
      highlight: 'Accelerate your career trajectory',
      color: 'from-purple-500 to-pink-400'
    },
    {
      id: 'graduates',
      title: 'Fresh Graduates',
      subtitle: 'Ready to Launch Careers',
      icon: '🚀',
      criteria: [
        'Graduated within last 2 years',
        'Any discipline welcome',
        'Passion for global finance',
        'Ready for intensive learning'
      ],
      highlight: 'Launch your global career',
      color: 'from-amber-500 to-orange-400'
    }
  ];

  return (
    <section 
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-red-900 to-slate-800 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-full border border-red-400/30 mb-6"
          >
            <span className="text-2xl">🎯</span>
            <span className="text-red-300 font-medium">Who Can Apply</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Are You Eligible?
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            The Super 300 Scholarship welcomes ambitious individuals from diverse backgrounds. 
            Find your profile and take the first step toward global finance excellence.
          </p>
        </motion.div>

        {/* Eligibility Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
        >
          {eligibilityProfiles.map((profile, ) => (
            <motion.div
              key={profile.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Card Background with Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              
              <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 group-hover:border-slate-600/70 transition-all duration-500 h-full">
                {/* Profile Icon & Title */}
                <div className="text-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    className="text-6xl mb-4"
                  >
                    {profile.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {profile.title}
                  </h3>
                  
                  <p className="text-slate-400 font-medium">
                    {profile.subtitle}
                  </p>
                </div>

                {/* Criteria List */}
                <div className="space-y-3 mb-6">
                  {profile.criteria.map((criterion, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.1 * idx }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-purple-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-300 text-sm leading-relaxed">
                        {criterion}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Highlight Badge */}
                <div className={`bg-gradient-to-r ${profile.color} p-[1px] rounded-xl`}>
                  <div className="bg-slate-800 rounded-xl px-4 py-3 text-center">
                    <span className="text-white font-semibold text-sm">
                      {profile.highlight}
                    </span>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Check Your Eligibility Now
            </motion.button>
            
            <span className="text-slate-400 text-sm">
              Takes less than 30 seconds
            </span>
          </div>

          <p className="text-slate-500 text-sm mt-4 max-w-md mx-auto">
            Don&apos;t see your profile? Contact our admissions team for personalized guidance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Eligibility;