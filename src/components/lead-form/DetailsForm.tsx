/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
  return (
    <>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">{formTitle}</h3>
      <form onSubmit={handleSubmit}>
        {!isCourseLocked && (
          <div className="mb-4">
            <label htmlFor="course_id" className="block text-sm font-medium text-gray-700 mb-1">
              Course
            </label>
            <select
              id="course_id"
              value={formData.course || ''}
              onChange={(e) => updateFormData({ course: e.target.value })}
              className="w-full px-4 py-2.5 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="" disabled>Select your course</option>
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
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
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
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
          <label htmlFor="phone" className="block text-sm font-medium text-black mb-1">
            Phone Number
          </label>
          <div className="phone-input-no-dial">
            <PhoneInput
              country={"in"}
              value={formData.phone}
              onChange={(value, country) => handlePhoneChange(value, country as { dialCode?: string })}
              enableSearch
              autoFormat
              placeholder="Enter phone number"
              containerClass="w-full"
              inputClass="w-full px-4 py-2.5 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              inputProps={{ name: "phone", id: "phone" }}
            />
          </div>
          {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
          {/* Hide dial code text next to flag, while keeping country selection */}
          <style jsx>{`
            .phone-input-no-dial :global(.selected-dial-code) {
              display: none !important;
            }
            /* Align styles to match other inputs */
            .phone-input-no-dial :global(.react-tel-input .form-control) {
              width: 100% !important;
              border-radius: 0.375rem !important; /* rounded-md */
              border: 1px solid #D1D5DB !important; /* gray-300 */
              padding: 0.625rem 1rem !important; /* py-2.5 px-4 */
              color: #000 !important;
            }
            .phone-input-no-dial :global(.react-tel-input .form-control::placeholder) {
              color: #6B7280 !important; /* gray-500 */
            }
            .phone-input-no-dial :global(.react-tel-input .form-control:focus) {
              outline: none !important;
              box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.5) !important; /* red-600 ring */
              border-color: #DC2626 !important; /* red-600 */
            }
            .phone-input-no-dial :global(.react-tel-input .flag-dropdown) {
              border: 1px solid #D1D5DB !important; /* gray-300 */
              border-right: none !important;
              background: #ffffff !important;
              border-top-left-radius: 0.375rem !important;
              border-bottom-left-radius: 0.375rem !important;
            }
          `}</style>
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            ref={inputRef}
            type="text"
            id="location"
            value={formData.location}
            onChange={(e) => updateFormData({ location: e.target.value })}
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
          {isSubmitting ? "Processing..." : submitButtonText}
        </button>
      </form>
    </>
  );
};

export default DetailsForm;