import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '상담 응답은 얼마나 걸리나요?',
      answer:
        '실시간 전화 상담은 즉시 가능하며, 온라인 문의는 영업일 기준 2시간 이내 답변드립니다.',
    },
    {
      question: '보증금과 선수금의 차이는 무엇인가요?',
      answer:
        '보증금은 계약 종료 시 반환되는 금액이며, 선수금은 월 렌트료에서 차감되는 선납 금액입니다. 선수금이 많을수록 월 렌트료가 낮아집니다.',
    },
    {
      question: '렌트가 신용점수에 영향을 주나요?',
      answer:
        '일반적으로 렌트는 신용점수에 큰 영향을 미치지 않습니다. 단, 연체 시 신용등급에 불이익이 있을 수 있으니 주의해주세요.',
    },
    {
      question: '현금영수증 발급이 가능한가요?',
      answer:
        '네, 개인 및 사업자 모두 현금영수증 발급이 가능합니다. 계약 시 요청해주시면 됩니다.',
    },
    {
      question: '차량 구매 절차는 어떻게 되나요?',
      answer:
        '1) 무료 상담 신청 → 2) 맞춤 견적 확인 → 3) 계약 체결 → 4) 차량 출고 준비 → 5) 인도 및 등록 완료 순으로 진행됩니다.',
    },
    {
      question: '중도 해지 시 위약금은 어떻게 되나요?',
      answer:
        '중도 해지 시 남은 개월 수와 월 렌트료를 고려하여 위약금이 산정됩니다. 계약서에 명시된 정확한 계산식을 확인해주세요.',
    },
    {
      question: '할증 조건은 무엇인가요?',
      answer:
        '계약 시 약정한 주행거리를 초과하거나, 차량 반납이 지연될 경우 할증료가 발생합니다. 사전에 연장 신청 시 할증을 줄일 수 있습니다.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-90 mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-lg md:text-xl text-gray-60">
            궁금하신 내용을 빠르게 확인해보세요
          </p>
        </div>

        {/* FAQ 아코디언 */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-card-tablet shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              {/* 질문 */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-10 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-90 flex-1 text-base md:text-lg">
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
                <div className="px-6 pb-5 text-gray-60 leading-relaxed border-t border-gray-10 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 추가 문의 안내 */}
        <div className="mt-12 p-6 bg-primary-10 rounded-card-tablet text-center">
          <p className="text-gray-90 mb-4">
            더 궁금하신 사항이 있으신가요?
          </p>
          <a
            href="tel:02-6356-0936"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-active transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <span>02-6356-0936로 전화주세요</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
