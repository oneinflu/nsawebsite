"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { FormType } from "../lead-form/formConfigs";

interface LeadFormContextType {
  isOpen: boolean;
  showThankYou: boolean;
  isSendOtp: boolean;
  openLeadForm: (
    type?: FormType,
    isSendOtp?: boolean,
    courseId?: string
  ) => void;
  closeLeadForm: () => void;
  openThankYouPage: () => void;
  closeThankYouPage: () => void;
  leadVerified: boolean;
  setLeadVerified: (verified: boolean) => void;
  formStep: "details" | "otp" | "thankyou";
  setFormStep: (step: "details" | "otp" | "thankyou") => void;
  isCourseLocked: boolean;
  setIsCourseLocked: (locked: boolean) => void;
  suppressThankYouOnOtp: boolean;
  setSuppressThankYouOnOtp: (suppress: boolean) => void;
  afterOtpAction?: () => void;
  setAfterOtpAction: (cb?: () => void) => void;
  formData: {
    name: string;
    email: string;
    phone: string;
    country_code: string;
    location: string;
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_term: string;
    utm_content: string;
    // Extended UTM/ad params
    utm_id: string;
    utm_source_platform: string;
    utm_creative_format: string;
    utm_audience: string;
    utm_ad_id: string;
    gclid: string;
    fblid: string;
    utm_adgroup: string;
    utm_adname: string;
    sitelink: string;
    matchtype: string;
    category: string;
    device: string;
    network: string;
    promotion: string;
    placement: string;
    geo: string;
    full_url: string;
    dob: string;
    gender: string;
    education: string;
    professional: string;
    course: string;
    studyMode: string;
    agreeToTerms: boolean;
    howHeard: string;
  };
  updateFormData: (data: Partial<LeadFormContextType["formData"]>) => void;
  formType: FormType;
}

const defaultFormData = {
  name: "",
  email: "",
  phone: "",
  country_code: "",
  location: "",
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_term: "",
  utm_content: "",
  utm_id: "",
  utm_source_platform: "",
  utm_creative_format: "",
  utm_audience: "",
  utm_ad_id: "",
  gclid: "",
  fblid: "",
  utm_adgroup: "",
  utm_adname: "",
  sitelink: "",
  matchtype: "",
  category: "",
  device: "",
  network: "",
  promotion: "",
  placement: "",
  geo: "",
  full_url: "",
  dob: "",
  gender: "",
  education: "",
  professional: "",
  course: "",
  studyMode: "Online",
  agreeToTerms: false,
  howHeard: "",
};

const LeadFormContext = createContext<LeadFormContextType | undefined>(
  undefined
);

export const LeadFormProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formStep, setFormStep] = useState<"details" | "otp" | "thankyou">(
    "details"
  );
  const [formData, setFormData] = useState(defaultFormData);
  const [formType, setFormType] = useState<FormType>("general");
  const [isSendOtp, setIsSendOtp] = useState(true);
  const [leadVerified, setLeadVerified] = useState(false);
  const [isCourseLocked, setIsCourseLocked] = useState(false);
  const [suppressThankYouOnOtp, setSuppressThankYouOnOtp] = useState(false);
  const [afterOtpAction, setAfterOtpAction] = useState<
    undefined | (() => void)
  >(undefined);

  const openLeadForm = (
    type: FormType = "general",
    isSendOtpParam: boolean = true,
    courseId?: string
  ) => {
    setFormType(type);
    setFormStep("details");
    setIsSendOtp(isSendOtpParam);
    if (courseId) {
      setFormData((prev) => ({ ...prev, course: courseId }));
      setIsCourseLocked(true);
    }
    setLeadVerified(false);
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeLeadForm = () => {
    setIsOpen(false);
    setFormStep("details");
    setFormData(defaultFormData);
    setIsSendOtp(false);
    setIsCourseLocked(false);
    setSuppressThankYouOnOtp(false);
    setAfterOtpAction(undefined);
    document.body.style.overflow = "";
  };

  const openThankYouPage = () => {
    setIsOpen(false);
    setShowThankYou(true);
    setFormStep("thankyou");
    document.body.style.overflow = "hidden";
  };

  const closeThankYouPage = () => {
    setShowThankYou(false);
    setFormStep("details");
    setFormData(defaultFormData);
    document.body.style.overflow = "";
  };

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <LeadFormContext.Provider
      value={{
        isOpen,
        showThankYou,
        isSendOtp,
        openLeadForm,
        closeLeadForm,
        openThankYouPage,
        closeThankYouPage,
        leadVerified,
        setLeadVerified,
        formStep,
        setFormStep,
        isCourseLocked,
        setIsCourseLocked,
        suppressThankYouOnOtp,
        setSuppressThankYouOnOtp,
        afterOtpAction,
        setAfterOtpAction,
        formData,
        updateFormData,
        formType,
      }}
    >
      {children}
    </LeadFormContext.Provider>
  );
};

export const useLeadForm = () => {
  const context = useContext(LeadFormContext);
  if (context === undefined) {
    throw new Error("useLeadForm must be used within a LeadFormProvider");
  }
  return context;
};
