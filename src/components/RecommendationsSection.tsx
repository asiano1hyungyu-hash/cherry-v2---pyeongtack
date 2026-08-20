import React from 'react';
import { HelpCircle, ArrowRight, Zap, Coffee, Moon, Check } from 'lucide-react';
import { cityConfig } from '../config/city.config';
import { brandConfig } from '../config/brand.config';

export const RecommendationsSection: React.FC = () => {
  const getSituationIcon = (id: string) => {
    switch (id) {
      case 'rec-light':
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 'rec-soft':
        return <Moon className="w-5 h-5 text-indigo-500" />;
      case 'rec-deep':
        return <Coffee className="w-5 h-5 text-rose-500" />;
      default:
        return <HelpCircle className="w-5 h-5 text-rose-500" />;
    }
  };

  return (
    <section 
      id="recommendations"
      className="py-14 sm:py-20 bg-[#FAF9F6] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/80 text-rose-700 text-xs font-bold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Smart Guide</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-3">
            어떤 프로그램이 좋을까요?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            현재 고객님의 신체 컨디션과 선호도에 맞춰 가장 적합한 케어를 추천해 드립니다.
          </p>
        </div>

        {/* 3 Situation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cityConfig.recommendations.map((rec) => (
            <div
              key={rec.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 v2-card-shadow v2-card-hover flex flex-col justify-between"
            >
              <div>
                {/* Situation Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center">
                    {getSituationIcon(rec.id)}
                  </div>
                  <span className="inline-block px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold">
                    {rec.badge}
                  </span>
                </div>

                {/* Situation Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-1 font-display">
                  {rec.situationTitle}
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  {rec.situationSub}
                </p>

                {/* Arrow to Recommended Program */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/60 mb-4">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    추천 케어 코스
                  </div>
                  <div className="text-base font-extrabold text-rose-600 flex items-center gap-1.5">
                    <span>{rec.recommendedProgram}</span>
                  </div>
                </div>

                {/* Reason */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {rec.reason}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="#programs"
                  className="inline-flex items-center justify-between w-full py-2.5 px-3 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                >
                  <span>{rec.recommendedProgram} 가격 확인</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
