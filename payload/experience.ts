import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'Bridgetec',
      position: 'Backend Developer',
      startedAt: '2020-02',
      descriptions: [
        '콜센터 시스템 솔루션 기업',
        '콜 기반 데이터 처리 통계, 장애탐지 서버 유지보수 및 개선',
        'NCP KMS 데이터 암복호화 서비스 개발',
        '클라우드 모니터링 오픈소스 시스템 구축',
      ],
      skillKeywords: [
        'C++',
        'Java',
        'Redis',
        'Oracle',
        'MySQL',
        'Spring Boot',
        'Kafka',
        'NCP KMS',
        'Kubernetes',
        'Docker',
        'Prometheus',
        'Grafana',
        'Loki',
      ],
    },
    {
      title: 'Neighbor System',
      position: '백엔드 개발, 프론트엔드 개발',
      startedAt: '2017-12',
      endedAt: '2020-02',
      descriptions: [
        'SI 업체 / 고속도로 운영단말, 서버 개발 파트',
        '교통사고 데이터 분석 및 통계 프로그램 개발',
        '교통사고 보고서 작성 및 통계 관리 시스템 구축',
        '교통량 측정 단말장비와의 통신 서버 개발',
        '고속도로 운영관리 단말 시스템 개발',
        '민원 알람 및 메일 전송 서버 개발',
      ],
      skillKeywords: ['C#', 'WPF', 'Telerik', 'Oracle'],
    },
  ],
};

export default experience;
