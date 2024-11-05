import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '콜센터 데이터 처리 서버 유지보수 및 개선',
      startedAt: '2020-02',
      where: '브리지텍',
      descriptions: [
        {
          content: '콜 관련 데이터 처리 백엔드 서버 유지보수 및 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'C++ 기반의 콜 데이터 처리용 백엔드 서버 유지보수 및 개선' },
            { content: '웹 UI 에서 볼수 있도록 RDBMS, Redis 데이터 가공 통계 작업 개발/유지보수' },
          ],
        },
        {
          content: '통계데이터 처리용 백엔드 서버 성능 개선 및 벌크 처리 방식 도입',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '성능이 낮은 일부 고객사의 DB 서버에서 대용량 통계 데이터 처리 속도가 지연되는 문제를 개선하기 위해, 기존 백엔드 서버의 성능을 분석',
            },
            {
              content:
                'AS-IS 백엔드 서버의 파일 단위 통계 데이터 단건 처리 방식을, TO-BE 백엔드 서버에서 벌크 처리 방식으로 전환하여 성능을 개선',
            },
          ],
        },
        {
          content: '레거시 C++ 기반 백엔드를 Spring Boot & Java17 로 리팩토링',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기존 백엔드 서버의 리팩토링을 위해 서버의 주요 비즈니스 로직을 분석' },
            {
              content:
                '레거시 C++ 기반 백엔드 서버의 유지보수성 향상과 개선을 위해 Java 17 & Spring Boot 프레임워크를 활용하여 리팩토링 작업을 수행',
            },
            { content: '제품화를 위한 설치, 패키징 쉘 스크립트 구현 및 배포' },
          ],
        },
      ],
    },
    {
      title: '콜센터 시스템 클라우드화 프로젝트 진행',
      startedAt: '2021-06',
      endedAt: '2022-12',
      where: '브리지텍',
      descriptions: [
        {
          content: 'Kafka 연동하는 통계데이터, 장애로그 감시 처리용 SSE 백엔드 서버를 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Kafka 연동 SSE (Server-Sent Events) 기반의 데이터 전송 서버 개발' },
            { content: '장애로그 파싱을위해 각 팀 수십개의 컨테이너에 대한 통합 로그포맷 설정' },
          ],
        },
        {
          content: 'NCP KMS 연동 데이터 암복호화 서비스 제공 백엔드 서버 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'NCP KMS 데이터키의 주기적인 로테이션과 버전관리 기능 개발 ' },
            { content: '멀티 테넌트를 위한 테넌트별 데이터키 발급 및 관리를 위한 서비스 개발' },
          ],
        },
        {
          content: '오픈소스를 활용하여 클라우드 전반적인 모니터링 시스템을 구축',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Prometheus, Grafana, node-exporter, redis-exporter 등 오픈소스를 활용한 리소스 모니터링 시스템 구축',
            },
            {
              content:
                'Loki, Promtail, fluent-bit, Kafka 등 오픈소스를 활용한 로그수집 및 모니터링 시스템 구축',
            },
            {
              content:
                'Jaeger, Elasticsearch, Kibana 등 오픈소스를 활용한 트레이싱 및 로그 시각화 시스템 구축',
            },
          ],
        },
      ],
    },
    {
      title: '경찰청 교통사고 분석 프로그램 개발',
      startedAt: '2019-01',
      endedAt: '2020-02',
      where: '네이버 시스템',
      descriptions: [
        {
          content:
            'C# WPF 활용하여 각 지방청의 교통사고 보고서를 통일된 양식으로 작성할 수 있는 운영 단말 개발',
        },
        {
          content: '경찰청에서 이를 분석하여 DB에 저장 및 통계 관리를 할 수 있는 시스템을 구축',
        },
        {
          content:
            '교통사고 데이터의 통일성과 관리 용이성을 높여 사고 분석과 통계 처리 시간을 단축',
        },
      ],
    },
    {
      title: '고속도로 교통관리 시스템 구축 및 개선',
      startedAt: '2017-12',
      endedAt: '2018-12',
      where: '네이버 시스템',
      descriptions: [
        {
          content:
            '기존 델파이 시스템을 C# WPF (Telerik Library)로 재개발하여 고속도로 교통 관리 운영단말 개발',
        },
        {
          content:
            '민원 알람과 메일 전송을 위한 백엔드 서버를 개발하고, 교통량 측정 단말장비와의 통신 서버를 구축.',
        },
        {
          content:
            '시스템의 사용자 인터페이스를 개선하고, 효율적인 교통관리 기능을 제공하여 운영 효율성을 대폭 향상',
        },
      ],
    },
  ],
};

export default project;
