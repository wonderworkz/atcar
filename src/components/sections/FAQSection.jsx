import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    <section className="px-4 py-20 md:py-[120px] bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto">
        {/* 섹션 헤더 */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h5 className="text-sm md:text-base text-primary font-semibold mb-2 md:mb-3">
            궁금하신 내용을 빠르게 확인해보세요
          </h5>
          <h3 className="text-[30px] md:text-3xl lg:text-4xl font-bold text-[#1E293B]">
            자주 묻는 질문
          </h3>
        </motion.div>

        {/* FAQ 아코디언 */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glass-heavy rounded-3xl hover:shadow-glass-heavy transition-shadow duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
