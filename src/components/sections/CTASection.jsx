import React from 'react';
import Button from '../ui/Button';

const CTASection = ({ onConsultClick }) => {
  const phoneNumber = '02-6356-0936';

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary-active text-white relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* 헤드라인 */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            지금 바로 무료 견적을 받아보세요
          </h2>

          {/* 서브헤드라인 */}
          <p className="text-lg md:text-xl mb-12 opacity-90">
            전문가가 24시간 대기 중입니다
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="secondary"
              size="large"
              onClick={onConsultClick}
              className="bg-white text-primary hover:bg-gray-10 shadow-xl"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
              무료 상담 신청
            </Button>

            <a href={`tel:${phoneNumber.replace(/-/g, '')}`}>
              <Button
                variant="ghost"
                size="large"
                className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border-2 border-white"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                전화 상담 {phoneNumber}
              </Button>
            </a>
          </div>

          {/* 카카오톡 문의 */}
          <div className="flex items-center justify-center gap-2 text-sm opacity-90">
            <span>카카오톡으로도 간편하게 문의하세요</span>
            <a
              href={import.meta.env.VITE_KAKAO_TALK_URL || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-4 py-2 bg-yellow-400 text-gray-90 rounded-button hover:bg-yellow-300 transition-colors font-semibold"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 01-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3z"/>
              </svg>
              카카오톡 문의
            </a>
          </div>

          {/* 앱 다운로드 */}
          <div className="mt-12 pt-12 border-t border-white/20">
            <p className="text-sm mb-6 opacity-90">
              앱을 다운로드하고 더욱 편리하게 이용하세요
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/20 backdrop-blur-sm rounded-button hover:bg-white/30 transition-colors border border-white/30"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-75">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/20 backdrop-blur-sm rounded-button hover:bg-white/30 transition-colors border border-white/30"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-75">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
