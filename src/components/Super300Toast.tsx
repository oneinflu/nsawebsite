'use client';

import { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface Super300ToastProps {
  isVisible: boolean;
  message: string;
  onClose: () => void;
  duration?: number;
}

export default function Super300Toast({ isVisible, message, onClose, duration = 4000 }: Super300ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 duration-300">
      <div className="bg-white border border-green-200 rounded-lg shadow-lg p-4 flex items-center space-x-3 max-w-sm">
        {/* Success Icon */}
        <div className="flex-shrink-0">
          <CheckCircle className="w-5 h-5 text-green-500" />
        </div>
        
        {/* Message */}
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">
            {message}
          </p>
        </div>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}