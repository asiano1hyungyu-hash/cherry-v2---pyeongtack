import React from 'react';
import { Phone, MessageCircle, Clock, ShieldCheck, Heart } from 'lucide-react';
import { brandConfig } from '../config/brand.config';
import { cityConfig } from '../config/city.config';
import { CherryIcon } from './icons/CherryIcon';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="main-footer"
      className="bg-slate-950 text-slate-400 pt-16 pb-28 sm:pb-16 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Slogan */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-rose-600/20 border border-rose-500/30 flex items-center justify-center text-rose-500">
                <CherryIcon className="w-5 h-5 text-rose-400" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold text-white font-display">
                  {brandConfig.brand}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-rose-300">
                  {cityConfig.cityKo}점
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 max-w-sm">
              {brandConfig.brand}는 {cityConfig.cityKo} 전지역 24시간 365일 전문 테라피스트가 직접 방문하여 품격 있는 힐링을 선사하는 프리미엄 방문 홈케어 브랜드입니다.
            </p>

            <div className="space-y-1.5 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-rose-400" />
                <span>운영시간: {brandConfig.operatingHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>결제방식: {brandConfig.paymentMethod}</span>
              </div>
            </div>
          </div>

          {/* Quick Menu Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-display">
              서비스 바로가기
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#features" className="hover:text-rose-400 transition-colors">
                  서비스 소개
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-rose-400 transition-colors">
                  프로그램 및 가격 안내
                </a>
              </li>
              <li>
                <a href="#recommendations" className="hover:text-rose-400 transition-colors">
                  상황별 코스 추천
                </a>
              </li>
              <li>
                <a href="#how-to-use" className="hover:text-rose-400 transition-colors">
                  5단계 이용방법
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-rose-400 transition-colors">
                  {cityConfig.cityKo} 방문 가능 지역
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-rose-400 transition-colors">
                  자주 묻는 질문 (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-display">
                고객 예약 센터
              </h4>
              
              <div className="space-y-3 mb-4">
                <a 
                  href={brandConfig.phoneTel}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900 border border-slate-800 hover:border-rose-500/50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-xl bg-rose-600/20 text-rose-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">전화 예약 연결</div>
                    <div className="text-sm font-bold text-white group-hover:text-rose-300 transition-colors">
                      {brandConfig.phoneDisplay}
                    </div>
                  </div>
                </a>

                <a 
                  href={brandConfig.kakaoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-400/50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 fill-amber-300" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">카카오톡 1:1 오픈채팅</div>
                    <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                      상담하기 (새 창 열림)
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <p className="text-[11px] text-slate-500">
              * 음주가 과하시거나 불법 행위를 요구하시는 경우 서비스 이용이 제한될 수 있습니다.
            </p>
          </div>

        </div>

        {/* Bottom Legal / Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {currentYear} {brandConfig.brand} {cityConfig.cityKo}점. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-600">
            <span>{brandConfig.brand} V2 Master Template</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
