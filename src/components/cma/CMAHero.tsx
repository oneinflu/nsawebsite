"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  CheckCircleIcon,
  PlayCircleIcon,
  UserGroupIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import { Phone, TrendingUp } from "lucide-react";
import LeadFormButton from "../LeadFormButton";

export default function CMAHero() {
  const [isSticky, setIsSticky] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const keyBadges = [
    {
      icon: CheckCircleIcon,
      text: "IMA® USA Certification",
      color: "bg-violet-50 text-violet-700 border-violet-200",
    },
    {
      icon: GlobeAltIcon,
      text: "Global Opportunities (150+ Countries)",
      color: "bg-red-50 text-red-700 border-red-200",
    },
    {
      icon: PlayCircleIcon,
      text: "Live + Recorded Learning",
      color: "bg-red-50 text-red-700 border-red-200",
    },
    {
      icon: UserGroupIcon,
      text: "Big 4 & MNC Placements",
      color: "bg-purple-50 text-purple-700 border-purple-200",
    },
  ];

  const salaryProgression = [
    { level: "Entry Level", salary: "$65,000", icon: CurrencyDollarIcon },
    { level: "Mid Level", salary: "$85,000", icon: TrendingUp },
    { level: "Senior Level", salary: "$120,000+", icon: AcademicCapIcon },
  ];

  const studentAvatars = [
    "/students/1.jpg",
    "/students/2.jpg",
    "/students/3.jpg",
    "/students/4.jpeg",
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-red-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pt-20 pb-16">
        <div className="grid lg:grid-cols-2 md:gap-12 items-center min-h-[80vh] ">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Urgency Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-700 text-sm font-medium"
            >
              🔥 Limited Seats - Next Batch Starts Soon!
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4 text-center md:text-start"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight">
                Become a{" "}
                <span className="bg-gradient-to-r from-red-500 to-red-500 bg-clip-text text-transparent">
                  Certified Management Accountant
                </span>
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl text-slate-700">
                  (CMA – USA)
                </span>
              </h1>
              <p className="text-lg sm:text-2xl text-slate-600 font-medium">
                Global Finance Career in just{" "}
                <span className="text-red-600 font-bold">6–9 Months</span>
              </p>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col md:flex-row text-center items-center gap-3 md:gap-6 text-sm text-slate-600"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {studentAvatars.map((src, idx) => (
                    <Image
                      key={idx}
                      src={src}
                      alt="Student avatar"
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      priority={false}
                    />
                  ))}
                </div>
                <span className="font-medium">2,00,000+ Students Placed</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">★★★★★</span>
                <span className="font-medium">4.9/5 Rating</span>
              </div>
            </motion.div>

            {/* Key Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {keyBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${badge.color} backdrop-blur-sm`}
                >
                  <badge.icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium text-sm md:text-xs">
                    {badge.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <LeadFormButton
                formType="general"
                courseId="CMA USA"
                variant="primary"
                className="px-8 flex items-center gap-1 py-4 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                isSendOtp={true}
              >
                <Phone /> Book Free Counselling
              </LeadFormButton>

              <button className="px-6 py-4 text-slate-600 font-medium hover:text-red-600 transition-colors duration-200 flex items-center gap-2">
                <PlayCircleIcon className="w-5 h-5" />
                Watch Success Stories
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div style={{ y }} className="space-y-8">
              {/* 3D CMA Credential Card */}
              <motion.div
                initial={{ opacity: 0, rotateY: -30 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="relative"
              >
                <div className="bg-gradient-to-br md:mt-6 from-red-900 via-red-700 to-red-500 rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="text-white space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold">CMA</h3>
                        <p className="text-red-100">USA Certification</p>
                      </div>
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <GlobeAltIcon className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-red-100">
                        Certified Management Accountant
                      </p>
                      <p className="text-lg font-semibold">
                        Global Recognition
                      </p>
                      <p className="text-sm text-red-100">
                        Valid in 150+ Countries
                      </p>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-white/20">
                      <span className="text-sm">IMA® Authorized</span>
                      <span className="text-sm">Since 1972</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Pass Rate Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-green-600">98%</div>
                <p className="text-green-700 font-medium">Pass Rate</p>
                <p className="text-sm text-green-600 mt-1">
                  With NorthStar Academy
                </p>
              </motion.div>

              {/* Salary & Career Progression */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 mb-26 2xl:mb-0"
              >
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-red-600" />
                  Career Progression
                </h4>
                <div className="space-y-3">
                  {salaryProgression.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <item.icon className="w-4 h-4 text-slate-500" />
                        <span className="text-sm text-slate-600">
                          {item.level}
                        </span>
                      </div>
                      <span className="font-semibold text-slate-900">
                        {item.salary}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Sticky CTA */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: isSticky ? 0 : 100,
          opacity: isSticky ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg z-50 p-4"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <p className="font-semibold text-slate-900">
              Ready to Start Your CMA Journey?
            </p>
            <p className="text-sm text-slate-600">
              Join 2,00,000+ successful students
            </p>
          </div>
          <div className="flex gap-2">
            <LeadFormButton
              formType="general"
              courseId="CMA USA"
              variant="primary"
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-500 text-white hover:from-red-600 hover:to-red-700 shadow-md"
              isSendOtp={true}
            >
              {/* Mobile: white phone icon + Call */}
              <span className="inline-flex items-center md:hidden">
                <svg
                  className="mr-2 h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3a2 2 0 012 1.85l.3 2a2 2 0 01-.57 1.67l-1.11 1.11a16 16 0 006.6 6.6l1.11-1.11a2 2 0 011.67-.57l2 .3A2 2 0 0121 17v3a2 2 0 01-2 2h-.5C9.65 22 3 15.35 3 7.5V7a2 2 0 012-2z"
                  />
                </svg>
                <span>Call</span>
              </span>
              {/* Desktop: original text */}
              <span className="hidden md:inline">Book Free Call</span>
            </LeadFormButton>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
