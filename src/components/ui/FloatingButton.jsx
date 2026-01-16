import React, { useState } from 'react';

const FloatingButton = ({ onConsultClick, isOpen: externalIsOpen, setIsOpen: externalSetIsOpen }) => {
  // 외부에서 isOpen을 전달받으면 사용하고, 없으면 내부 state 사용
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = externalSetIsOpen || setInternalIsOpen;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: '',
    agreeAll: false,
    agreePrivacy: false,
    agreeThirdParty: false,
    agreeMarketing: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAgreeAllChange = (e) => {
    const checked = e.target.checked;
    setFormData(prev => ({
      ...prev,
      agreeAll: checked,
      agreePrivacy: checked,
      agreeThirdParty: checked,
      agreeMarketing: checked,
    }));
  };

  const isFormValid = formData.name && formData.phone && formData.agreePrivacy && formData.agreeThirdParty;

  const handleSubmit = () => {
    if (isFormValid) {
      onConsultClick(formData);
      setIsOpen(false);
      setFormData({
        name: '',
        phone: '',
        carModel: '',
        agreeAll: false,
        agreePrivacy: false,
        agreeThirdParty: false,
        agreeMarketing: false,
      });
    }
  };

  return (
    <>
      {/* PC 버전 */}
      <div className={`hidden md:block fixed bottom-[28px] xl:bottom-[20px] left-1/2 -translate-x-1/2 w-full z-50 transition-all ${isOpen ? 'max-w-[900px] px-6' : 'max-w-[520px]'}`}>
        <div
          className={`overflow-hidden rounded-[40px] border border-white/50 bg-[rgba(249,250,255,0.60)] backdrop-blur-[50px] ${isOpen ? 'px-[40px] py-[28px]' : 'px-[30px] py-[24px]'}`}
          style={{
            boxShadow: 'inset 0 4px 20px rgba(255,255,255,0.30), 0 0 24px rgba(0,0,0,0.20)'
          }}
        >
          {/* 열린 상태 헤더 */}
          {isOpen && (
            <div className="flex items-center justify-between mb-4">
              <p className="text-base font-bold tracking-tighter text-gray-10">
                지금 최저가 견적받기
              </p>
              <button onClick={() => setIsOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none">
                  <path d="M17 1L9 9L1 1" stroke="#4E4E5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          )}

          {/* 닫힌 상태 콘텐츠 */}
          {!isOpen && (
            <div className="flex flex-col items-center gap-4">
              {/* 중앙 정렬 타이틀 & 화살표 */}
              <div className="flex items-center justify-center gap-2">
                <p className="text-[20px] font-bold tracking-tighter text-gray-10">
                  지금 최저가 견적받기
                </p>
                <button
                  onClick={() => setIsOpen(true)}
                  className="flex h-[24px] w-[24px] items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="10"
                    viewBox="0 0 18 10"
                    fill="none"
                    className="rotate-180"
                  >
                    <path d="M17 1L9 9L1 1" stroke="#4E4E5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* 버튼 2개 */}
              <div className="flex w-full items-center gap-3">
                <div className="flex min-w-0 flex-1 basis-0">
                  <button
                    className="flex h-[48px] items-center justify-center rounded-[48px] bg-[#fee500] px-4 active:bg-[#e0ca00] w-full"
                  >
                    <span className="inline-flex items-center gap-2">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 01-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3z"/>
                      </svg>
                      <span className="text-[14px] font-semibold text-gray-10">
                        카카오톡 문의
                      </span>
                    </span>
                  </button>
                </div>
                <div className="flex min-w-0 flex-1 basis-0">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="submit flex h-[48px] w-full items-center justify-center rounded-full bg-c-primary text-[14px] font-bold tracking-tighter text-white active:bg-c-primary-active"
                  >
                    무료 견적 받아보기
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 열린 상태 폼 */}
          {isOpen && (
            <div className="flex w-full flex-col gap-4">
              <form className="flex flex-col gap-4">
                {/* 입력 필드 - 가로 배치 */}
                <ul className="input-list flex gap-[14px]">
                  <li className="flex flex-1 flex-col gap-1">
                    <input
                      className="h-[42px] rounded-[10px] border border-c-l-3 px-6 bg-white text-base"
                      placeholder="이름을 입력하세요"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </li>
                  <li className="flex flex-1 flex-col gap-1">
                    <input
                      className="h-[42px] rounded-[10px] border border-c-l-3 px-6 bg-white text-base"
                      placeholder="휴대폰번호 (-제외)"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </li>
                  <li className="flex flex-1 flex-col gap-1">
                    <input
                      className="h-[42px] rounded-[10px] border border-c-l-3 px-6 bg-white text-base"
                      placeholder="차종을 입력하세요"
                      type="text"
                      name="carModel"
                      value={formData.carModel}
                      onChange={handleInputChange}
                    />
                  </li>
                </ul>

                {/* 체크박스 - 가로 배치 */}
                <ul className="check-list flex gap-2 flex-wrap">
                  <li>
                    <label className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        name="agreeAll"
                        checked={formData.agreeAll}
                        onChange={handleAgreeAllChange}
                        className="w-[18px] h-[18px] rounded accent-[#3B82F6]"
                      />
                      <p className="text-sm leading-5 text-c-ex text-nowrap">전체 동의</p>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        name="agreePrivacy"
                        checked={formData.agreePrivacy}
                        onChange={handleInputChange}
                        className="w-[18px] h-[18px] rounded accent-[#3B82F6]"
                      />
                      <p className="text-sm leading-5 text-c-ex text-nowrap">
                        (필수) 개인정보 수집 및 활용동의 <span>[보기]</span>
                      </p>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        name="agreeThirdParty"
                        checked={formData.agreeThirdParty}
                        onChange={handleInputChange}
                        className="w-[18px] h-[18px] rounded accent-[#3B82F6]"
                      />
                      <p className="text-sm leading-5 text-c-ex text-nowrap">
                        (필수) 개인정보 제3자 제공 동의 <span>[보기]</span>
                      </p>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        name="agreeMarketing"
                        checked={formData.agreeMarketing}
                        onChange={handleInputChange}
                        className="w-[18px] h-[18px] rounded accent-[#3B82F6]"
                      />
                      <p className="text-sm leading-5 text-c-ex text-nowrap">
                        (선택) 마케팅 활용동의 <span>[보기]</span>
                      </p>
                    </label>
                  </li>
                </ul>
              </form>

              {/* 하단 고정 버튼 */}
              <div className="flex">
                <button
                  onClick={handleSubmit}
                  disabled={!isFormValid}
                  className="submit flex h-[52px] w-full items-center justify-center rounded-full bg-c-primary text-sm font-bold tracking-tighter text-white active:bg-c-primary-active disabled:bg-[#ECECEC] disabled:text-[#9C9CAC]"
                >
                  무료 견적 받아보기
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 모바일 버전 */}
      <div className={`md:hidden fixed bottom-[16px] left-1/2 -translate-x-1/2 w-[calc(100%-21px)] z-50 ${isOpen ? 'open' : ''}`}>
        <div
          className={`overflow-hidden rounded-[40px] border border-white/50 bg-[rgba(249,250,255,0.60)] backdrop-blur-[50px] transition-all ${
            isOpen ? 'p-6' : 'px-[16px] py-[16px]'
          }`}
          style={{
            boxShadow: 'inset 0 4px 20px rgba(255,255,255,0.30), 0 0 24px rgba(0,0,0,0.20)'
          }}
        >
          {/* 닫힌 상태 */}
          {!isOpen && (
            <>
              <div className="flex items-center justify-center mb-2">
                <p className="text-sm text-gray-600 font-medium text-center">
                  지금 바로 최저가 견적받기
                </p>
              </div>

              {/* 버튼 영역 */}
              <div className="flex items-center justify-between gap-2.5">
                {/* 카카오톡 버튼 */}
                <div className="flex min-w-0 flex-1 basis-0">
                  <a
                    href={import.meta.env.VITE_KAKAO_TALK_URL || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-[52px] items-center justify-center rounded-[52px] bg-[#fee500] px-4 active:bg-[#e0ca00] w-full"
                  >
                    <span className="inline-flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 01-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3z"/>
                      </svg>
                      <span className="text-[14px] font-semibold text-gray-900 tracking-tighter">
                        카카오톡 견적문의
                      </span>
                    </span>
                  </a>
                </div>

                {/* 무료 견적 버튼 */}
                <div className="flex min-w-0 flex-1 basis-0">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="flex h-[52px] w-full items-center justify-center rounded-full bg-[#3B82F6] text-[14px] font-bold tracking-tighter text-white active:bg-[#2563EB]"
                  >
                    무료 견적 받아보기
                  </button>
                </div>
              </div>
            </>
          )}

          {/* 열린 상태 - 폼 */}
          {isOpen && (
            <>
              {/* 헤더 */}
              <div className="flex items-center justify-between mb-4">
                <p className="text-base font-bold tracking-tighter text-gray-900">
                  무료 상담 신청
                </p>
                <button onClick={() => setIsOpen(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 1.33672L10.4281 10.7648M1 10.4281L10.4281 1" stroke="#4E4E5B" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* 입력 폼 */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <input
                    className="h-10 rounded-[10px] border border-c-l-3 px-6 bg-white text-base"
                    placeholder="이름을 입력하세요"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <input
                    className="h-10 rounded-[10px] border border-c-l-3 px-6 bg-white text-base"
                    placeholder="휴대폰번호 (-제외)"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <input
                    className="h-10 rounded-[10px] border border-c-l-3 px-6 bg-white text-base"
                    placeholder="차종을 입력하세요"
                    type="text"
                    name="carModel"
                    value={formData.carModel}
                    onChange={handleInputChange}
                  />
                </div>

                {/* 체크박스 */}
                <div className="flex flex-col gap-[7px] mt-3.5">
                  <label className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      name="agreeAll"
                      checked={formData.agreeAll}
                      onChange={handleAgreeAllChange}
                      className="w-[18px] h-[18px] rounded accent-[#3B82F6]"
                    />
                    <p className="text-[13px] font-medium text-gray-600">전체 동의</p>
                  </label>
                  <label className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      name="agreePrivacy"
                      checked={formData.agreePrivacy}
                      onChange={handleInputChange}
                      className="w-[18px] h-[18px] rounded accent-[#3B82F6]"
                    />
                    <p className="text-[13px] font-medium text-gray-600">
                      (필수) 개인정보 수집 및 활용동의 <span className="underline">[보기]</span>
                    </p>
                  </label>
                  <label className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      name="agreeThirdParty"
                      checked={formData.agreeThirdParty}
                      onChange={handleInputChange}
                      className="w-[18px] h-[18px] rounded accent-[#3B82F6]"
                    />
                    <p className="text-[13px] font-medium text-gray-600">
                      (필수) 개인정보 제3자 제공 동의 <span className="underline">[보기]</span>
                    </p>
                  </label>
                  <label className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      name="agreeMarketing"
                      checked={formData.agreeMarketing}
                      onChange={handleInputChange}
                      className="w-[18px] h-[18px] rounded accent-[#3B82F6]"
                    />
                    <p className="text-[13px] font-medium text-gray-600">
                      (선택) 마케팅 활용동의 <span className="underline">[보기]</span>
                    </p>
                  </label>
                </div>

                {/* 제출 버튼 */}
                <button
                  onClick={handleSubmit}
                  disabled={!isFormValid}
                  className="flex h-[52px] w-full items-center justify-center rounded-full bg-[#3B82F6] text-[14px] font-bold tracking-tighter text-white active:bg-[#2563EB] disabled:bg-[#ECECEC] disabled:text-[#9C9CAC]"
                >
                  무료 견적 받아보기
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default FloatingButton;
