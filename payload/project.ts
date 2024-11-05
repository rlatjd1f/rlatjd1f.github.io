import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '콜센터 데이터 처리 서버 유지보수 및 개선',
      startedAt: '2020-02',
      where: 'Bridgetec',
      descriptions: [
        {
          content:
            '콜센터 시스템에서 수집된 원천 데이터를 RDBMS, Redis 데이터로 가공하여 웹 UI에서 통계, 모니터링을 볼수있도록 C++ 기반의 백엔드 서버를 유지보수 및 개발',
        },
        {
          content:
            '대량의 통계용 콜데이터를 지연 없이 처리하기 위해 단건 처리방식의 레거시 로직을 벌크 처리 방식으로 개선하여 RDBMS 데이터 입력 속도를 향상 시킴',
        },
        {
          content:
            'C++기반의 기존 백엔드 서버의 로직 개선과 유지보수성 향상을 위해 Spring Boot 프레임워크 기반의 Java 백엔드 서버로 재개발 하는 작업을 책임지고 진행하여 제품화에 성공',
        },
      ],
    },
    {
      title: '콜센터 시스템 클라우드화 프로젝트 진행',
      startedAt: '2021-06',
      endedAt: '2022-12',
      where: 'Bridgetec',
      descriptions: [
        {
          content:
            'Spring Boot 기반으로 대량의 통계데이터를 Kafka와 연동하는 SSE 백엔드 서버를 개발 및 클라우드에 상용화',
        },
        {
          content:
            'NCP KMS에 연동하여 데이터 암복호화 서비스를 제공하는 백엔드 서버를 개발',
        },
        {
          content:
            'Prometheus, Grafana, Loki, node-exporter등 오픈소스를 활용하여 클라우드 전반적인 모니터링 시스템을 구축',
        },
      ],
    },
    {
      title: '경찰청 교통사고 분석 프로그램 개발',
      startedAt: '2019-01',
      endedAt: '2020-02',
      where: 'Neighbor System',
      descriptions: [
        {
          content:
            'C# WPF 활용하여 각 지방청의 교통사고 보고서를 통일된 양식으로 작성할 수 있는 운영 단말 개발',
        },
        {
          content:
            '경찰청에서 이를 분석하여 DB에 저장 및 통계 관리를 할 수 있는 시스템을 구축',
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
      where: 'Neighbor System',
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
        {
          content:
            'Achieved significant improvements in system performance and resource management.',
          weight: 'MEDIUM',
          descriptions: [
            { content: '30% improvement in system resource efficiency' },
            { content: 'Job Scheduler Refactor and Optimization' },
          ],
        },
      ],
    },
  ],
};

export default project;
