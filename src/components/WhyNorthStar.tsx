/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useRef } from 'react';
import { 
  CheckIcon, 
  XMarkIcon, 
  PlayIcon, 
  StarIcon, 
  AcademicCapIcon, 
  TrophyIcon, 
  UserGroupIcon,
  ChevronRightIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

interface TestimonialVideo {
  id: string;
  thumbnail: string;
  name: string;
  achievement: string;
  videoUrl: string;
}

interface ComparisonFeature {
  feature: string;
  traditional: string | boolean;
  becker: string | boolean;
  northstar: string | boolean;
  highlight?: boolean;
}

const WhyNorthStar: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<TestimonialVideo | null>(null);
  const [, ] = useState<string | null>(null);
  const certificateRef = useRef<HTMLDivElement>(null);

  const testimonialVideos: TestimonialVideo[] = [
    {
      id: '1',
      thumbnail: 'https://www.withersworldwide.com/Withers/media/Withers/person-pages/mim/IMGL0099-EditPriya_Sharma,_PYS_SECONDARY.jpg',
      name: 'Priya Sharma',
      achievement: 'CMA Global Rank 1',
      videoUrl: '#'
    },
    {
      id: '2',
      thumbnail: 'https://cdni.haymarketmedia.in/utils/ImageResizer.ashx?n=https://img.haymarketmedia.in/printweek/IMG/954/34954/imageresizerwm.JPG',
      name: 'Rahul Kumar',
      achievement: 'CPA Cleared in 1st Attempt',
      videoUrl: '#'
    },
    {
      id: '3',
      thumbnail: 'https://gwdocs.com/sites/g/files/zaskib551/files/2021-09/Anita-Mehta-Headshot.jpg',
      name: 'Anita Mehta',
      achievement: 'Big 4 Placement',
      videoUrl: '#'
    },
    {
      id: '4',
      thumbnail: 'https://i1.rgstatic.net/ii/profile.image/885506015498240-1588132494015_Q512/Vikas-Patel-22.jpg',
      name: 'Vikash Patel',
      achievement: 'ACCA Gold Medal',
      videoUrl: '#'
    }
  ];

  const comparisonFeatures: ComparisonFeature[] = [
    { feature: 'Live + Recorded Classes', traditional: true, becker: true, northstar: true },
    { feature: 'Certificate from IMA/AICPA', traditional: true, becker: true, northstar: true },
    { feature: 'Content Style', traditional: 'American (theoretical)', becker: 'American (theoretical)', northstar: 'Simplified (Indian examples)', highlight: true },
    { feature: 'Personalized Mentorship', traditional: false, becker: false, northstar: 'Guided by Irfat Sir', highlight: true },
    { feature: 'Doubt Solving', traditional: 'Low', becker: 'Low', northstar: 'High (1-on-1)', highlight: true },
    { feature: 'Success Rate', traditional: 'Mixed', becker: 'Mixed', northstar: '98% proven', highlight: true },
    { feature: 'Fee', traditional: '₹1.5–2 Lakhs', becker: '₹1.5–2 Lakhs', northstar: '₹75k–95k', highlight: true },
    { feature: 'Industry Support', traditional: 'Some', becker: 'Some', northstar: 'Big 4 & MNC placements', highlight: true }
  ];

  const proofChips = [
    { icon: StarIcon, text: 'Ranked #1 CMA Mentor in India', color: 'text-yellow-600 bg-yellow-50 border-yellow-200' },
    { icon: UserGroupIcon, text: '25,000+ Students Trained', color: 'text-blue-600 bg-blue-50 border-blue-200' },
    { icon: TrophyIcon, text: 'National & Global Rank Holders', color: 'text-purple-600 bg-purple-50 border-purple-200' },
    { icon: CheckIcon, text: '98% Pass Rate', color: 'text-green-600 bg-green-50 border-green-200' },
    { icon: AcademicCapIcon, text: 'One Mentor System', color: 'text-indigo-600 bg-indigo-50 border-indigo-200' }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!certificateRef.current) return;
    
    const rect = certificateRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    certificateRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (certificateRef.current) {
      certificateRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }
  };

  const scrollToResults = () => {
    // This would scroll to Section 3 or open Success Stories Modal
    console.log('Scrolling to results section...');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Headline & Messaging */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Same Global Certification.
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block">
                  Smarter Path to Achieve It.
                </span>
              </h2>
              
              <div className="text-lg text-slate-600 leading-relaxed space-y-2">
                <p>You don&apos;t become <span className="font-semibold">reseller-certified</span>.</p>
                <p>You become <span className="font-semibold text-blue-600">CMA (US) / CPA (US) / ACCA (UK)</span> certified</p>
                <p>by <span className="font-semibold">IMA / AICPA / ACCA Global</span> — no matter where you study.</p>
              </div>
            </div>

            {/* Crystal Clear Message */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">!</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Crystal Clear Truth</h3>
                  <p className="text-blue-800">The certificate you receive will NEVER have any institute name on it. Only the official certification body (IMA/AICPA/ACCA) appears.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Certificate Mockups */}
          <div className="relative">
            <div 
              ref={certificateRef}
              className="relative transition-transform duration-300 ease-out"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* CMA Certificate */}
              <div className="bg-white rounded-xl shadow-2xl p-8 mb-6 border-2 border-slate-200 hover:border-blue-300 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <AcademicCapIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">CMA (US) Certificate</h3>
                      <p className="text-sm text-slate-600">Issued by IMA USA</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">IMA</span>
                    </div>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-slate-500 italic">Official certification from Institute of Management Accountants</p>
                </div>
              </div>

              {/* CPA Certificate */}
              <div className="bg-white rounded-xl shadow-2xl p-8 border-2 border-slate-200 hover:border-green-300 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <GlobeAltIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">CPA (US) Certificate</h3>
                      <p className="text-sm text-slate-600">Issued by AICPA USA</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">AICPA</span>
                    </div>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-slate-500 italic">Official certification from American Institute of CPAs</p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
                Same Certification ✨
              </div>
            </div>

            {/* Caption */}
            <div className="mt-6 text-center">
              <p className="text-slate-600 font-medium">
                &quot;These are the certificates you will receive.<br />
                <span className="text-slate-800 font-semibold">No reseller / No institute name ever appears here.&quot;</span>
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 mb-16">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-8 py-6">
            <h3 className="text-2xl font-bold text-white text-center">Why Choose NorthStar Over Other Providers?</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-slate-900">Traditional Institute</th>
                  <th className="px-6 py-4 text-center font-semibold text-slate-900">Reseller Providers</th>
                  <th className="px-6 py-4 text-center font-semibold text-slate-900 bg-green-50 border-l-2 border-green-500">
                    NorthStar Academy ✅
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 font-medium text-slate-900">{feature.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.traditional === 'boolean' ? (
                        feature.traditional ? (
                          <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <XMarkIcon className="w-5 h-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-600">{feature.traditional}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.becker === 'boolean' ? (
                        feature.becker ? (
                          <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <XMarkIcon className="w-5 h-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-600">{feature.becker}</span>
                      )}
                    </td>
                    <td className={`px-6 py-4 text-center border-l-2 border-green-500 ${feature.highlight ? 'bg-green-50' : 'bg-green-25'}`}>
                      {typeof feature.northstar === 'boolean' ? (
                        feature.northstar ? (
                          <CheckIcon className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <XMarkIcon className="w-5 h-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className={`font-semibold ${feature.highlight ? 'text-green-700' : 'text-slate-700'}`}>
                          {feature.northstar}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Proof Chips */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {proofChips.map((chip, index) => {
            const IconComponent = chip.icon;
            return (
              <div 
                key={index}
                className={`${chip.color} border-2 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <IconComponent className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold text-sm">{chip.text}</p>
              </div>
            );
          })}
        </div>

        {/* Video Testimonials Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Real Success Stories</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonialVideos.map((video) => (
              <div 
                key={video.id}
                className="relative group cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <img 
                    src={video.thumbnail} 
                    alt={video.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center animate-pulse">
                      <PlayIcon className="w-6 h-6 text-slate-900 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                    <p className="text-white font-semibold text-sm">{video.name}</p>
                    <p className="text-white text-xs opacity-90">{video.achievement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button 
            onClick={scrollToResults}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center space-x-2">
              <span>Prove It To Me → Show Student Results</span>
              <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{selectedVideo.name}</h3>
                <p className="text-slate-600">{selectedVideo.achievement}</p>
              </div>
              <button 
                onClick={() => setSelectedVideo(null)}
                className="w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <XMarkIcon className="w-5 h-5 text-slate-600" />
              </button>
            </div>
            <div className="p-6">
              <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
                <p className="text-slate-500">Video player would be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhyNorthStar;