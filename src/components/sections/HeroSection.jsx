import React from 'react';

const HeroSection = ({ onConsultClick }) => {
  return (
    <section className="px-4 pt-2 pb-8">
      <div className="relative h-[420px] md:h-[500px] lg:h-[600px] rounded-3xl md:rounded-[2.5rem] overflow-hidden group">
        {/* 배경 비디오 */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="http://cheon0125.mycafe24.com/wp-content/uploads/2025/05/앗차가와-영상.mp4"
          autoPlay
          loop
          muted
          playsInline
          controlsList="nodownload"
        />

        {/* 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>

        {/* 콘텐츠 */}
        <div className="absolute inset-x-4 bottom-6 p-6 md:p-8 glass-heavy rounded-3xl">
          {/* 배지 */}
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold tracking-widest uppercase mb-3">
            Premium Service
          </span>

          {/* 헤드라인 */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 text-charcoal">
            차를 고르는 가장 똑똑한 방법
          </h1>

          {/* CTA 버튼 */}
          <button
            onClick={onConsultClick}
            className="w-full py-3 md:py-4 bg-primary hover:bg-blue-600 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
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

      {/* 신뢰 지표 */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-charcoal">10,000+</div>
          <p className="text-xs md:text-sm text-charcoal/60">누적 견적</p>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-charcoal">7일</div>
          <p className="text-xs md:text-sm text-charcoal/60">평균 출고일</p>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-charcoal">20+</div>
          <p className="text-xs md:text-sm text-charcoal/60">제휴 금융사</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
