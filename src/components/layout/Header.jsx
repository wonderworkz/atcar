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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* 로고 */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-2xl md:text-3xl font-bold text-primary">
                차살때
              </span>
            </a>
          </div>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="text-gray-90 hover:text-primary font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* 전화번호 & 햄버거 메뉴 */}
          <div className="flex items-center gap-4">
            {/* 전화번호 (태블릿 이상) */}
            <a
              href={`tel:${phoneNumber.replace(/-/g, '')}`}
              className="hidden md:flex items-center gap-2 text-primary hover:text-primary-active transition-colors"
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
              <span className="font-semibold">{phoneNumber}</span>
            </a>

            {/* 햄버거 메뉴 버튼 */}
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 text-gray-90 hover:text-primary transition-colors"
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
