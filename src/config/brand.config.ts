import { BrandConfig } from '../types';

/**
 * 체리홈타이 V2 공통 브랜드 설정
 * 
 * 향후 자동화 시스템에서 지역(평택, 수원, 안산, 시흥, 부천 등)이 변경되더라도
 * 아래 브랜드 공통 연락처와 기본 정책은 동일하게 유지됩니다.
 */
export const brandConfig: BrandConfig = {
  brand: '체리홈타이',
  phoneDisplay: '0503-6984-9892',
  phoneTel: 'tel:050369849892',
  kakaoUrl: 'https://open.kakao.com/o/s3zuwACi',
  operatingHours: '24시간 365일 연중무휴',
  paymentMethod: '100% 현장 안심 후불제 (선입금 일절 없음)',
  establishedTagline: '신뢰와 품격의 프리미엄 방문 홈케어 테라피',
  qualityPromise: '엄격한 위생 수칙 준수 & 체계적인 테라피스트 케어'
};
