import React, { useState, useEffect } from 'react';

const FloatingButton = ({ onConsultClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = '02-6356-0936';
  const kakaoUrl = import.meta.env.VITE_KAKAO_TALK_URL || '#';

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-white shadow-primary border-t border-gray-10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex gap-2 md:gap-4">
            {/* 전화 상담 버튼 */}
            <a
              href={`tel:${phoneNumber.replace(/-/g, '')}`}
              className="flex-1 bg-primary text-white px-4 py-3 rounded-button font-semibold text-center hover:bg-primary-active transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span className="hidden sm:inline">전화 상담</span>
              <span className="sm:hidden">{phoneNumber}</span>
            </a>

            {/* 무료 상담 버튼 */}
            <button
              onClick={onConsultClick}
              className="flex-1 bg-gray-90 text-white px-4 py-3 rounded-button font-semibold text-center hover:bg-gray-60 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
              <span>무료 상담</span>
            </button>

            {/* 카카오톡 버튼 */}
            <a
              href={kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-gray-90 px-4 py-3 rounded-button font-semibold hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center active:scale-95"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 01-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3zm5.907 8.06l1.47-1.424a.472.472 0 00-.656-.681l-1.928 1.866V9.282a.472.472 0 00-.944 0v2.557a.471.471 0 00.119.315l2.14 2.076a.472.472 0 00.656-.681l-1.856-1.798-.001-.69zm-2.471 2.232a.472.472 0 00.472-.472v-3.54a.472.472 0 00-.944 0v3.54c0 .261.211.472.472.472zm-1.904.472h-1.416a.472.472 0 01-.472-.472v-3.54a.472.472 0 01.944 0v3.068h.944a.472.472 0 010 .944zm-2.36 0h-1.416a.472.472 0 01-.472-.472v-3.54a.472.472 0 01.472-.472h1.416a.472.472 0 010 .944h-.944v.639h.944a.472.472 0 010 .944h-.944v.94h.944a.472.472 0 010 .944l-.001.016z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingButton;
