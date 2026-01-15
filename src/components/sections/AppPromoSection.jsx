import React from 'react';
import Button from '../ui/Button';

const AppPromoSection = () => {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="glass-heavy rounded-3xl md:rounded-[2.5rem] p-8 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* 텍스트 콘텐츠 */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold tracking-widest uppercase mb-4">
                NEW
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
                차살때 앱 출시!
              </h2>
              <p className="text-lg md:text-xl text-charcoal/60 mb-8">
                언제 어디서나 간편하게 견적을 확인하세요
              </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center gap-3 px-6 py-3 bg-charcoal text-white rounded-xl hover:bg-charcoal/80 transition-all duration-300 shadow-lg"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-base font-semibold">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-3 px-6 py-3 bg-charcoal text-white rounded-xl hover:bg-charcoal/80 transition-all duration-300 shadow-lg"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-base font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            {/* 앱 기능 */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">간편한 견적</h4>
                  <p className="text-sm text-charcoal/60">빠른 견적 확인</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">실시간 알림</h4>
                  <p className="text-sm text-charcoal/60">견적 및 출고 알림</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">안전한 관리</h4>
                  <p className="text-sm text-charcoal/60">견적 내역 저장</p>
                </div>
              </div>
            </div>
          </div>

          {/* 앱 목업 이미지 */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* 플레이스홀더 - 실제 앱 목업 이미지로 교체 */}
              <div className="w-64 h-[500px] bg-gradient-to-br from-primary to-primary-active rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-4xl font-bold text-primary mb-2">차살때</div>
                    <div className="text-sm text-gray-60">App Mockup</div>
                  </div>
                </div>
              </div>

              {/* 장식 요소 */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromoSection;
