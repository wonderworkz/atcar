import React from 'react';
import Card from '../ui/Card';

const ServiceCardsSection = () => {
  const services = [
    {
      icon: (
        <svg
          className="w-12 h-12 text-primary"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      ),
      title: '보험료·세금 부담 없는 견적',
      description: '복잡한 계산 없이 명확하고 투명한 견적을 제공합니다',
      features: ['투명한 견적서', '숨은 비용 없음', '즉시 확인 가능'],
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-primary"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: '7일 이내 출고 보장',
      description: '빠른 출고로 원하는 차량을 즉시 만나보세요',
      features: ['평균 7일 출고', '재고 차량 다수', '빠른 절차'],
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-primary"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      title: '전문 딜러 무료 상담',
      description: '경험 풍부한 전문가가 1:1 맞춤 상담을 제공합니다',
      features: ['1:1 맞춤 상담', '전문가 추천', '24시간 문의 가능'],
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-90 mb-4">
            차살때만의 특별한 서비스
          </h2>
          <p className="text-lg md:text-xl text-gray-60 max-w-2xl mx-auto">
            고객님의 성공적인 차량 구매를 위해 최선을 다합니다
          </p>
        </div>

        {/* 서비스 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} hover={true} padding="large">
              {/* 아이콘 */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary-10 rounded-2xl flex items-center justify-center">
                  {service.icon}
                </div>
              </div>

              {/* 제목 */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-90 mb-4">
                {service.title}
              </h3>

              {/* 설명 */}
              <p className="text-gray-60 mb-6">{service.description}</p>

              {/* 특징 목록 */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-2 text-sm text-gray-60"
                  >
                    <svg
                      className="w-5 h-5 text-primary flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* 추가 정보 */}
        <div className="mt-16 p-8 bg-primary-10 rounded-card-desktop text-center">
          <p className="text-lg text-gray-90">
            <span className="font-semibold text-primary">2026년 1월 기준</span> 누적 견적{' '}
            <span className="font-bold text-primary">10,000건</span> 이상 달성!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceCardsSection;
