import React from 'react';
import { cityConfig } from '../config/city.config';

export const QuickInfoBar: React.FC = () => {
  return (
    <section 
      id="quick-info-bar"
      className="relative z-10 -mt-2 sm:-mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24"
    >
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-stone-200/80 shadow-md p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
          
          {cityConfig.quickStats.map((stat, idx) => (
            <div 
              key={stat.code} 
              className={`flex flex-col items-center text-center ${idx > 1 ? 'pt-4 sm:pt-0' : idx === 1 ? 'pt-0 sm:pt-0' : ''} px-2`}
            >
              {/* Stat Code Tag */}
              <div className="inline-block px-2.5 py-0.5 rounded-md bg-rose-50 text-rose-700 font-extrabold text-[11px] tracking-wider uppercase mb-2 font-display">
                {stat.code}
              </div>

              {/* Title */}
              <div className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                {stat.title}
              </div>

              {/* Subtitle / Desc */}
              <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">
                {stat.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
