
'use client';

import { useState } from 'react';

import Super300AnnouncementBar from '@/components/Super300AnnouncementBar';
import Super300Hero from '@/components/Super300Hero';
import Super300QuickApplyModal from '@/components/Super300QuickApplyModal';
import Super300ExitIntentPopup from '@/components/Super300ExitIntentPopup';
import Super300Toast from '@/components/Super300Toast';
import EligibilityApply from '@/components/EligibilityApply';
import Super300ScholarshipValue from '@/components/Super300ScholarshipValue';
import MentorshipSuccess from '@/components/MentorshipSuccess';
import Super300FAQ from '@/components/Super300FAQ';
import AboutSuper300Program from '@/components/AboutSuper300Program';


export default function Super300Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleApplyNowClick = () => {
    setIsModalOpen(true);
  };

  const handleModalSubmit = (data: { name: string; whatsapp: string; course: string }) => {
    // Here you would typically send the data to your API
    console.log('Form submitted:', data);
    
    // Mark user as applied
    localStorage.setItem('super300_applied', 'true');
    
    // Show success toast
    setToastMessage('Test link sent to WhatsApp');
    setToastVisible(true);
  };

  const handleGetGuide = () => {
    // Handle guide download logic
    console.log('Guide download requested');
    setToastMessage('Super 300 Guide sent to your WhatsApp');
    setToastVisible(true);
  };

  const handleExitIntentApply = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Announcement Bar */}
      <Super300AnnouncementBar />
      
      {/* Sticky Header */}
     
      
      {/* Main Content with proper spacing for fixed header */}
   
        {/* Main Hero Section */}
        <Super300Hero />
        <AboutSuper300Program />
       
        {/* Eligibility Section */}
        <div id="eligibility-section">
          <EligibilityApply />
        </div>
        
        <Super300ScholarshipValue />
        
        <MentorshipSuccess />
        
        <Super300FAQ />
     

      {/* Modal and Popup Components */}
      <Super300QuickApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
      />

      <Super300ExitIntentPopup
        onGetGuide={handleGetGuide}
        onApply={handleExitIntentApply}
      />

      <Super300Toast
        isVisible={toastVisible}
        message={toastMessage}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
}