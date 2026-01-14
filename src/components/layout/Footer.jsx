import React from 'react';

const Footer = () => {
  const phoneNumber = '02-6356-0936';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">차살때</h3>
            <p className="text-gray-10 mb-4">
              차를 고르는 가장 똑똑한 방법
            </p>
            <div className="space-y-2 text-sm text-gray-10">
              <p>고객센터: {phoneNumber}</p>
              <p>평일 09:00 - 18:00</p>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h4 className="font-semibold mb-4">빠른 링크</h4>
            <ul className="space-y-2 text-sm text-gray-10">
              <li>
                <a href="/leaserent/leaserent_search" className="hover:text-white transition-colors">
                  견적 ON
                </a>
              </li>
              <li>
                <a href="/leaserent/leaserent_pslist" className="hover:text-white transition-colors">
                  재고 ON
                </a>
              </li>
              <li>
                <a href="/event/event_list" className="hover:text-white transition-colors">
                  이벤트
                </a>
              </li>
              <li>
                <a href="/reviews/reviews_list" className="hover:text-white transition-colors">
                  고객 후기
                </a>
              </li>
            </ul>
          </div>

          {/* 고객 지원 */}
          <div>
            <h4 className="font-semibold mb-4">고객 지원</h4>
            <ul className="space-y-2 text-sm text-gray-10">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  이용약관
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  사업자정보확인
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* 앱 다운로드 & 소셜 미디어 */}
          <div>
            <h4 className="font-semibold mb-4">앱 다운로드</h4>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-white text-gray-90 rounded-lg hover:bg-gray-10 transition-colors text-sm font-medium"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-white text-gray-90 rounded-lg hover:bg-gray-10 transition-colors text-sm font-medium"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Google Play
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.youtube.com/@atcar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-10 hover:text-white transition-colors"
                aria-label="유튜브"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-10 hover:text-white transition-colors"
                aria-label="카카오톡"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 01-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* 하단 저작권 */}
        <div className="mt-12 pt-8 border-t border-gray-60">
          <div className="text-sm text-gray-10 space-y-2">
            <p>사업자등록번호: 000-00-00000 | 대표자: 홍길동</p>
            <p>주소: 서울특별시 강남구 테헤란로 000</p>
            <p className="mt-4">Copyright © {currentYear} 차살때. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
