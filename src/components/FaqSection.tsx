import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone, MessageCircle } from 'lucide-react';
import { cityConfig } from '../config/city.config';
import { brandConfig } from '../config/brand.config';

export const FaqSection: React.FC = () => {
  // Open the first FAQ item by default
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-2': false,
  });

  const toggleFaq = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section 
      id="faq"
      className="py-14 sm:py-24 bg-[#FAF9F6] relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/80 text-rose-700 text-xs font-bold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-3">
            {cityConfig.cityKo}점 이용 관련 자주 묻는 질문
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            처음 이용하시는 분들이 가장 궁금해하시는 점들을 투명하고 상세하게 답변해 드립니다.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-12">
          {cityConfig.faqs.map((faq) => {
            const isOpen = !!openItems[faq.id];

            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 overflow-hidden shadow-xs transition-all"
              >
                {/* Accordion Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-xl bg-rose-50 text-rose-600 text-xs font-extrabold font-display">
                      Q
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-rose-100 text-rose-600' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Body - Always rendered in DOM for static prerendering, toggled via CSS */}
                <div className={`px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40 ${isOpen ? 'block' : 'hidden'}`}>
                  <div className="flex items-start gap-2.5 pt-2">
                    <span className="shrink-0 text-xs font-bold text-slate-400 mt-0.5">답변</span>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Help Callout */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 text-center flex flex-col items-center">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
            더 궁금하신 점이 있으신가요?
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mb-5">
            24시간 언제든 친절하게 상담을 도와드리고 있으니 부담 없이 연락해주세요.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href={brandConfig.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-rose-400" />
              <span>전화 상담 ({brandConfig.phoneDisplay})</span>
            </a>
            <a
              href={brandConfig.kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-[#381F1F] bg-[#FEE500] hover:bg-[#FDD835] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#381F1F]" />
              <span>카카오톡 1:1 상담하기</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
