"use client";
import React from "react";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type BrandingPanelProps = {
  title: string;
  description: string;
  features?: Feature[];
};

const BrandingPanel: React.FC<BrandingPanelProps> = ({ title, description, features = [] }) => {
  return (
    <div className="hidden md:block bg-gradient-to-br from-red-700 to-red-900 p-8 text-white">
      <div className="flex flex-col justify-between h-full">
        <div>
          <h2 className="text-3xl font-extrabold mb-4 tracking-tight">{title}</h2>
          <p className="text-red-200 mb-6 text-lg">{description}</p>

          {features.length > 0 && (
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="transform transition-all duration-300 hover:translate-x-1 hover:shadow-lg bg-red-800/50 rounded-lg p-3 border-l-4 border-red-400"
                >
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-red-500 to-red-400 p-2 rounded-lg shadow-md mr-3">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{feature.title}</h4>
                      <p className="text-red-100 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-6 bg-gradient-to-r from-red-600 to-red-800 p-4 rounded-lg border border-red-400 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-red-300 opacity-20 rounded-full -mr-8 -mt-8"></div>
          <div className="flex items-center justify-center mb-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-red-300 border-2 border-white flex items-center justify-center text-xs font-bold text-red-800">JD</div>
              <div className="w-8 h-8 rounded-full bg-red-200 border-2 border-white flex items-center justify-center text-xs font-bold text-red-800">KP</div>
              <div className="w-8 h-8 rounded-full bg-red-100 border-2 border-white flex items-center justify-center text-xs font-bold text-red-800">MR</div>
              <div className="w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center text-xs font-bold text-red-800">+</div>
            </div>
          </div>
          <p className="text-white font-medium text-center text-sm">
            Join over <span className="font-bold text-red-200">10,000+</span> successful students who trusted NorthStar Academy for their career growth
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandingPanel;