"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Globe, TrendingUp, Users, Target } from "lucide-react";
import LeadFormButton from "../LeadFormButton";

const CIAComparison = () => {
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);

  // Comparison data based on user requirements
  const comparisonData = {
    "Audit Specialization": {
      CIA: {
        value: "✅",
        score: 10,
        detail: "Deep internal audit expertise",
        color: "text-green-600",
      },
      CA: {
        value: "Medium",
        score: 6,
        detail: "General audit knowledge",
        color: "text-yellow-600",
      },
      CPA: {
        value: "High",
        score: 8,
        detail: "External audit focus",
        color: "text-red-600",
      },
      CMA: {
        value: "Low",
        score: 3,
        detail: "Limited audit content",
        color: "text-red-600",
      },
    },
    Duration: {
      CIA: {
        value: "Short",
        score: 9,
        detail: "6-12 months",
        color: "text-green-600",
      },
      CA: {
        value: "Very Long",
        score: 2,
        detail: "3-5 years",
        color: "text-red-600",
      },
      CPA: {
        value: "Medium",
        score: 7,
        detail: "12-18 months",
        color: "text-red-600",
      },
      CMA: {
        value: "Short",
        score: 9,
        detail: "6-12 months",
        color: "text-green-600",
      },
    },
    "Global Acceptance": {
      CIA: {
        value: "✅✅",
        score: 10,
        detail: "190+ countries",
        color: "text-green-600",
      },
      CA: {
        value: "Low",
        score: 4,
        detail: "India & Commonwealth",
        color: "text-red-600",
      },
      CPA: {
        value: "✅",
        score: 9,
        detail: "100+ countries",
        color: "text-green-600",
      },
      CMA: {
        value: "✅",
        score: 8,
        detail: "100+ countries",
        color: "text-green-600",
      },
    },
    "Career Focus": {
      CIA: {
        value: "Internal Audit",
        score: 10,
        detail: "Risk & compliance specialist",
        color: "text-green-600",
      },
      CA: {
        value: "General Practice",
        score: 6,
        detail: "Broad accounting practice",
        color: "text-yellow-600",
      },
      CPA: {
        value: "Public Accounting",
        score: 8,
        detail: "External audit & tax",
        color: "text-red-600",
      },
      CMA: {
        value: "Management",
        score: 7,
        detail: "Cost & management accounting",
        color: "text-red-600",
      },
    },
    "Salary Potential": {
      CIA: {
        value: "$75K - $140K",
        score: 8,
        detail: "High-demand niche",
        color: "text-green-600",
      },
      CA: {
        value: "$35K - $80K",
        score: 5,
        detail: "India market rates",
        color: "text-yellow-600",
      },
      CPA: {
        value: "$85K - $150K",
        score: 9,
        detail: "Highest overall",
        color: "text-green-600",
      },
      CMA: {
        value: "$65K - $120K",
        score: 7,
        detail: "Management roles",
        color: "text-red-600",
      },
    },
    "Experience Requirement": {
      CIA: {
        value: "2 Years",
        score: 8,
        detail: "Flexible timing",
        color: "text-green-600",
      },
      CA: {
        value: "3 Years",
        score: 6,
        detail: "Articleship mandatory",
        color: "text-yellow-600",
      },
      CPA: {
        value: "1-2 Years",
        score: 9,
        detail: "State dependent",
        color: "text-green-600",
      },
      CMA: {
        value: "2 Years",
        score: 8,
        detail: "Management experience",
        color: "text-green-600",
      },
    },
  };

  const certifications = ["CIA", "CA", "CPA", "CMA"];
  const features = Object.keys(comparisonData);

  // CIA advantages
  const ciaAdvantages = [
    {
      icon: Target,
      title: "Audit Specialization Leader",
      description: "Only certification focused 100% on internal audit",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Globe,
      title: "Highest Global Recognition",
      description: "Accepted in 190+ countries worldwide",
      color: "from-red-500 to-cyan-600",
    },
    {
      icon: Clock,
      title: "Fastest Completion",
      description: "Complete in 6-12 months vs 3-5 years for CA",
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: TrendingUp,
      title: "High ROI Career",
      description: "Specialized skills command premium salaries",
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section className="py-8 md:py-20 bg-gradient-to-br from-slate-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent">
              CIA vs Other Certifications
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            See how CIA compares with CA, CPA, and CMA across key factors that
            matter for your career
          </p>
        </motion.div>

        {/* Comparison Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden mb-16"
        >
          <div className="overflow-x-auto">
            <div className="min-w-[640px]">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-6">
                <div className="grid grid-cols-5 gap-2 md:gap-4 items-center">
                  <div className="font-bold text-sm md:text-lg">Feature</div>
                  {certifications.map((cert) => (
                    <div key={cert} className="text-center">
                      <div className="font-bold text-sm md:text-lg">{cert}</div>
                      {cert === "CIA" && (
                        <div className="text-[10px] md:text-xs bg-green-500 text-white rounded-full px-2 md:px-3 py-1 mt-1 md:mt-2 inline-block">
                          ✅ BEST
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-slate-200">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="grid grid-cols-5 gap-2 md:gap-4 p-3 md:p-6 hover:bg-slate-50 transition-colors duration-200"
                  >
                    <div className="font-semibold text-xs md:text-base text-slate-900 flex items-center">
                      {feature}
                    </div>
                    {certifications.map((cert) => {
                      const data =
                        comparisonData[feature as keyof typeof comparisonData][
                          cert as keyof (typeof comparisonData)[keyof typeof comparisonData]
                        ];
                      const cellKey = `${feature}-${cert}`;

                      return (
                        <div
                          key={cert}
                          className="text-center relative"
                          onMouseEnter={() => setHoveredCell(cellKey)}
                          onMouseLeave={() => setHoveredCell(null)}
                        >
                          <div
                            className={`font-bold text-sm md:text-lg ${data.color} mb-1`}
                          >
                            {data.value}
                          </div>
                          <div className="text-[10px] md:text-sm text-slate-600">
                            {data.detail}
                          </div>

                          {/* Hover tooltip */}
                          {hoveredCell === cellKey && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="absolute z-10 bg-slate-900 text-white p-3 rounded-lg shadow-lg -top-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                            >
                              <div className="text-sm font-semibold">
                                Score: {data.score}/10
                              </div>
                              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CIA Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-16">
          {ciaAdvantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${advantage.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <advantage.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">
                {advantage.title}
              </h3>
              <p className="text-slate-600 text-sm">{advantage.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Winner Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-4 md:p-8 text-white text-center mb-16"
        >
          <div className="text-6xl mb-4">🏆</div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            CIA: The Clear Winner for Internal Audit
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
            <div>
              <div className="text-2xl md:text-3xl font-bold">190+</div>
              <div className="opacity-90">Countries Recognition</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">6-12</div>
              <div className="opacity-90">Months to Complete</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">$140K</div>
              <div className="opacity-90">Average Senior Salary</div>
            </div>
          </div>
        </motion.div>

        {/* Career Path Quiz CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-red-600 to-purple-600 rounded-3xl p-8 text-white text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-5xl mb-6">🎯</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Not Sure Which Path is Right for You?
            </h3>
            <p className="text-md md:text-xl opacity-90 mb-8">
              Take our personalized Career Path Quiz and get a customized
              recommendation based on your goals, experience, and career
              aspirations
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LeadFormButton
                formType="talk-to-an-expert"
                isSendOtp={true}
                courseId="CIA"
                className="text-red-600 px-8 py-4 rounded-xl font-bold text-md md:text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Users className="w-6 h-6" />
                Talk to Career Expert
              </LeadFormButton>
            </div>

            <div className="mt-6 text-sm opacity-75">
              ⚡ Get results in 2 minutes • 🎯 Personalized recommendations • 📊
              Career roadmap included
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CIAComparison;
