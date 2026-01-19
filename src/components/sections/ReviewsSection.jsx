import React, { useRef, useState, useEffect } from 'react';

const ReviewsSection = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const reviews = [
    {
      name: '김*훈',
      date: '2025.12',
      rating: 5,
      content:
        '평소 즐겨보던 앗차가와 채널에 직접 출연까지 하게 되어 영광이었습니다! 이번에 GV70을 출고하면서 까다로운 옵션을 부탁드렸는데, 담당자님이 끝까지 포기하지 않고 선점해주셔서 빠르게 받을 수 있었어요. 세심하고 책임감 있는 서비스에 감동했습니다. 차량 구매 고민하시는 분들께 강력 추천합니다.',
    },
    {
      name: '이*영',
      date: '2026.01',
      rating: 5,
      content:
        '신차 장기렌트가 처음이라 걱정이 많았는데, 앗차가와가 롯데렌터카 전속이라 더 믿음이 갔습니다. 시내 주행용 레이를 계약하면서 옵션 변경을 자주 요청드렸는데도 딜러님이 친절하게 즉시 대응해주시더라고요. 약속한 일정에 딱 맞춰 출고해주신 덕분에 기분 좋게 운행 시작했습니다.',
    },
    {
      name: '박*수',
      date: '2025.11',
      rating: 5,
      content:
        '회사 업무용으로 쓸 카니발이 급하게 필요해 상담받았습니다. 견적을 세 군데 정도 비교해봤는데, 앗차가와가 가장 메리트 있는 최저가라 바로 결정했어요. 담당자님이 진행 상황을 꼼꼼히 공유해주시고 서류 절차도 깔끔하게 챙겨주셔서 정말 편했습니다.',
    },
    {
      name: '최*희',
      date: '2026.01',
      rating: 5,
      content:
        '세컨카로 캐스퍼를 알아보다가 앗차가와를 알게 되었습니다. 여러 곳에서 견적을 받아봤지만 확실히 여기가 가장 합리적이었어요. 궁금한 점이 많아 전화로 자주 문의드렸음에도 불편한 기색 없이 친절하게 응대해주셔서 감사했습니다. 빠른 대응 덕분에 얼마 지나지 않아 새 차를 받아볼 수 있어 정말 만족스럽습니다.',
    },
    {
      name: '정*민',
      date: '2025.12',
      rating: 5,
      content:
        '업무용 차량 출고를 위해 지인 추천 받고 연락드렸습니다. 롯데렌터카 전속이라는 점이 가장 신뢰가 갔고, 상담부터 계약까지 군더더기 없이 깔끔했어요. 제가 원하는 조건에 맞춰 차량을 찾아봐주시고 진행 과정을 세심하게 공유해주시는 모습에 \'진짜 믿고 맡겨도 되는 곳\'이라는 확신이 들었습니다. 다음에도 꼭 맡길 것 같습니다. 사업 번창하세요!',
    },
    {
      name: '한*지',
      date: '2025.12',
      rating: 5,
      content:
        '김세연님 팬이라서 앗차가와 채널 챙겨보고 있다가 마침 차를 교체할 때가 되서 이참에 렌트로 해보려고 문의드렸는데, 시작부터 마무리까지 깔끔하게 출고했습니다! 딜러님이 처음부터 끝까지 배려 넘치는 태도로 상담해주셔서 감동이었어요. 중간에 사항을 변경했는데도 바로 처리해주시고, 출고까지 든든하게 챙겨주신 덕분에 생애 첫 장기렌트 완벽하게 성공했습니다.',
    },
  ];

  // 드래그 시작
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = 'grabbing';
    scrollContainerRef.current.style.scrollSnapType = 'none';
  };

  // 드래그 중
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // 스크롤 속도 조절
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // 드래그 종료
  const handleMouseUp = () => {
    setIsDragging(false);
    scrollContainerRef.current.style.cursor = 'grab';
    scrollContainerRef.current.style.scrollSnapType = 'x mandatory';
  };

  // 마우스가 컨테이너를 벗어날 때
  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      scrollContainerRef.current.style.cursor = 'grab';
      scrollContainerRef.current.style.scrollSnapType = 'x mandatory';
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 md:w-5 md:h-5 ${
          index < rating ? 'text-accent fill-current' : 'text-white/20'
        }`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="px-4 py-20 md:py-[120px] bg-[#0B1120]">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-8 md:mb-12">
          <h5 className="text-sm md:text-base text-primary font-semibold mb-2 md:mb-3">
            앗차가와를 선택하는 이유
          </h5>
          <h3 className="text-[30px] md:text-3xl lg:text-4xl font-bold text-white">
            실제 후기를 만나보세요
          </h3>
        </div>

        {/* 후기 카드 가로 스크롤 */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 md:gap-6 px-6 pb-4 cursor-grab select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="glass-heavy-dark w-[280px] md:w-[420px] lg:w-[480px] p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] flex flex-col gap-4 flex-shrink-0 snap-center md:snap-start"
            >
              {/* 별점 */}
              <div className="flex items-center gap-1 text-accent">
                {renderStars(review.rating)}
              </div>

              {/* 후기 내용 */}
              <p className="text-sm md:text-base text-white leading-relaxed">
                "{review.content}"
              </p>

              {/* 작성자 정보 */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20">
                  <span className="text-xs font-bold text-white">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">{review.name}</span>
                  <span className="text-xs text-white/60">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
