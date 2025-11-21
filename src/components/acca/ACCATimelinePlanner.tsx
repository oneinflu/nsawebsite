"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  CheckCircleIcon,
  ClockIcon,
  AcademicCapIcon,
  BookOpenIcon,
  BriefcaseIcon,
  ShieldCheckIcon,
  TrophyIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon as CheckCircleSolid } from "@heroicons/react/24/solid";
import LeadFormButton from "../LeadFormButton";

const ACCATimelinePlanner = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const journeySteps = [
    {
      id: 1,
      title: "Exemptions Assessment",
      subtitle: "Check your qualifications",
      description:
        "Get up to 9 paper exemptions based on your existing qualifications",
      duration: "1-2 weeks",
      icon: ShieldCheckIcon,
      color: "from-red-500 to-cyan-500",
      bgColor: "from-red-50 to-cyan-50",
      tasks: [
        "Submit qualification documents",
        "ACCA assessment review",
        "Receive exemption report",
        "Plan remaining papers",
      ],
      tips: [
        "Apply early to save time",
        "Keep all certificates ready",
        "Consider cost vs time savings",
      ],
    },
    {
      id: 2,
      title: "Knowledge Papers",
      subtitle: "Foundation Level (3 Papers)",
      description: "Build fundamental business and accounting knowledge",
      duration: "6-9 months",
      icon: BookOpenIcon,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      tasks: [
        "Business & Technology (BT)",
        "Management Accounting (MA)",
        "Financial Accounting (FA)",
        "Complete all 3 papers",
      ],
      tips: [
        "Can be taken in any order",
        "Computer-based exams",
        "Available year-round",
      ],
    },
    {
      id: 3,
      title: "Skills Papers",
      subtitle: "Intermediate Level (6 Papers)",
      description: "Develop technical expertise in core accounting areas",
      duration: "12-18 months",
      icon: AcademicCapIcon,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      tasks: [
        "Corporate & Business Law (LW)",
        "Performance Management (PM)",
        "Taxation (TX)",
        "Financial Reporting (FR)",
        "Audit & Assurance (AA)",
        "Financial Management (FM)",
      ],
      tips: [
        "Strategic order recommended",
        "Build on Knowledge papers",
        "Mix easier and harder papers",
      ],
    },
    {
      id: 4,
      title: "Strategic Papers",
      subtitle: "Advanced Level (4 Papers)",
      description: "Master strategic thinking and leadership skills",
      duration: "12-15 months",
      icon: TrophyIcon,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      tasks: [
        "Strategic Business Leader (SBL) - Essential",
        "Strategic Business Reporting (SBR) - Essential",
        "Choose 2 from 4 Options:",
        "Advanced Financial Management (AFM)",
        "Advanced Performance Management (APM)",
        "Advanced Taxation (ATX)",
        "Advanced Audit & Assurance (AAA)",
      ],
      tips: [
        "Complete Essentials first",
        "Choose Options based on career goals",
        "Case study approach",
      ],
    },
    {
      id: 5,
      title: "Practical Experience",
      subtitle: "3 Years Relevant Work",
      description: "Gain practical experience in accounting/finance roles",
      duration: "36 months",
      icon: BriefcaseIcon,
      color: "from-red-500 to-purple-500",
      bgColor: "from-red-50 to-purple-50",
      tasks: [
        "Work in relevant role",
        "Complete Performance Objectives",
        "Get supervisor approval",
        "Submit experience record",
      ],
      tips: [
        "Can be done alongside exams",
        "Part-time work counts",
        "Internships may qualify",
      ],
    },
    {
      id: 6,
      title: "Ethics Module",
      subtitle: "Professional Ethics & Values",
      description: "Complete online ethics and professional skills module",
      duration: "2-4 weeks",
      icon: CheckCircleIcon,
      color: "from-teal-500 to-green-500",
      bgColor: "from-teal-50 to-green-50",
      tasks: [
        "Online learning modules",
        "Case study analysis",
        "Professional scenarios",
        "Final assessment",
      ],
      tips: [
        "Self-paced online",
        "Real-world scenarios",
        "Must pass to qualify",
      ],
    },
    {
      id: 7,
      title: "ACCA Member",
      subtitle: "Chartered Certified Accountant",
      description: "Become a globally recognized ACCA member",
      duration: "Lifetime",
      icon: TrophyIcon,
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
      tasks: [
        "Submit membership application",
        "Pay membership fees",
        "Receive ACCA certificate",
        "Join global ACCA network",
      ],
      tips: [
        "Continuous professional development",
        "Global networking opportunities",
        "Career advancement",
      ],
    },
  ];

  const toggleStepCompletion = (stepIndex: number) => {
    if (completedSteps.includes(stepIndex)) {
      setCompletedSteps(completedSteps.filter((step) => step !== stepIndex));
    } else {
      setCompletedSteps([...completedSteps, stepIndex]);
    }
  };

  const getProgressPercentage = () => {
    return (completedSteps.length / journeySteps.length) * 100;
  };

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
            <ClockIcon className="w-8 h-8 md:w-12 md:h-12 text-red-600 mr-4" />
            <h2 className="text-xl md:text-5xl font-bold text-gray-900">
              Your ACCA{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">
                Journey Map
              </span>
            </h2>
          </div>
          <p className="text-md md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Clear, step-by-step roadmap to becoming a Chartered Certified
            Accountant
          </p>

          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-700">
                Journey Progress
              </span>
              <span className="text-sm font-bold text-red-600">
                {Math.round(getProgressPercentage())}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                className="bg-gradient-to-r from-red-500 to-purple-500 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${getProgressPercentage()}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-red-200 via-purple-200 to-green-200"></div>

          {/* Journey Steps */}
          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step Number Circle */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleStepCompletion(index)}
                    className={`w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-lg shadow-lg transition-all duration-300 ${
                      completedSteps.includes(index)
                        ? "bg-green-500 text-white"
                        : `bg-gradient-to-r ${step.color} text-white hover:shadow-xl`
                    }`}
                  >
                    {completedSteps.includes(index) ? (
                      <CheckCircleSolid className="w-8 h-8" />
                    ) : (
                      step.id
                    )}
                  </motion.button>
                </div>

                {/* Step Content */}
                <div
                  className={`w-full md:w-5/12 ml-18 md:ml-0 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-16"
                      : "md:ml-auto md:pl-16"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`bg-gradient-to-br ${step.bgColor} rounded-3xl p-8 shadow-lg border border-white/50 cursor-pointer`}
                    onClick={() =>
                      setActiveStep(activeStep === index ? -1 : index)
                    }
                  >
                    {/* Step Header */}
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-8 h-8 md:w-12 md:h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mr-4`}
                      >
                        <step.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600">
                          {step.subtitle}
                        </p>
                      </div>
                      <div className="flex items-center text-red-600">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">
                          {step.duration}
                        </span>
                      </div>
                    </div>

                    {/* Step Description */}
                    <p className="text-sm md:text-md text-gray-700 mb-6">
                      {step.description}
                    </p>

                    {/* Expand/Collapse Indicator */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {completedSteps.includes(index)
                          ? "✅ Completed"
                          : "Click to view details"}
                      </span>
                      <ChevronRightIcon
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          activeStep === index ? "rotate-90" : ""
                        }`}
                      />
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {activeStep === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-6"
                        >
                          <div className="bg-white rounded-2xl p-3 md:p-6 shadow-inner">
                            {/* Tasks */}
                            <div className="mb-6">
                              <h4 className="text-md md:text-lg font-bold text-gray-900 mb-3">
                                Key Tasks:
                              </h4>
                              <ul className="space-y-2">
                                {step.tasks.map((task, taskIndex) => (
                                  <li
                                    key={taskIndex}
                                    className="flex items-start text-gray-700"
                                  >
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-sm md:text-md">{task}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Tips */}
                            <div>
                              <h4 className="text-lg font-bold text-gray-900 mb-3">
                                Pro Tips:
                              </h4>
                              <ul className="space-y-2">
                                {step.tips.map((tip, tipIndex) => (
                                  <li
                                    key={tipIndex}
                                    className="flex items-start text-gray-700"
                                  >
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-sm md:text-md">{tip}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Journey Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-red-500 rounded-3xl p-4 md:p-12 text-white text-center"
        >
          <h3 className="text-md md:text-3xl font-bold mb-4">
            🎓 Your ACCA Journey Awaits
          </h3>
          <p className="text-red-100 text-sm md:text-lg mb-8 max-w-2xl mx-auto">
            With proper planning and support, you can complete your ACCA
            qualification in 3-4 years while gaining valuable work experience
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-8">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">13</div>
              <div className="text-red-100">Total Papers</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">2-3</div>
              <div className="text-red-100">Years Duration</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">180+</div>
              <div className="text-red-100">Countries Recognition</div>
            </div>
          </div>

          <LeadFormButton formType="acca-journey" variant="outline" isSendOtp={true}>
            Start Your ACCA Journey
          </LeadFormButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ACCATimelinePlanner;
