import React from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Clock, MapPin, Sparkles } from 'lucide-react';
import { brandConfig } from '../config/brand.config';
import { cityConfig } from '../config/city.config';

interface HeroProps {
  onOpenReservationModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservationModal }) => {
  const heroBadges = [
    { label: '24시간 운영', icon: Clock },
    { label: '100% 후불제', icon: ShieldCheck },
    { label: `${cityConfig.cityKo} 전지역`, icon: MapPin },
    { label: '전문 예약 방문', icon: Sparkles }
  ];

  return (
    <section 
      id="hero-section"
      className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden"
    >
      {/* Background Decorative Gradients - Subtle & Refined */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-rose-100/40 via-amber-50/30 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Badge */}
            <div 
              id="hero-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-bold tracking-wider uppercase mb-5 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>{cityConfig.heroBadge}</span>
            </div>

            {/* Main H1 Heading - Exactly 1 H1 on page */}
            <h1 
              id="hero-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.2] mb-5 font-display"
            >
              <span className="text-slate-900">{cityConfig.keyword} </span>
              <span className="text-rose-600 block sm:inline">{brandConfig.brand}</span>
            </h1>

            {/* Subheading / Descriptive Copy */}
            <p 
              id="hero-description"
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-6"
            >
              {cityConfig.heroSubhead}
            </p>

            {/* 4 Feature Badges */}
            <div 
              id="hero-feature-badges"
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full mb-8"
            >
              {heroBadges.map((badge) => {
                const IconComponent = badge.icon;
                return (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-stone-200 shadow-xs"
                  >
                    <IconComponent className="w-4 h-4 text-rose-600 shrink-0" />
                    <span className="text-xs font-semibold text-slate-800 whitespace-nowrap">
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons Row - High Contrast, Accessible & Mobile Optimized */}
            <div 
              id="hero-cta-group"
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-xl"
            >
              {/* Phone CTA */}
              <a
                id="hero-phone-cta"
                href={brandConfig.phoneTel}
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-rose-600 hover:bg-rose-700 shadow-md shadow-rose-600/20 hover:shadow-lg transition-all active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>전화 예약 ({brandConfig.phoneDisplay})</span>
              </a>

              {/* Kakao CTA */}
              <a
                id="hero-kakao-cta"
                href={brandConfig.kakaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-[#381F1F] bg-[#FEE500] hover:bg-[#FDD835] shadow-sm transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-[#381F1F]" />
                <span>카톡 문의</span>
              </a>

              {/* Programs Link CTA */}
              <a
                id="hero-view-programs-cta"
                href="#programs"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                <span>프로그램 보기</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Trust Micro-Text */}
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>선입금이나 예약금은 일절 요구하지 않는 <strong>100% 안심 후불제</strong>입니다.</span>
            </div>

          </div>

          {/* Right Column: Visual Presentation Area */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            
            {/* Visual Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-xl border border-stone-200/80 bg-white p-2.5">
              <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={cityConfig.heroImage}
                  alt="평택출장마사지 체리홈타이 방문 마사지 서비스"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Subtle Image Gradient Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                {/* Image Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs font-semibold text-rose-200 uppercase tracking-wider">
                    {brandConfig.brand} Premium Care
                  </div>
                  <div className="text-sm font-bold truncate">
                    {cityConfig.cityKo} 전지역 24시간 안심 방문 케어
                  </div>
                </div>
              </div>

              {/* Floating Trust Card 1: Fast Arrival */}
              <div className="absolute -top-3 -left-3 sm:-left-5 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-rose-100 shadow-lg flex items-center gap-2.5 animate-subtle-pulse">
                <div className="w-8 h-8 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-500">평택 전지역</div>
                  <div className="text-xs font-extrabold text-slate-900">30분 내외 빠른 방문</div>
                </div>
              </div>

              {/* Floating Trust Card 2: 100% Post-Payment */}
              <div className="absolute -bottom-3 -right-3 sm:-right-5 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-emerald-100 shadow-lg flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-500">신뢰와 안심</div>
                  <div className="text-xs font-extrabold text-emerald-700">100% 현장 후불제</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
