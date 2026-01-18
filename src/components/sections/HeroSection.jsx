import React from 'react';

const HeroSection = ({ onConsultClick }) => {
  const services = [
    {
      icon: 'verified_user',
      iconColor: 'text-primary',
      bgColor: 'bg-primary/20',
      title: '보험료·세금 부담 없는 견적',
      description: '복잡한 계산 없이 명확하고 투명한 견적을 제공합니다',
    },
    {
      icon: 'monitoring',
      iconColor: 'text-accent',
      bgColor: 'bg-accent/20',
      title: '평균 7일 빠른 출고',
      description: '빠른 출고로 원하는 차량을 즉시 만나보세요',
    },
    {
      icon: 'payments',
      iconColor: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      title: '전문 딜러 무료 상담',
      description: '경험 풍부한 전문가가 1:1 맞춤 상담을 제공합니다',
    },
  ];

  return (
    <section className="px-4 pt-4 pb-20 md:pt-8 md:pb-[120px] bg-[#0B1120]">
      {/* 배경 비디오 */}
      <div className="max-w-7xl mx-auto">
        <div className="relative h-[225px] md:h-[600px] lg:h-[700px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden mb-8 md:mb-12">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="http://cheon0125.mycafe24.com/wp-content/uploads/2025/05/앗차가와-영상.mp4"
            autoPlay
            loop
            muted
            playsInline
            controlsList="nodownload"
          />
        </div>
      </div>

      {/* 콘텐츠 영역 */}
      <div className="max-w-7xl mx-auto px-4">
        {/* 섹션 헤더 */}
        <div className="text-center mt-8 mb-8 md:mb-12">
          <h5 className="text-sm md:text-base text-primary font-semibold mb-2 md:mb-3">
            롯데렌터카 전속세일즈파트너
          </h5>
          <h3 className="text-[22px] md:text-[50px] lg:text-[56px] font-bold text-white mb-6">
            앗차가와 최저가 신차 견적
          </h3>
        </div>

        {/* 서비스 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-dark p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] flex items-start gap-4 hover:scale-105 transition-transform duration-300"
            >
              {/* 아이콘 */}
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${service.bgColor} flex items-center justify-center flex-shrink-0`}>
                <span className={`material-symbols-outlined ${service.iconColor} text-2xl md:text-3xl`}>
                  {service.icon}
                </span>
              </div>

              {/* 텍스트 */}
              <div className="flex-1">
                <h4 className="font-bold text-white mb-1 text-base md:text-lg">
                  {service.title}
                </h4>
                <p className="text-xs md:text-sm text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA 버튼 */}
        <div className="text-center md:mt-16">
          <button
            onClick={onConsultClick}
            className="w-full md:w-[320px] bg-primary text-white font-semibold py-4 px-8 rounded-full hover:bg-primary-active transition-all duration-300 shadow-lg hover:shadow-xl text-base md:text-lg"
          >
            무료 견적 받기
          </button>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
