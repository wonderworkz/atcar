import React from 'react';

const TrustSection = () => {
  const stats = [
    { value: '10,000+', label: '누적 견적', icon: '📊' },
    { value: '20+', label: '제휴 금융사', icon: '🏦' },
    { value: '7일', label: '평균 출고일', icon: '⏱️' },
    { value: '100%', label: '책임 보증', icon: '✅' },
  ];

  const partners = [
    '현대캐피탈',
    '우리은행',
    '신한캐피탈',
    'KB국민은행',
    '롯데캐피탈',
    '하나캐피탈',
    'NH농협은행',
    '메르세데스-벤츠 파이낸셜',
  ];

  return (
    <section className="px-4 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-8 md:mb-12">
          <h5 className="text-sm md:text-base text-primary font-semibold mb-2 md:mb-3">
            앗차가와는 계약부터 출고까지 모든 과정을 책임지는 보증 시스템을 운영합니다
          </h5>
          <h3 className="text-[30px] md:text-3xl lg:text-4xl font-bold text-charcoal">
            믿을 수 있는 서비스
          </h3>
        </div>

        {/* 통계 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-heavy rounded-3xl p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-charcoal/60">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 책임 보증 시스템 */}
        <div className="glass-heavy rounded-3xl md:rounded-[2.5rem] p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-10 h-10 text-primary"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-charcoal mb-3">책임 보증 시스템</h3>
              <p className="text-charcoal/60 leading-relaxed">
                앗차가와는 견적부터 출고, 사후관리까지 모든 과정을 책임집니다. 투명한
                프로세스와 명확한 약속으로 고객님의 만족을 보장합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 제휴사 로고 */}
        <div>
          <h3 className="text-2xl font-bold text-charcoal text-center mb-8">
            제휴 금융사
          </h3>
          <div className="glass-heavy rounded-3xl p-8 overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="aspect-[3/2] bg-white/60 rounded-xl flex items-center justify-center hover:bg-primary/10 transition-colors duration-300 p-4"
                >
                  <div className="text-center">
                    <div className="text-sm md:text-base font-semibold text-charcoal">
                      {partner}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-charcoal/60 mt-6">
            *실제 서비스에서는 각 금융사 로고 이미지가 표시됩니다
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
