'use client';

import Image from 'next/image';
import LeadFormButton from '@/components/LeadFormButton';

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/life/nsa.webp"
          alt="NorthStar Academy campus and community"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
              NorthStar Academy
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-purple-600 to-green-600">India&apos;s Premier Finance & Accounting Training Institute</span>
            </h1>
            <p className="mt-6 text-lg text-slate-700 max-w-2xl">
              India’s premier training institute for globally recognized certifications like CPA USA, CMA USA, ACCA, and EA. Mentor-led learning, structured curriculum, and career support to accelerate your goals.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <LeadFormButton 
                formType="general"
                variant="primary"
                isSendOtp={true}
                
              >
                Book Free Counseling
              </LeadFormButton>
              <LeadFormButton 
                formType="download-placement-report"
                variant="secondary"
                isSendOtp={true}
               
              >
                Download Placement Report
              </LeadFormButton>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white/70 backdrop-blur">
            <div className="aspect-video">
              <video 
                src="/life/Office.mp4" 
                className="w-full h-full object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
              />
            </div>
            <div className="p-6 grid grid-cols-3 gap-4">
              {[
                { label: 'Students Trained', value: '55,000+' },
                { label: 'Average Pass Rate', value: '83%' },
                { label: 'Countries Served', value: '34+' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}