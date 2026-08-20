import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { brandConfig } from '../config/brand.config';
import { cityConfig } from '../config/city.config';

export const MobileFloatingBar: React.FC = () => {
  return (
    <div 
      id="mobile-floating-contact-bar"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-white/95 backdrop-blur-md border-t border-stone-200/90 shadow-[0_-8px_20px_rgba(0,0,0,0.08)] pb-[calc(0.625rem+env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center gap-2 max-w-lg mx-auto">
        
        {/* Phone Button */}
        <a
          id="mobile-float-phone-btn"
          href={brandConfig.phoneTel}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-2 rounded-2xl bg-rose-600 active:bg-rose-700 text-white font-bold text-xs shadow-md shadow-rose-600/20 active:scale-[0.98] transition-all"
          title={`${cityConfig.cityKo} 전화 예약`}
        >
          <Phone className="w-4 h-4 text-white shrink-0" />
          <span className="truncate">전화 예약 ({brandConfig.phoneDisplay})</span>
        </a>

        {/* Kakao Button */}
        <a
          id="mobile-float-kakao-btn"
          href={brandConfig.kakaoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 rounded-2xl bg-[#FEE500] active:bg-[#FDD835] text-[#381F1F] font-bold text-xs shadow-xs active:scale-[0.98] transition-all"
          title="카카오톡 1:1 상담"
        >
          <MessageCircle className="w-4 h-4 fill-[#381F1F] shrink-0" />
          <span>카톡 문의</span>
        </a>

      </div>
    </div>
  );
};
