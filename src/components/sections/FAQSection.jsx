import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '초기 비용이 필요한가요?',
      answer:
        '초기 비용 납입이 의무는 아니며, 고객님의 신용 조건에 따라 렌터카 심사 승인 조건은 변경될 수 있습니다. 다만, 렌탈료 조정 등 다양한 정책을 활용하여 심사 조건을 완화하는 방법도 안내해 드리고 있습니다.',
    },
    {
      question: '차가 바로 나올 수 있나요?',
      answer:
        '렌탈사에서 선제적으로 확보한 \'즉시 출고\' 차량의 경우, 옵션 변경은 어렵지만 대량 구매 사양으로 가격이 저렴하고 빠르게 받으실 수 있습니다. 반면 원하는 옵션을 직접 선택하시면 별도 생산 과정을 거치므로 대기 기간이 발생하고 금액이 상향될 수 있습니다. 고객님께 가장 빠른 출고가 가능한 최적의 방안을 상담해 드립니다.',
    },
    {
      question: '보증금과 선수금의 차이는 무엇인가요?',
      answer:
        '보증금은 계약 이행을 담보하기 위해 예치하는 금액으로, 계약 종료 시 고객님께 전액 반환됩니다. 선수금은 월 렌탈료의 일부를 미리 납부하여 매달 내는 비용을 낮추는 선납금 개념이며, 계약 종료 후 반환되지 않습니다.',
    },
    {
      question: '장기렌터카 이용이 신용점수에 영향을 주나요?',
      answer:
        '장기렌터카는 대출 상품이 아니므로 이용 자체만으로는 신용점수에 영향을 미치지 않습니다. 단, 임대료 체납 시에는 신용 등급에 불이익이 있을 수 있으므로 주의가 필요합니다.',
    },
    {
      question: '부가세 환급이 되나요?',
      answer:
        '경차 및 9인승 이상의 승합차에 한해 월 렌탈료에 포함된 부가가치세(VAT) 환급이 가능합니다. 개인사업자나 법인사업자의 경우 추가적인 절세 효과를 누리실 수 있습니다.',
    },
    {
      question: '만 21세도 운전이 가능한가요?',
      answer:
        '장기렌터카는 만 21세 이상부터 계약 및 운행을 할 수 있습니다. 다만, 연령에 따라 보험료 차이가 있을 수 있으며, 과거 사고 이력이 많을 경우 심사가 제한될 수 있습니다.',
    },
    {
      question: '렌터카를 나중에 인수할 수도 있나요?',
      answer:
        '장기렌터카는 계약 종료 후 인수가 가능한 상품과 반납만 가능한 상품으로 구분됩니다. 처음부터 인수를 목적으로 하신다면, 총비용을 절감할 수 있는 \'인수형\' 상품 이용을 추천해 드립니다.',
    },
    {
      question: '중도에 차량 변경이 가능한가요?',
      answer:
        '장기렌터카는 정해진 계약 기간 유지를 전제로 하는 상품입니다. 이용 중 차량 변경은 불가능하며, 중도 해지 시에는 위약금이 발생할 수 있으므로 신중한 선택이 필요합니다.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 py-20 md:py-[120px] bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-8 md:mb-12">
          <h5 className="text-sm md:text-base text-primary font-semibold mb-2 md:mb-3">
            궁금하신 내용을 빠르게 확인해보세요
          </h5>
          <h3 className="text-[30px] md:text-3xl lg:text-4xl font-bold text-[#1E293B]">
            자주 묻는 질문
          </h3>
        </div>

        {/* FAQ 아코디언 */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-heavy rounded-3xl hover:shadow-glass-heavy transition-shadow duration-300 overflow-hidden"
            >
              {/* 질문 */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-white/40 transition-colors duration-200"
              >
                <span className="font-semibold text-charcoal flex-1 text-base md:text-lg">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {/* 답변 */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-charcoal/60 leading-relaxed border-t border-charcoal/10 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
