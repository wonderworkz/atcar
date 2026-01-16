import React from 'react';

const CarReviewSection = () => {
  const reviews = [
    {
      videoId: 'N5z8n277zZ8',
      tag: '팰리세이드 가솔린 익스클루시브 7인승',
      title: '팰리세이드 리뷰',
      carImage: 'https://atcar.kr/wp-content/uploads/2025/05/팰리세이드-1.png',
    },
    {
      videoId: 'h1iTdQfmXG4',
      tag: '카니발 하이브리드 노블레스 9인승',
      title: '카니발 리뷰',
      carImage: 'https://atcar.kr/wp-content/uploads/2025/05/카니발-1-2.png',
    },
  ];

  return (
    <section className="px-4 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-8 md:mb-12">
          <h5 className="text-sm md:text-base text-primary font-semibold mb-2 md:mb-3">
            차종을 못 정하셨다면?
          </h5>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal">
            앗차가와가 추천하는 신차!
          </h3>
        </div>

        {/* 리뷰 카드 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col gap-4 md:gap-6">
              {/* 비디오 영역 */}
              <div className="glass-heavy rounded-[1.5rem] md:rounded-[2rem] overflow-hidden hover:shadow-glass-heavy transition-shadow duration-300">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${review.videoId}?controls=1&rel=0`}
                    title={review.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* 텍스트 & 이미지 영역 */}
              <div className="glass-heavy rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 hover:shadow-glass-heavy transition-shadow duration-300">
                <div className="flex items-center justify-between gap-4">
                  {/* 좌측: 태그 & 타이틀 */}
                  <div className="flex-1 min-w-0">
                    <span className="inline-block text-xs md:text-sm text-primary font-medium mb-1 md:mb-2">
                      {review.tag}
                    </span>
                    <h4 className="text-lg md:text-xl font-bold text-charcoal">
                      {review.title}
                    </h4>
                  </div>

                  {/* 우측: 차량 이미지 (작게) */}
                  <div className="flex-shrink-0 w-24 md:w-32 lg:w-40">
                    <img
                      src={review.carImage}
                      alt={review.title}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarReviewSection;
