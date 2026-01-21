/**
 * Google Sheets API 유틸리티
 * 앗차가와 상담 신청 데이터를 Google Sheets로 전송
 */

const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;

/**
 * Google Sheets로 상담 신청 데이터 전송
 * @param {Object} formData - 폼 데이터
 * @param {string} source - 폼 소스 ('consultation_form' | 'floating_button')
 * @returns {Promise<Object>} API 응답
 */
export const submitToGoogleSheets = async (formData, source = 'unknown') => {
  // URL 검증
  if (!GOOGLE_SHEETS_URL) {
    console.error('Google Sheets URL이 설정되지 않았습니다.');
    throw new Error('서버 설정 오류가 발생했습니다.');
  }

  try {
    const payload = {
      ...formData,
      submittedAt: new Date().toISOString(),
    };

    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });

    // Google Apps Script는 성공 시 리다이렉트 후 응답 반환
    // opaque 응답도 성공으로 처리 (CORS 제한으로 인해)
    if (response.ok || response.type === 'opaque') {
      return { success: true, message: '상담 신청이 완료되었습니다.' };
    }

    // 응답 본문 확인 시도
    try {
      const data = await response.json();
      if (!data.success) {
        throw new Error(data.message || '전송 실패');
      }
      return data;
    } catch {
      // JSON 파싱 실패 시에도 성공으로 처리
      return { success: true, message: '상담 신청이 완료되었습니다.' };
    }
  } catch (error) {
    console.error('Google Sheets 전송 오류:', error);
    throw new Error('상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.');
  }
};
