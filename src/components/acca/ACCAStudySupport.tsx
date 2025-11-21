'use client';

import { motion } from 'framer-motion';
import {
  PlayIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  StarIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import LeadFormButton from '../LeadFormButton';

const ACCAStudySupport = () => {
  const features = [
    {
      title: 'Live + Recorded Classes',
      description: 'Interactive live sessions with expert faculty plus 24/7 access to recorded lectures',
      icon: PlayIcon,
      color: 'from-red-500 to-cyan-500',
      bgColor: 'from-red-50 to-cyan-50',
      visual: (
        <div className="relative">
          <div className="bg-gray-900 rounded-lg p-4 shadow-lg">
            <div className="flex items-center mb-3">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="bg-red-600 rounded p-3 mb-2">
              <div className="flex items-center justify-center">
                <PlayIcon className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex justify-between items-center text-white text-xs">
              <span>00:45:32</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              </div>
              <span>1.5x</span>
            </div>
          </div>
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            LIVE
          </div>
        </div>
      ),
      stats: ['500+ Hours Content', '98% Student Satisfaction', 'HD Quality Videos']
    },
    {
      title: 'Doubt Classes & Telegram Support',
      description: 'Dedicated doubt clearing sessions and instant support via our active Telegram community',
      icon: ChatBubbleLeftRightIcon,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      visual: (
        <div className="bg-white rounded-lg p-4 shadow-lg border">
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                S
              </div>
              <div className="flex-1">
                <div className="bg-gray-100 rounded-lg p-2 text-sm">
                  How to calculate NPV in FM paper?
                </div>
                <div className="text-xs text-gray-500 mt-1">2:30 PM</div>
              </div>
            </div>
            <div className="flex items-start justify-end">
              <div className="flex-1 text-right">
                <div className="bg-red-500 text-white rounded-lg p-2 text-sm inline-block">
                  Use discount rate to find present value...
                </div>
                <div className="text-xs text-gray-500 mt-1">Faculty</div>
              </div>
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold ml-3">
                F
              </div>
            </div>
          </div>
        </div>
      ),
      stats: ['24/7 Support', '2,00,000+ Active Students', '< 2 Min Response']
    },
    {
      title: 'Mock Tests & Analytics Engine',
      description: 'Comprehensive practice tests with detailed performance analytics and improvement suggestions',
      icon: ChartBarIcon,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      visual: (
        <div className="bg-white rounded-lg p-4 shadow-lg border">
          <div className="mb-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Overall Score</span>
              <span className="text-lg font-bold text-green-600">78%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-red-50 rounded p-2">
              <div className="text-lg font-bold text-red-600">85%</div>
              <div className="text-xs text-gray-600">Accuracy</div>
            </div>
            <div className="bg-yellow-50 rounded p-2">
              <div className="text-lg font-bold text-yellow-600">72%</div>
              <div className="text-xs text-gray-600">Speed</div>
            </div>
            <div className="bg-green-50 rounded p-2">
              <div className="text-lg font-bold text-green-600">A</div>
              <div className="text-xs text-gray-600">Grade</div>
            </div>
          </div>
        </div>
      ),
      stats: ['1000+ Questions', 'AI-Powered Analytics', 'Exam Pattern Match']
    },
    {
      title: 'Student Success Mentor',
      description: 'Personal mentorship from industry experts and successful ACCA professionals',
      icon: UserGroupIcon,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      visual: (
        <div className="bg-white rounded-lg p-4 shadow-lg border">
          <div className="flex items-center mb-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
              AM
            </div>
            <div className="ml-3">
              <div className="font-semibold text-sm">Arjun Mehta</div>
              <div className="text-xs text-gray-600">ACCA, Big 4 Senior Manager</div>
            </div>
            <div className="ml-auto">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="bg-gray-50 rounded p-2 text-sm mb-2">
            &quot;Focus on FR and AA this month. Your progress is excellent!&quot;
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>Next call: Tomorrow 6 PM</span>
            <span>⭐ 4.9/5</span>
          </div>
        </div>
      ),
      stats: ['1:1 Mentorship', 'Industry Experts', 'Career Guidance']
    }
  ];

  return (
    <section className="py-8 md:py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <ShieldCheckIcon className="w-8 h-8 md:w-12 md:h-12 text-red-600 mr-4" />
            <h2 className="text-2xl md:text-5xl font-bold text-gray-900">
              NorthStar <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">Experience</span>
            </h2>
          </div>
          <p className="text-md md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive study support designed for ACCA success
          </p>

          {/* Promise Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg"
          >
            <HeartIcon className="w-6 h-6 mr-2" />
            <span className='text-sm md:text-lg'>🔥 &quot;No Student Left Behind&quot; Promise</span>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${feature.bgColor} rounded-3xl p-4 md:p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300`}
            >
              {/* Feature Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mr-6`}>
                  <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-md md:text-2xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-md text-gray-600">{feature.description}</p>
                </div>
              </div>

              {/* Visual Preview */}
              <div className="mb-6">
                {feature.visual}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                {feature.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center">
                    <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-200">
                      <div className="text-xs md:text-sm font-medium text-gray-700">{stat}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-4 md:p-12 shadow-lg border border-gray-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Students Choose NorthStar
            </h3>
            <p className="text-gray-600 text-sm md:text-lg">
              Proven track record of ACCA success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-red-600 mb-2">92%</div>
              <div className="text-sm md:text-lg text-gray-700 font-medium">Pass Rate</div>
              <div className="text-xs md:text-sm text-gray-500">Above industry average</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-green-600 mb-2">5000+</div>
              <div className="text-sm md:text-lg text-gray-700 font-medium">Students Trained</div>
              <div className="text-xs md:text-sm text-gray-500">Across 50+ countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-purple-600 mb-2">4.9</div>
              <div className="text-xs md:text-sm md:text-lg text-gray-700 font-medium">Student Rating</div>
              <div className="flex justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className={`w-4 h-4 ${i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-sm md:text-lg text-gray-700 font-medium">Job Placement</div>
              <div className="text-xs md:text-sm text-gray-500">Within 18 months</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-red-500 rounded-3xl p-4 md:p-12 text-white">
            <h3 className="text-xl md:text-3xl font-bold mb-4">
              Ready to Experience the NorthStar Difference?
            </h3>
            <p className="text-red-100 text-md md:text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of successful ACCA students who chose NorthStar for their journey
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LeadFormButton formType='talk-to-our-counseller' variant='outline' isSendOtp={true} >Talk to counsellor</LeadFormButton>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ACCAStudySupport;