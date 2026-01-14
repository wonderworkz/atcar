import { encryptPersonalInfo } from './encryption';

const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
const API_KEY = import.meta.env.VITE_API_KEY;

/**
 * 상담 신청 API
 * @param {Object} formData - 상담 신청 폼 데이터
 * @returns {Promise<Object>} API 응답
 */
export const submitConsultation = async (formData) => {
  try {
    // 민감정보 암호화
    const encryptedData = encryptPersonalInfo(formData);

    // API 호출
    const response = await fetch(`${API_ENDPOINT}/consultation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        ...encryptedData,
        timestamp: new Date().toISOString(),
        source: 'landing_page',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'API 요청 실패');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

/**
 * 에러 처리 헬퍼 함수
 * @param {Error} error - 에러 객체
 * @returns {string} 사용자에게 표시할 에러 메시지
 */
export const handleAPIError = (error) => {
  if (error.message === 'Failed to fetch') {
    return '네트워크 연결을 확인해주세요.';
  }

  if (error.message.includes('401')) {
    return '인증 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
  }

  if (error.message.includes('500')) {
    return '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
  }

  return '오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
};

/**
 * 재시도 로직이 포함된 API 호출
 * @param {Function} apiCall - API 호출 함수
 * @param {number} maxRetries - 최대 재시도 횟수
 * @returns {Promise<any>}
 */
export const retryAPICall = async (apiCall, maxRetries = 3) => {
  let lastError;

  for (let i = 0; i < maxRetries; i++) {
    try {
      return await apiCall();
    } catch (error) {
      lastError = error;
      if (i < maxRetries - 1) {
        // 지수 백오프 (1초, 2초, 4초...)
        await new Promise((resolve) => setTimeout(resolve, 1000 * Math.pow(2, i)));
      }
    }
  }

  throw lastError;
};
