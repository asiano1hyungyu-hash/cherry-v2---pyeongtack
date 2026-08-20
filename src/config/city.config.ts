import { CityConfig } from '../types';

/**
 * 체리홈타이 V2 지역별 MASTER TEMPLATE 데이터
 * 
 * 첫 번째 기준 지역: 평택 (Pyeongtaek)
 * 향후 자동화 시스템에서 cityKo, cityEn, areas, keyword, FAQs 등의 값만 교체하여
 * 수원, 안산, 시흥, 부천, 인천 등으로 즉시 확장 가능하도록 구성되어 있습니다.
 */
export const cityConfig: CityConfig = {
  cityKo: '평택',
  cityEn: 'Pyeongtaek',
  keyword: '평택출장마사지',
  domain: 'https://cherry-pyeongtaek.example.com',
  heroBadge: 'PYEONGTAEK · 24H HOME CARE',
  heroHeadline: '평택출장마사지 체리홈타이',
  heroSubhead: '고덕국제신도시부터 비전동, 동삭동, 송탄, 안중까지 평택 전지역 어디서나 나만의 프라이빗한 공간에서 전문 홈케어 테라피를 편안하게 경험해보세요.',
  heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
  ogImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
  serviceDescription: '체리홈타이 평택점은 바쁜 일상과 업무로 누적된 피로를 익숙하고 안락한 공간에서 풀 수 있도록 돕는 24시간 전문 방문 케어 서비스입니다.',
  
  // Quick Info Bar Data
  quickStats: [
    { code: '24H', title: '24시간 운영', desc: '낮과 밤 언제든 편안한 시간대 예약' },
    { code: 'PAY LATER', title: '후불제 원칙', desc: '선입금 없는 100% 현장 결제' },
    { code: 'PYEONGTAEK', title: '평택 전지역', desc: '고덕·동삭·소사벌 등 신속 방문' },
    { code: '365 DAYS', title: '연중무휴 운영', desc: '주말·공휴일 변함없는 정성 케어' }
  ],

  // 3개 핵심 특징 카드
  serviceFeatures: [
    {
      id: 'feature-location',
      title: '원하는 장소에서 편안하게',
      description: '자택, 오피스텔, 호텔 등 익숙하고 안락한 나만의 공간에서 이동할 필요 없이 편안하게 테라피를 받으실 수 있습니다.',
      iconName: 'Home',
      badge: 'Private Care'
    },
    {
      id: 'feature-process',
      title: '간편하고 빠른 예약 과정',
      description: '계신 지역(동/읍/면)과 원하시는 프로그램, 시간만 전달해 주시면 즉시 스케줄을 확인하고 신속하게 방문 일정을 확정합니다.',
      iconName: 'CalendarCheck',
      badge: 'Fast Dispatch'
    },
    {
      id: 'feature-transparent',
      title: '투명한 정찰제와 안심 후불제',
      description: '사전에 안내된 정찰 요금 그대로 이용하시며, 선입금이나 예약금 요구 없이 관리가 끝난 후 결제하는 안전한 시스템입니다.',
      iconName: 'ShieldCheck',
      badge: '100% Pay Later'
    }
  ],

  // V2 프로그램 가격표
  programs: [
    {
      id: 'dry-massage',
      name: '건식마사지',
      subname: 'Classic Thai Dry Care',
      tagline: '전신 스트레칭과 심층 지압으로 굳은 근육을 시원하게',
      description: '오일을 사용하지 않고 압과 스트레칭 위주로 진행되어 뻐근하고 뭉친 근육을 깊이감 있게 이완시키는 정통 테라피입니다.',
      options: [
        { minutes: 60, price: 70000, priceFormatted: '70,000원' },
        { minutes: 90, price: 90000, priceFormatted: '90,000원', popular: true },
        { minutes: 120, price: 110000, priceFormatted: '110,000원' }
      ],
      highlights: [
        '목·어깨·허리 뭉친 부위 집중 관리',
        '유연성을 높이는 전신 스트레칭',
        '장시간 운전 및 좌식 근무 피로 해소',
        '개인 컨디션 맞춤 압 조절 진행'
      ],
      bestFor: '강도 높은 시원함과 뭉친 근육의 즉각적인 이완을 원하시는 분',
      iconType: 'dry'
    },
    {
      id: 'oil-massage',
      name: '스웨디시',
      subname: 'Swedish Aroma Relaxation Care',
      tagline: '부드러운 스웨디시 기법과 천연 에센셜 오일로 누리는 릴렉싱',
      description: '스웨디시 특유의 부드럽고 유려한 롤링 스트로크로 림프 순환을 촉진하고 전신의 긴장과 스트레스를 편안하게 녹여주는 감성 테라피입니다.',
      options: [
        { minutes: 60, price: 90000, priceFormatted: '90,000원' },
        { minutes: 90, price: 110000, priceFormatted: '110,000원', popular: true },
        { minutes: 120, price: 130000, priceFormatted: '130,000원' }
      ],
      highlights: [
        '고품질 천연 에센셜 오일 & 스웨디시 기법',
        '부드러운 롤링으로 혈액순환 촉진',
        '심신 안정과 깊은 스트레스 완화',
        '피부 보습 및 림프 노폐물 배출'
      ],
      bestFor: '부드럽고 포근한 마사지와 심신의 깊은 휴식을 원하시는 분',
      iconType: 'oil'
    },
    {
      id: 'premium-massage',
      name: '프리미엄VIP',
      subname: 'Signature VIP Special Care',
      tagline: '건식의 시원함 + 스웨디시의 부드러움을 결합한 최고급 코스',
      badge: '추천 프로그램',
      recommended: true,
      description: '체리홈타이의 시그니처 코스로, 전반부에는 건식 스트레칭으로 뭉친 곳을 풀고 후반부에는 감성 스웨디시로 전신을 이완시키는 VIP 복합 케어입니다.',
      options: [
        { minutes: 60, price: 110000, priceFormatted: '110,000원' },
        { minutes: 90, price: 130000, priceFormatted: '130,000원', popular: true },
        { minutes: 120, price: 150000, priceFormatted: '150,000원' },
        { minutes: 150, price: 180000, priceFormatted: '180,000원' }
      ],
      highlights: [
        '건식 집중 지압 + 스웨디시 듀얼 코스',
        '피로 누적이 심한 전신 밸런스 회복',
        '최상의 만족도를 선사하는 시그니처',
        '고급 소모품 및 맞춤 관리 진행'
      ],
      bestFor: '체리홈타이의 모든 장점을 여유롭고 완벽하게 누리고 싶으신 분',
      iconType: 'premium'
    }
  ],

  // 상황별 프로그램 추천 (V2 신규 섹션)
  recommendations: [
    {
      id: 'rec-light',
      situationTitle: '가볍게 관리받고 싶을 때',
      situationSub: '운동 후 근육 뭉침, 장시간 운전 등으로 뻐근함이 느껴질 때',
      recommendedProgram: '건식마사지',
      reason: '오일 없이 깔끔하게 진행되며, 강한 지압과 스트레칭으로 굳어 있는 근육을 빠르게 풀어 활력을 되찾아 드립니다.',
      programId: 'dry-massage',
      badge: '시원한 지압'
    },
    {
      id: 'rec-soft',
      situationTitle: '편안하고 부드러운 관리를 원할 때',
      situationSub: '정신적인 스트레스가 쌓이고 숙면과 힐링이 필요할 때',
      recommendedProgram: '스웨디시',
      reason: '부드러운 천연 에센셜 오일의 향기와 유려한 스웨디시 터치로 전신의 긴장과 피로를 부드럽게 녹여줍니다.',
      programId: 'oil-massage',
      badge: '감성 릴렉스'
    },
    {
      id: 'rec-deep',
      situationTitle: '충분한 시간을 가지고 이용하고 싶을 때',
      situationSub: '주말이나 퇴근 후 전신을 제대로 리셋하고 싶을 때',
      recommendedProgram: '프리미엄VIP',
      reason: '건식과 스웨디시 테라피의 조화로운 구성으로 60분~150분 동안 빈틈없는 최상의 힐링을 선사합니다.',
      programId: 'premium-massage',
      badge: 'VIP 복합 케어'
    }
  ],

  // 5단계 이용방법
  steps: [
    {
      step: 'STEP 01',
      title: '지역 확인',
      subtitle: '방문 희망 위치 확인',
      description: '평택 내 계신 위치(자택, 오피스텔, 호텔 등)의 정확한 동·읍·면 주소를 확인해주세요.'
    },
    {
      step: 'STEP 02',
      title: '프로그램 및 시간 선택',
      subtitle: '코스 및 시간 결정',
      description: '건식, 스웨디시, 프리미엄VIP 중 희망하시는 관리 프로그램과 이용 시간(60분/90분/120분/150분)을 선택합니다.'
    },
    {
      step: 'STEP 03',
      title: '예약 확인',
      subtitle: '전화 또는 카톡 상담',
      description: '전화 또는 카카오톡 오픈채팅으로 주소와 선택 코스를 말씀해주시면 방문 소요 시간과 예약을 확정합니다.'
    },
    {
      step: 'STEP 04',
      title: '예약 장소 방문',
      subtitle: '청결한 위생 준비 후 출발',
      description: '약속된 시간에 전문 테라피스트가 관리용품과 청결 소모품을 지참하여 고객님의 장소로 직접 방문합니다.'
    },
    {
      step: 'STEP 05',
      title: '서비스 이용 & 후불 결제',
      subtitle: '안심 후불제 완료',
      description: '프라이빗한 공간에서 편안하게 케어를 받으신 후, 만족스러운 서비스에 대해 후불로 결제해주시면 됩니다.'
    }
  ],

  // 평택 방문 가능 지역 배열 (자동화 대비 구조)
  areas: [
    '평택동',
    '비전동',
    '동삭동',
    '세교동',
    '용이동',
    '소사벌',
    '고덕동',
    '고덕국제신도시',
    '지제동',
    '청북읍',
    '안중읍',
    '포승읍',
    '팽성읍',
    '송탄',
    '서정동',
    '신장동',
    '진위면'
  ],

  // 평택 생활권 그룹 (UX 개선용)
  areaGroups: [
    {
      regionName: '고덕·지제 신도시권',
      areas: ['고덕동', '고덕국제신도시', '지제동', '세교동'],
      description: '삼성전자 평택캠퍼스 인근 및 신축 아파트 단지 신속 배차'
    },
    {
      regionName: '남부·소사벌·비전권',
      areas: ['비전동', '소사벌', '동삭동', '용이동', '평택동'],
      description: '평택역 중심 상권 및 대규모 주거 밀집 지역 빠른 방문'
    },
    {
      regionName: '송탄·북부권',
      areas: ['송탄', '서정동', '신장동', '진위면'],
      description: '송탄역 및 서정리역 일대, 진위산단 부근 24시간 항시 대기'
    },
    {
      regionName: '서부·항만권',
      areas: ['안중읍', '청북읍', '포승읍', '팽성읍'],
      description: '안중 및 포승 국가산단, 팽성읍 안정리 등 서부 전역 방문 지원'
    }
  ],

  // 6개 서비스 품질 및 이용자 안심 포인트
  trustPoints: [
    {
      id: 'trust-1',
      title: '100% 후불제 안심 원칙',
      subtitle: '선입금 및 예약금 절대 없음',
      description: '예약금이나 보증금을 요구하는 불법 사기 행위 없이, 전문 테라피스트가 방문하여 관리가 정상 종료된 후 현장 결제합니다.',
      iconName: 'ShieldCheck'
    },
    {
      id: 'trust-2',
      title: '철저한 위생 및 소독 관리',
      subtitle: '1회용 청결 소모품 사용',
      description: '타월과 시트류의 청결한 세탁 관리는 물론 1회용 위생 용품을 사용하여 쾌적하고 위생적인 케어 환경을 조성합니다.',
      iconName: 'Sparkles'
    },
    {
      id: 'trust-3',
      title: '체계적인 전문 교육 이수',
      subtitle: '친절하고 섬세한 케어 마인드',
      description: '정식 테라피 교육 과정을 마친 숙련된 관리사가 고객님의 피로 부위를 꼼꼼하게 파악하여 정성껏 케어합니다.',
      iconName: 'Award'
    },
    {
      id: 'trust-4',
      title: '평택 전지역 24시간 신속 배차',
      subtitle: '30분 내외 빠른 방문 시스템',
      description: '평택 각 권역별로 대기 중인 관리사가 있어 낮이든 늦은 밤이든 원하시는 시간대에 빠르게 이동합니다.',
      iconName: 'Clock'
    },
    {
      id: 'trust-5',
      title: '완벽한 프라이버시 보호',
      subtitle: '고객 정보 철저 보안',
      description: '예약 시 전달해주시는 고객님의 위치 정보 및 이용 내용은 서비스 완료 즉시 안전하게 파기 및 보호됩니다.',
      iconName: 'Lock'
    },
    {
      id: 'trust-6',
      title: '1:1 맞춤형 강도 조절',
      subtitle: '부위별 세밀한 압 조절',
      description: '강한 압을 선호하시거나 부드러운 릴렉스를 원하시는 등 고객님의 당일 컨디션에 맞추어 세심하게 조절해 드립니다.',
      iconName: 'Sliders'
    }
  ],

  // FAQ 6개 상세 구성
  faqs: [
    {
      id: 'faq-1',
      question: '평택 어느 지역까지 방문 가능한가요?',
      category: '지역 및 방문',
      answer: '체리홈타이는 고덕국제신도시, 비전동, 동삭동, 소사벌, 세교동, 용이동, 평택역 일대 등 중심 시가지는 물론 송탄, 서정동, 신장동, 진위면, 그리고 안중읍, 포승읍, 청북읍, 팽성읍 등 평택시 행정구역 전지역으로 방문이 가능합니다. 외곽 지역의 경우 출발 위치에 따라 도착 소요 시간에 약간의 차이가 있을 수 있으니 예약 시 문의해주시면 정확한 도착 예상 시간을 안내해 드립니다.'
    },
    {
      id: 'faq-2',
      question: '예약은 어떻게 진행하나요?',
      category: '예약 방법',
      answer: '공식 대표번호(0503-6984-9892)로 전화를 주시거나 카카오톡 오픈채팅(1:1 링크)을 통해 문의하실 수 있습니다. 계신 위치(상세 주소 또는 인근 랜드마크)와 원하시는 관리 코스(건식/스웨디시/프리미엄VIP), 이용 시간(60분/90분/120분/150분)을 말씀해주시면 대기 시간을 확인하여 즉시 방문 스케줄을 확정해 드립니다.'
    },
    {
      id: 'faq-3',
      question: '당일 예약도 가능한가요?',
      category: '이용 시간',
      answer: '네, 100% 당일 즉시 예약이 가능합니다. 체리홈타이는 24시간 365일 상시 운영되므로 평택 시내 기준 문의 주신 시점으로부터 약 30분~40분 내외로 빠르게 방문이 가능합니다. 다만 주말 저녁이나 피크 시간대에는 예약이 몰릴 수 있으므로 30분~1시간 전에 미리 연락주시면 더욱 원활하게 이용하실 수 있습니다.'
    },
    {
      id: 'faq-4',
      question: '프로그램은 어떻게 선택하면 되나요?',
      category: '프로그램 선택',
      answer: '격렬한 운동이나 육체 피로로 온몸이 뻐근하여 강한 지압과 스트레칭을 원하신다면 건식마사지를 추천합니다. 부드러운 터치와 아로마 향기로 스트레스를 풀고 깊은 이완과 숙면을 원하신다면 스웨디시가 적합합니다. 만약 두 가지의 장점을 모두 경험하고 싶으시다면 건식으로 뭉친 곳을 먼저 풀고 스웨디시로 부드럽게 마무리하는 프리미엄VIP(추천 코스)를 선택해보세요.'
    },
    {
      id: 'faq-5',
      question: '이용요금은 어디에서 확인하며, 선입금이나 추가금이 있나요?',
      category: '요금 및 결제',
      answer: '체리홈타이는 웹사이트에 투명하게 명시된 정찰 요금표를 엄격히 준수합니다. 건식마사지 60분 7만원 / 스웨디시 60분 9만원 / 프리미엄VIP 60분 11만원부터 시작하며, 관리 시작 전 어떠한 명목으로도 선입금이나 예약금을 요구하지 않습니다. 관리가 정상적으로 완료된 후 현장에서 결제해주시는 100% 안심 후불제 시스템입니다.'
    },
    {
      id: 'faq-6',
      question: '예약 전에 따로 준비해야 할 것이 있나요?',
      category: '이용 준비',
      answer: '고객님께서 따로 번거롭게 준비하실 것은 전혀 없습니다. 전문 테라피스트가 관리용 고급 오일, 위생 소모품, 타월 등 필요한 모든 케어 용품을 갖추고 방문합니다. 고객님께서는 편안하게 누우실 수 있는 자리(침대 또는 매트리스)만 마련해주시면 바로 쾌적한 힐링 케어를 받으실 수 있습니다.'
    }
  ],

  finalCtaTitle: '평택에서 편안한 관리가 필요할 때',
  finalCtaSubhead: '체리홈타이의 프로그램과 이용방법을 확인하고 24시간 언제든 편안한 시간에 예약을 문의하세요.'
};
