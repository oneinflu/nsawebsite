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
  handlePhoneChange: (value: string) => void;
  phoneError: string;
  isSubmitting: boolean;
  inputRef: React.RefObject<HTMLInputElement | null>;
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
}) => {
  return (
    <>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">{formTitle}</h3>
      <form onSubmit={handleSubmit}>
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