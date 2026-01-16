import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ReviewsSection = () => {
  const reviews = [
    {
      name: '김*훈',
      date: '2025.12',
      rating: 5,
      content:
        '빠르고 정확한 견적 덕분에 만족스러운 차량을 구매했습니다. 전문 상담사님이 친절하게 설명해주셔서 좋았어요.',
    },
    {
      name: '이*영',
      date: '2026.01',
      rating: 5,
      content:
        '다른 곳보다 조건이 훨씬 좋았고, 7일 만에 차를 받았어요. 앗차가와 강력 추천합니다!',
    },
    {
      name: '박*수',
      date: '2025.11',
      rating: 5,
      content:
        '처음 렌트를 알아보는데 복잡할 줄 알았는데, 상담사님이 모든 걸 다 도와주셔서 편하게 진행했습니다.',
    },
    {
      name: '최*희',
      date: '2026.01',
      rating: 5,
      content:
        '견적 비교부터 출고까지 모든 과정이 투명하고 빨라서 믿음이 갔어요.',
    },
    {
      name: '정*민',
      date: '2025.12',
      rating: 5,
      content:
        '세금, 보험 걱정 없이 합리적인 가격에 차를 렌트할 수 있었습니다.',
    },
    {
      name: '한*지',
      date: '2025.12',
      rating: 5,
      content:
        '신속한 대응과 정확한 정보 제공으로 만족스러운 계약을 했습니다. 감사합니다!',
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-10'
        }`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="px-4 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            많은 고객이 앗차가와를 선택하는 이유,
            <br className="hidden md:block" />
            직접 경험하세요
          </h2>
          <p className="text-lg md:text-xl text-charcoal/60 max-w-2xl mx-auto">
            실제 고객님들의 생생한 후기를 확인해보세요
          </p>
        </div>

        {/* 후기 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} hover={false} padding="medium" glass={true}>
              {/* 별점 */}
              <div className="flex items-center gap-1 mb-4">{renderStars(review.rating)}</div>

              {/* 후기 내용 */}
              <p className="text-charcoal leading-relaxed mb-6">"{review.content}"</p>

              {/* 작성자 정보 */}
              <div className="flex items-center justify-between pt-4 border-t border-charcoal/10">
                <span className="font-semibold text-charcoal">{review.name}</span>
                <span className="text-sm text-charcoal/60">{review.date}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* 더보기 버튼 */}
        <div className="text-center">
          <Button
            variant="outline"
            size="large"
            onClick={() => (window.location.href = '/reviews/reviews_list')}
          >
            후기 더 보기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
