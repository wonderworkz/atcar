import React, { useState } from 'react';

const FloatingButton = ({ onConsultClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const phoneNumber = '02-6356-0936';

  return (
    <>
      {/* PC 버전 */}
      <div className="hidden md:block fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-[#e8e9eb] border-t border-gray-300">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              {/* 좌측: 체크박스 + 전화번호 */}
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-blue-600"
                    defaultChecked
                  />
                  <span className="text-sm text-gray-700">쉽고 빠른 견적 문의</span>
                </label>
                <a
                  href={`tel:${phoneNumber.replace(/-/g, '')}`}
                  className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
                >
                  📞 {phoneNumber}
                </a>
              </div>

              {/* 우측: 버튼 2개 */}
              <div className="flex items-center gap-3">
                <a
                  href={import.meta.env.VITE_KAKAO_TALK_URL || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#FEE500] text-gray-900 rounded-lg font-medium hover:bg-[#FDD800] transition-all"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 01-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3z"/>
                  </svg>
                  카카오톡 견적문의
                </a>
                <button
                  onClick={onConsultClick}
                  className="px-6 py-3 bg-[#3B82F6] text-white rounded-lg font-medium hover:bg-[#2563EB] transition-all shadow-md"
                >
                  무료 견적 받아보기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 모바일 버전 */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-3">
            {/* 상단 텍스트 */}
            <p className="text-xs text-gray-600 mb-3 text-center">
              나에게 꼭 맞는 차를 찾아드려요
            </p>

            {/* 버튼 2개 */}
            <div className="flex gap-2">
              <a
                href={import.meta.env.VITE_KAKAO_TALK_URL || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#FEE500] text-gray-900 rounded-lg font-medium text-sm hover:bg-[#FDD800] transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 01-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3z"/>
                </svg>
                카카오톡 견적문의
              </a>
              <button
                onClick={onConsultClick}
                className="flex-1 py-3 bg-[#3B82F6] text-white rounded-lg font-medium text-sm hover:bg-[#2563EB] transition-all"
              >
                무료 견적 받아보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingButton;
