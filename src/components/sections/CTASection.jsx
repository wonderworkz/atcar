import React, { useState } from 'react';

const CTASection = ({ onConsultClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: '',
    agreeAll: false,
    agreePrivacy: false,
    agreeThirdParty: false,
    agreeMarketing: false,
  });

  // 전화번호 포맷팅 함수 (010으로 시작하는 경우에만 010-1234-5678 형식 적용)
  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/[^0-9]/g, '');

    // 010으로 시작하지 않으면 포맷팅 없이 숫자만 반환
    if (!numbers.startsWith('010') && numbers.length >= 3) {
      return numbers;
    }

    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'phone') {
      const formattedPhone = formatPhoneNumber(value);
      setFormData(prev => ({
        ...prev,
        phone: formattedPhone
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleAgreeAll = (e) => {
    const isChecked = e.target.checked;
    setFormData(prev => ({
      ...prev,
      agreeAll: isChecked,
      agreePrivacy: isChecked,
      agreeThirdParty: isChecked,
      agreeMarketing: isChecked,
    }));
  };

  const isFormValid = formData.name && formData.phone && formData.agreePrivacy && formData.agreeThirdParty;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid && onConsultClick) {
      // DB로 전송 시 하이픈 제거
      const submitData = {
        ...formData,
        phone: formData.phone.replace(/-/g, '')
      };
      onConsultClick(submitData, 'cta_section');
    }
  };

  return (
    <section id="cta-section" className="px-4 py-20 md:py-[120px] bg-[#0B1120]">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-8 md:mb-12">
          <h5 className="text-sm md:text-base text-primary font-semibold mb-2 md:mb-3">
            내게 딱 맞는 차를 최저가로
          </h5>
          <h3 className="text-[30px] md:text-3xl lg:text-4xl font-bold text-white">
            지금 무료 견적 받으세요
          </h3>
        </div>

        {/* 견적 신청 폼 */}
        <div className="max-w-[900px] mx-auto px-6">
          <div className="glass-heavy-dark rounded-[1.5rem] md:rounded-[2rem] px-6 py-6 md:px-[40px] md:py-[28px] hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <p className="text-base md:text-[20px] font-bold tracking-tighter text-white">
              무료 상담 신청
            </p>
          </div>

          <div className="flex w-full flex-col gap-4">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {/* 입력 필드 */}
              <ul className="input-list flex flex-col md:flex-row gap-3 md:gap-[14px]">
                <li className="flex flex-1 flex-col gap-1">
                  <input
                    className="h-[42px] rounded-[10px] border border-white/20 px-6 bg-white/5 text-base text-white placeholder:text-white/40"
                    placeholder="이름을 입력하세요"
                    type="text"
                    value={formData.name}
                    name="name"
                    onChange={handleInputChange}
                  />
                </li>
                <li className="flex flex-1 flex-col gap-1">
                  <input
                    className="h-[42px] rounded-[10px] border border-white/20 px-6 bg-white/5 text-base text-white placeholder:text-white/40"
                    placeholder="휴대폰번호 (-제외)"
                    type="tel"
                    value={formData.phone}
                    name="phone"
                    onChange={handleInputChange}
                  />
                </li>
                <li className="flex flex-1 flex-col gap-1">
                  <input
                    className="h-[42px] rounded-[10px] border border-white/20 px-6 bg-white/5 text-base text-white placeholder:text-white/40"
                    placeholder="차종을 입력하세요"
                    type="text"
                    value={formData.carModel}
                    name="carModel"
                    onChange={handleInputChange}
                  />
                </li>
              </ul>

              {/* 동의 체크박스 */}
              <ul className="check-list flex gap-2 flex-wrap">
                <li>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      className="w-[18px] h-[18px] rounded accent-primary cursor-pointer appearance-none border border-white/20 bg-white/5 checked:bg-primary checked:border-primary"
                      type="checkbox"
                      name="agreeAll"
                      checked={formData.agreeAll}
                      onChange={handleAgreeAll}
                      style={{
                        backgroundImage: formData.agreeAll ? 'url("data:image/svg+xml,%3csvg viewBox=\'0 0 16 16\' fill=\'white\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath d=\'M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z\'/%3e%3c/svg%3e")' : 'none',
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                    <p className="text-sm leading-5 text-white/80 text-nowrap">전체 동의</p>
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      className="w-[18px] h-[18px] rounded accent-primary cursor-pointer appearance-none border border-white/20 bg-white/5 checked:bg-primary checked:border-primary"
                      type="checkbox"
                      name="agreePrivacy"
                      checked={formData.agreePrivacy}
                      onChange={handleInputChange}
                      style={{
                        backgroundImage: formData.agreePrivacy ? 'url("data:image/svg+xml,%3csvg viewBox=\'0 0 16 16\' fill=\'white\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath d=\'M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z\'/%3e%3c/svg%3e")' : 'none',
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                    <p className="text-sm leading-5 text-white/80 text-nowrap">
                      (필수) 개인정보 수집 및 활용동의 <span className="text-primary">[보기]</span>
                    </p>
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      className="w-[18px] h-[18px] rounded accent-primary cursor-pointer appearance-none border border-white/20 bg-white/5 checked:bg-primary checked:border-primary"
                      type="checkbox"
                      name="agreeThirdParty"
                      checked={formData.agreeThirdParty}
                      onChange={handleInputChange}
                      style={{
                        backgroundImage: formData.agreeThirdParty ? 'url("data:image/svg+xml,%3csvg viewBox=\'0 0 16 16\' fill=\'white\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath d=\'M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z\'/%3e%3c/svg%3e")' : 'none',
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                    <p className="text-sm leading-5 text-white/80 text-nowrap">
                      (필수) 개인정보 제3자 제공 동의 <span className="text-primary">[보기]</span>
                    </p>
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      className="w-[18px] h-[18px] rounded accent-primary cursor-pointer appearance-none border border-white/20 bg-white/5 checked:bg-primary checked:border-primary"
                      type="checkbox"
                      name="agreeMarketing"
                      checked={formData.agreeMarketing}
                      onChange={handleInputChange}
                      style={{
                        backgroundImage: formData.agreeMarketing ? 'url("data:image/svg+xml,%3csvg viewBox=\'0 0 16 16\' fill=\'white\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath d=\'M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z\'/%3e%3c/svg%3e")' : 'none',
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                    <p className="text-sm leading-5 text-white/80 text-nowrap">
                      (선택) 마케팅 활용동의 <span className="text-primary">[보기]</span>
                    </p>
                  </label>
                </li>
              </ul>
            </form>

            {/* 제출 버튼 */}
            <div className="flex">
              <button
                disabled={!isFormValid}
                onClick={handleSubmit}
                className="submit flex h-[52px] w-full items-center justify-center rounded-full bg-c-primary text-sm font-bold tracking-tighter text-white active:bg-c-primary-active disabled:bg-[#0B1120] disabled:text-white disabled:border disabled:border-white/20 disabled:cursor-not-allowed transition-colors"
              >
                무료 견적 받아보기
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
