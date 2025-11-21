/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { MapPin } from "lucide-react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { isValidPhoneNumber } from "react-phone-number-input";
type DetailsFormProps = {
  formTitle: string;
  submitButtonText: string;
  formData: { [key: string]: any };
  updateFormData: (data: Record<string, any>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handlePhoneChange: (value: string, country?: { dialCode?: string }) => void;
  phoneError: string;
  isSubmitting: boolean;
  inputRef: React.RefObject<HTMLInputElement | null>;
  isCourseLocked: boolean;
};

const DetailsForm: React.FC<DetailsFormProps> = ({
  formTitle,
  submitButtonText,
  formData,
  updateFormData,
  handleSubmit,
  handlePhoneChange,
  phoneError,
  isSubmitting,
  inputRef,
  isCourseLocked,
}) => {
  const handleAutoDetectLocation = async () => {
    try {
      const ipRes = await fetch("https://ipapi.co/json");
      if (!ipRes.ok) throw new Error("IP geolocation failed");
      const ipData = await ipRes.json();
      const city: string | undefined = ipData?.city;
      const region: string | undefined = ipData?.region;
      const country: string | undefined = ipData?.country_name;
      const base = [city, region, country].filter(Boolean).join(", ");

      let display = base;
      if (base) {
        try {
          const q = [city, region, country].filter(Boolean).join(" ");
          const nomRes = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
              q
            )}&format=jsonv2&limit=1`,
            { headers: { "Accept-Language": "en" } }
          );
          if (nomRes.ok) {
            const results = await nomRes.json();
            if (Array.isArray(results) && results[0]?.display_name) {
              display = String(results[0].display_name)
                .split(",")
                .slice(0, 3)
                .join(", ")
                .trim();
            }
          }
        } catch (e) {}
      }

      if (display) {
        updateFormData({ location: display });
        if (inputRef?.current) {
          inputRef.current.focus();
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">{formTitle}</h3>
      <form onSubmit={handleSubmit}>
        {!isCourseLocked && (
          <div className="mb-4">
            <label
              htmlFor="course_id"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Course
            </label>
            <select
              id="course_id"
              value={formData.course || ""}
              onChange={(e) => updateFormData({ course: e.target.value })}
              className="w-full px-4 py-2.5 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="" disabled>
                Select your course
              </option>
              <option value="CPA">CPA</option>
              <option value="CMA USA">CMA USA</option>
              <option value="ACCA">ACCA</option>
              <option value="CFA">CFA</option>
              <option value="CIA">CIA</option>
              <option value="EA">EA</option>
            </select>
          </div>
        )}
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
            onChange={(e) => updateFormData({ name: e.target.value })}
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
            onChange={(e) => updateFormData({ email: e.target.value })}
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
          <div className="phone-input-no-dial">
            <PhoneInput
              country={"in"}
              preferredCountries={["in"]}
              value={formData.phone}
              onChange={(value, country) =>
                handlePhoneChange(value, country as { dialCode?: string })
              }
              enableSearch
              searchPlaceholder="Search country"
              autoFormat
              placeholder="Enter phone number"
              containerClass="w-full"
              inputClass="w-full text-black placeholder-gray-500"
              buttonClass=""
              dropdownClass="max-h-60 overflow-y-auto shadow-lg z-50"
              searchClass="px-3 py-2"
              inputProps={{ name: "phone", id: "phone" }}
              countryCodeEditable={false}
              isValid={(value) => {
                if (!value) return true;
                const e164 = `+${String(value).replace(/[^0-9]/g, "")}`;
                try {
                  return (
                    isValidPhoneNumber(e164) || "Enter a valid phone number"
                  );
                } catch {
                  return "Enter a valid phone number";
                }
              }}
            />
          </div>
          {phoneError && (
            <p className="text-red-500 text-sm mt-1">{phoneError}</p>
          )}
          {/* Phone input styles for react-phone-input-2 to match other inputs */}
          <style jsx>{`
            .phone-input-no-dial :global(.react-tel-input) {
              width: 100% !important;
              position: relative !important; /* keep flag absolutely positioned */
            }
            .phone-input-no-dial :global(.react-tel-input .form-control) {
              width: 100% !important;
              border-radius: 0.375rem !important; /* rounded-md */
              border: 1px solid #d1d5db !important; /* gray-300 */
              padding: 0.625rem 1rem !important; /* py-2.5 px-4 */
              padding-left: 3rem !important; /* leave space for flag */
              color: #000 !important;
              height: 42px !important;
            }
            .phone-input-no-dial
              :global(.react-tel-input .form-control::placeholder) {
              color: #6b7280 !important; /* gray-500 */
            }
            .phone-input-no-dial :global(.react-tel-input .form-control:focus) {
              outline: none !important;
              box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.5) !important; /* red-600 ring */
              border-color: #dc2626 !important; /* red-600 */
            }
            .phone-input-no-dial :global(.react-tel-input .flag-dropdown) {
              position: absolute !important;
              left: 0 !important;
              top: 0 !important;
              height: 42px !important;
              border: 1px solid #d1d5db !important; /* gray-300 */
              border-right: none !important;
              background: #ffffff !important;
              border-top-left-radius: 0.375rem !important;
              border-bottom-left-radius: 0.375rem !important;
            }
            .phone-input-no-dial :global(.react-tel-input .country-list) {
              position: absolute !important;
              top: 44px !important;
              left: 0 !important;
              max-height: 15rem !important; /* 240px */
              overflow-y: auto !important;
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08) !important;
              z-index: 100 !important;
            }
            .phone-input-no-dial
              :global(.react-tel-input .country-list .search) {
              padding: 0.5rem 0.75rem !important;
            }
            /* Show dial code next to flag; input remains number-only */
          `}</style>
        </div>

        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Location
          </label>
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              id="location"
              value={formData.location}
              onChange={(e) => updateFormData({ location: e.target.value })}
              className="w-full pr-11 px-4 py-2.5 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your city"
              required
            />
            <button
              type="button"
              onClick={handleAutoDetectLocation}
              aria-label="Detect location"
              className="absolute inset-y-0 right-2 my-auto h-8 w-8 flex items-center justify-center rounded-md text-gray-600 hover:text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <MapPin className="h-5 w-5" />
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-4 rounded-md transition duration-300 flex items-center justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
          ) : null}
          {isSubmitting ? "Processing..." : submitButtonText}
        </button>
      </form>
    </>
  );
};

export default DetailsForm;
