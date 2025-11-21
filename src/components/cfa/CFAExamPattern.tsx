"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DocumentTextIcon,
  AcademicCapIcon,
  ClipboardDocumentCheckIcon,
  ComputerDesktopIcon,
  TrophyIcon,
  CalendarDaysIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import LeadFormButton from "../LeadFormButton";

interface ExamLevel {
  level: string;
  frequency: string;
  duration: string;
  format: string;
  description: string;
}

interface FlowStep {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const examLevels: ExamLevel[] = [
  {
    level: "Level I",
    frequency: "4x/year",
    duration: "4.5 hrs",
    format: "Computer-based",
    description:
      "Multiple choice questions covering ethics, quantitative methods, economics, and more",
  },
  {
    level: "Level II",
    frequency: "2x/year",
    duration: "4.5 hrs",
    format: "Case-based",
    description: "Item set questions focusing on asset valuation and analysis",
  },
  {
    level: "Level III",
    frequency: "2x/year",
    duration: "4.5 hrs",
    format: "Constructed response",
    description:
      "Essay questions and item sets on portfolio management and wealth planning",
  },
];

const flowSteps: FlowStep[] = [
  {
    id: "registration",
    title: "Registration",
    description: "Register for your CFA exam level",
    icon: DocumentTextIcon,
    color: "from-red-500 to-cyan-500",
  },
  {
    id: "study",
    title: "Study",
    description: "Comprehensive preparation with our mentors",
    icon: AcademicCapIcon,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "mock-tests",
    title: "Mock Tests",
    description: "Practice with realistic exam simulations",
    icon: ClipboardDocumentCheckIcon,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "cbt-exam",
    title: "CBT Exam",
    description: "Take the computer-based test",
    icon: ComputerDesktopIcon,
    color: "from-orange-500 to-red-500",
  },
  {
    id: "result",
    title: "Result",
    description: "Achieve your CFA Charter",
    icon: TrophyIcon,
    color: "from-yellow-500 to-orange-500",
  },
];

export default function CFAExamPattern() {
  const [isClient, setIsClient] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => setIsClient(true), 100);
  }, []);

  // Animate through flow steps
  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % flowSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isClient]);

  // Animate progress ring
  useEffect(() => {
    if (!isClient) return;

    const timer = setTimeout(() => {
      setProgressPercentage(75); // Show 75% progress towards Charter
    }, 1000);

    return () => clearTimeout(timer);
  }, [isClient]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  if (!isClient) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              CFA Exam Pattern & Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the exam structure and developing the right strategy
              is key to your CFA success
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-red-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            CFA Exam Pattern & Strategy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the exam structure and developing the right strategy
            is key to your CFA success
          </p>
        </motion.div>

        {/* Animated Flow */}
        <motion.div className="mb-20" variants={itemVariants}>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Your Journey to the Charter
          </h3>

          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-4">
            {flowSteps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col lg:flex-row items-center"
              >
                {/* Step Card */}
                <motion.div
                  className={`relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-500 ${
                    activeStep === index
                      ? "bg-white/90 border-red-300 shadow-xl scale-105"
                      : "bg-white/60 border-gray-200 shadow-lg"
                  }`}
                  animate={{
                    scale: activeStep === index ? 1.05 : 1,
                    y: activeStep === index ? -5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} p-4 mx-auto mb-4`}
                  >
                    <step.icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-600 max-w-32">
                      {step.description}
                    </p>
                  </div>

                  {/* Active Indicator */}
                  <AnimatePresence>
                    {activeStep === index && (
                      <motion.div
                        className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                      >
                        <CheckCircleIcon className="w-4 h-4 text-white" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Arrow */}
                {index < flowSteps.length - 1 && (
                  <div className="hidden lg:block mx-4">
                    <ArrowRightIcon className="w-8 h-8 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Exam Details Table */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center lg:text-left">
              Exam Structure & Format
            </h3>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl border border-gray-200">
              {/* SCROLL WRAPPER */}
              <div
                className="overflow-x-auto overflow-y-visible scrollbar-hide"
                style={{
                  WebkitOverflowScrolling: "touch",
                  overflowX: "auto",
                  scrollSnapType: "x mandatory",
                }}
              >
                <table
                  className="w-full border-collapse"
                  style={{ minWidth: "700px" }}
                >
                  <thead className="sticky top-0 z-10">
                    <tr className="bg-gradient-to-r from-red-600 to-purple-600 text-white">
                      <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-semibold text-xs sm:text-sm whitespace-nowrap min-w-[200px] snap-start">
                        Exam
                      </th>
                      <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-semibold text-xs sm:text-sm whitespace-nowrap min-w-[100px] snap-start">
                        Frequency
                      </th>
                      <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-semibold text-xs sm:text-sm whitespace-nowrap min-w-[100px] snap-start">
                        Duration
                      </th>
                      <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-semibold text-xs sm:text-sm whitespace-nowrap min-w-[150px] snap-start">
                        Format
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {examLevels.map((exam, index) => (
                      <motion.tr
                        key={exam.level}
                        className={`border-b border-gray-100 hover:bg-red-50/50 transition-colors ${
                          index % 2 === 0 ? "bg-gray-50/30" : "bg-white/50"
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 align-top whitespace-nowrap snap-start">
                          <div className="font-semibold text-gray-900 text-sm sm:text-base whitespace-nowrap mb-1">
                            {exam.level}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600 max-w-[180px] sm:max-w-xs leading-tight">
                            {exam.description}
                          </div>
                        </td>

                        <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700 font-medium text-sm sm:text-base whitespace-nowrap align-top snap-start">
                          {exam.frequency}
                        </td>

                        <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700 font-medium text-sm sm:text-base whitespace-nowrap align-top snap-start">
                          {exam.duration}
                        </td>

                        <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 align-top whitespace-nowrap snap-start">
                          <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-red-100 text-red-800 whitespace-nowrap">
                            {exam.format}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Scroll Hint for Mobile */}
              <div className="md:hidden bg-gradient-to-r from-red-50 to-purple-50 px-3 py-2.5 text-center text-xs font-semibold text-red-700 border-t-2 border-red-200 flex items-center justify-center gap-2 sticky bottom-0">
                <svg
                  className="w-4 h-4 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>
                <span className="uppercase tracking-wide">
                  Scroll Right for More
                </span>
                <svg
                  className="w-4 h-4 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Progress Ring */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center w-full mt-8 lg:mt-0"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              Your Journey Progress
            </h3>

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mb-6 sm:mb-8 mx-auto">
              {/* Background Circle */}
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="transparent"
                  className="text-gray-200"
                />

                {/* Progress Circle */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="url(#progressGradient)"
                  strokeWidth="4"
                  fill="transparent"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                  animate={{
                    strokeDashoffset:
                      2 * Math.PI * 45 * (1 - progressPercentage / 100),
                  }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Gradient Definition */}
                <defs>
                  <linearGradient
                    id="progressGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                <motion.div
                  className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  {progressPercentage}%
                </motion.div>
                <div className="text-gray-600 text-center mt-2">
                  <div className="font-semibold text-sm sm:text-base">
                    Journey to Charter
                  </div>
                  <div className="text-xs sm:text-sm">
                    Keep pushing forward!
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center w-full">
              <LeadFormButton
                formType="download-syllabus"
                variant="outline"
                isSendOtp={true}
                className="w-full sm:w-auto max-w-sm mx-auto"
              >
                <span className="text-sm sm:text-base">
                  Download Exam Calendar 2025
                </span>
              </LeadFormButton>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={itemVariants}
        >
          {[
            {
              label: "Pass Rate Improvement",
              value: "40%",
              description: "With our structured approach",
            },
            {
              label: "Study Hours Saved",
              value: "200+",
              description: "Through efficient planning",
            },
            {
              label: "Mock Tests Available",
              value: "50+",
              description: "Comprehensive practice",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-red-600 mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
