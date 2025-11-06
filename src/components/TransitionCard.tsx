'use client';

import React from 'react';
import Image from 'next/image';

interface TransitionCardProps {
  personName: string;
  fromRole: string;
  toRole: string;
  salaryHike: string;
  hikeColor?: string;
  textColor?: string;
}

const TransitionCard: React.FC<TransitionCardProps> = ({
  personName,
  fromRole,
  toRole,
  salaryHike,
  hikeColor = 'bg-green-500',
  textColor = 'text-black'
}) => {
  return (
    <div 
      className="relative rounded-xl p-6 h-36 flex flex-col justify-around overflow-hidden"
      style={{
        backgroundColor: '#F1FFEC',
        border: '1px solid #000000'
      }}
    >
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 rounded-xl opacity-30"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&crop=center)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* Content with relative positioning to appear above overlay */}
      <div className="relative z-10">
      {/* Main content in row layout */}
      <div className="flex items-start space-x-6">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="relative w-16 h-16">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
              alt="Profile"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Person Name and Role Transition Group */}
        <div className="flex flex-col items-start space-y-4">
          {/* Person Name */}
          <div>
            <div className={`font-semibold ${textColor} text-lg`}>{personName}</div>
          </div>

          {/* Role Transition with Arrows */}
          <div className="flex items-center space-x-4">
            <div className={`text-sm ${textColor} font-medium`}>
              {fromRole}
            </div>
            
            <div className="flex items-center space-x-1">
              <div className={`text-lg ${textColor} opacity-60`}>›</div>
              <div className={`text-lg ${textColor} opacity-60`}>›</div>
              <div className={`text-lg ${textColor} opacity-60`}>›</div>
            </div>
            
            <div className={`text-sm ${textColor} font-medium`}>
              {toRole}
            </div>
          </div>
        </div>
      </div>

      {/* Salary Hike Badge */}
      <div className="absolute top-0 right-0 z-20">
        <div 
          className={`${hikeColor} text-white px-3 py-1 text-xs font-medium`}
          style={{
            borderRadius: '0 12px 0 12px'
          }}
        >
          {salaryHike}
        </div>
      </div>
      </div>
    </div>
  );
};

export default TransitionCard;