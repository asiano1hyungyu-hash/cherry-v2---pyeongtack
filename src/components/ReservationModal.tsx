import React, { useState } from 'react';
import { X, Phone, MessageCircle, Copy, Check, MapPin, Clock, Sparkles } from 'lucide-react';
import { brandConfig } from '../config/brand.config';
import { cityConfig } from '../config/city.config';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [selectedArea, setSelectedArea] = useState<string>(cityConfig.areas[0]);
  const [selectedProgram, setSelectedProgram] = useState<string>(cityConfig.programs[0].name);
  const [selectedTime, setSelectedTime] = useState<number>(90);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentProgramObj = cityConfig.programs.find((p) => p.name === selectedProgram) || cityConfig.programs[0];
  
  // Ensure selectedTime is valid for current program
  const currentOption = currentProgramObj.options.find((o) => o.minutes === selectedTime) || currentProgramObj.options[0];
  const effectiveTime = currentOption.minutes;

  const reservationMessage = `[${brandConfig.brand} ${cityConfig.cityKo}점 예약 문의]
- 방문 희망 지역: ${cityConfig.cityKo} ${selectedArea}
- 신청 프로그램: ${selectedProgram} (${effectiveTime}분 코스)
- 이용 금액: ${currentOption.priceFormatted} (후불제)
- 이용 희망 시간: 바로 방문 / 원하시는 시간`;

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(reservationMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleProgramSelect = (name: string) => {
    setSelectedProgram(name);
    const targetProg = cityConfig.programs.find((p) => p.name === name);
    if (targetProg && !targetProg.options.some((o) => o.minutes === selectedTime)) {
      setSelectedTime(targetProg.options[1]?.minutes || targetProg.options[0].minutes);
    }
  };

  return (
    <div 
      id="reservation-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="reservation-modal-card"
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>스마트 간편 예약 도우미</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
            {cityConfig.cityKo}점 빠른 예약 신청
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            원하시는 지역과 코스를 선택하시면 맞춤형 예약 메시지가 준비됩니다.
          </p>
        </div>

        {/* Form Controls */}
        <div className="space-y-4 mb-6">
          {/* 1. Area Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-rose-600" />
              <span>1. {cityConfig.cityKo} 내 방문 지역 선택</span>
            </label>
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:border-rose-400"
            >
              {cityConfig.areas.map((area) => (
                <option key={area} value={area}>
                  {cityConfig.cityKo} {area}
                </option>
              ))}
            </select>
          </div>

          {/* 2. Program Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-rose-600" />
              <span>2. 관리 프로그램 선택</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {cityConfig.programs.map((p) => (
                <button
                  key={p.name}
                  type="button"
                  onClick={() => handleProgramSelect(p.name)}
                  className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition-all ${
                    selectedProgram === p.name
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Duration Selector (Dynamic) */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-rose-600" />
              <span>3. 이용 시간 선택</span>
            </label>
            <div className={`grid gap-2 ${currentProgramObj.options.length === 4 ? 'grid-cols-4' : 'grid-cols-3'}`}>
              {currentProgramObj.options.map((opt) => (
                <button
                  key={opt.minutes}
                  type="button"
                  onClick={() => setSelectedTime(opt.minutes)}
                  className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition-all ${
                    effectiveTime === opt.minutes
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {opt.minutes}분
                </button>
              ))}
            </div>
          </div>

          {/* Summary Box */}
          <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-100 text-xs">
            <div className="flex items-center justify-between font-bold text-slate-900 mb-1">
              <span>예상 요금 (정찰 후불제)</span>
              <span className="text-sm text-rose-600 font-display">{currentOption.priceFormatted}</span>
            </div>
            <div className="text-[11px] text-slate-500">
              * 선입금이나 예약금은 일절 없습니다. 관리 완료 후 결제됩니다.
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="space-y-2.5">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={brandConfig.phoneTel}
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md transition-colors text-center"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>전화로 예약 ({brandConfig.phoneDisplay})</span>
            </a>

            <a
              href={brandConfig.kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#FEE500] hover:bg-[#FDD835] text-[#381F1F] text-xs font-bold shadow-xs transition-colors text-center"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#381F1F]" />
              <span>카톡으로 문의</span>
            </a>
          </div>

          <button
            type="button"
            onClick={handleCopyMessage}
            className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600 font-bold">예약 양식이 복사되었습니다!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>예약 양식 클립보드 복사하기</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
