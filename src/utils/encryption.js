import CryptoJS from 'crypto-js';

// 환경 변수에서 암호화 키 가져오기
const ENCRYPTION_KEY = import.meta.env.VITE_ENCRYPTION_KEY || 'default-key-for-development';

/**
 * AES 암호화
 * @param {string} text - 암호화할 텍스트
 * @returns {string} 암호화된 텍스트
 */
export const encrypt = (text) => {
  if (!text) return '';

  try {
    return CryptoJS.AES.encrypt(text, ENCRYPTION_KEY).toString();
  } catch (error) {
    console.error('Encryption error:', error);
    return text; // 암호화 실패 시 원본 반환 (프로덕션에서는 에러 처리 필요)
  }
};

/**
 * AES 복호화
 * @param {string} ciphertext - 암호화된 텍스트
 * @returns {string} 복호화된 텍스트
 */
export const decrypt = (ciphertext) => {
  if (!ciphertext) return '';

  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, ENCRYPTION_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error('Decryption error:', error);
    return ''; // 복호화 실패 시 빈 문자열 반환
  }
};

/**
 * 개인정보 암호화
 * @param {Object} data - 폼 데이터
 * @returns {Object} 암호화된 데이터
 */
export const encryptPersonalInfo = (data) => {
  return {
    ...data,
    name: encrypt(data.name),
    phone: encrypt(data.phone),
    email: data.email ? encrypt(data.email) : '',
  };
};

/**
 * 개인정보 복호화
 * @param {Object} data - 암호화된 데이터
 * @returns {Object} 복호화된 데이터
 */
export const decryptPersonalInfo = (data) => {
  return {
    ...data,
    name: decrypt(data.name),
    phone: decrypt(data.phone),
    email: data.email ? decrypt(data.email) : '',
  };
};

/**
 * 전화번호 마스킹
 * @param {string} phone - 전화번호
 * @returns {string} 마스킹된 전화번호 (예: 010-****-5678)
 */
export const maskPhone = (phone) => {
  if (!phone) return '';

  const cleaned = phone.replace(/[^0-9]/g, '');
  if (cleaned.length === 11) {
    return `${cleaned.slice(0, 3)}-****-${cleaned.slice(7)}`;
  }
  return phone;
};

/**
 * 이메일 마스킹
 * @param {string} email - 이메일
 * @returns {string} 마스킹된 이메일 (예: exa***@email.com)
 */
export const maskEmail = (email) => {
  if (!email) return '';

  const [localPart, domain] = email.split('@');
  if (localPart && domain) {
    const visibleLength = Math.min(3, localPart.length);
    const masked = localPart.slice(0, visibleLength) + '***';
    return `${masked}@${domain}`;
  }
  return email;
};

/**
 * 이름 마스킹
 * @param {string} name - 이름
 * @returns {string} 마스킹된 이름 (예: 홍*동)
 */
export const maskName = (name) => {
  if (!name || name.length < 2) return name;

  if (name.length === 2) {
    return name[0] + '*';
  }

  return name[0] + '*'.repeat(name.length - 2) + name[name.length - 1];
};
