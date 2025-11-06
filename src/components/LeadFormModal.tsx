"use client";
import React, { useState, useEffect, useRef } from "react";
import { useLeadForm } from "@/context/LeadFormContext";
import { useRouter, usePathname } from "next/navigation";
import BrandingPanel from "./lead-form/BrandingPanel";
import DetailsForm from "./lead-form/DetailsForm";
import OtpForm from "./lead-form/OtpForm";
import { formConfigs, FormType, FormConfig } from "./lead-form/formConfigs";

// formConfigs now imported from ./lead-form/formConfigs for easy editing and reuse
// Helper: safely resolve config for a potentially untyped formType
const FORM_TYPES: readonly FormType[] = [
  "general",
  "download-syllabus",
  "download-placement-report",
  "download-hackdoc",
  "book-webinar",
] as const;

const isFormType = (t: string): t is FormType => {
  return (FORM_TYPES as readonly string[]).includes(t);
};

const getConfigFor = (t: string): FormConfig => {
  return formConfigs[isFormType(t) ? t : "general"];
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

    // config resolved via getConfigFor(formType) if needed

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

    // config resolved via getConfigFor(formType) if needed

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

  const config = getConfigFor(formType);

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
              <BrandingPanel
                title={config.title}
                description={config.description}
                features={config.features}
              />

              {/* Right side - Form */}
              <div className="p-8">
                {formStep === "details" && (
                  <DetailsForm
                    formTitle={config.formTitle}
                    submitButtonText={config.submitButtonText}
                    formData={formData}
                    updateFormData={updateFormData}
                    handleSubmit={handleSubmit}
                    handlePhoneChange={handlePhoneChange}
                    phoneError={phoneError}
                    isSubmitting={isSubmitting}
                    inputRef={inputRef as unknown as React.RefObject<HTMLInputElement | null>}
                  />
                )}

                {formStep === "otp" && (
                  <OtpForm
                    phone={formData.phone}
                    otp={otp}
                    setOtp={setOtp}
                    otpError={otpError}
                    isSubmitting={isSubmitting}
                    onVerify={handleOtpVerification}
                    onChangeNumber={handleChangeNumber}
                    onResend={handleResendOtp}
                  />
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