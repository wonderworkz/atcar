import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-[159.12px] md:pb-[204px]">
        {/* PC: 정보 왼쪽, 로고 오른쪽 / 모바일: 세로 배치 */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* 회사 정보 영역 */}
          <div className="flex-1">
            <div className="text-sm text-white/70">
              <p className="font-semibold text-white mb-1">주식회사 오토스타일</p>
              <p className="mb-1">사업자등록번호: 144-86-01453</p>
              <p className="mb-4">서울특별시 강서구 마곡중앙6로 42, 사이언스타 10층 1024호</p>

              <p className="mb-1 text-xs md:text-sm" style={{ letterSpacing: '-0.05em' }}>
                <span className="md:hidden">강서 본점ㅣ서울특별시 강서구 마곡중앙6로 42, 사이언스타 10층 1024호</span>
                <span className="hidden md:inline" style={{ letterSpacing: 'normal' }}>강서 본점ㅣ서울특별시 강서구 마곡중앙6로 42, 사이언스타 10층 1024호</span>
              </p>
              <p className="mb-4 text-xs md:text-sm" style={{ letterSpacing: '-0.05em' }}>
                <span className="md:hidden">향동 지점ㅣ경기도 고양시 덕양구 향기로 180, DMC 마스터원 1030호</span>
                <span className="hidden md:inline" style={{ letterSpacing: 'normal' }}>향동 지점ㅣ경기도 고양시 덕양구 향기로 180, DMC 마스터원 1030호</span>
              </p>

              <p className="text-xs md:text-sm" style={{ letterSpacing: '-0.05em' }}>
                <span className="md:hidden">Copyright © {currentYear} 주식회사 오토스타일. All rights reserved.</span>
                <span className="hidden md:inline" style={{ letterSpacing: 'normal' }}>Copyright © {currentYear} 주식회사 오토스타일. All rights reserved.</span>
              </p>
            </div>
          </div>

          {/* 로고 영역 */}
          <div className="flex-shrink-0 flex justify-center md:justify-end">
            <img
              src="/atcar/images/atcar_logo.png"
              alt="앗차가와"
              className="h-10 md:h-20"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
