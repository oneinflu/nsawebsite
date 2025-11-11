/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
    isCourseLocked,
    setIsCourseLocked,
    suppressThankYouOnOtp,
    afterOtpAction,
  } = useLeadForm();
  const router = useRouter();
  const pathname = usePathname();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [leadId, setLeadId] = useState<string | null>(null);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [editPhoneValue, setEditPhoneValue] = useState("");
  const [editDialCode, setEditDialCode] = useState("91");
  const inputRef = useRef<HTMLInputElement>(null);
  const [ipAddress, setIpAddress] = useState("");
  const [sessionReferrer, setSessionReferrer] = useState("");
  const [otpNotice, setOtpNotice] = useState<string>("");

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

  // Prefill course_id based on URL unless base "/" (show selector)
  useEffect(() => {
    if (!isOpen) return;
    if (formData.course) return; // already set via button or prior state
    const path = pathname || "/";
    if (path === "/") return; // base URL -> selector visible
    const lower = path.toLowerCase();
    let detected: string | null = null;
    if (lower.includes("cpa")) detected = "CPA";
    else if (lower.includes("cma")) detected = "CMA USA";
    else if (lower.includes("acca")) detected = "ACCA";
    else if (lower.includes("enrolled-agent") || lower.includes("ea")) detected = "EA";
    else if (lower.includes("cfa-us") || lower.includes("cfa")) detected = "CFA";
    else if (lower.includes("cia")) detected = "CIA";
    if (detected) {
      updateFormData({ course: detected });
      setIsCourseLocked(true);
    }
  }, [isOpen, pathname, formData.course, updateFormData, setIsCourseLocked]);

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

  // Google Places autocomplete removed: manual input or IP-based detection handled in DetailsForm

  const handlePhoneChange = (value: string, country?: { dialCode?: string }) => {
    const digitsOnly = (value || "").replace(/\D/g, "");
    const dial = (country?.dialCode || formData.country_code || "").replace(/\D/g, "");
    // Derive local number for validation
    const local = digitsOnly.startsWith(dial) ? digitsOnly.slice(dial.length) : digitsOnly;
    // Basic validation: for India (91), enforce 10-digit local number
    if ((dial || "91") === "91" && local.length !== 10) {
      setPhoneError("Please enter a valid 10-digit Indian mobile number");
    } else {
      setPhoneError("");
    }
    updateFormData({ phone: digitsOnly, country_code: dial || "91" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate phone before submission
    const countryCode = (formData.country_code || "").replace(/\D/g, "") || "91";
    const fullDigits = (formData.phone || "").replace(/\D/g, "");
    const localPhoneForCheck = fullDigits.startsWith(countryCode)
      ? fullDigits.slice(countryCode.length)
      : fullDigits;
    if (countryCode === "91" && localPhoneForCheck.length !== 10) {
      setPhoneError("Please enter a valid 10-digit Indian mobile number");
      return;
    }
    if (!localPhoneForCheck) {
      setPhoneError("Please enter your phone number");
      return;
    }
    if (phoneError) {
      return;
    }
    setIsSubmitting(true);

    // config resolved via getConfigFor(formType) if needed

    // Derive country_code and local phone number (without country code)
    const localPhone = fullDigits.startsWith(countryCode)
      ? fullDigits.slice(countryCode.length)
      : fullDigits;

    const leadData = {
      form_id: "7e68ae1a-5765-489c-9b62-597b478c0fa0", // Hardcoded for now
      visitor_id: "68303d80d71ba95da713026e", // Hardcoded for now
      isSendOtp: isSendOtp,
      answers: {
        full_name: formData.name,
        // Send phone_number without country code and add country_code separately
        phone_number: localPhone,
        country_code: countryCode,
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
        // If calculators gating is active, suppress thank-you and run custom action
        if (suppressThankYouOnOtp) {
          try {
            afterOtpAction && afterOtpAction();
          } finally {
            closeLeadForm();
          }
        } else {
          const inASection = pathname.startsWith("/a");
          const courseId = (formData.course || "").trim();
          const courseIdToSlug = (id: string): string => {
            switch (id) {
              case "CPA": return "cpa-us";
              case "CMA USA": return "cma-usa";
              case "ACCA": return "acca-uk";
              case "CIA": return "cia";
              case "CFA": return "cfa-us";
              case "EA": return "enrolled-agent";
              default: {
                const lower = pathname.toLowerCase();
                if (lower.includes("cma-usa")) return "cma-usa";
                if (lower.includes("cpa-us")) return "cpa-us";
                if (lower.includes("acca-uk")) return "acca-uk";
                if (lower.includes("cia")) return "cia";
                if (lower.includes("cfa-us")) return "cfa-us";
                return "cma-usa";
              }
            }
          };
          const courseSlug = courseIdToSlug(courseId);
          const target = inASection ? `/a/thank-you/${courseSlug}` : `/thank-you/${courseSlug}`;
          router.push(target);
          // Close the lead form modal so the navigation is visible
          closeLeadForm();
        }
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
    if (!leadId) {
      setOtpError("No lead found. Please submit the form again.");
      return;
    }
    setIsSubmitting(true);
    setOtpError("");
    try {
      const response = await fetch(
        `https://api.starforze.com/api/leads/${leadId}/send-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        const result = await response.json();
        console.log("Resent OTP for lead:", result);
        setOtp("");
        setOtpNotice("OTP resent");
      } else {
        const err = await response.json();
        setOtpError(err?.message || "Failed to resend OTP.");
      }
    } catch (error) {
      console.error("Resend OTP error:", error);
      setOtpError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChangeNumber = async () => {
    setIsEditingPhone(true);
    // Prefill from API if leadId exists
    if (!leadId) {
      // Fallback to current formData.phone
      setEditDialCode("91");
      setEditPhoneValue(formData.phone || "");
      return;
    }
    try {
      const response = await fetch(`https://api.starforze.com/api/leads/${leadId}`);
      if (response.ok) {
        const result = await response.json();
        const mobile = result?.data?.mobile || result?.data?.phone_number || "";
        const ccode = result?.data?.countryCode || result?.data?.dialCode || "91";
        setEditDialCode(String(ccode));
        // Combine for PhoneInput controlled value: dialCode + mobile
        const combined = mobile ? `${ccode}${String(mobile).replace(/\D/g, "")}` : formData.phone;
        setEditPhoneValue(combined || "");
      } else {
        setEditDialCode("91");
        setEditPhoneValue(formData.phone || "");
      }
    } catch (error) {
      console.error("Fetch lead details error:", error);
      setEditDialCode("91");
      setEditPhoneValue(formData.phone || "");
    }
  };

  const handleEditPhoneChange = (value: string, dialCode?: string) => {
    setEditPhoneValue(value);
    if (dialCode) setEditDialCode(String(dialCode));
  };

  const handleEditPhoneCancel = () => {
    setIsEditingPhone(false);
  };

  const handleEditPhoneSubmit = async () => {
    if (!leadId) {
      setOtpError("No lead found to update.");
      return;
    }
    setIsSubmitting(true);
    setOtpError("");
    // Parse mobile from combined value (dialCode + mobile)
    const dialLen = editDialCode.length;
    const digitsOnly = editPhoneValue.replace(/\D/g, "");
    const mobile = digitsOnly.slice(dialLen);
    try {
      const updateResp = await fetch(
        `https://api.starforze.com/api/leads/${leadId}/update-mobile`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mobile, countryCode: editDialCode }),
        }
      );
      if (!updateResp.ok) {
        const err = await updateResp.json();
        setOtpError(err?.message || "Failed to update mobile.");
        setIsSubmitting(false);
        return;
      }
      // Update local form data phone
      updateFormData({ phone: `${editDialCode}${mobile}` });
      // Do not call send-otp again; updating mobile triggers OTP automatically
      setOtp("");
      setIsEditingPhone(false);
      setOtpNotice("Mobile number updated and OTP sent");
    } catch (error) {
      console.error("Update mobile/send OTP error:", error);
      setOtpError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Deprecated: old change-number handler removed in favor of inline edit flow

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
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl mx-auto overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close (X) button */}
            <button
              type="button"
              aria-label="Close"
              onClick={closeLeadForm}
              className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
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
                    isCourseLocked={isCourseLocked}
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
                    notice={otpNotice}
                    isEditingPhone={isEditingPhone}
                    editPhoneValue={editPhoneValue}
                    onEditPhoneChange={handleEditPhoneChange}
                    onEditPhoneSubmit={handleEditPhoneSubmit}
                    onEditPhoneCancel={handleEditPhoneCancel}
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