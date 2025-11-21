/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  UserGroupIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  PlayIcon,
  StarIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';
import LeadFormButton from '../LeadFormButton';

const CIATrainingExperience = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const trainingFeatures = [
    {
      id: 'mentorship',
      title: 'Live Mentorship',
      description: 'Personal guidance from CIA-certified professionals',
      icon: UserGroupIcon,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      emotion: 'Guided',
      uxElement: {
        type: 'mentor',
        content: {
          mentorImage: '/api/placeholder/120/120.jpg',
          mentorName: 'Rajesh Kumar, CIA',
          mentorTitle: 'Senior Internal Audit Manager, Deloitte',
          quote: 'I guide each student personally through their CIA journey. My 8+ years in Big 4 helps students understand real-world applications.',
          experience: '8+ years Big 4',
          students: '500+ students guided',
          rating: 4.9
        }
      },
      benefits: [
        'Weekly 1:1 mentorship sessions',
        'Industry insights from Big 4 experience',
        'Career guidance and networking',
        'Real-world audit scenarios'
      ]
    },
    {
      id: 'analytics',
      title: 'Mock Exams + Analytics',
      description: 'AI-powered performance tracking and improvement insights',
      icon: ChartBarIcon,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      emotion: 'Practical',
      uxElement: {
        type: 'dashboard',
        content: {
          overallScore: 78,
          improvement: '+12%',
          weakAreas: ['Risk Assessment', 'IT Controls'],
          strongAreas: ['Audit Standards', 'Ethics'],
          mockExamsTaken: 15,
          timeSpent: '124 hours',
          predictedScore: 685,
          readinessLevel: 'Good'
        }
      },
      benefits: [
        'Unlimited mock exams for all 3 parts',
        'Detailed performance analytics',
        'Weakness identification & improvement',
        'Exam readiness prediction'
      ]
    },
    {
      id: 'doubt-handling',
      title: '1:1 Doubt Handling',
      description: 'Instant doubt resolution through dedicated support channels',
      icon: ChatBubbleLeftRightIcon,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      emotion: 'Guided',
      uxElement: {
        type: 'chat',
        content: {
          messages: [
            { sender: 'student', text: 'Can you explain the difference between assurance and consulting services?', time: '2:34 PM' },
            { sender: 'mentor', text: 'Great question! Assurance services provide independent assessment...', time: '2:36 PM' },
            { sender: 'mentor', text: 'Let me share a real example from my audit experience...', time: '2:37 PM' }
          ],
          responseTime: '< 2 hours',
          availability: '24/7'
        }
      },
      benefits: [
        '24/7 doubt resolution support',
        'Expert mentors available',
        'Video call explanations',
        'Concept clarification with examples'
      ]
    },
    {
      id: 'case-studies',
      title: 'Internal Audit Case Studies',
      description: 'Real-world audit projects and practical applications',
      icon: DocumentTextIcon,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      emotion: 'Real-world',
      uxElement: {
        type: 'projects',
        content: {
          projects: [
            { title: 'Financial Controls Audit - Banking Sector', company: 'HDFC Bank', complexity: 'Advanced', duration: '3 weeks' },
            { title: 'IT Security Assessment - E-commerce', company: 'Flipkart', complexity: 'Intermediate', duration: '2 weeks' },
            { title: 'Operational Risk Review - Manufacturing', company: 'Tata Motors', complexity: 'Advanced', duration: '4 weeks' }
          ],
          completionRate: '94%',
          industryExposure: 8
        }
      },
      benefits: [
        'Real company audit scenarios',
        'Industry-specific case studies',
        'Hands-on audit methodology',
        'Portfolio building projects'
      ]
    },
    {
      id: 'exam-support',
      title: 'Global Exam Support',
      description: 'End-to-end exam registration and scheduling assistance',
      icon: GlobeAltIcon,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      emotion: 'Practical',
      uxElement: {
        type: 'registration',
        content: {
          examCenters: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad'],
          nextAvailableDate: 'March 15, 2024',
          registrationStatus: 'Completed',
          documentsVerified: true,
          paymentStatus: 'Processed',
          confirmationNumber: 'CIA2024-IN-789456'
        }
      },
      benefits: [
        'Complete registration assistance',
        'Document verification support',
        'Exam center recommendations',
        'Scheduling optimization'
      ]
    }
  ];

  const renderUXElement = (feature: typeof trainingFeatures[0]) => {
    const { uxElement } = feature;
    
    switch (uxElement.type) {
      case 'mentor':
        return (
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-start space-x-4 mb-4">
              {/* <img 
                src={uxElement.content.mentorImage} 
                alt={uxElement.content.mentorName}
                className="w-16 h-16 rounded-full object-cover"
              /> */}
              <div className="flex-1">
                <h4 className="font-bold text-gray-900">{uxElement.content.mentorName}</h4>
                <p className="text-sm text-gray-600 mb-2">{uxElement.content.mentorTitle}</p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>⭐ {uxElement.content.rating}</span>
                  <span>👥 {uxElement.content.students}</span>
                  <span>🏢 {uxElement.content.experience}</span>
                </div>
              </div>
            </div>
            <blockquote className="text-sm text-gray-700 italic border-l-4 border-red-500 pl-4">
              &quot;{uxElement.content.quote}&quot;
            </blockquote>
          </div>
        );
        
      case 'dashboard':
        return (
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{uxElement.content.overallScore}%</div>
                <div className="text-sm text-gray-600">Overall Score</div>
                <div className="text-xs text-green-600">{uxElement.content.improvement} this week</div>
              </div>
              <div className="bg-red-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-red-600">{uxElement.content.predictedScore}</div>
                <div className="text-sm text-gray-600">Predicted Score</div>
                <div className="text-xs text-red-600">{uxElement.content.readinessLevel} readiness</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Mock Exams:</span>
                <span className="font-medium">{uxElement.content.mockExamsTaken} completed</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Study Time:</span>
                <span className="font-medium">{uxElement.content.timeSpent}</span>
              </div>
            </div>
          </div>
        );
        
      case 'chat':
        return (
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="space-y-3 mb-4">
              {uxElement.content?.messages?.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'student' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                    msg.sender === 'student' 
                      ? 'bg-red-500 text-white' 
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p>{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.sender === 'student' ? 'text-red-100' : 'text-gray-500'}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Response time: {uxElement.content.responseTime}</span>
              <span>Available: {uxElement.content.availability}</span>
            </div>
          </div>
        );
        
      case 'projects':
        return (
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="space-y-3 mb-4">
              {uxElement.content?.projects?.map((project, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-3">
                  <h5 className="font-medium text-gray-900 text-sm mb-1">{project.title}</h5>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>🏢 {project.company}</span>
                    <span>⏱️ {project.duration}</span>
                    <span className={`px-2 py-1 rounded ${
                      project.complexity === 'Advanced' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {project.complexity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Completion Rate: <strong>{uxElement.content.completionRate}</strong></span>
              <span className="text-gray-600">Industries: <strong>{uxElement.content.industryExposure}</strong></span>
            </div>
          </div>
        );
        
      case 'registration':
        return (
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-sm text-gray-600 mb-1">Registration Status</div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm font-medium text-green-600">{uxElement.content.registrationStatus}</span>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Next Available</div>
                <div className="text-sm font-medium text-gray-900">{uxElement.content.nextAvailableDate}</div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Documents:</span>
                <span className="text-green-600">✓ Verified</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment:</span>
                <span className="text-green-600">✓ {uxElement.content.paymentStatus}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Confirmation:</span>
                <span className="font-mono text-xs">{uxElement.content.confirmationNumber}</span>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <section className="py-8 md:py-20 bg-gradient-to-br from-slate-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-purple-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <StarIcon className="w-4 h-4 mr-2" />
            NorthStar Training Experience
          </div>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6">
            Why We Win -
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600 mt-2">
              Training Excellence
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-red-600">Guided</span> + 
            <span className="font-semibold text-green-600 mx-2">Practical</span> + 
            <span className="font-semibold text-purple-600">Real-world</span> approach to CIA success
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Features List */}
          <div className="space-y-6">
            {trainingFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`cursor-pointer transition-all duration-300 ${
                  activeFeature === index ? 'scale-105' : ''
                }`}
                onClick={() => setActiveFeature(index)}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 ${
                  activeFeature === index 
                    ? 'border-red-500 shadow-xl' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          feature.emotion === 'Guided' ? 'bg-red-100 text-red-600' :
                          feature.emotion === 'Practical' ? 'bg-green-100 text-green-600' :
                          'bg-purple-100 text-purple-600'
                        }`}>
                          {feature.emotion}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <ul className="space-y-1">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* UX Element Display */}
          <div className="lg:sticky lg:top-8">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {trainingFeatures[activeFeature].title}
                </h4>
                <p className="text-gray-600">Live preview of our training experience</p>
              </div>
              
              {renderUXElement(trainingFeatures[activeFeature])}
              
              <div className="bg-gradient-to-r from-gray-900 to-red-900 rounded-2xl p-6 text-white text-center">
                <h5 className="font-bold mb-2">Experience This Live</h5>
                <p className="text-red-200 text-sm mb-4">
                  Join our next demo session to see these features in action
                </p>
                <LeadFormButton formType='general' isSendOtp={true} courseId='CIA' className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-xl font-bold text-sm hover:shadow-lg transition-all duration-300 flex items-center space-x-2 mx-auto">
                  <PlayIcon className="w-4 h-4" />
                  <span>Book Demo Session</span>
                </LeadFormButton>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Results That Speak
            </h3>
            <p className="text-gray-600 text-lg">
              Our training approach delivers measurable success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ArrowTrendingUpIcon className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">94%</div>
              <div className="text-sm text-gray-600">First Attempt Pass Rate</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">2,500+</div>
              <div className="text-sm text-gray-600">Students Trained</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <AcademicCapIcon className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">1,800+</div>
              <div className="text-sm text-gray-600">CIA Certified Alumni</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <StarIcon className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-sm text-gray-600">Student Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CIATrainingExperience;