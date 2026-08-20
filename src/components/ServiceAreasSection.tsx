import React, { useState } from 'react';
import { MapPin, Navigation, Clock, CheckCircle, Search } from 'lucide-react';
import { cityConfig } from '../config/city.config';
import { brandConfig } from '../config/brand.config';

export const ServiceAreasSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');

  const filteredAreas = cityConfig.areas.filter((area) =>
    area.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  return (
    <section 
      id="areas"
      className="py-14 sm:py-24 bg-[#FAF9F6] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/80 text-rose-700 text-xs font-bold tracking-wider uppercase mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Coverage Areas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-3">
            {cityConfig.cityKo} 방문 가능 지역 안내
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {cityConfig.cityKo} 전지역 주요 도심 및 주거단지, 비즈니스 호텔, 산업단지 일대로 30분 내외 신속하게 방문합니다.
          </p>
        </div>

        {/* Search Bar for Areas */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`${cityConfig.cityKo} 내 동/읍/면 검색 (예: 고덕, 비전동, 안중)`}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-stone-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-semibold"
              >
                초기화
              </button>
            )}
          </div>
        </div>

        {/* Interactive Area Chips Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 v2-card-shadow mb-8">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Navigation className="w-4 h-4 text-rose-600" />
              <span className="text-sm font-bold text-slate-900">
                {cityConfig.cityKo} 서비스 가능 동·읍·면 목록 ({filteredAreas.length}개 지역)
              </span>
            </div>
            <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full">
              24시간 항시 배차
            </span>
          </div>

          {/* Chips Grid */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {filteredAreas.map((area) => (
              <div
                key={area}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-rose-50 hover:border-rose-300 hover:text-rose-700 transition-all cursor-default group shadow-2xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 group-hover:scale-125 transition-transform" />
                <span>{area}</span>
              </div>
            ))}
            {filteredAreas.length === 0 && (
              <div className="w-full text-center py-6 text-xs text-slate-500">
                검색하신 지역을 찾을 수 없습니다. {cityConfig.cityKo} 전지역 방문 가능하오니 전화나 카카오톡으로 편하게 문의해주세요.
              </div>
            )}
          </div>

          {/* District Life Spheres Grouping for enhanced readability */}
          {cityConfig.areaGroups && cityConfig.areaGroups.length > 0 && (
            <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cityConfig.areaGroups.map((group) => (
                <div key={group.regionName} className="bg-slate-50/70 rounded-2xl p-3.5 border border-slate-200/60">
                  <div className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                    {group.regionName}
                  </div>
                  <div className="text-[11px] text-slate-500 mb-2">
                    {group.description}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {group.areas.map((a) => (
                      <span key={a} className="text-[10px] font-medium bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-700">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Location Reassurance Text Card */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">
                목록에 없는 {cityConfig.cityKo} 인근 지역도 방문 가능한가요?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {cityConfig.cityKo} 행정구역 경계선 및 인근 생활권의 경우에도 대부분 방문이 가능합니다. 주소지를 말씀해주시면 즉시 정확한 이동 가능 여부와 소요 시간을 안내해 드립니다.
              </p>
            </div>
          </div>

          <a
            href={brandConfig.phoneTel}
            className="shrink-0 px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-rose-600 text-xs font-bold transition-colors w-full sm:w-auto text-center"
          >
            내 지역 방문 문의
          </a>
        </div>

      </div>
    </section>
  );
};
