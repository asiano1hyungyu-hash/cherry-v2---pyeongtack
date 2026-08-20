import React from 'react';
import { Phone, MessageCircle, MessageSquare } from 'lucide-react';
import { brandConfig, getSmsUrl } from '../config/brand.config';
import { cityConfig } from '../config/city.config';

export const MobileFloatingBar: React.FC = () => {
  return (
    <div 
      id="mobile-floating-contact-bar"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-50 p-2 bg-white/95 backdrop-blur-md border-t border-stone-200/90 shadow-[0_-8px_20px_rgba(0,0,0,0.08)] pb-[calc(0.5rem+env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-3 gap-1.5 max-w-lg mx-auto">
        
        {/* Phone Button */}
        <a
          id="mobile-float-phone-btn"
          href={brandConfig.phoneTel}
          className="flex items-center justify-center gap-1.5 py-3 px-1.5 rounded-xl bg-rose-600 active:bg-rose-700 text-white font-bold text-xs shadow-md shadow-rose-600/20 active:scale-[0.98] transition-all text-center"
          title={`${cityConfig.cityKo} 전화 예약 (${brandConfig.phoneDisplay})`}
        >
          <Phone className="w-3.5 h-3.5 text-white shrink-0" />
          <span className="truncate">전화 예약</span>
        </a>

        {/* SMS Button */}
        <a
          id="mobile-float-sms-btn"
          href={getSmsUrl(cityConfig.keyword)}
          className="flex items-center justify-center gap-1.5 py-3 px-1.5 rounded-xl bg-slate-900 active:bg-slate-800 text-white font-bold text-xs shadow-xs active:scale-[0.98] transition-all text-center"
          title="문자로 간편예약"
        >
          <MessageSquare className="w-3.5 h-3.5 text-rose-400 shrink-0" />
          <span className="truncate">문자 예약</span>
        </a>

        {/* Kakao Button */}
        <a
          id="mobile-float-kakao-btn"
          href={brandConfig.kakaoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-3 px-1.5 rounded-xl bg-[#FEE500] active:bg-[#FDD835] text-[#381F1F] font-bold text-xs shadow-xs active:scale-[0.98] transition-all text-center"
          title="카카오톡 1:1 상담"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-[#381F1F] shrink-0" />
          <span className="truncate">카톡 문의</span>
        </a>

      </div>
    </div>
  );
};
