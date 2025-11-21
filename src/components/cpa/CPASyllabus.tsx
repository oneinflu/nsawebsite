"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ClockIcon,
  DocumentArrowDownIcon,
  AcademicCapIcon,
  ChartBarIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import LeadFormButton from "../LeadFormButton";

export default function CPASyllabus() {
  const [activeTab, setActiveTab] = useState("AUD");
  const [expandedTopics, setExpandedTopics] = useState<string[]>([]);
  const [showLeadModal, setShowLeadModal] = useState(false);

  const syllabusData = {
    AUD: {
      name: "Auditing and Attestation",
      code: "AUD",
      difficulty: "High",
      studyHours: "120-150 hours",
      passRate: "50.05%",
      description:
        "Professional responsibilities, planning, risk assessment, and audit procedures",
      color: "blue",
      topics: [
        {
          id: "ethics",
          title: "Ethics, Professional Responsibilities & General Principles",
          weight: "15-25%",
          subtopics: [
            "AICPA Code of Professional Conduct",
            "Independence, integrity, and objectivity",
            "Professional responsibilities and liabilities",
            "Quality control standards",
          ],
        },
        {
          id: "planning",
          title: "Assessing Risk & Developing a Planned Response",
          weight: "25-35%",
          subtopics: [
            "Planning and supervision",
            "Understanding the entity and its environment",
            "Risk assessment procedures",
            "Materiality and audit risk",
          ],
        },
        {
          id: "procedures",
          title: "Performing Further Procedures & Obtaining Evidence",
          weight: "30-40%",
          subtopics: [
            "Audit sampling",
            "Tests of controls and substantive procedures",
            "Audit evidence and documentation",
            "Special considerations (related parties, estimates)",
          ],
        },
        {
          id: "reporting",
          title: "Forming Conclusions & Reporting",
          weight: "15-25%",
          subtopics: [
            "Audit opinions and reports",
            "Communication with management and governance",
            "Subsequent events and going concern",
            "Other attestation engagements",
          ],
        },
      ],
    },
    FAR: {
      name: "Financial Accounting & Reporting",
      code: "FAR",
      difficulty: "Very High",
      studyHours: "150-180 hours",
      passRate: "44.54%",
      description:
        "Financial reporting framework, accounting principles, and financial statements",
      color: "green",
      topics: [
        {
          id: "conceptual",
          title: "Conceptual Framework & Standard-Setting",
          weight: "15-25%",
          subtopics: [
            "FASB Accounting Standards Codification",
            "Conceptual framework for financial reporting",
            "Fair value measurements",
            "Cash flow statements",
          ],
        },
        {
          id: "financial",
          title: "Financial Statement Accounts",
          weight: "50-60%",
          subtopics: [
            "Cash and cash equivalents",
            "Trade receivables and notes receivable",
            "Inventory and cost of goods sold",
            "Property, plant, and equipment",
            "Investments and fair value accounting",
            "Intangible assets and goodwill",
            "Payables and accrued liabilities",
            "Long-term debt and contingencies",
          ],
        },
        {
          id: "transactions",
          title: "Select Transactions",
          weight: "20-30%",
          subtopics: [
            "Business combinations",
            "Consolidations",
            "Foreign currency transactions",
            "Derivatives and hedging",
            "Leases",
            "Revenue recognition",
          ],
        },
        {
          id: "entities",
          title: "State & Local Governments",
          weight: "5-15%",
          subtopics: [
            "Governmental accounting concepts",
            "Fund accounting",
            "Financial reporting for governments",
            "Not-for-profit accounting",
          ],
        },
      ],
    },
    REG: {
      name: "Regulation",
      code: "REG",
      difficulty: "Medium",
      studyHours: "100-130 hours",
      passRate: "56.52%",
      description:
        "Federal taxation, business law, and professional responsibilities",
      color: "purple",
      topics: [
        {
          id: "individual",
          title: "Individual Taxation",
          weight: "15-25%",
          subtopics: [
            "Individual income tax overview",
            "Gross income inclusions and exclusions",
            "Deductions and losses",
            "Tax credits and payments",
            "Filing status and exemptions",
          ],
        },
        {
          id: "business",
          title: "Business Taxation",
          weight: "35-45%",
          subtopics: [
            "Corporate taxation",
            "Partnership taxation",
            "S corporation taxation",
            "Tax-exempt organizations",
            "Multi-state tax issues",
          ],
        },
        {
          id: "other",
          title: "Other Taxation Topics",
          weight: "5-15%",
          subtopics: [
            "Gift and estate taxation",
            "Tax research and communication",
            "Tax planning strategies",
            "Ethics in tax practice",
          ],
        },
        {
          id: "law",
          title: "Business Law",
          weight: "25-35%",
          subtopics: [
            "Agency relationships",
            "Contracts and sales",
            "Negotiable instruments",
            "Secured transactions",
            "Bankruptcy",
            "Corporate governance",
          ],
        },
      ],
    },
    OPT: {
      name: "Optional Disciplines",
      code: "OPT",
      difficulty: "Medium",
      studyHours: "90-120 hours",
      passRate: "—",
      description: "Choose one of three optional disciplines: BAR, ISC, or TCP",
      color: "indigo",
      topics: [
        {
          id: "opt-bar",
          title: "Business Analysis & Reporting (BAR)",
          weight: "—",
          subtopics: [
            "Understanding the Buyer/Investor",
            "Preparing Marketing Materials",
            "Deal Positioning and Value Proposition",
            "Buyer/Investor Outreach",
            "Roadshows",
            "Managing the Marketing Process",
          ],
        },
        {
          id: "opt-isc",
          title: "Information Systems & Control (ISC)",
          weight: "—",
          subtopics: [
            "Building Models",
            "Comparable Company Analysis",
            "Precedent Transactions",
            "Deal Structuring",
            "Financing",
            "Sensitivity and Scenario Analysis",
          ],
        },
        {
          id: "opt-tcp",
          title: "Tax Compliance & Planning (TCP)",
          weight: "—",
          subtopics: [
            "Understanding Term Sheets",
            "Deal Negotiation Tactics",
            "Drafting the Term Sheet",
            "Legal Considerations in Negotiation and Term Sheets",
            "Negotiation of Key Deal Terms",
            "Finalizing the Deal and Signing the Term Sheet",
            "Post Signing Adjustments",
          ],
        },
      ],
    },
  };

  const toggleTopic = (topicId: string) => {
    setExpandedTopics((prev) =>
      prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId]
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Very High":
        return "text-red-600 bg-red-50";
      case "High":
        return "text-orange-600 bg-orange-50";
      case "Medium":
        return "text-yellow-600 bg-yellow-50";
      default:
        return "text-green-600 bg-green-50";
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-red-50",
        border: "border-red-200",
        text: "text-red-600",
        button: "bg-red-500 hover:bg-red-600",
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        text: "text-green-600",
        button: "bg-red-500 hover:bg-red-600",
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-600",
        button: "bg-red-500 hover:bg-red-600",
      },
      indigo: {
        bg: "bg-red-50",
        border: "border-red-200",
        text: "text-red-600",
        button: "bg-red-500 hover:bg-red-600",
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="md:py-20 sm:py-16 py-10 bg-linear-to-br from-slate-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:mb-12 sm:mb-10 mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:text-4xl sm:text-3xl text-2xl font-bold text-slate-900 mb-4"
          >
            CPA Exam Structure & Syllabus
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sm:text-xl text-base text-slate-600 max-w-3xl mx-auto"
          >
            Master all four sections of the CPA exam with our comprehensive
            curriculum designed for Indian students
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {Object.entries(syllabusData).map(([key, section]) => {
            const colors = getColorClasses(section.color);
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `${colors.button} text-white shadow-lg transform scale-105`
                    : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                }`}
              >
                <div className="text-center">
                  <div className="font-bold">{section.code}</div>
                  <div className="text-xs opacity-80">
                    {section.name.split(" ")[0]}
                  </div>
                </div>
              </button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {(() => {
              const maybeSection = syllabusData[
                activeTab as keyof typeof syllabusData
              ] as (typeof syllabusData)[keyof typeof syllabusData] | undefined;
              const fallbackKey = Object.keys(
                syllabusData
              )[0] as keyof typeof syllabusData;
              const section = maybeSection ?? syllabusData[fallbackKey];
              const colors = getColorClasses(section.color);

              return (
                <>
                  <div
                    className={`${colors.bg} ${colors.border}  border-b p-6`}
                  >
                    <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-4">
                      <div>
                        <h3 className="sm:text-2xl text-xl lg:text-left text-center font-bold text-slate-900 mb-2">
                          {section.code} - {section.name}
                        </h3>
                        <p className="text-slate-600">{section.description}</p>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                          <ExclamationTriangleIcon className="w-5 h-5 text-orange-500" />
                          <div>
                            <p className="text-xs text-slate-500">Difficulty</p>
                            <p
                              className={`font-semibold sm:text-sm text-xs px-2 py-1 rounded ${getDifficultyColor(
                                section.difficulty
                              )}`}
                            >
                              {section.difficulty}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                          <ClockIcon className="w-5 h-5 text-red-500" />
                          <div>
                            <p className="text-xs text-slate-500">Study Time</p>
                            <p className="font-semibold text-sm text-slate-700">
                              {section.studyHours}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                          <ChartBarIcon className="w-5 h-5 text-green-500" />
                          <div>
                            <p className="text-xs text-slate-500">Pass Rate</p>
                            <p className="font-semibold text-sm text-slate-700">
                              {section.passRate}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sm:p-6 p-4">
                    <div className="space-y-4">
                      {section.topics.map((topic, index) => (
                        <motion.div
                          key={topic.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300"
                        >
                          <button
                            onClick={() => toggleTopic(topic.id)}
                            className="w-full p-4 text-left hover:bg-slate-50 transition-colors duration-200"
                          >
                            <div className="flex  items-center justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h4 className="font-semibold text-slate-800">
                                    {topic.title}
                                  </h4>
                                  <span
                                    className={`px-2 sm:py-1 py-0.5 rounded-full sm:text-xs text-nowrap text-[11px] font-medium ${colors.bg} ${colors.text}`}
                                  >
                                    {topic.weight}
                                  </span>
                                </div>
                              </div>
                              <motion.div
                                animate={{
                                  rotate: expandedTopics.includes(topic.id)
                                    ? 180
                                    : 0,
                                }}
                                transition={{ duration: 0.2 }}
                              >
                                <ChevronDownIcon className="w-5 h-5 text-slate-400" />
                              </motion.div>
                            </div>
                          </button>

                          <AnimatePresence>
                            {expandedTopics.includes(topic.id) && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="border-t border-slate-200 bg-slate-50"
                              >
                                <div className="p-4">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {topic.subtopics.map(
                                      (subtopic, subIndex) => (
                                        <motion.div
                                          key={subIndex}
                                          initial={{ opacity: 0, x: -10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{
                                            duration: 0.3,
                                            delay: subIndex * 0.05,
                                          }}
                                          className="flex items-center gap-2"
                                        >
                                          <CheckCircleIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                                          <span className="text-sm text-slate-600">
                                            {subtopic}
                                          </span>
                                        </motion.div>
                                      )
                                    )}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </>
              );
            })()}
          </motion.div>
        </AnimatePresence>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="bg-linear-to-r from-red-500 to-red-700 rounded-2xl sm:p-8 p-6 text-white">
            <div className="max-w-2xl mx-auto">
              <AcademicCapIcon className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-4">
                Get Complete CPA Syllabus & Study Plan
              </h3>
              <p className="text-red-100 mb-6">
                Download our comprehensive 50-page CPA study guide with detailed
                syllabus, exam tips, and personalized study timeline
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <LeadFormButton
                  formType="download-syllabus"
                  isSendOtp={true}
                  courseId="CPA"
                  className="group  text-red-600 sm:px-8 px-5 sm:py-4 py-2 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <DocumentArrowDownIcon className="w-5 h-5" />
                  Download Full Syllabus
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ChevronRightIcon className="w-4 h-4" />
                  </motion.div>
                </LeadFormButton>

                <div className="flex items-center gap-2 text-red-100 text-sm">
                  <CheckCircleIcon className="w-4 h-4" />
                  <span>Free Download • No Spam • Instant Access</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showLeadModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            >
              <div className="text-center mb-6">
                <DocumentArrowDownIcon className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Download CPA Complete Guide
                </h3>
                <p className="text-slate-600">
                  Get instant access to our comprehensive CPA study materials
                </p>
              </div>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Download Now (Free)
                </button>
              </form>

              <div className="text-center mt-4">
                <p className="text-sm text-slate-500">
                  ✅ Instant download • ✅ 50+ pages • ✅ Study timeline
                  included
                </p>
              </div>

              <button
                onClick={() => setShowLeadModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
