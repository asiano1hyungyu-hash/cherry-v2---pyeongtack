/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickInfoBar } from './components/QuickInfoBar';
import { ServiceFeatures } from './components/ServiceFeatures';
import { ProgramsSection } from './components/ProgramsSection';
import { RecommendationsSection } from './components/RecommendationsSection';
import { HowToUseSection } from './components/HowToUseSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { TrustPointsSection } from './components/TrustPointsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { MobileFloatingBar } from './components/MobileFloatingBar';
import { ReservationModal } from './components/ReservationModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-800 antialiased selection:bg-rose-100 selection:text-rose-900 font-sans">
      {/* Sticky Header */}
      <Header onOpenReservationModal={() => setIsModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenReservationModal={() => setIsModalOpen(true)} />

        {/* 2. Quick Information Bar */}
        <QuickInfoBar />

        {/* 3. Service Features (서비스 소개) */}
        <ServiceFeatures />

        {/* 4. Programs & Pricing Section (프로그램 안내) */}
        <ProgramsSection />

        {/* 5. Situation Recommendations Section (상황별 프로그램 추천 - V2 Exclusive) */}
        <RecommendationsSection />

        {/* 6. How To Use 5-Step Guide (이용방법) */}
        <HowToUseSection />

        {/* 7. Service Areas Section (방문 가능 지역 안내) */}
        <ServiceAreasSection />

        {/* 8. Trust Points / Service Quality (6개 핵심 신뢰 포인트) */}
        <TrustPointsSection />

        {/* 9. FAQ Section (자주 묻는 질문 6선) */}
        <FaqSection />

        {/* 10. Final Call To Action */}
        <FinalCtaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Bottom Contact Bar */}
      <MobileFloatingBar />

      {/* Quick Reservation Helper Modal */}
      <ReservationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
