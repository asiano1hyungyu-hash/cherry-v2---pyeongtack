import React from 'react';
import { Home, CalendarCheck, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { cityConfig } from '../config/city.config';
import { brandConfig } from '../config/brand.config';

export const ServiceFeatures: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Home: <Home className="w-6 h-6 text-rose-600" />,
    CalendarCheck: <CalendarCheck className="w-6 h-6 text-rose-600" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-rose-600" />
  };

  return (
    <section 
      id="features"
      className="py-12 sm:py-20 bg-[#FAF9F6] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/80 text-rose-700 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Service Excellence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            {cityConfig.cityKo}에서 편안하게 이용하는 방문 관리
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            바쁜 하루를 마치고 번거롭게 이동할 필요 없이, 가장 아늑하고 익숙한 공간에서 {brandConfig.brand}만의 품격 있는 홈케어 테라피를 누려보세요.
          </p>
        </div>

        {/* 3 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cityConfig.serviceFeatures.map((feature, idx) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-stone-200/90 v2-card-shadow v2-card-hover flex flex-col justify-between relative group"
            >
              {/* Card Top */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                    {iconMap[feature.iconName] || <Sparkles className="w-6 h-6 text-rose-600" />}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 font-display">
                    0{idx + 1}
                  </span>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold mb-3">
                  {feature.badge}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-rose-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Verification Bullet */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>체리홈타이 {cityConfig.cityKo}점 품질 보증</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
