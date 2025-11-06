/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useEffect, useRef } from "react";
import { useLeadForm } from "@/context/LeadFormContext";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter, usePathname } from "next/navigation";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type FormConfig = {
  title: string;
  description: string;
  features: Feature[];
  formTitle: string;
  submitButtonText: string;
  formName: string;
};

const formConfigs: Record<string, FormConfig> = {
  general: {
    title: "Begin Your Journey to Success",
    description:
      "Provide your details and one of our expert career counselors will get in touch with you shortly.",
    features: [
      {
        title: "Personalized Counseling",
        description: "Tailored advice to match your career aspirations",
        icon: (
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6.253v11.494m-9-5.747h18"
            ></path>
          </svg>
        ),
      },
      {
        title: "95% Pass Rate",
        description: "Our students consistently achieve excellence",
        icon: (
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            ></path>
          </svg>
        ),
      },
      {
        title: "Corporate Connections",
        description: "Extensive network for premium placement opportunities",
        icon: (
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
        ),
      },
      {
        title: "Expert Mentorship",
        description:
          "Learn from industry professionals with real-world experience",
        icon: (
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
        ),
      },
    ],
    formTitle: "Get in Touch",
    submitButtonText: "Submit",
    formName: "Lead Form Modal",
  },
  "download-syllabus": {
    title: "Download Syllabus",
    description:
      "Get the latest syllabus for your chosen course. Fill in your details to download.",
    features: [],
    formTitle: "Download Syllabus",
    submitButtonText: "Download",
    formName: "Syllabus Download",
  },
  "download-placement-report": {
    title: "Download Placement Report",
    description:
      "See the success of our students. Get the placement report now.",
    features: [],
    formTitle: "Download Placement Report",
    submitButtonText: "Download",
    formName: "Placement Report Download",
  },
  "book-webinar": {
    title: "Book a Webinar or Demo",
    description:
      "Join our upcoming webinar or book a personalized demo to learn more.",
    features: [],
    formTitle: "Book a Webinar or Demo",
    submitButtonText: "Book Now",
    formName: "Webinar/Demo Booking",
  },
};

const LeadFormModal = () => {
  const {
    isOpen,
    closeLeadForm,
    formData,
    updateFormData,
    formStep,
    setFormStep,
    formType,
    isSendOtp,
  } = useLeadForm();
  const router = useRouter();
  const pathname = usePathname();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [leadId, setLeadId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const [ipAddress, setIpAddress] = useState("");
  const [sessionReferrer, setSessionReferrer] = useState("");

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };

    fetchIp();
    setSessionReferrer(document.referrer || "direct");
  }, []);

  useEffect(() => {
    if (
      pathname.startsWith("/thank-you") ||
      pathname.startsWith("/a/thank-you")
    ) {
      closeLeadForm();
    }
  }, [pathname, closeLeadForm]);

  useEffect(() => {
    if (isOpen) {
      const utm_source = localStorage.getItem("utm_source");
      const utm_medium = localStorage.getItem("utm_medium");
      const utm_campaign = localStorage.getItem("utm_campaign");
      const utm_term = localStorage.getItem("utm_term");
      const utm_content = localStorage.getItem("utm_content");
      updateFormData({
        utm_source: utm_source || "",
        utm_medium: utm_medium || "",
        utm_campaign: utm_campaign || "",
        utm_term: utm_term || "",
        utm_content: utm_content || "",
      });
    }
  }, [isOpen, updateFormData]);

  useEffect(() => {
    if (inputRef.current) {
      const autocompleteInstance = new google.maps.places.Autocomplete(
        inputRef.current,
        {
          types: ["(cities)"],
          componentRestrictions: { country: "in" },
        }
      );
      setAutocomplete(autocompleteInstance);
      autocompleteInstance.addListener("place_changed", () => {
        const place = autocompleteInstance.getPlace();
        if (place && place.formatted_address) {
          updateFormData({ location: place.formatted_address });
        }
      });
    }
  }, [isOpen, formStep, updateFormData]);

  const handlePhoneChange = (value: string) => {
    updateFormData({ phone: value });
    setPhoneError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneError) {
      return;
    }
    setIsSubmitting(true);

    const config = formConfigs[formType] || formConfigs.general;

    const leadData = {
      form_id: "7e68ae1a-5765-489c-9b62-597b478c0fa0", // Hardcoded for now
      visitor_id: "68303d80d71ba95da713026e", // Hardcoded for now
      isSendOtp: isSendOtp,
      answers: {
        full_name: formData.name,
        phone_number: formData.phone,
        email_address: formData.email,
        dob: formData.dob,
        gender: formData.gender,
        education: formData.education,
        professional: formData.professional,
        course_id: formData.course,
        study_mode: formData.studyMode || 'Online',
        accept_terms: formData.agreeToTerms,
        dynamic_fields: {
          how_did_you_hear_about_us: formData.howHeard,
        },
      },
      utm_data: {
        utm_source: formData.utm_source,
        utm_medium: formData.utm_medium,
        utm_campaign: formData.utm_campaign,
        utm_term: formData.utm_term,
        utm_content: formData.utm_content,
        utm_tag: "", // Not available in form
        utm_keyword: "", // Not available in form
      },
      location_data: {
        country: "India", // Hardcoded for now
        state: "", // To be implemented with location services
        city: formData.location,
        pin_code: "", // To be implemented with location services
      },
      session_referrer: sessionReferrer,
      ip_address: ipAddress,
    };

    try {
      const response = await fetch(
        "https://api.starforze.com/api/leads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(leadData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        // Log the full lead creation response for debugging
        console.log("Lead created successfully:", result);
        const id = result?.data?._id ?? result?.data?.id ?? null;
        setLeadId(id);
        console.log("Captured leadId:", id);
        setFormStep('otp');
      } else {
        const errorData = await response.json();
        console.error("Form submission failed:", response.status, errorData);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOtpVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadId) {
      setOtpError("Lead ID not found. Please try again.");
      return;
    }

    if (otp.length !== 4) {
      setOtpError("OTP must be 4 digits.");
      return;
    }

    setIsSubmitting(true);
    setOtpError("");
    console.log("Verifying OTP with leadId:", leadId, "otp:", otp);

    try {
      const response = await fetch(
        `https://api.starforze.com/api/leads/${leadId}/verify-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ otp }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("OTP verification success:", result);
        // Determine course slug for dynamic thank-you routing
        const inASection = pathname.startsWith("/a");
        const detectCourseSlug = () => {
          if (pathname.includes("/cma-usa")) return "cma-usa";
          if (pathname.includes("/cpa-us")) return "cpa-us";
          if (pathname.includes("/acca-uk")) return "acca-uk";
          if (pathname.includes("/cia")) return "cia";
          const normalized = (formData.course || "").trim().toLowerCase();
          if (normalized.includes("cma")) return "cma-usa";
          if (normalized.includes("cpa")) return "cpa-us";
          if (normalized.includes("acca")) return "acca-uk";
          if (normalized.includes("cia")) return "cia";
          return "cma-usa"; // default to most common course if unknown
        };
        const courseSlug = detectCourseSlug();
        const target = inASection
          ? `/a/thank-you/${courseSlug}`
          : `/thank-you/${courseSlug}`;
        router.push(target);
      } else {
        const errorData = await response.json();
        console.error("OTP verification failed:", response.status, errorData);
        setOtpError(errorData.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      setOtpError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendOtp = async () => {
    setIsSubmitting(true);
    setOtpError("");

    const config = formConfigs[formType] || formConfigs.general;

    const leadData = {
      form_id: "7e68ae1a-5765-489c-9b62-597b478c0fa0", // Hardcoded for now
      visitor_id: "68303d80d71ba95da713026e", // Hardcoded for now
      isSendOtp: isSendOtp,
      answers: {
        full_name: formData.name,
        phone_number: formData.phone,
        email_address: formData.email,
        course_id: "CMA USA",
      },
      utm_data: {
        utm_source: formData.utm_source,
        utm_medium: formData.utm_medium,
        utm_campaign: formData.utm_campaign,
        utm_term: formData.utm_term,
        utm_content: formData.utm_content,
        utm_tag: "", // Not available in form
        utm_keyword: "", // Not available in form
      },
      location_data: {
        country: "India", // Hardcoded for now
        state: "", // To be implemented with location services
        city: formData.location,
        pin_code: "", // To be implemented with location services
      },
      session_referrer: sessionReferrer,
      ip_address: ipAddress,
    };

    try {
      const response = await fetch(
        "https://api.starforze.com/api/leads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(leadData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        // Log the response for resend OTP flow
        console.log("Resend OTP - lead creation response:", result);
        const id = result?.data?._id ?? result?.data?.id ?? null;
        setLeadId(id);
        console.log("Captured leadId (resend):", id);
        setOtp("");
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChangeNumber = () => {
    setFormStep("details");
  };

  if (!isOpen) return null;

  const config = formConfigs[formType] || formConfigs.general;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closeLeadForm}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl mx-auto overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left side - Branding and Info (hidden on mobile) */}
              <div className="hidden md:block bg-gradient-to-br from-red-700 to-red-900 p-8 text-white">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-3xl font-extrabold mb-4 tracking-tight">
                      {config.title}
                    </h2>
                    <p className="text-red-200 mb-6 text-lg">
                      {config.description}
                    </p>

                    {/* Features section */}
                    {config.features.length > 0 && (
                      <div className="space-y-4">
                        {config.features.map((feature, index) => (
                          <div
                            key={index}
                            className="transform transition-all duration-300 hover:translate-x-1 hover:shadow-lg bg-red-800/50 rounded-lg p-3 border-l-4 border-red-400"
                          >
                            <div className="flex items-start">
                              <div className="bg-gradient-to-r from-red-500 to-red-400 p-2 rounded-lg shadow-md mr-3">
                                {feature.icon}
                              </div>
                              <div>
                                <h4 className="font-bold text-white text-lg">
                                  {feature.title}
                                </h4>
                                <p className="text-red-100 text-sm">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Testimonial section */}
                  <div className="mt-6 bg-gradient-to-r from-red-600 to-red-800 p-4 rounded-lg border border-red-400 shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-red-300 opacity-20 rounded-full -mr-8 -mt-8"></div>
                    <div className="flex items-center justify-center mb-2">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-red-300 border-2 border-white flex items-center justify-center text-xs font-bold text-red-800">
                          JD
                        </div>
                        <div className="w-8 h-8 rounded-full bg-red-200 border-2 border-white flex items-center justify-center text-xs font-bold text-red-800">
                          KP
                        </div>
                        <div className="w-8 h-8 rounded-full bg-red-100 border-2 border-white flex items-center justify-center text-xs font-bold text-red-800">
                          MR
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center text-xs font-bold text-red-800">
                          +
                        </div>
                      </div>
                    </div>
                    <p className="text-white font-medium text-center text-sm">
                      Join over{" "}
                      <span className="font-bold text-red-200">
                        10,000+
                      </span>{" "}
                      successful students who trusted NorthStar Academy for
                      their career growth
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side - Form */}
              <div className="p-8">
                {formStep === "details" && (
                  <>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      {config.formTitle}
                    </h3>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            updateFormData({ name: e.target.value })
                          }
                          className="w-full px-4 py-2.5 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) =>
                            updateFormData({ email: e.target.value })
                          }
                          className="w-full px-4 py-2.5 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="Enter your email address"
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-black mb-1"
                        >
                          Phone Number
                        </label>
                        <PhoneInput
                          country={"in"}
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          containerClass="w-full"
                          inputClass="w-full px-4 py-2.5 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="location"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Location
                        </label>
                        <input
                          ref={inputRef}
                          type="text"
                          id="location"
                          value={formData.location}
                          onChange={(e) =>
                            updateFormData({ location: e.target.value })
                          }
                          className="w-full px-4 py-2.5 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="Enter your city"
                          required
                        />
                      </div>



                      <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-4 rounded-md transition duration-300 flex items-center justify-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                        ) : null}
                        {isSubmitting ? "Processing..." : config.submitButtonText}
                      </button>
                    </form>
                  </>
                )}

                {formStep === "otp" && (
                  <>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Verify Your Number
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Enter the 4-digit OTP sent to{" "}
                      <span className="font-bold text-gray-900">
                        {formData.phone}
                      </span>
                    </p>
                    <form onSubmit={handleOtpVerification}>
                      <div className="mb-4">
                        <label
                          htmlFor="otp"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Enter OTP
                        </label>
                        <input
                          type="text"
                          id="otp"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          className="w-full px-4 py-2.5 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="Enter 4-digit OTP"
                          required
                          maxLength={4}
                        />
                        {otpError && (
                          <p className="mt-1 text-sm text-red-600">
                            {otpError}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-4 rounded-md transition duration-300 flex items-center justify-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                        ) : null}
                        {isSubmitting ? "Verifying..." : "Verify OTP"}
                      </button>
                    </form>
                    <div className="mt-4 text-sm text-center">
                      <button
                        onClick={handleChangeNumber}
                        className="text-red-600 hover:underline"
                      >
                        Wrong number? Change it
                      </button>
                      <span className="mx-2 text-gray-400">|</span>
                      <button
                        onClick={handleResendOtp}
                        className="text-red-600 hover:underline"
                      >
                        Resend OTP
                      </button>
                    </div>
                  </>
                )}

                {formStep === "thankyou" && (
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Thank You!
                    </h2>
                    <p className="text-gray-600">
                      Your submission has been received.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeadFormModal;