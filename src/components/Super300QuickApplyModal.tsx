'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface Super300QuickApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; whatsapp: string; course: string }) => void;
}

export default function Super300QuickApplyModal({ isOpen, onClose, onSubmit }: Super300QuickApplyModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    course: 'Super 300 Scholarship Program'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.whatsapp.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onSubmit(formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      whatsapp: '',
      course: 'Super 300 Scholarship Program'
    });
    
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6 transform transition-all">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Apply for Super 300
          </h2>
          <p className="text-gray-600 text-sm">
            Join India&apos;s most exclusive merit-based scholarship program
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
              placeholder="Enter your full name"
            />
          </div>

          {/* WhatsApp Field */}
          <div>
            <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
              WhatsApp Number *
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
              placeholder="+91 9876543210"
            />
          </div>

          {/* Course Field */}
          <div>
            <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
              Program
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
            >
              <option value="Super 300 Scholarship Program">Super 300 Scholarship Program</option>
              <option value="CPA + Super 300">CPA + Super 300</option>
              <option value="CMA + Super 300">CMA + Super 300</option>
              <option value="ACCA + Super 300">ACCA + Super 300</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || !formData.name.trim() || !formData.whatsapp.trim()}
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold py-3 px-4 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] shadow-lg"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                <span>Submitting...</span>
              </div>
            ) : (
              'Apply Now — Free'
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-4">
          By applying, you agree to receive updates via WhatsApp
        </p>
      </div>
    </div>
  );
}