import React from 'react';
import Button from '../ui/Button';

const HeroSection = ({ onConsultClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-10 to-white overflow-hidden pt-20">
      {/* 배경 이미지 (반응형) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent z-10"></div>
        {/* 실제 프로젝트에서는 images 폴더의 이미지를 사용 */}
        <div className="w-full h-full bg-gray-10 flex items-center justify-center">
          <svg
            className="w-96 h-96 text-gray-60 opacity-20"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
          </svg>
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* 메인 헤드라인 */}
          <h1 className="text-hero-mobile md:text-hero-tablet lg:text-hero-desktop font-bold text-gray-90 leading-tight mb-6">
            차를 고르는 가장 똑똑한 방법,{' '}
            <span className="text-primary">차살때</span>
          </h1>

          {/* 서브 헤드라인 */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-60 mb-8 md:mb-12">
            빠르고 확실한, 믿을 수 있는 서비스
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              size="large"
              onClick={onConsultClick}
              className="shadow-primary"
            >
              무료 견적 받기
            </Button>
            <Button
              variant="outline"
              size="large"
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              서비스 알아보기
            </Button>
          </div>

          {/* 신뢰 지표 */}
          <div className="mt-12 md:mt-16 flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-10 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-90">10,000+</p>
                <p className="text-sm text-gray-60">누적 견적</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-10 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-90">7일</p>
                <p className="text-sm text-gray-60">평균 출고일</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-10 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-90">20+</p>
                <p className="text-sm text-gray-60">제휴 금융사</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 스크롤 다운 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
