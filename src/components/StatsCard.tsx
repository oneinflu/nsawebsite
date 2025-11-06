'use client';

import React from 'react';

interface StatsCardProps {
  backgroundColor: string;
  mainStat: string;
  subText: string;
  textColor?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  backgroundColor, 
  mainStat, 
  subText, 
  textColor = 'text-black' 
}) => {
  return (
    <div className={`${backgroundColor} rounded-lg p-6 h-32 flex flex-col justify-center`}>
      <div className={`text-3xl font-bold ${textColor} mb-2`}>
        {mainStat}
      </div>
      <div className={`text-sm ${textColor} opacity-80`}>
        {subText}
      </div>
    </div>
  );
};

export default StatsCard;