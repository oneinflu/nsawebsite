/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  ShieldCheckIcon,
  ComputerDesktopIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import LeadFormButton from "../LeadFormButton";

const WhoShouldDoCIA = () => {
  const [isClient, setIsClient] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const personas = [
    {
      icon: AcademicCapIcon,
      title: "B.Com / BBA Students",
      subtitle: "Aiming Internal Audit",
      description:
        "Fresh graduates looking to build a specialized career in internal auditing",
      benefits: [
        "Direct entry into audit roles",
        "Skip years of general experience",
        "Premium starting salaries",
        "Fast-track career progression",
      ],
      timeline: "Start during final year",
      salaryRange: "$45K - $65K",
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100",
      borderColor: "border-red-200",
      emoji: "🎓",
    },
    {
      icon: BriefcaseIcon,
      title: "Working Professionals",
      subtitle: "In Finance/Audit",
      description:
        "Experienced professionals wanting to specialize and advance in internal audit",
      benefits: [
        "Leverage existing experience",
        "Immediate salary increment",
        "Leadership role opportunities",
        "Global mobility options",
      ],
      timeline: "6-12 months part-time",
      salaryRange: "$70K - $120K",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      emoji: "💼",
    },
    {
      icon: ShieldCheckIcon,
      title: "CA/ACCA Qualified",
      subtitle: "Wanting Risk Specialty",
      description:
        "Chartered accountants seeking to add risk management and internal audit expertise",
      benefits: [
        "Dual qualification advantage",
        "Risk advisory opportunities",
        "C-suite consulting roles",
        "Premium market positioning",
      ],
      timeline: "Fast-track 8 months",
      salaryRange: "$90K - $180K",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      emoji: "🏆",
    },
    {
      icon: ComputerDesktopIcon,
      title: "IT Controls Professionals",
      subtitle: "SOX Compliance",
      description:
        "IT professionals working in controls, compliance, and SOX implementations",
      benefits: [
        "IT audit specialization",
        "Cybersecurity audit roles",
        "Digital transformation projects",
        "Tech-audit hybrid positions",
      ],
      timeline: "Flexible online study",
      salaryRange: "$80K - $150K",
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100",
      borderColor: "border-red-200",
      emoji: "💻",
    },
  ];

  const microNudges = [
    {
      icon: TrophyIcon,
      text: "Turn audit experience into global authority credential",
      subtext:
        "Transform your current skills into internationally recognized expertise",
    },
    {
      icon: StarIcon,
      text: "Join 150,000+ CIA professionals worldwide",
      subtext: "Be part of the most prestigious internal audit community",
    },
    {
      icon: CheckCircleIcon,
      text: "Average 40% salary increase post-CIA",
      subtext: "Proven ROI on your professional development investment",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (!isClient) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6">
              Who Should Do{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">
                CIA?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perfect for professionals at every career stage looking to excel
              in internal audit
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-red-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-red-200 to-green-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Who Should Do{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">
              CIA?
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-md md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Perfect for professionals at every career stage looking to excel in
            internal audit
          </motion.p>
        </motion.div>

        {/* Persona Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-20"
        >
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 },
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`relative bg-white rounded-3xl p-6 shadow-xl border-2 ${persona.borderColor} hover:shadow-2xl transition-all duration-500 cursor-pointer group h-full`}
            >
              {/* Background Gradient on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${persona.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10 h-full flex flex-col">
                {/* Icon & Emoji */}
                <div className="flex items-center justify-center mb-4">
                  <div
                    className={`p-3 rounded-2xl bg-gradient-to-r ${persona.color} mr-3`}
                  >
                    <persona.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl">{persona.emoji}</div>
                </div>

                {/* Title & Subtitle */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {persona.title}
                  </h3>
                  <p
                    className={`text-sm font-semibold bg-gradient-to-r ${persona.color} bg-clip-text text-transparent`}
                  >
                    {persona.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm text-center mb-4 leading-relaxed flex-grow">
                  {persona.description}
                </p>

                {/* Key Stats */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">Timeline:</span>
                    <span className="font-semibold text-gray-700">
                      {persona.timeline}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">Salary Range:</span>
                    <span
                      className={`font-bold bg-gradient-to-r ${persona.color} bg-clip-text text-transparent`}
                    >
                      {persona.salaryRange}
                    </span>
                  </div>
                </div>

                {/* Benefits - Show on Hover */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: hoveredCard === index ? 1 : 0,
                    height: hoveredCard === index ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2 pt-4 border-t border-gray-200">
                    {persona.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="flex items-center text-xs text-gray-700"
                      >
                        <CheckCircleIcon className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA Button */}
                <LeadFormButton
                  formType="general"
                  isSendOtp={true}
                  courseId="CIA"
                  className={`mt-4 w-full bg-gradient-to-r ${persona.color} text-white py-2 px-4 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center`}
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </LeadFormButton>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Micro Nudges Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="relative z-10">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h3 className="text-2xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Career?
              </h3>
              <p className="text-gray-300 text-md md:text-lg max-w-2xl mx-auto">
                Join thousands of professionals who&apos;ve elevated their
                careers with CIA certification
              </p>
            </motion.div>

            {/* Micro Nudges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12">
              {microNudges.map((nudge, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <nudge.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{nudge.text}</h4>
                  <p className="text-gray-300 text-sm">{nudge.subtext}</p>
                </motion.div>
              ))}
            </div>

            {/* Final CTA */}
            <motion.div variants={itemVariants} className="text-center">
              <LeadFormButton
                formType="cia-journey"
                isSendOtp={true}
                courseId="CIA"
                className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center"
              >
                <TrophyIcon className="w-6 h-6 mr-3" />
                Start Your CIA Journey Today
              </LeadFormButton>
              <p className="text-gray-400 text-sm mt-4">
                Free career counseling • Eligibility check • Study plan
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoShouldDoCIA;
