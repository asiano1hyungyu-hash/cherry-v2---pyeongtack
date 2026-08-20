import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Clock, ChevronRight } from 'lucide-react';
import { brandConfig } from '../config/brand.config';
import { cityConfig } from '../config/city.config';
import { CherryIcon } from './icons/CherryIcon';

interface HeaderProps {
  onOpenReservationModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenReservationModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '서비스 소개', href: '#features' },
    { name: '프로그램', href: '#programs' },
    { name: '이용방법', href: '#how-to-use' },
    { name: '방문지역', href: '#areas' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm border-b border-stone-200/70 py-3' 
          : 'bg-[#FAF9F6]/85 backdrop-blur-sm border-b border-stone-200/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & City Badge */}
          <a 
            id="brand-logo-link"
            href="#" 
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 shadow-sm group-hover:bg-rose-100 transition-colors">
              <CherryIcon className="w-6 h-6 text-rose-600" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 font-display">
                  {brandConfig.brand}
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-semibold bg-rose-100 text-rose-700">
                  {cityConfig.cityKo}점
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-medium tracking-wide uppercase">
                24H Home Care Service
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors relative py-1 hover:font-semibold"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Phone Button */}
            <a
              id="header-phone-btn"
              href={brandConfig.phoneTel}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-800 bg-white border border-slate-200 hover:border-rose-300 hover:text-rose-600 shadow-xs transition-all hover:shadow-sm"
              title="전화 예약 연결"
            >
              <Phone className="w-3.5 h-3.5 text-rose-600" />
              <span>{brandConfig.phoneDisplay}</span>
            </a>

            {/* Kakao Talk Button */}
            <a
              id="header-kakao-btn"
              href={brandConfig.kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#381F1F] bg-[#FEE500] hover:bg-[#FDD835] shadow-xs transition-all hover:shadow-sm"
              title="카카오톡 1:1 상담"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#381F1F]" />
              <span>카톡 문의</span>
            </a>

            {/* Primary Action Button */}
            <button
              id="header-reservation-modal-btn"
              onClick={onOpenReservationModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 shadow-xs transition-all hover:shadow-md active:scale-95"
            >
              <span>예약 문의</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 focus:outline-none"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="sm:hidden bg-white border-b border-slate-200 shadow-lg px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col space-y-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <div className="flex items-center justify-between text-xs text-slate-500 px-1 mb-1">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-rose-500" />
                {brandConfig.operatingHours}
              </span>
              <span className="font-semibold text-rose-600">선입금 없는 후불제</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={brandConfig.phoneTel}
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-white bg-slate-900 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-rose-400" />
                <span>전화 예약</span>
              </a>
              <a
                href={brandConfig.kakaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-[#381F1F] bg-[#FEE500] shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-[#381F1F]" />
                <span>카톡 문의</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenReservationModal) onOpenReservationModal();
              }}
              className="w-full py-2.5 rounded-xl text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200 text-center"
            >
              간편 예약 도우미 열기
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
