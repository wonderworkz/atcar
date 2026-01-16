import React from 'react';

const HeroSection = ({ onConsultClick }) => {
  return (
    <section className="px-4 pt-2 pb-8">
      {/* 배경 비디오 */}
      <div className="max-w-7xl mx-auto">
        <div className="relative h-[225px] md:h-[600px] lg:h-[700px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden mb-8 md:mb-12">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="http://cheon0125.mycafe24.com/wp-content/uploads/2025/05/앗차가와-영상.mp4"
            autoPlay
            loop
            muted
            playsInline
            controlsList="nodownload"
          />

          {/* 그라데이션 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* 신뢰 지표 */}
      <div className="max-w-7xl mx-auto">
        <div className="mt-8 px-4 grid grid-cols-3 gap-2 md:gap-6">
          <div className="glass-heavy rounded-[1.5rem] md:rounded-[2rem] px-3 py-4 md:p-8 text-center hover:shadow-glass-heavy transition-shadow duration-300">
            <div className="text-lg md:text-3xl font-bold text-charcoal">10,000+</div>
            <p className="text-[10px] md:text-sm text-charcoal/60 mt-1 md:mt-2 whitespace-nowrap">누적 견적</p>
          </div>
          <div className="glass-heavy rounded-[1.5rem] md:rounded-[2rem] px-3 py-4 md:p-8 text-center hover:shadow-glass-heavy transition-shadow duration-300">
            <div className="text-lg md:text-3xl font-bold text-charcoal">7일</div>
            <p className="text-[10px] md:text-sm text-charcoal/60 mt-1 md:mt-2 whitespace-nowrap">평균 출고일</p>
          </div>
          <div className="glass-heavy rounded-[1.5rem] md:rounded-[2rem] px-3 py-4 md:p-8 text-center hover:shadow-glass-heavy transition-shadow duration-300">
            <div className="text-lg md:text-3xl font-bold text-charcoal">20+</div>
            <p className="text-[10px] md:text-sm text-charcoal/60 mt-1 md:mt-2 whitespace-nowrap">제휴 금융사</p>
          </div>
        </div>
      </div>

      {/* 콘텐츠 영역 */}
      <div className="max-w-7xl mx-auto px-4">
        {/* 섹션 헤더 */}
        <div className="text-center mt-8 mb-8 md:mb-12">
          <h5 className="text-sm md:text-base text-primary font-semibold mb-2 md:mb-3">
            롯데렌터카 전속세일즈파트너
          </h5>
          <h3 className="text-[30px] md:text-3xl lg:text-4xl font-bold text-charcoal mb-6">
            앗차가와 최저가 신차 견적
          </h3>
        </div>
      </div>

      {/* CTA 버튼 */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <button
            onClick={onConsultClick}
            className="px-8 py-3 md:py-4 bg-primary hover:bg-blue-600 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
          >
            무료 견적 받기
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
