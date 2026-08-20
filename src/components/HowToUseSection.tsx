import React from 'react';
import { MapPin, Sliders, PhoneCall, Sparkles, CreditCard, ChevronRight } from 'lucide-react';
import { cityConfig } from '../config/city.config';
import { brandConfig } from '../config/brand.config';

export const HowToUseSection: React.FC = () => {
  const stepIcons = [
    <MapPin className="w-5 h-5 text-rose-600" key="1" />,
    <Sliders className="w-5 h-5 text-rose-600" key="2" />,
    <PhoneCall className="w-5 h-5 text-rose-600" key="3" />,
    <Sparkles className="w-5 h-5 text-rose-600" key="4" />,
    <CreditCard className="w-5 h-5 text-rose-600" key="5" />
  ];

  return (
    <section 
      id="how-to-use"
      className="py-14 sm:py-24 bg-white relative border-y border-stone-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold tracking-wider uppercase mb-3">
            <span>Simple 5 Steps</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-3">
            예약부터 이용까지 간단하게
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            복잡한 절차 없이 전화나 카카오톡 상담 한 번으로 원하는 장소에서 간편하게 서비스를 이용하실 수 있습니다.
          </p>
        </div>

        {/* 5-Step Progression (Grid on Desktop, Vertical with connecting lines on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 relative">
          
          {cityConfig.steps.map((stepItem, index) => (
            <div
              key={stepItem.step}
              className="bg-[#FAF9F6] rounded-3xl p-5 sm:p-6 border border-stone-200/80 flex flex-col justify-between relative group hover:border-rose-300 transition-colors"
            >
              {/* Connector Arrow for desktop */}
              {index < cityConfig.steps.length - 1 && (
                <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 bg-white border border-stone-200 text-slate-400 rounded-full p-1 shadow-xs">
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              )}

              <div>
                {/* Step Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-2.5 py-1 rounded-lg bg-rose-600 text-white font-extrabold text-[11px] tracking-wider font-display shadow-xs">
                    {stepItem.step}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-white border border-stone-200/80 flex items-center justify-center shadow-xs">
                    {stepIcons[index]}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                  {stepItem.title}
                </h3>
                <div className="text-xs font-semibold text-rose-600 mb-3">
                  {stepItem.subtitle}
                </div>

                {/* Step Description */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              {/* Step indicator */}
              <div className="mt-4 pt-3 border-t border-stone-200/60 text-[11px] text-slate-400 font-medium">
                Step 0{index + 1} of 05
              </div>
            </div>
          ))}

        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-600/30 border border-rose-500/50 flex items-center justify-center shrink-0">
              <span className="text-lg">🛡️</span>
            </div>
            <div>
              <div className="text-sm font-bold">100% 안심 후불제 보장</div>
              <div className="text-xs text-slate-300">
                {brandConfig.brand}는 모든 관리가 완료된 후 결제가 진행되므로 안심하고 이용하실 수 있습니다.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={brandConfig.phoneTel}
              className="flex-1 sm:flex-none text-center px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-colors"
            >
              전화 상담 연결
            </a>
            <a
              href={brandConfig.kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none text-center px-4 py-2.5 rounded-xl bg-[#FEE500] hover:bg-[#FDD835] text-[#381F1F] text-xs font-bold transition-colors"
            >
              카카오톡 문의
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
