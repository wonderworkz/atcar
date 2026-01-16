import React from 'react';

const AppPromoSection = ({ onConsultClick }) => {
  const bestModels = [
    {
      rank: 1,
      rankStyle: 'bg-transparent text-[#3B82F6] border-[#3B82F6]',
      image: 'https://atcar.kr/wp-content/uploads/2025/05/카니발-1-2.png',
      name: '기아 카니발 하이브리드 9인승',
      trim: '1.6 프레스티지 2WD',
      price: '월 29만원~',
    },
    {
      rank: 2,
      rankStyle: 'bg-transparent text-[#3B82F6] border-[#3B82F6]',
      image: 'https://atcar.kr/wp-content/uploads/2025/05/팰리세이드-1.png',
      name: '현대 팰리세이드 하이브리드 9인승',
      trim: '2.5T 익스클루시브 2WD',
      price: '월 37만원~',
    },
    {
      rank: 3,
      rankStyle: 'bg-transparent text-[#3B82F6] border-[#3B82F6]',
      image: 'https://atcar.kr/wp-content/uploads/2025/05/그랜저-1.png',
      name: '현대 그랜저 하이브리드 5인승',
      trim: '1.6T 프리미엄 2WD',
      price: '월 31만원~',
    },
    {
      rank: 4,
      rankStyle: 'bg-transparent text-[#3B82F6] border-[#3B82F6]',
      image: 'https://atcar.kr/wp-content/uploads/2025/05/그랑콜레오스-1.png',
      name: '르노 그랑콜레오스 5인승',
      trim: 'E-Tech iconic 2WD',
      price: '월 35만원~',
    },
    {
      rank: 5,
      rankStyle: 'bg-transparent text-[#3B82F6] border-[#3B82F6]',
      image: 'https://atcar.kr/wp-content/uploads/2025/05/ev-3-1.png',
      name: '기아 EV3 전기차 5인승',
      trim: '에어 스탠다드 2WD',
      price: '월 21만원~',
    },
  ];

  return (
    <section className="px-4 py-12 md:py-16 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-8 md:mb-12">
          <h5 className="text-sm md:text-base text-primary font-semibold mb-2 md:mb-3">
            롯데렌터카의 우수한 상품을 저렴하게!
          </h5>
          <h3 className="text-[30px] md:text-3xl lg:text-4xl font-bold text-[#FFFFFF]">
            즉시출고 인기모델 BEST 5
          </h3>
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* 카드 1 - 하이브리드 기획전 배너 */}
          <div className="relative rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 overflow-hidden bg-gradient-to-br from-primary via-primary-active to-accent text-white hover:shadow-glass-heavy transition-shadow duration-300 flex flex-col">
            {/* 배경 장식 */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="relative z-10 flex-1 flex flex-col">
              {/* 텍스트 */}
              <h4 className="text-xl md:text-2xl font-normal mb-2">
                요즘 대세 <span className="font-black">하이브리드 기획전</span>
              </h4>

              {/* 서브 텍스트 */}
              <p className="text-sm text-white mb-3">
                원하는 차종을 문의해보세요!
              </p>

              {/* 차량 이미지 */}
              <div className="flex-1 flex items-center justify-center my-2 md:my-4">
                <img
                  src="https://atcar.kr/wp-content/uploads/2025/05/코나.png"
                  alt="코나 하이브리드"
                  className="w-full max-w-[357px] h-auto object-contain mx-auto"
                  loading="lazy"
                />
              </div>

              {/* 상담신청 버튼 */}
              <button
                onClick={onConsultClick}
                className="w-full py-3 bg-white text-[#3B82F6] rounded-xl font-semibold hover:bg-white/90 transition-colors duration-300 mt-auto"
              >
                상담신청
              </button>
            </div>
          </div>

          {/* 카드 2-6 - 나머지 모델들 */}
          {bestModels.map((model, index) => (
            <div
              key={index}
              className="glass-heavy-dark rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 relative hover:bg-white/10 transition-all duration-300"
            >
              {/* 순위 뱃지 */}
              <div className="absolute top-4 md:top-6 left-4 md:left-6">
                <span className={`inline-flex items-center justify-center ${model.rankStyle} font-semibold border-2 rounded-full w-10 h-10 md:w-12 md:h-12 text-base md:text-lg`}>
                  {model.rank}
                </span>
              </div>

              {/* 차량 이미지 */}
              <div className="mt-12 mb-4">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>

              {/* 차량 정보 */}
              <h6 className="text-base md:text-lg font-bold text-white mb-2">
                {model.name}
              </h6>
              <p className="text-sm text-white/40 mb-3">
                {model.trim}
              </p>
              <h6 className="text-xl md:text-2xl font-bold text-primary mb-4">
                {model.price}
              </h6>

              {/* 상담신청 버튼 */}
              <button
                onClick={onConsultClick}
                className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-300"
              >
                상담신청
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppPromoSection;
