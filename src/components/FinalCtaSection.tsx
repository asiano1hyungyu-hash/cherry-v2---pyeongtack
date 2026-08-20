import React from 'react';
import { Phone, MessageCircle, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { brandConfig } from '../config/brand.config';
import { cityConfig } from '../config/city.config';
import { CherryIcon } from './icons/CherryIcon';

export const FinalCtaSection: React.FC = () => {
  return (
    <section 
      id="final-cta"
      className="py-16 sm:py-24 bg-white relative border-t border-stone-200/80 overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 via-white to-white pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 rounded-3xl sm:rounded-[36px] p-8 sm:p-12 lg:p-16 text-white text-center relative overflow-hidden shadow-2xl">
          
          {/* Subtle Ambient Red Glow inside dark card */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />

          {/* Logo Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-rose-300 text-xs font-bold tracking-wider uppercase mb-6">
            <CherryIcon className="w-4 h-4 text-rose-400" />
            <span>{brandConfig.brand} · {cityConfig.cityKo}점</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 font-display">
            {cityConfig.finalCtaTitle}
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            {cityConfig.finalCtaSubhead}
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto mb-8">
            {/* Phone Button */}
            <a
              id="final-cta-phone-btn"
              href={brandConfig.phoneTel}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-sm font-bold text-white bg-rose-600 hover:bg-rose-700 shadow-lg shadow-rose-600/30 transition-all active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>전화 예약 ({brandConfig.phoneDisplay})</span>
            </a>

            {/* Kakao Button */}
            <a
              id="final-cta-kakao-btn"
              href={brandConfig.kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-sm font-bold text-[#381F1F] bg-[#FEE500] hover:bg-[#FDD835] shadow-md transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-[#381F1F]" />
              <span>카카오톡 문의</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-6 border-t border-white/10 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-rose-400" />
              <span>24시간 365일 상시 운영</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% 현장 안심 후불제</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{cityConfig.cityKo} 전지역 신속 배차</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
