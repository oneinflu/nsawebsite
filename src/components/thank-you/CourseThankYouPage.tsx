/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { getCourseContent } from './courseThankYouConfig';

// Lazy-load client-only components to avoid SSR issues
const VideoPlayer = dynamic(() => import('../VideoPlayer'), { ssr: false });

const Confetti = dynamic(() => import('react-confetti'), { ssr: false });

export default function CourseThankYouPage({ course }: { course: string }) {
  const content = getCourseContent(course);
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [showTelegramModal, setShowTelegramModal] = useState(false);
  const [showLinkedInModal, setShowLinkedInModal] = useState(false);
  const [showCustomVideoModal, setShowCustomVideoModal] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);

  // Map course slug to hackdoc file path in /public/hackdocs
  const getHackdocForCourse = (c: string): { href: string; filename: string } | null => {
    switch (c) {
      case 'acca-uk':
        return { href: '/hackdocs/ACCA.pdf', filename: 'ACCA.pdf' };
      case 'cma-usa':
        return { href: '/hackdocs/CMA.pdf', filename: 'CMA.pdf' };
      case 'cpa-us':
        return { href: '/hackdocs/CPA.pdf', filename: 'CPA.pdf' };
      case 'enrolled-agent':
        return { href: '/hackdocs/EA.pdf', filename: 'EA.pdf' };
      default:
        return null; // Hide for CIA, CFA, or generic/all-courses pages
    }
  };
  const hackdoc = getHackdocForCourse(course);

  // Map course slug to prospectus file path in /public/prospectus
  const getProspectusForCourse = (c: string): { href: string; filename: string } | null => {
    switch (c) {
      case 'acca-uk':
        return { href: '/prospectus/ACCA.pdf', filename: 'ACCA.pdf' };
      case 'cma-usa':
        return { href: '/prospectus/CMA.pdf', filename: 'CMA.pdf' };
      case 'cpa-us':
        return { href: '/prospectus/CPA.pdf', filename: 'CPA.pdf' };
      case 'enrolled-agent':
        return { href: '/prospectus/EA.pdf', filename: 'EA.pdf' };
      case 'cfa-us':
        return { href: '/prospectus/CFA.pdf', filename: 'CFA.pdf' };
      case 'cia':
        return { href: '/prospectus/CIA.pdf', filename: 'CIA.pdf' };
      default:
        return null;
    }
  };
  const prospectus = getProspectusForCourse(course);

   const getRoadmapsForCourse = (c: string): { href: string; filename: string } | null => {
    switch (c) {
      case 'acca-uk':
        return { href: '/roadmaps/ACCA.pdf', filename: 'ACCA.pdf' };
      case 'cma-usa':
        return { href: '/roadmaps/CMA.pdf', filename: 'CMA.pdf' };
      case 'cpa-us':
        return { href: '/roadmaps/CPA.pdf', filename: 'CPA.pdf' };
      case 'enrolled-agent':
        return { href: '/roadmaps/EA.pdf', filename: 'EA.pdf' };
      default:
        return null; // Hide for CIA, CFA, or generic/all-courses pages
    }
  };
  const roadmaps = getRoadmapsForCourse(course);
  

  // Map course slug to WhatsApp group links
  const getWhatsAppGroupLinkForCourse = (c: string): string | null => {
    switch (c) {
      case 'enrolled-agent':
        return 'https://chat.whatsapp.com/L10wYnLxX2ELYLCZCA5Ip3?mode=wwt';
      case 'acca-uk':
        return 'https://chat.whatsapp.com/F7RoIMdQ8LE9eFrYiXAjgA?mode=wwt';
      case 'cpa-us':
        return 'https://chat.whatsapp.com/DLtR0dy2H3I04i25n7ZIRx?mode=wwt';
      case 'cma-usa':
        return 'https://chat.whatsapp.com/C7HirZh1Mp41HrYdpzcWkV?mode=wwt';
      default:
        return null;
    }
  };
  const whatsAppGroupLink = getWhatsAppGroupLinkForCourse(course) ?? content.groupLink;
  const whatsAppChannelLink = 'https://whatsapp.com/channel/0029VaTl79bCMY0IQNcKsA1q';

  // Map course slug to LinkedIn group links
  const getLinkedInGroupLinkForCourse = (c: string): string | null => {
    switch (c) {
      case 'enrolled-agent':
        return 'https://www.linkedin.com/groups/15795018';
      case 'acca-uk':
        return 'https://www.linkedin.com/groups/15796016';
      case 'cpa-us':
        return 'https://www.linkedin.com/groups/14062350';
      case 'cma-usa':
        return 'https://www.linkedin.com/groups/13961328';
      default:
        return null;
    }
  };
  const linkedInGroupLink = getLinkedInGroupLinkForCourse(course) ?? content.groupLink;

  // Map course slug to a short, user-facing display name
  const getCourseDisplayName = (c: string): string => {
    switch (c) {
      case 'enrolled-agent':
        return 'EA';
      case 'acca-uk':
        return 'ACCA';
      case 'cpa-us':
        return 'CPA US';
      case 'cma-usa':
        return 'CMA US';
      default:
        return 'NorthStar';
    }
  };
  const courseDisplayName = getCourseDisplayName(course);

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    // Initialize on mount
    updateWindowSize();
    
    window.addEventListener('resize', updateWindowSize);
    
    // Stop confetti after 6 seconds
    const timer = setTimeout(() => setShowConfetti(false), 6000);
    
    return () => {
      window.removeEventListener('resize', updateWindowSize);
      clearTimeout(timer);
    };
  }, []);

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setVideoMuted(true);
  };

  const handleVideoClick = () => {
    setVideoMuted(!videoMuted);
  };

 
  const downloadHackdoc = () => {
    if (!hackdoc) return;
    try {
      const a = document.createElement('a');
      a.href = hackdoc.href;
      a.download = hackdoc.filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch {
      // Fallback: open in new tab if download attribute not honored
      window.open(hackdoc.href, '_blank');
    }
  };

  const downloadProspectus = () => {
    if (!prospectus) return;
    try {
      const a = document.createElement('a');
      a.href = prospectus.href;
      a.download = prospectus.filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch {
      window.open(prospectus.href, '_blank');
    }
  };
const downloadRoadmaps = () => {
    if (!roadmaps) return;
    try {
      const a = document.createElement('a');
      a.href = roadmaps.href;
      a.download = roadmaps.filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch {
      window.open(roadmaps.href, '_blank');
    }
  };

  const downloadPlacementReport = () => {
    const href = '/placements/placement-report.pdf';
    try {
      const a = document.createElement('a');
      a.href = href;
      a.download = 'placement-report.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch {
      window.open(href, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Confetti Effect - 45 Degree Corner Blasts */}
      {showConfetti && (
        <>
          {/* Left Corner Confetti - 45 degree angle */}
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={200}
            colors={['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899']}
            opacity={0.8}
            gravity={0.12}
            initialVelocityX={10}
            initialVelocityY={-10}
            confettiSource={{
              x: 0,
              y: 0,
              w: 50,
              h: 50
            }}
            wind={0.01}
          />
          
          {/* Right Corner Confetti - 45 degree angle */}
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={200}
            colors={['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899']}
            opacity={0.8}
            gravity={0.12}
            initialVelocityX={-10}
            initialVelocityY={-10}
            confettiSource={{
              x: windowSize.width - 50,
              y: 0,
              w: 50,
              h: 50
            }}
            wind={-0.01}
          />
        </>
      )}

      {/* Main 2-Column Layout */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Right Column - Visual Elements */}
        <div className="relative bg-gradient-to-br from-red-50 via-red-50 to-red-50 order-2">
          {/* Video Container */}
          <div className="relative w-full h-full">
            {/* Desktop Version - Full Fill */}
            <div className="hidden lg:block relative w-full h-full overflow-hidden">
              <div className="relative w-full h-full cursor-pointer" onClick={() => setShowCustomVideoModal(true)}>
                {/* Background Video - Desktop using VideoPlayer */}
                <div
                  className="absolute pointer-events-none"
                  style={{ 
                    width: 'max(100%, calc(100vh * 16 / 9))', 
                    height: 'max(100%, calc(100vw * 9 / 16))',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <img
                    src="/nsa.webp"
                    alt="NSA overview video thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Click to Play Overlay - Desktop */}
                <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-all duration-200 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all duration-200">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Version - Proper Video Player */}
            <div className="lg:hidden flex items-center justify-center p-4 sm:p-6 h-full">
              <div className="w-full max-w-md">
                {/* Video Player Container */}
                <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-video">
                    <VideoPlayer
                      src="https://northstaracademy.b-cdn.net/Why-Northstar.mp4"
                      className="w-full h-full"
                    />
                  </div>
                </div>
                
                {/* Mobile Video Info */}
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{content.title}</h3>
                  <p className="text-sm text-gray-600">{content.subtitle}</p>
                </div>
              </div>
            </div>
            
            {/* Video Info Overlay - Desktop Only */}
            <div className="hidden lg:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none">
              <div className="text-white">
                <h3 className="font-semibold text-xl mb-2">{content.title}</h3>
                <p className="text-base text-gray-200 opacity-90">{content.subtitle}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Left Column - Content */}
        <div className="flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-2 order-1">
          <div className="max-w-lg mx-auto lg:mx-0 w-full">
            
            {/* Success Message */}
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full mb-4 sm:mb-6">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                Thank You!
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Your request has been submitted successfully. Our team will contact you within 24 hours.
              </p>
            </div>

            {/* Action Buttons */}
            {/* <div className="space-y-3 sm:space-y-4 mb-10 sm:mb-12">
              <button 
                onClick={handleBookCall}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
               Schedule your Call
              </button>
              
              <button 
                onClick={handleVideoModal}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Watch Mentor Introduction
              </button>
            </div> */}

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-10 sm:mb-12">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-red-600 mb-1">25K+</div>
                <div className="text-xs sm:text-sm text-gray-600">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-green-600 mb-1">92%</div>
                <div className="text-xs sm:text-sm text-gray-600">Pass Rate</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-red-600 mb-1">15+</div>
                <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
              </div>
            </div>

            {/* Free Resources */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Free Resources</h3>
              
              {roadmaps && (
                <div 
                  className="flex items-center justify-between p-3 sm:p-4 bg-purple-50 rounded-lg cursor-pointer hover:bg-purple-100 transition-colors"
                  onClick={downloadRoadmaps}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm sm:text-lg">🛣️</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-gray-900 text-sm sm:text-base">Download Roadmaps</div>
                      <div className="text-xs sm:text-sm text-gray-600">Complete Course Roadmap guide</div>
                    </div>
                  </div>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              {prospectus && (
                <div 
                  className="flex items-center justify-between p-3 sm:p-4 bg-red-50 rounded-lg cursor-pointer hover:bg-red-100 transition-colors"
                  onClick={downloadProspectus}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm sm:text-lg">📘</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-gray-900 text-sm sm:text-base">Download Prospectus</div>
                      <div className="text-xs sm:text-sm text-gray-600">Complete certification guide</div>
                    </div>
                  </div>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              {hackdoc && (
                <div 
                  className="flex items-center justify-between p-3 sm:p-4 bg-green-50 rounded-lg cursor-pointer hover:bg-green-100 transition-colors"
                  onClick={downloadHackdoc}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm sm:text-lg">🧠</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-gray-900 text-sm sm:text-base">Download HackDoc</div>
                      <div className="text-xs sm:text-sm text-gray-600">Proven study strategies</div>
                    </div>
                  </div>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              <div 
                className="flex items-center justify-between p-3 sm:p-4 bg-red-50 rounded-lg cursor-pointer hover:bg-red-100 transition-colors"
                onClick={downloadPlacementReport}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm sm:text-lg">🎓</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-gray-900 text-sm sm:text-base">Placement Report</div>
                    <div className="text-xs sm:text-sm text-gray-600">Salary insights & paths</div>
                  </div>
                </div>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Join Our Community
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with fellow {courseDisplayName} aspirants, get study tips, and stay updated with the latest exam information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* WhatsApp Community */}
            <div 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => setShowWhatsAppModal(true)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">WhatsApp Community</h3>
                  <p className="text-sm text-gray-600">5,000+ active members</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Get daily study tips, exam updates, and connect with fellow {courseDisplayName} aspirants in our active WhatsApp community.
              </p>
              <div className="flex items-center text-green-600 font-medium group-hover:text-green-700">
                <span>Join Community</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Telegram Channel */}
            <div 
              onClick={() => setShowTelegramModal(true)}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Telegram Channel</h3>
                  <p className="text-sm text-gray-600">Daily updates & resources</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Receive instant notifications about exam dates, study materials, and important {courseDisplayName} announcements.
              </p>
              <div className="flex items-center text-red-600 font-medium group-hover:text-red-700">
                <span>Join Channel</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* LinkedIn Community */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group" onClick={() => setShowLinkedInModal(true)}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">LinkedIn Community</h3>
                  <p className="text-sm text-gray-600">Professional networking & insights</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Connect with {courseDisplayName} professionals, share career insights, and access exclusive industry content and job opportunities.
              </p>
              <div className="flex items-center text-red-600 font-medium group-hover:text-red-700">
                <span>Join Community</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[80vh]">
            <button 
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full flex items-center justify-center transition-all"
            >
              ✕
            </button>
            <div className="aspect-video bg-gray-900 flex items-center justify-center">
              <video 
                className="w-full h-full object-cover"
                autoPlay
                muted={videoMuted}
                loop
                onClick={handleVideoClick}
                controls={!videoMuted}
              >
                <source src="/mentor-video.mp4" type="video/mp4" />
                <div className="text-white text-center p-8">
                  <p>Video content will be available soon.</p>
                </div>
              </video>
              {videoMuted && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <button 
                    onClick={handleVideoClick}
                    className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all"
                  >
                    <svg className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Community Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex flex-col lg:flex-row">
              {/* Left Side - Content */}
              <div className="lg:w-1/2 p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">WhatsApp Community</h3>
                      <p className="text-green-600 font-medium">5,000+ Active Members</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowWhatsAppModal(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">What You&apos;ll Get:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Daily Study Tips</p>
                          <p className="text-sm text-gray-600">Get expert-curated study strategies and tips every day</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Exam Updates</p>
                          <p className="text-sm text-gray-600">First to know about exam dates, syllabus changes, and important announcements</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Peer Support</p>
                          <p className="text-sm text-gray-600">Connect with fellow {courseDisplayName} aspirants, share doubts, and motivate each other</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Free Resources</p>
                          <p className="text-sm text-gray-600">Access to exclusive study materials, practice questions, and mock tests</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Expert Guidance</p>
                          <p className="text-sm text-gray-600">Direct access to {courseDisplayName} experts and mentors for doubt resolution</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="font-medium text-green-800">Community Guidelines</p>
                    </div>
                    <p className="text-sm text-green-700">
                      Our community maintains a respectful, supportive environment focused on {courseDisplayName} success. 
                      No spam, self-promotion, or off-topic discussions allowed.
                    </p>
                  </div>

                  <button onClick={() => window.open(whatsAppGroupLink, '_blank')} className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Join WhatsApp Community
                  </button>

                  <button onClick={() => window.open(whatsAppChannelLink, '_blank')} className="mt-3 w-full bg-white text-green-700 border border-green-300 hover:bg-green-50 py-3 px-6 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Follow WhatsApp Channel
                  </button>
                </div>
              </div>

              {/* Right Side - WhatsApp Visual */}
              <div className="lg:w-1/2 bg-gradient-to-br from-green-50 to-green-100 p-6 sm:p-8 flex items-center justify-center">
                <div className="w-full max-w-sm">
                  {/* Phone Mockup */}
                  <div className="bg-black rounded-3xl p-2 shadow-2xl">
                    <div className="bg-white rounded-2xl overflow-hidden">
                      {/* WhatsApp Header */}
                      <div className="bg-green-500 px-4 py-3 flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{courseDisplayName}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-medium text-sm">{courseDisplayName} Community</p>
                          <p className="text-green-100 text-xs">5,247 members</p>
                        </div>
                      </div>

                      {/* Chat Messages */}
                      <div className="p-3 space-y-3 h-96 overflow-y-auto bg-gray-50">
                        <div className="flex gap-2">
                          <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 flex items-center justify-center">
                            <span className="text-white text-xs">A</span>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">Alex • Today</p>
                            <div className="bg-white rounded-lg p-2 shadow-sm">
                              <p className="text-xs text-gray-800">Just passed Part 1! Thanks for all the support 🎉</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 flex items-center justify-center">
                            <span className="text-white text-xs">M</span>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">Mentor • Today</p>
                            <div className="bg-white rounded-lg p-2 shadow-sm">
                              <p className="text-xs text-gray-800">📚 Daily Tip: Focus on understanding concepts rather than memorizing. Practice with real-world scenarios!</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 flex items-center justify-center">
                            <span className="text-white text-xs">S</span>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">Sarah • Today</p>
                            <div className="bg-white rounded-lg p-2 shadow-sm">
                              <p className="text-xs text-gray-800">Can someone share the latest syllabus updates?</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <div className="w-6 h-6 bg-orange-500 rounded-full flex-shrink-0 flex items-center justify-center">
                            <span className="text-white text-xs">J</span>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">John • Today</p>
                            <div className="bg-white rounded-lg p-2 shadow-sm">
                              <p className="text-xs text-gray-800">📎 {courseDisplayName}_Syllabus_2024.pdf</p>
                              <p className="text-xs text-gray-600 mt-1">Here you go! Latest updates included.</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 flex items-center justify-center">
                            <span className="text-white text-xs">R</span>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">Rachel • Today</p>
                            <div className="bg-white rounded-lg p-2 shadow-sm">
                              <p className="text-xs text-gray-800">Study group meeting tomorrow at 7 PM EST. Who&apos;s in?</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Message Input */}
                      <div className="p-3 bg-white border-t">
                        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2">
                          <span className="text-xs text-gray-500 flex-1">Type a message...</span>
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Telegram Modal */}
      {showTelegramModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex flex-col lg:flex-row">
              {/* Left Side - Content */}
              <div className="lg:w-1/2 p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Telegram Channel</h3>
                      <p className="text-red-600 font-medium">8,500+ Subscribers</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowTelegramModal(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">What You&apos;ll Get:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Instant Notifications</p>
                          <p className="text-sm text-gray-600">Get real-time updates about exam dates, results, and important announcements</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Exclusive Content</p>
                          <p className="text-sm text-gray-600">Access to premium study materials, video lectures, and practice tests</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Expert Tips</p>
                          <p className="text-sm text-gray-600">Daily study strategies and exam preparation tips from {courseDisplayName} professionals</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Study Resources</p>
                          <p className="text-sm text-gray-600">Free downloadable materials, formula sheets, and quick reference guides</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Career Guidance</p>
                          <p className="text-sm text-gray-600">Job opportunities, career advice, and networking with {courseDisplayName} professionals</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="font-medium text-red-800">Channel Guidelines</p>
                    </div>
                    <p className="text-sm text-red-700">
                      Our channel is dedicated to {courseDisplayName} success and professional growth. 
                      We maintain a focused, educational environment with quality content only.
                    </p>
                  </div>

                  <button onClick={() => window.open('https://t.me/NorthStarAcademy', '_blank')} className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    Join Telegram Channel
                  </button>
                </div>
              </div>

              {/* Right Side - Telegram Visual */}
              <div className="lg:w-1/2 bg-gradient-to-br from-red-50 to-red-100 p-6 sm:p-8 flex items-center justify-center">
                <div className="w-full max-w-sm">
                  {/* Phone Mockup */}
                  <div className="bg-black rounded-3xl p-2 shadow-2xl">
                    <div className="bg-white rounded-2xl overflow-hidden">
                      {/* Telegram Header */}
                      <div className="bg-red-500 px-4 py-3 flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{courseDisplayName}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-medium text-sm">{courseDisplayName} Channel</p>
                          <p className="text-red-100 text-xs">8,547 subscribers</p>
                        </div>
                        <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728" />
                          </svg>
                        </div>
                      </div>

                      {/* Channel Messages */}
                      <div className="p-3 space-y-3 h-96 overflow-y-auto bg-gray-50">
                        <div className="bg-white rounded-lg p-3 shadow-sm border-l-4 border-red-500">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">📢</span>
                            </div>
                            <p className="text-xs text-gray-600 font-medium">{courseDisplayName} Channel • Today</p>
                          </div>
                          <p className="text-xs text-gray-800 mb-2">🎯 <strong>Exam Alert:</strong> {courseDisplayName} Part 1 registration deadline extended to March 15th!</p>
                          <p className="text-xs text-red-600">#{courseDisplayName}Exam #Registration</p>
                        </div>

                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">📚</span>
                            </div>
                            <p className="text-xs text-gray-600 font-medium">{courseDisplayName} Channel • Today</p>
                          </div>
                          <p className="text-xs text-gray-800 mb-2">📖 Daily Study Tip: Master the CVP analysis concepts - they appear in 15-20% of Part 1 questions!</p>
                          <div className="bg-gray-100 rounded p-2 mt-2">
                            <p className="text-xs text-gray-600">📎 CVP_Analysis_Guide.pdf</p>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">🎥</span>
                            </div>
                            <p className="text-xs text-gray-600 font-medium">{courseDisplayName} Channel • Yesterday</p>
                          </div>
                          <p className="text-xs text-gray-800 mb-2">🎬 New Video: &quot;How to tackle Financial Statement Analysis questions&quot;</p>
                          <div className="bg-red-50 rounded p-2 mt-2 flex items-center gap-2">
                            <div className="w-8 h-6 bg-red-500 rounded flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                            <p className="text-xs text-gray-700">Watch on YouTube</p>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">💼</span>
                            </div>
                            <p className="text-xs text-gray-600 font-medium">{courseDisplayName} Channel • Yesterday</p>
                          </div>
                          <p className="text-xs text-gray-800 mb-2">🚀 Job Alert: Senior Financial Analyst position at Fortune 500 company. {courseDisplayName} preferred!</p>
                          <p className="text-xs text-red-600">#JobAlert #{courseDisplayName}Jobs</p>
                        </div>

                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">⏰</span>
                            </div>
                            <p className="text-xs text-gray-600 font-medium">{courseDisplayName} Channel • 2 days ago</p>
                          </div>
                          <p className="text-xs text-gray-800">⚡ Quick Reminder: Practice mock tests regularly. Aim for 75%+ scores before the actual exam!</p>
                        </div>
                      </div>

                      {/* Channel Info */}
                      <div className="p-3 bg-red-50 border-t">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                              </svg>
                            </div>
                            <span className="text-xs text-red-700 font-medium">{courseDisplayName} Channel</span>
                          </div>
                          <button onClick={() => window.open('https://t.me/NorthStarAcademy', '_blank')} className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-red-600 transition-colors">
                            Join
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LinkedIn Modal */}
      {showLinkedInModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex flex-col lg:flex-row">
              {/* Left Side - Content */}
              <div className="lg:w-1/2 p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Join Our LinkedIn Community</h2>
                  </div>
                  <button 
                    onClick={() => setShowLinkedInModal(false)}
                    className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Benefits</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Career Opportunities</p>
                          <p className="text-sm text-gray-600">Access exclusive {courseDisplayName} job postings and career advancement opportunities</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Industry Insights</p>
                          <p className="text-sm text-gray-600">Stay updated with latest {courseDisplayName} industry trends and professional insights</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Professional Networking</p>
                          <p className="text-sm text-gray-600">Connect with {courseDisplayName} professionals, mentors, and industry leaders worldwide</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Thought Leadership</p>
                          <p className="text-sm text-gray-600">Share your expertise and build your professional brand in the {courseDisplayName} community</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="font-medium text-red-800">Professional Guidelines</p>
                    </div>
                    <p className="text-sm text-red-700">
                      Our LinkedIn community maintains professional standards with industry-focused discussions, 
                      career development content, and respectful networking opportunities.
                    </p>
                  </div>

                  <button onClick={() => window.open(linkedInGroupLink, '_blank')} className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Join LinkedIn Community
                  </button>
                </div>
              </div>

              {/* Right Side - LinkedIn Visual */}
              <div className="lg:w-1/2 bg-gradient-to-br from-red-50 to-red-100 p-6 sm:p-8 flex items-center justify-center">
                <div className="w-full max-w-sm">
                  {/* Phone Mockup */}
                  <div className="bg-black rounded-3xl p-2 shadow-2xl">
                    <div className="bg-white rounded-2xl overflow-hidden">
                      {/* LinkedIn Header */}
                      <div className="bg-red-600 px-4 py-3 flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-700 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{courseDisplayName}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-medium text-sm">{courseDisplayName} Professionals Network</p>
                          <p className="text-red-100 text-xs">12,847 members</p>
                        </div>
                        <div className="w-6 h-6 bg-red-700 rounded flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                          </svg>
                        </div>
                      </div>

                      {/* LinkedIn Posts */}
                      <div className="p-3 space-y-3 h-96 overflow-y-auto bg-gray-50">
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">JS</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-xs font-medium text-gray-900">John Smith, {courseDisplayName}</p>
                              <p className="text-xs text-gray-600">Senior Financial Analyst • 2d</p>
                            </div>
                          </div>
                          <p className="text-xs text-gray-800 mb-2">🎯 Just cleared {courseDisplayName} Part 2! The strategic planning section was challenging but the preparation through our study group made all the difference. Grateful for this amazing community! #{courseDisplayName} #Success</p>
                          <div className="flex items-center gap-4 text-xs text-gray-600">
                            <span>👍 24</span>
                            <span>💬 8</span>
                            <span>🔄 3</span>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">MR</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-xs font-medium text-gray-900">Maria Rodriguez, {courseDisplayName}</p>
                              <p className="text-xs text-gray-600">Finance Director • 1d</p>
                            </div>
                          </div>
                          <p className="text-xs text-gray-800 mb-2">💼 We&apos;re hiring! Senior Cost Analyst position open at our Fortune 500 company. {courseDisplayName} certification preferred. DM me for details! #Jobs #{courseDisplayName} #Hiring</p>
                          <div className="bg-red-50 rounded p-2 mt-2">
                            <p className="text-xs text-red-800 font-medium">💰 $85K - $105K • Remote/Hybrid</p>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-gray-600 mt-2">
                            <span>👍 42</span>
                            <span>💬 15</span>
                            <span>🔄 8</span>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">DR</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-xs font-medium text-gray-900">Dr. Robert Chen</p>
                              <p className="text-xs text-gray-600">{courseDisplayName} Instructor • 3d</p>
                            </div>
                          </div>
                          <p className="text-xs text-gray-800 mb-2">📊 Key insight for {courseDisplayName} candidates: Focus on understanding the &quot;why&quot; behind financial ratios, not just memorizing formulas. This approach will serve you well in both exams and your career!</p>
                          <div className="flex items-center gap-4 text-xs text-gray-600">
                            <span>👍 67</span>
                            <span>💬 12</span>
                            <span>🔄 18</span>
                          </div>
                        </div>
                      </div>

                      {/* LinkedIn Footer */}
                      <div className="p-3 bg-white border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </div>
                            <span className="text-xs text-red-700 font-medium">{courseDisplayName} Professionals</span>
                          </div>
                          <button className="bg-red-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-red-700 transition-colors">
                            Join
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Video Modal */}
      {showCustomVideoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Welcome to NorthStar Academy!</h3>
                <p className="text-sm text-gray-600 mt-1">You made a right choice in choosing us..</p>
              </div>
              <button
                onClick={() => setShowCustomVideoModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Video Container */}
            <div className="relative bg-black">
              <div className="aspect-video">
                <VideoPlayer
                  src="https://northstaracademy.b-cdn.net/Why-Northstar.mp4"
                  className="w-full h-full"
                />
              </div>

              {/* Custom Video Controls Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center justify-between">
                  {/* Play/Pause Button */}
                  <button className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-7a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>

                  {/* Volume Control */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setVideoMuted(!videoMuted)}
                      className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                    >
                      {videoMuted ? (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        </svg>
                      )}
                    </button>

                    {/* Volume Slider */}
                    <div className="w-20 bg-white/20 rounded-full h-1 relative">
                      <div className="bg-white h-1 rounded-full w-3/4"></div>
                      <div className="absolute top-1/2 left-3/4 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-lg"></div>
                    </div>
                  </div>

                  {/* Fullscreen Button */}
                  <button className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      )}
    </div>
  );
}