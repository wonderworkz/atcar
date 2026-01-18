import React from 'react';

const TrustSection = () => {
  const benefits = [
    {
      title: '롯데렌터카',
      image: 'http://cheon0125.mycafe24.com/wp-content/uploads/2025/05/Rectangle-4.png',
      content: ['전국에서 사용 가능한', '무료이용권 2매'],
    },
    {
      title: '롯데스카이힐',
      image: 'http://cheon0125.mycafe24.com/wp-content/uploads/2025/05/롯데스카이힐.jpg',
      content: ['그린피 할인 주중 30%', '주말 20% (상시)'],
    },
    {
      title: '롯데리조트',
      image: 'http://cheon0125.mycafe24.com/wp-content/uploads/2025/05/Rectangle-6.png',
      content: ['객실 할인 주중 20%', '주말 15% (상시)'],
    },
    {
      title: '롯데홈쇼핑',
      image: 'http://cheon0125.mycafe24.com/wp-content/uploads/2025/05/Rectangle-7.png',
      content: ['L.CLUB 무료 매월 15%', '할인쿠폰 10매'],
    },
  ];

  return (
    <section className="px-4 py-20 md:py-[120px] bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-8 md:mb-12">
          <h5 className="text-sm md:text-base text-primary font-semibold mb-2 md:mb-3">
            골프장부터 무료 렌트권까지
          </h5>
          <h3 className="text-[30px] md:text-3xl lg:text-4xl font-bold text-[#1E293B]">
            놀라운 멤버십 혜택까지
          </h3>
        </div>

        {/* 멤버십 혜택 카드 그리드 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-heavy rounded-[1rem] md:rounded-[2rem] overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* 이미지 영역 */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 텍스트 영역 */}
              <div className="p-3 md:p-6">
                <h4 className="text-[16px] md:text-xl font-bold text-[#1E293B] mb-1 md:mb-2">
                  {benefit.title}
                </h4>
                {benefit.content.map((line, idx) => (
                  <p key={idx} className="text-[12px] md:text-base text-[#1E293B]/60 leading-tight md:leading-normal">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
