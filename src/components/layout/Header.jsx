import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

const Header = ({ onMenuClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const phoneNumber = '02-6356-0936';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '견적 ON', path: '/leaserent/leaserent_search' },
    { label: '재고 ON', path: '/leaserent/leaserent_pslist' },
    { label: '이벤트', path: '/event/event_list' },
    { label: '고객 후기', path: '/reviews/reviews_list' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-heavy' : 'bg-white/60 backdrop-blur-xl'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* 로고 */}
          <div className="flex items-center gap-2">
            <div className="size-10 bg-primary rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-bold tracking-tight text-xl text-charcoal">차살때</span>
          </div>

          {/* 전화번호 & 햄버거 메뉴 */}
          <div className="flex items-center gap-4">
            {/* 전화번호 (태블릿 이상) */}
            <a
              href={`tel:${phoneNumber.replace(/-/g, '')}`}
              className="hidden md:flex items-center gap-2 px-4 py-2 glass rounded-xl text-charcoal/80 hover:text-primary transition-colors text-sm font-medium"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span>{phoneNumber}</span>
            </a>

            {/* 햄버거 메뉴 버튼 */}
            <button
              onClick={onMenuClick}
              className="size-10 glass rounded-full flex items-center justify-center text-charcoal hover:text-primary transition-colors"
              aria-label="메뉴 열기"
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
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
