"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  BuildingOfficeIcon,
  GlobeAltIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import LeadFormButton from "../LeadFormButton";

const CMAGlobalPlacements = () => {
  const [currentOfferSlide, setCurrentOfferSlide] = useState(0);

  const companies = Array.from({ length: 23 }, (_, i) => ({
    name: `Logo ${i + 1}`,
    logo: `/logos/logo${i + 1}.png`,
  }));

  const offerLetters = [
    {
      id: 1,
      studentName: "Sharath MS, CMA",
      company: "KPMG",
      position: "Analyst",
      package: "₹12.5 LPA",
      location: "Bengaluru",
      companyLogo: "/logos/logo15.png",
      image: "/placements/placement1.webp",
      joiningDate: "June 2024",
      highlights: [
        "Grateful start to professional journey",
        "Role-aligned CMA skills",
        "Big 4 exposure",
      ],
    },
    {
      id: 2,
      studentName: "Riya Joseph, CMA",
      company: "WNS",
      position: "Finance Executive",
      package: "₹8.5 LPA",
      location: "Kochi",
      companyLogo: "/logos/wns.png",
      image: "/placements/placement2.webp",
      joiningDate: "July 2024",
      highlights: [
        "Confidence to build career",
        "CMA USA knowledge applied",
        "Corporate finance role",
      ],
    },
    {
      id: 3,
      studentName: "Sandeep, CMA",
      company: "WNS",
      position: "Associate",
      package: "₹10.2 LPA",
      location: "Bengaluru",
      companyLogo: "/logos/wns.png",
      image: "/placements/placement3.webp",
      joiningDate: "August 2024",
      highlights: [
        "From classes to real accounts",
        "Life-changing journey",
        "Advisory team",
      ],
    },
    {
      id: 4,
      studentName: "Bhuvan Sai, CMA",
      company: "KPMG",
      position: "Finance Analyst",
      package: "₹9.8 LPA",
      location: "Bengaluru",
      companyLogo: "/logos/logo15.png",
      image: "/placements/placement4.webp",
      joiningDate: "September 2024",
      highlights: [
        "Turned CMA knowledge into corporate role",
        "Proudest moment",
        "Global brand",
      ],
    },
    {
      id: 5,
      studentName: "Anas KP, CMA",
      company: "KPMG",
      position: "Finance Analyst",
      package: "₹9.5 LPA",
      location: "Bengaluru",
      companyLogo: "/logos/logo15.png",
      image: "/placements/Anas K P.png",
      joiningDate: "2024",
      highlights: [
        "Turned CMA knowledge into a corporate career",
        "Proud moment at HP",
        "Strong technical foundation",
      ],
    },
    {
      id: 6,
      studentName: "Manya Kapoor, CMA",
      company: "KPMG",
      position: "Analyst",
      package: "₹11.2 LPA",
      location: "Mumbai",
      companyLogo: "/logos/logo15.png",
      image: "/placements/Manya Kapoor.png",
      joiningDate: "2024",
      highlights: [
        "Dream role at KPMG",
        "CMA concepts applied in real world",
        "Corporate-ready mindset",
      ],
    },
    {
      id: 7,
      studentName: "Sukanya Kanchan, CMA",
      company: "Befree",
      position: "Global Associate",
      package: "₹8.8 LPA",
      location: "Hyderabad",
      companyLogo: "/logos/befree.png",
      image: "/placements/Sukanya Kanchan.png",
      joiningDate: "2024",
      highlights: [
        "Mentorship-driven growth",
        "Global role at Befree",
        "Clarity and career direction",
      ],
    },
    {
      id: 8,
      studentName: "Nisha Kumari, CMA",
      company: "KPMG",
      position: "Finance Associate",
      package: "₹9.0 LPA",
      location: "Ahmedabad",
      companyLogo: "/logos/logo15.png",
      image: "/placements/Nisha Kumari.png",
      joiningDate: "2024",
      highlights: [
        "Life-changing CMA journey",
        "Real corporate exposure",
        "Strong accounting skills",
      ],
    },
    {
      id: 9,
      studentName: "Vinyas, CMA",
      company: "KPMG",
      position: "Accounts Associate",
      package: "₹9.0 LPA",
      location: "Bengaluru",
      companyLogo: "/logos/logo15.png",
      image: "/placements/Vinyas.png",
      joiningDate: "2024",
      highlights: [
        "Applied CMA concepts in real accounts",
        "Career-transforming journey",
        "Strong analytical foundation",
      ],
    },
    {
      id: 10,
      studentName: "Sharath MS, CMA",
      company: "KPMG",
      position: "Finance Analyst",
      package: "₹8.5 LPA",
      location: "Chennai",
      companyLogo: "/logos/logo15.png",
      image: "/placements/Sharath M S.png",
      joiningDate: "2024",
      highlights: [
        "Exciting and career-oriented learning",
        "Started professional journey at WNS",
        "Corporate-ready approach",
      ],
    },
  ];

  const placementStats = [
    { label: "Average Salary Hike", value: "82.6%", icon: "💰" },
    { label: "Highest Package", value: "₹45 LPA", icon: "🚀" },
    { label: "Big 4 Placements", value: "78%", icon: "🏢" },
    { label: "Global Opportunities", value: "156+", icon: "🌍" },
  ];

  const nextOfferSlide = () => {
    setCurrentOfferSlide((prev) => (prev + 1) % offerLetters.length);
  };

  const prevOfferSlide = () => {
    setCurrentOfferSlide(
      (prev) => (prev - 1 + offerLetters.length) % offerLetters.length
    );
  };

  return (
    <section className="py-8 md:py-20 bg-gradient-to-br from-red-50 via-red-50 to-red-50">
      <div className="max-w-7xl mx-auto ">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <GlobeAltIcon className="w-10 h-10 md:w-12 md:h-12 text-red-600 mr-4" />
              <h2 className="text-xl md:text-4xl font-bold text-gray-900">
                Where Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
                  CMAs Work Today
                </span>
              </h2>
            </div>
            <p className="text-md md:text-xl text-gray-600 max-w-3xl mx-auto">
              Join the elite league of CMAs working at world&apos;s top
              companies across the globe
            </p>
          </motion.div>

          {/* Placement Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mb-16"
          >
            {placementStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-xl md:text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Rolling Company Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Trusted by Leading Organizations Worldwide
            </h3>
            <div className="relative overflow-hidden">
              <motion.div
                animate={{ x: [-1000, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex space-x-12 items-center"
              >
                {[...companies, ...companies].map((company, index) => (
                  <div key={index} className="flex-shrink-0 relative w-40 h-20">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      fill
                      className="object-contain"
                      sizes="160px"
                      priority={index < 6}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="px-2 sm:px-6 lg:px-8">
          {/* Offer Letter Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
              Recent Placement Success Stories
            </h3>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <motion.div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentOfferSlide * 100}%)`,
                  }}
                >
                  {offerLetters.map((offer) => (
                    <div key={offer.id} className="w-full flex-shrink-0">
                      <div className="bg-white rounded-3xl p-6 md:p-12 shadow-xl border border-gray-100 mx-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                          {/* Left Side - Offer Details */}
                          <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-100 to-red-100 rounded-full flex items-center justify-center">
                                <BuildingOfficeIcon className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
                              </div>
                              <div>
                                <h4 className="text-base md:text-2xl font-bold text-gray-900">
                                  {offer.studentName}
                                </h4>
                                <p className="text-gray-600">
                                  {offer.location}
                                </p>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-green-50 to-red-50 rounded-2xl p-6 border border-green-200">
                              <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 bg-white rounded-lg shadow-sm relative">
                                  <Image
                                    src={offer.companyLogo}
                                    alt={`${offer.studentName} placed at ${offer.company}`}
                                    fill
                                    className="object-contain p-1"
                                    sizes="48px"
                                    priority={offer.id === 1}
                                  />
                                </div>
                                <div className="text-right">
                                  <div className="text-xl md:text-2xl font-bold text-green-600">
                                    {offer.package}
                                  </div>
                                  <div className="text-sm text-gray-600">
                                    Annual Package
                                  </div>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-gray-600">
                                    Company:
                                  </span>
                                  <span className="font-medium text-black">
                                    {offer.company}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">
                                    Position:
                                  </span>
                                  <span className="font-medium text-black">
                                    {offer.position}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">
                                    Joining:
                                  </span>
                                  <span className="font-medium text-black">
                                    {offer.joiningDate}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-3">
                              <h5 className="font-bold text-gray-900">
                                Key Highlights:
                              </h5>
                              {offer.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-center">
                                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                                  <span className="text-gray-700">
                                    {highlight}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Right Side - Placement Image Preview */}
                          <div className="relative">
                            <motion.div
                              initial={{ opacity: 0, scale: 0.95 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6 }}
                              className="relative"
                            >
                              <div className=" overflow-hidden">
                                <div className="relative w-full h-72 md:h-96">
                                  <Image
                                    src={offer.image}
                                    alt={`${offer.studentName} placed at ${offer.company}`}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority={offer.id === 1}
                                  />
                                </div>
                              </div>

                              {/* Floating Success Badge */}
                              <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full p-3 h-10 w-10 text-center shadow-lg"
                              >
                                <span className="text-sm font-bold">✓</span>
                              </motion.div>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevOfferSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={nextOfferSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <ChevronRightIcon className="w-6 h-6 text-gray-600" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {offerLetters.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentOfferSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentOfferSlide ? "bg-red-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Micro CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-3xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Want Guidance for Big 4 Placement?
              </h3>
              <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
                Get personalized career guidance from our placement experts who
                have helped 500+ students land their dream jobs
              </p>
              <LeadFormButton
                formType="download-placement-report"
                isSendOtp={true}
                variant="outline"
                className="text-sm md:text-md"
              >
                Download Placement Report
              </LeadFormButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CMAGlobalPlacements;
