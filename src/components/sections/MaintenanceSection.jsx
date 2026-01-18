import React from 'react';

const MaintenanceSection = () => {
  const services = [
    {
      image: 'https://atcar.kr/wp-content/uploads/2025/05/방문정비.png',
      title: '방문 정비',
      description: '주기적인 방문 정비 및 소모품 교체',
      icon: 'build',
      iconColor: 'text-primary',
      bgColor: 'bg-primary/20',
    },
    {
      image: 'https://atcar.kr/wp-content/uploads/2025/05/사고정비.png',
      title: '사고 정비',
      description: '사고가 나도 차량 수리는 걱정 NO!',
      icon: 'car_crash',
      iconColor: 'text-accent',
      bgColor: 'bg-accent/20',
    },
    {
      image: 'https://atcar.kr/wp-content/uploads/2025/05/정비대차.png',
      title: '정비 대차',
      description: '정비를 받는 동안 단기 대차 지급',
      icon: 'swap_horiz',
      iconColor: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
    },
    {
      image: 'https://atcar.kr/wp-content/uploads/2025/05/타이어-교체.png',
      title: '타이어 교체',
      description: '고급형 정비는 타이어 교체도 제공',
      icon: 'settings',
      iconColor: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
    },
  ];

  return (
    <section className="px-4 py-20 md:py-[120px] bg-[#0B1120]">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-8 md:mb-12">
          <h5 className="text-sm md:text-base text-primary font-semibold mb-2 md:mb-3">
            롯데렌터카 전문 관리 서비스
          </h5>
          <h3 className="text-[30px] md:text-3xl lg:text-4xl font-bold text-white">
            관리까지 알아서 척척
          </h3>
        </div>

        {/* 서비스 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-dark rounded-[1rem] md:rounded-[2rem] overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* 이미지 영역 */}
              <div className="aspect-[7/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover scale-110"
                />
              </div>

              {/* 텍스트 영역 */}
              <div className="p-5 md:p-6 flex items-center gap-2 md:items-start md:gap-3">
                {/* 아이콘 */}
                <div className={`w-8 h-8 md:w-12 md:h-12 rounded-xl ${service.bgColor} flex items-center justify-center flex-shrink-0`}>
                  <span className={`material-symbols-outlined ${service.iconColor} text-lg md:text-2xl`}>
                    {service.icon}
                  </span>
                </div>

                {/* 텍스트 */}
                <div className="flex-1 min-w-0 flex items-baseline gap-3 md:block">
                  <h4 className="font-bold text-white text-[16px] md:text-lg shrink-0">
                    {service.title}
                  </h4>
                  <span className="md:hidden text-[12px] text-white/60 leading-[97%] truncate">
                    {service.description}
                  </span>
                  <p className="hidden md:block text-xs md:text-sm text-white/60 leading-relaxed mt-1">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaintenanceSection;
