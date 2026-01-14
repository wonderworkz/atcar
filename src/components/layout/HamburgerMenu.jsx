import React, { useEffect } from 'react';

const HamburgerMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuSections = [
    {
      title: '차살때 메뉴',
      items: [
        { label: '견적 ON', path: '/leaserent/leaserent_search' },
        { label: '재고 ON', path: '/leaserent/leaserent_pslist' },
        { label: '이벤트', path: '/event/event_list' },
        { label: '고객 후기', path: '/reviews/reviews_list' },
      ],
    },
    {
      title: 'Car.e.m 바로가기',
      items: [
        { label: '렌트', path: 'https://www.carem.kr/estimate/intro/rent', external: true },
        { label: '리스', path: 'https://www.carem.kr/estimate/intro/lease', external: true },
        { label: '즉시출고', path: 'https://www.carem.kr/fastship/list', external: true },
        { label: '중고리스/저신용', path: 'https://www.carem.kr/usedcar/certifyTrade/trade/list', external: true },
        { label: '유튜브', path: 'https://www.youtube.com/@atcar', external: true },
      ],
    },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-50 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-10 px-6 py-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">차살때</span>
          <button
            onClick={onClose}
            className="p-2 text-gray-60 hover:text-gray-90 hover:bg-gray-10 rounded-full transition-colors"
            aria-label="메뉴 닫기"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Menu Content */}
        <div className="px-6 py-6">
          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className={sectionIndex > 0 ? 'mt-8' : ''}>
              <h3 className="text-sm font-semibold text-gray-60 uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <nav className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <a
                    key={itemIndex}
                    href={item.path}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="block px-4 py-3 text-gray-90 hover:bg-primary-10 hover:text-primary rounded-lg transition-colors duration-200 font-medium"
                    onClick={!item.external ? onClose : undefined}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      {item.external && (
                        <svg
                          className="w-4 h-4 text-gray-60"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                      )}
                    </div>
                  </a>
                ))}
              </nav>
            </div>
          ))}

          {/* Divider */}
          <div className="my-8 border-t border-gray-10"></div>

          {/* Additional Links */}
          <div className="space-y-3">
            <a
              href="#"
              className="block px-4 py-3 text-center text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-200 font-semibold"
            >
              로그인 / 회원가입
            </a>
            <a
              href="#"
              className="block px-4 py-3 text-center bg-primary text-white rounded-lg hover:bg-primary-active transition-colors duration-200 font-semibold"
            >
              앱 다운로드
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
