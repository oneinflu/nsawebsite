"use client";
import React, {  useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type OtpFormProps = {
  phone: string;
  otp: string;
  setOtp: (val: string) => void;
  otpError: string;
  isSubmitting: boolean;
  onVerify: (e: React.FormEvent) => void;
  onChangeNumber: () => void;
  onResend: () => void;
  // Inline phone update UI
  isEditingPhone: boolean;
  editPhoneValue: string;
  onEditPhoneChange: (value: string, dialCode?: string) => void;
  onEditPhoneSubmit: () => void;
  onEditPhoneCancel: () => void;
  notice?: string;
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
  isEditingPhone,
  editPhoneValue,
  onEditPhoneChange,
  onEditPhoneSubmit,
  onEditPhoneCancel,
  notice,
}) => {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([null, null, null, null]);

  const digits = [otp[0] || "", otp[1] || "", otp[2] || "", otp[3] || ""];

  const focusInput = (index: number) => {
    const el = inputsRef.current[index];
    if (el) el.focus();
  };

  const setDigit = (index: number, char: string) => {
    const next = [...digits];
    next[index] = char;
    setOtp(next.join(""));
  };

  const handleChange = (index: number, value: string) => {
    const v = value.replace(/\D/g, "");
    if (!v) {
      setDigit(index, "");
      return;
    }
    setDigit(index, v[0]);
    if (index < 3) focusInput(index + 1);
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    if (key === "Backspace") {
      if (digits[index]) {
        // Clear current digit
        setDigit(index, "");
      } else if (index > 0) {
        // Move to previous and clear
        focusInput(index - 1);
        setTimeout(() => setDigit(index - 1, ""), 0);
      }
      e.preventDefault();
    } else if (key === "ArrowLeft" && index > 0) {
      focusInput(index - 1);
      e.preventDefault();
    } else if (key === "ArrowRight" && index < 3) {
      focusInput(index + 1);
      e.preventDefault();
    } else if (!/^[0-9]$/.test(key) && key.length === 1) {
      // Block non-digit characters
      e.preventDefault();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const text = e.clipboardData.getData("text").replace(/\D/g, "");
    if (!text) return;
    e.preventDefault();
    const next = ["", "", "", ""];
    for (let i = 0; i < Math.min(4, text.length); i++) {
      next[i] = text[i];
    }
    setOtp(next.join(""));
    const toFocus = Math.min(text.length, 3);
    focusInput(toFocus);
  };

  return (
    <>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Verify Your Number</h3>
      <p className="text-gray-600 mb-6">
        Enter the 4-digit OTP sent to <span className="font-bold text-gray-900">{phone}</span>
      </p>
      {notice && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          <span className="inline-block h-2 w-2 rounded-full bg-green-600"></span>
          {notice}
        </div>
      )}
      {isEditingPhone && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Update Phone Number</label>
          <PhoneInput
            country={"in"}
            value={editPhoneValue}
            onChange={(value, data) => {
              const dial = (data && typeof data === "object" && "dialCode" in data)
                ? (data as { dialCode?: string }).dialCode
                : undefined;
              onEditPhoneChange(String(value), dial);
            }}
            containerClass="w-full"
            inputClass="w-full px-4 py-2.5 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <div className="flex items-center gap-3 mt-3">
            <button
              type="button"
              onClick={onEditPhoneSubmit}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-4 rounded-md transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              Update & Send OTP
            </button>
            <button
              type="button"
              onClick={onEditPhoneCancel}
              className="flex-1 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 font-medium py-2.5 px-4 rounded-md transition duration-300"
              disabled={isSubmitting}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <form onSubmit={onVerify}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Enter OTP</label>
          <div className="flex items-center justify-between gap-3">
            {[0, 1, 2, 3].map((i) => (
              <input
                key={i}
                ref={(el) => {
                  inputsRef.current[i] = el;
                }}
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                value={digits[i]}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                onPaste={handlePaste}
                className="w-14 h-14 text-center text-2xl font-semibold text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-gray-100"
                placeholder="•"
                disabled={isSubmitting}
              />
            ))}
          </div>
          {otpError && <p className="mt-2 text-sm text-red-600">{otpError}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-md transition duration-300 flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={isSubmitting || otp.length !== 4}
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