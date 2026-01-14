import React, { useState } from 'react';
import Button from '../ui/Button';

const ConsultationForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carType: '',
    message: '',
    agreePrivacy: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const carTypes = [
    '선택 안 함',
    '경차',
    '소형',
    '준중형',
    '중형',
    '대형',
    'SUV',
    '수입차',
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요';
    }

    const phoneRegex = /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = '연락처를 입력해주세요';
    } else if (!phoneRegex.test(formData.phone.replace(/-/g, ''))) {
      newErrors.phone = '올바른 연락처를 입력해주세요 (예: 010-1234-5678)';
    }

    if (formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = '올바른 이메일 주소를 입력해주세요';
      }
    }

    if (!formData.agreePrivacy) {
      newErrors.agreePrivacy = '개인정보 수집 및 이용에 동의해주세요';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // 입력 시 해당 필드 에러 제거
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, '');

    // 자동 하이픈 추가
    if (value.length <= 3) {
      value = value;
    } else if (value.length <= 7) {
      value = `${value.slice(0, 3)}-${value.slice(3)}`;
    } else {
      value = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7, 11)}`;
    }

    setFormData((prev) => ({ ...prev, phone: value }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // API 호출 (onSubmit prop 사용)
      if (onSubmit) {
        await onSubmit(formData);
      }

      // 성공 메시지
      alert('상담 신청이 완료되었습니다! 빠른 시일 내에 연락드리겠습니다.');

      // 폼 초기화 및 모달 닫기
      setFormData({
        name: '',
        phone: '',
        email: '',
        carType: '',
        message: '',
        agreePrivacy: false,
      });

      if (onClose) {
        onClose();
      }
    } catch (error) {
      alert('상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 이름 */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-90 mb-2">
          이름 <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.name ? 'border-red-500' : 'border-gray-10'
          }`}
          placeholder="이름을 입력하세요"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      {/* 연락처 */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-90 mb-2">
          연락처 <span className="text-primary">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handlePhoneChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.phone ? 'border-red-500' : 'border-gray-10'
          }`}
          placeholder="010-1234-5678"
          maxLength="13"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
      </div>

      {/* 이메일 */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-90 mb-2">
          이메일 (선택)
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.email ? 'border-red-500' : 'border-gray-10'
          }`}
          placeholder="example@email.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      {/* 희망 차종 */}
      <div>
        <label htmlFor="carType" className="block text-sm font-semibold text-gray-90 mb-2">
          희망 차종 (선택)
        </label>
        <select
          id="carType"
          name="carType"
          value={formData.carType}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
        >
          {carTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* 문의 내용 */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-90 mb-2">
          문의 내용 (선택)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-3 border border-gray-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="문의하실 내용을 입력해주세요"
        ></textarea>
      </div>

      {/* 개인정보 동의 */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="agreePrivacy"
            checked={formData.agreePrivacy}
            onChange={handleChange}
            className="mt-1 w-5 h-5 text-primary border-gray-10 rounded focus:ring-2 focus:ring-primary"
          />
          <span className="text-sm text-gray-90">
            개인정보 수집 및 이용에 동의합니다 <span className="text-primary">*</span>
            <a href="#" className="text-primary underline ml-2">
              (개인정보처리방침 보기)
            </a>
          </span>
        </label>
        {errors.agreePrivacy && (
          <p className="mt-1 text-sm text-red-500">{errors.agreePrivacy}</p>
        )}
      </div>

      {/* 제출 버튼 */}
      <Button
        type="submit"
        variant="primary"
        size="large"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? '제출 중...' : '제출하기'}
      </Button>

      {/* 추가 안내 */}
      <p className="text-center text-sm text-gray-60">
        전화 상담을 원하시면{' '}
        <a
          href="tel:02-6356-0936"
          className="text-primary font-semibold hover:underline"
        >
          02-6356-0936
        </a>
        으로 연락주세요
      </p>
    </form>
  );
};

export default ConsultationForm;
