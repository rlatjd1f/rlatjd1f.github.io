import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '콜센터 시스템 클라우드화 프로젝트 개발 및 유지보수',
      startedAt: '2021-06',
      where: '브리지텍',
      descriptions: [
        {
          content: '실시간 모니터링 데이터 처리 SSE 백엔드 서버 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Kafka 특정 토픽에서 실시간 메시지를 컨슘하여 SSE(Server-Sent Events)를 활용한 실시간 데이터 스트리밍 서비스 구축',
            },
            {
              content:
                '클라이언트 요청 시 필요한 데이터만 파싱하여 전송하는 방식으로 불필요한 데이터 처리 최소화 및 성능 최적화',
            },
          ],
        },
        {
          content: 'KMS(Key Management System) 서비스 백엔드 서버 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'NCP(Naver Cloud Platform) KMS 연동을 통해 데이터키 암복호화 관리 백엔드 서버 개발',
            },
            {
              content:
                'KMS의 마스터키를 활용하여 테넌트별 암호화된 데이터키 생성 및 RDBMS 저장 기능 구현',
            },
            {
              content:
                '클라우드 테스트 환경에서는 HashiCorp Vault Transit 기능을 활용한 마스터키-데이터키 구조 적용',
            },
          ],
        },
        {
          content: '오픈소스를 활용하여 클라우드 전반적인 모니터링 시스템을 구축',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '다양한 오픈소스 툴(Prometheus, Grafana 등)을 활용하여 클라우드 인프라의 리소스 모니터링 시스템 구축',
            },
            {
              content:
                'Loki, Promtail, Fluent Bit, Kafka를 통한 로그 수집 및 중앙 집중형 모니터링 시스템 구현',
            },
            {
              content: '오픈소스 기반의 모니터링 솔루션 아키텍처 설계 및 최적화 경험 보유',
            },
            {
              content: '오픈소스를 활용한 운영 효율성 및 모니터링 자동화 역량 확보',
            },
          ],
        },
        {
          content: 'Elasticsearch 기반 멀티 테넌트 접속 이력 관리 백엔드 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Elasticsearch의 Index와 Alias 구조를 활용해 멀티 테넌트 환경을 설계 및 구현',
            },
            {
              content:
                '테넌트별 독립적 데이터 격리를 보장하는 Alias 관리 및 데이터 보존 정책 기반의 자동화된 주기적 삭제 기능 개발',
            },
            {
              content:
                '사용자 웹 접속 이력을 실시간으로 수집, 저장 및 빠른 검색이 가능한 백엔드 시스템 구축',
            },
          ],
        },
      ],
    },
    {
      title: '콜센터 데이터 처리 서버 유지보수 및 개선',
      startedAt: '2020-02',
      where: '브리지텍',
      descriptions: [
        {
          content: '콜 데이터 처리 백엔드 서버 유지보수 및 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'C++로 개발된 콜 데이터 처리 백엔드 서버 유지보수 및 개선' },
            {
              content:
                '프로세스 상태 감시, 콜 관련 모니터링 데이터 수집 및 가공, 콜 관련 통계데이터 수집 서버 개발과 유지보수 진행',
            },
          ],
        },
        {
          content: 'C++ 백엔드 서버의 Spring Boot(Java) 리팩토링',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '기존 C++ 코드의 복잡성과 기술 부채로 인해 유지보수가 어려웠던 시스템을 Java(Spring Boot)로 마이그레이션',
            },
            {
              content:
                'JVM 기반의 다양한 라이브러리(Spring, Hibernate 등)를 활용하여 개발 생산성 및 협업 효율성 증대',
            },
            {
              content: '메모리 관리(GC) 및 멀티스레딩 안정성을 확보하여 장애율 감소',
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
