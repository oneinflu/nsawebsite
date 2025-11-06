"use client";
import React from "react";

type OtpFormProps = {
  phone: string;
  otp: string;
  setOtp: (val: string) => void;
  otpError: string;
  isSubmitting: boolean;
  onVerify: (e: React.FormEvent) => void;
  onChangeNumber: () => void;
  onResend: () => void;
};

const OtpForm: React.FC<OtpFormProps> = ({
  phone,
  otp,
  setOtp,
  otpError,
  isSubmitting,
  onVerify,
  onChangeNumber,
  onResend,
}) => {
  return (
    <>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Verify Your Number</h3>
      <p className="text-gray-600 mb-6">
        Enter the 4-digit OTP sent to <span className="font-bold text-gray-900">{phone}</span>
      </p>
      <form onSubmit={onVerify}>
        <div className="mb-4">
          <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
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
          {otpError && <p className="mt-1 text-sm text-red-600">{otpError}</p>}
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
        <button onClick={onChangeNumber} className="text-red-600 hover:underline">
          Wrong number? Change it
        </button>
        <span className="mx-2 text-gray-400">|</span>
        <button onClick={onResend} className="text-red-600 hover:underline">
          Resend OTP
        </button>
      </div>
    </>
  );
};

export default OtpForm;