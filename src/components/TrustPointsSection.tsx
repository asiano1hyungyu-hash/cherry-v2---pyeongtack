import React from 'react';
import { ShieldCheck, Sparkles, Award, Clock, Lock, Sliders, CheckCircle2 } from 'lucide-react';
import { cityConfig } from '../config/city.config';
import { brandConfig } from '../config/brand.config';

export const TrustPointsSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-rose-600" />,
    Sparkles: <Sparkles className="w-6 h-6 text-rose-600" />,
    Award: <Award className="w-6 h-6 text-rose-600" />,
    Clock: <Clock className="w-6 h-6 text-rose-600" />,
    Lock: <Lock className="w-6 h-6 text-rose-600" />,
    Sliders: <Sliders className="w-6 h-6 text-rose-600" />
  };

  return (
    <section 
      id="trust-points"
      className="py-14 sm:py-24 bg-white relative border-y border-stone-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold tracking-wider uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Service Standards</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-3">
            이용자가 신뢰하는 {brandConfig.brand}의 6가지 약속
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {cityConfig.cityKo} 고객님들께서 언제나 안심하고 최상의 휴식을 누리실 수 있도록 엄격한 서비스 기준을 고수합니다.
          </p>
        </div>

        {/* 6 Cards Grid (3 Columns on Desktop, 2 Columns on Tablet, 1 on Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cityConfig.trustPoints.map((point, index) => (
            <div
              key={point.id}
              className="bg-[#FAF9F6] rounded-3xl p-6 sm:p-7 border border-stone-200/80 hover:border-rose-300 hover:bg-rose-50/20 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200/80 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {iconMap[point.iconName] || <CheckCircle2 className="w-6 h-6 text-rose-600" />}
                  </div>
                  <span className="text-[11px] font-extrabold text-slate-400 font-display">
                    POINT 0{index + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 group-hover:text-rose-600 transition-colors">
                  {point.title}
                </h3>
                <div className="text-xs font-semibold text-rose-600 mb-3">
                  {point.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-stone-200/60 flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>체리홈타이 표준 규정 준수</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
