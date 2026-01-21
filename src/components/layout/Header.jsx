import React from 'react';

const Header = ({ onMenuClick }) => {
  return (
    <nav className="sticky top-0 z-50 px-4 py-3 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="glass rounded-full flex items-center justify-between px-5 py-2">
          {/* 로고 */}
          <div className="flex items-center">
            <img
              src="/atcar/images/atcar_logo.png"
              alt="앗차가와"
              className="h-8"
            />
          </div>

          {/* 햄버거 메뉴 */}
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuClick}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="메뉴 열기"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
