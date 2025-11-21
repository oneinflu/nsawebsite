"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheckIcon,
  CurrencyDollarIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import LeadFormButton from "./LeadFormButton";

export default function WhyCPA() {
  const [,] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const companies = [
    {
      name: "Deloitte",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop",
      demand: "2,500+ openings",
    },
    {
      name: "PwC",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop",
      demand: "1,800+ openings",
    },
    {
      name: "KPMG",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop",
      demand: "1,200+ openings",
    },
    {
      name: "EY",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop",
      demand: "2,000+ openings",
    },
    {
      name: "Goldman Sachs",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop",
      demand: "800+ openings",
    },
    {
      name: "JP Morgan",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop",
      demand: "1,500+ openings",
    },
  ];

  const salaryData = [
    { level: "Entry Level", salary: 60, color: "bg-red-500" },
    { level: "Senior Associate", salary: 85, color: "bg-red-500" },
    { level: "Manager", salary: 110, color: "bg-red-500" },
    { level: "Senior Manager", salary: 140, color: "bg-red-500" },
    { level: "Director", salary: 180, color: "bg-red-500" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-8 md:py-20 bg-linear-to-br from-slate-50 via-red-50 to-red-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center md:mb-16 sm:pb-14 pb-8"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Why CPA (US)?
            <span className="block text-2xl md:text-3xl font-medium text-red-600 mt-2">
              The Ultimate Accounting Authority
            </span>
          </h2>
          <p className="md:text-xl sm:text-base text-sm text-slate-600 max-w-3xl mx-auto">
            More than a certification , it&apos;s a professional license that
            opens doors to the highest levels of accounting and finance globally
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 sm:gap-16 gap-6 items-start">
          <div className=" space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-linear-to-br from-red-600 via-red-600 to-red-900 sm:rounded-3xl rounded-2xl sm:p-8 p-5 shadow-2xl transform perspective-1000 hover:rotate-y-12 transition-transform duration-500">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-linear-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-xl transform rotate-12">
                      <ShieldCheckIcon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                  </div>
                  <div className="text-white">
                    <h3 className="sm:text-2xl text-xl font-bold mb-2">
                      Highest Accounting Authority
                    </h3>
                    <p className="sm:text-base text-sm text-red-100">
                      Recognized by AICPA & all 55 US jurisdictions
                    </p>
                    <div className="mt-3 flex items-center gap-2 sm:text-sm text-xs">
                      <TrophyIcon className="w-4 h-4" />
                      <span>Gold Standard in Accounting</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="sm:text-xl text-base font-bold text-slate-800">
                  Professional License
                </h3>
                <div className="bg-green-100 text-green-800 sm:px-3 px-2.5 py-1 rounded-full sm:text-sm text-[10px] font-semibold">
                  License ≠ Certificate
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <div className="text-2xl mb-2">📜</div>
                  <p className="font-semibold text-slate-700">Certificate</p>
                  <p className="text-sm text-slate-500">Knowledge proof</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl border-2 border-green-200">
                  <div className="text-2xl mb-2">🏛️</div>
                  <p className="font-semibold text-green-700">License</p>
                  <p className="text-sm text-green-600">Legal authority</p>
                </div>
              </div>

              <div className="bg-linear-to-r from-red-50 to-red-50 p-4 rounded-xl">
                <p className="text-sm text-slate-700">
                  <strong>CPA License gives you:</strong> Legal authority to
                  sign audit reports, represent clients before IRS, and practice
                  public accounting
                </p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="sm:text-xl text-base font-bold text-slate-800">
                  CPA Salary Progression
                </h3>
                <div className="flex items-center sm:gap-2 gap-1 text-green-600">
                  <CurrencyDollarIcon className="sm:w-5 w-4 sm:h-5 h-4" />
                  <span className="sm:text-base text-xs font-semibold">
                    $60K - $180K+
                  </span>
                </div>
              </div>

              <div className="sm:space-y-4 space-y-3">
                {salaryData.map((item, index) => (
                  <motion.div
                    key={item.level}
                    initial={{ opacity: 0, width: 0 }}
                    animate={isInView ? { opacity: 1, width: "100%" } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex justify-between sm:text-base text-sm items-center mb-2">
                      <span className="font-semibold text-slate-700">
                        {item.level}
                      </span>
                      <span className="font-bold text-slate-800">
                        ${item.salary}K
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full sm:h-3 h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView
                            ? { width: `${(item.salary / 180) * 100}%` }
                            : {}
                        }
                        transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                        className={`sm:h-3 h-2.5 rounded-full ${item.color} relative`}
                      >
                        <div className="absolute right-2 top-0 w-2 h-3 bg-white/30 rounded-full"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 sm:p-4 p-3 bg-linear-to-r from-red-50 to-purple-50 rounded-xl">
                <p className="text-sm text-slate-700">
                  💡 <strong>Pro tip:</strong> CPA license holders earn 25-40%
                  more than non-licensed accountants
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-xl lg:col-span-2"
          >
            <h3 className="sm:text-xl text-base font-bold text-slate-800 sm:mb-6 mb-5 text-center">
              Big 4 + MNC Demand for CPAs
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {companies.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center p-4 border border-slate-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-red-300"
                >
                  <div className="w-16 h-8 bg-slate-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-xs font-bold text-slate-600">
                      {company.name}
                    </span>
                  </div>
                  <p className="text-xs text-green-600 font-semibold">
                    {company.demand}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center bg-linear-to-r from-green-50 to-red-50 p-4 rounded-xl">
              <p className="text-sm font-semibold text-slate-700">
                🔥{" "}
                <span className="text-green-600">
                  9,800+ active CPA job openings
                </span>{" "}
                across Big 4 firms
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center sm:mt-16 mt-8"
        >
          <div className="bg-linear-to-r from-red-600 to-red-600 rounded-2xl sm:px-8 px-5  sm:py-8 py-7 pb-8  text-white">
            <h3 className="sm:text-2xl text-xl font-bold mb-4">
              Ready to Become a Licensed CPA?
            </h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Join 2,00,000+ CPAs worldwide and unlock unlimited career
              opportunities in accounting and finance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LeadFormButton
                formType="general"
                isSendOtp={true}
                courseId="CPA"
                className=" text-red-600 sm:px-8 px-5 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your CPA Journey
              </LeadFormButton>
              <LeadFormButton
                formType="download-syllabus"
                isSendOtp={true}
                courseId="CPA"
                className="border-2 border-white text-white sm:px-8 px-5 py-3 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                Download CPA Guide
              </LeadFormButton>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
      `}</style>
    </section>
  );
}
