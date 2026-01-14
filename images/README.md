# 이미지 파일 가이드

이 폴더에는 랜딩페이지에 사용될 이미지 파일들을 추가해주세요.

## 필요한 이미지 목록

### 1. 히어로 섹션 배경 이미지 (반응형 3종)
- `home_car_img.png` - Desktop용 (1920x1080 권장)
- `home_car_img_t.png` - Tablet용 (1024x768 권장)
- `home_car_img_m.png` - Mobile용 (768x1024 권장)

### 2. 로고
- `logo.svg` 또는 `logo.png` - 차살때 로고 (투명 배경 권장)

### 3. 앱 목업
- `app-mockup.png` - 앱 프로모션 섹션용 (iPhone/Android 목업)

### 4. 서비스 카드 아이콘
- `icon-calculator.svg` - 견적 서비스 아이콘
- `icon-truck.svg` - 빠른 출고 아이콘
- `icon-consultant.svg` - 전문 상담 아이콘

### 5. 제휴사 로고 (8개)
- `partner-hyundai-capital.png` - 현대캐피탈
- `partner-woori-bank.png` - 우리은행
- `partner-shinhan-capital.png` - 신한캐피탈
- `partner-kb-bank.png` - KB국민은행
- `partner-lotte-capital.png` - 롯데캐피탈
- `partner-hana-capital.png` - 하나캐피탈
- `partner-nh-bank.png` - NH농협은행
- `partner-mercedes-benz.png` - 메르세데스-벤츠 파이낸셜

### 6. 기타 아이콘
- `icon-phone.svg` - 전화 아이콘
- `icon-kakao.svg` - 카카오톡 아이콘
- `icon-app-store.svg` - App Store 아이콘
- `icon-google-play.svg` - Google Play 아이콘

## 이미지 최적화 권장사항

1. **포맷**:
   - 로고 및 아이콘: SVG (벡터) 또는 PNG (투명 배경)
   - 사진: WebP 또는 JPG

2. **용량**:
   - 가능한 경우 200KB 이하로 압축
   - TinyPNG 또는 ImageOptim 사용 권장

3. **해상도**:
   - Retina 디스플레이를 고려하여 @2x 크기로 준비
   - 예: 100x100 아이콘 → 200x200으로 저장

4. **네이밍**:
   - 소문자와 하이픈 사용 (예: `home-car-img.png`)
   - 명확하고 설명적인 이름 사용

## 이미지 추가 후 할 일

이미지를 이 폴더에 추가한 후, 해당 이미지를 사용하는 컴포넌트에서 import 경로를 확인해주세요.

```javascript
// 예시
import logo from '../../images/logo.svg';
import heroImage from '../../images/home_car_img.png';
```
