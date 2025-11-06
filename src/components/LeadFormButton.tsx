'use client';

import React from 'react';
import { useLeadForm } from '@/context/LeadFormContext';
import { FormType } from './lead-form/formConfigs';

interface LeadFormButtonProps {
  className?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  formType?: FormType;
  isSendOtp?: boolean;
}

const LeadFormButton = ({ 
  className = '', 
  children = 'Book Free Counseling',
  variant = 'primary',
  formType = 'general',
  isSendOtp = true,
}: LeadFormButtonProps) => {
  const { openLeadForm } = useLeadForm();

  const baseStyles = "font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-red-900 hover:bg-red-800 text-white px-6 py-2.5 hover:shadow-lg hover:scale-105 focus:ring-red-500",
    secondary: "bg-[#ff5722] hover:bg-[#e64a19] text-white px-6 py-2.5 hover:shadow-lg hover:scale-105 focus:ring-orange-500",
    outline: "border-2 border-white-900 text-white-900 hover:bg-red px-6 py-2.5 focus:ring-white-500"
  };

  return (
    <button
      onClick={() => openLeadForm(formType, isSendOtp)}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default LeadFormButton;