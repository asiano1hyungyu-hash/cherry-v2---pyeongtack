import React from 'react';
import { Sparkles, Check, Phone, MessageCircle, MessageSquare, Clock, ShieldCheck, Flame, Heart, Crown } from 'lucide-react';
import { cityConfig } from '../config/city.config';
import { brandConfig, getSmsUrl } from '../config/brand.config';

export const ProgramsSection: React.FC = () => {
  const getProgramIcon = (type: string) => {
    switch (type) {
      case 'dry':
        return <Flame className="w-5 h-5 text-amber-500" />;
      case 'oil':
        return <Heart className="w-5 h-5 text-rose-500" />;
      case 'premium':
        return <Crown className="w-5 h-5 text-amber-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-rose-500" />;
    }
  };

  return (
    <section 
      id="programs"
      className="py-14 sm:py-24 bg-white relative border-y border-stone-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold tracking-wider uppercase mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Care Programs & Pricing</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            체리홈타이 {cityConfig.cityKo}점 프로그램 안내
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            모든 프로그램은 투명한 정찰제로 운영되며, 선입금 없는 <strong>100% 안심 후불제</strong>로 진행됩니다.
          </p>
        </div>

        {/* Pricing Cards Grid (3 Columns on Desktop, 1 Column on Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {cityConfig.programs.map((prog) => {
            const isRecommended = prog.recommended;
            const isFourOptions = prog.options.length === 4;

            return (
              <div
                key={prog.id}
                id={`program-card-${prog.id}`}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isRecommended
                    ? 'bg-gradient-to-b from-rose-50/70 to-white border-2 border-rose-500 shadow-xl lg:-translate-y-2'
                    : 'bg-white border border-stone-200 shadow-md hover:shadow-lg'
                }`}
              >
                {/* Recommended Badge on Top */}
                {prog.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-rose-600 text-white text-xs font-extrabold tracking-wide shadow-md shadow-rose-600/30">
                      <Sparkles className="w-3 h-3" />
                      {prog.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="p-1.5 rounded-lg bg-slate-100/80">
                          {getProgramIcon(prog.iconType)}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
                          {prog.name}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-500 font-medium">
                        {prog.subname}
                      </p>
                    </div>

                    <span className="text-[11px] font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md shrink-0">
                      정찰 후불제
                    </span>
                  </div>

                  {/* Program Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed min-h-[38px]">
                    {prog.description}
                  </p>

                  {/* =========================================================================
                      ALL-IN-ONE PRICING TABLE (Upfront, Non-interactive, 100% visible)
                      ========================================================================= */}
                  <div className="mb-6 rounded-2xl bg-slate-50 border border-slate-200/90 p-3 sm:p-4">
                    
                    {/* Header Label */}
                    <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-3 pb-2 border-b border-slate-200/70">
                      <span>코스 시간 및 이용요금</span>
                      <span className="text-[11px] font-medium text-rose-600">전액 후불제</span>
                    </div>

                    {/* DESKTOP / TABLET PRICING LAYOUT (hidden on mobile < 640px) */}
                    <div className="hidden sm:block">
                      {isFourOptions ? (
                        /* 4 Options: 2x2 Grid on PC to avoid cramped text or overflow */
                        <div className="grid grid-cols-2 gap-2.5">
                          {prog.options.map((opt) => (
                            <div 
                              key={opt.minutes}
                              className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-2xs flex flex-col justify-between"
                            >
                              <div className="flex items-center justify-between mb-1.5">
                                <span className="text-xs font-bold text-slate-700 font-display">
                                  {opt.minutes}분 코스
                                </span>
                                {opt.popular && (
                                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-100 text-rose-700">
                                    인기
                                  </span>
                                )}
                              </div>
                              <div className="text-base font-extrabold text-slate-900 font-display">
                                {opt.priceFormatted}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        /* 3 Options: 3-column horizontal row on PC */
                        <div className="grid grid-cols-3 gap-2">
                          {prog.options.map((opt) => (
                            <div 
                              key={opt.minutes}
                              className="bg-white rounded-xl p-2.5 text-center border border-slate-200/80 shadow-2xs flex flex-col justify-between"
                            >
                              <div className="flex items-center justify-center gap-1 mb-1">
                                <span className="text-xs font-bold text-slate-700 font-display">
                                  {opt.minutes}분
                                </span>
                                {opt.popular && (
                                  <span className="text-[9px] font-bold px-1 py-0.2 rounded bg-rose-100 text-rose-700">
                                    인기
                                  </span>
                                )}
                              </div>
                              <div className="text-sm font-extrabold text-slate-900 font-display whitespace-nowrap">
                                {opt.priceFormatted}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* MOBILE PRICING LAYOUT (clean vertical list on mobile < 640px) */}
                    <div className="sm:hidden space-y-1.5">
                      {prog.options.map((opt) => (
                        <div
                          key={opt.minutes}
                          className="flex items-center justify-between py-2 px-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-800 font-display">
                              {opt.minutes}분 코스
                            </span>
                            {opt.popular && (
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-100 text-rose-700">
                                인기
                              </span>
                            )}
                          </div>
                          <span className="text-sm font-extrabold text-slate-900 font-display">
                            {opt.priceFormatted}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Payment Guarantee Note (shown once per pricing block) */}
                    <div className="mt-3 pt-2.5 border-t border-slate-200/70 flex items-center justify-center gap-1 text-[11px] text-emerald-700 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>관리 종료 후 현장 결제 (선입금 없음)</span>
                    </div>

                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-bold text-slate-700 tracking-tight">
                      주요 관리 구성
                    </div>
                    {prog.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA for this program */}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={brandConfig.phoneTel}
                      className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
                      title="전화로 바로 예약"
                    >
                      <Phone className="w-3.5 h-3.5 text-rose-400" />
                      <span>전화 예약</span>
                    </a>
                    
                    <a
                      href={brandConfig.kakaoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl text-xs font-bold text-[#381F1F] bg-[#FEE500] hover:bg-[#FDD835] transition-colors"
                      title="카카오톡으로 예약 상담"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-[#381F1F]" />
                      <span>카톡 문의</span>
                    </a>
                  </div>

                  <a
                    href={getSmsUrl(cityConfig.keyword)}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold text-slate-800 bg-rose-50/80 hover:bg-rose-100/90 border border-rose-200/80 transition-colors"
                    title="문자로 간편예약"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-rose-600" />
                    <span>문자로 간편예약</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Pricing Notice Note */}
        <div className="mt-10 max-w-2xl mx-auto text-center bg-rose-50/60 rounded-2xl p-4 border border-rose-100 text-xs text-slate-600 leading-relaxed">
          <p className="font-semibold text-rose-800 mb-0.5">
            ※ 체리홈타이 {cityConfig.cityKo}점 안심 이용 안내
          </p>
          모든 코스는 관리 소모품 및 출장 방문료가 포함된 최종 금액이며, 어떠한 경우에도 사전 예약금이나 선입금을 요구하지 않습니다.
        </div>

      </div>
    </section>
  );
};
