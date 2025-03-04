import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '백엔드 개발자로서 Spring Boot와 C++를 기반으로 한 다양한 시스템 개발 및 유지보수 경험을 보유하고 있습니다. 콜센터 데이터 처리 서버의 유지보수와 리팩토링 과정에서 리눅스 기반 서버 운영 경험과 문제 해결 능력을 쌓으며 시스템 안정성과 효율성을 개선했습니다.',
    'Kafka, Elasticsearch, Prometheus 등 오픈소스 기술을 활용한 클라우드 모니터링 시스템과 멀티 테넌트 환경의 데이터 관리 시스템을 구축하며 대규모 데이터 처리와 모니터링 자동화 역량을 확보했습니다. 또한, NCP KMS와 Vault Transit을 활용한 보안성 높은 데이터키 관리 시스템 개발 경험을 통해 클라우드 환경에서의 보안 설계와 구현 능력을 강화했습니다.',
    '이러한 경험을 바탕으로 안정적이고 확장 가능한 백엔드 시스템을 개발하며, 문제 해결과 개선을 위한 지속적인 학습과 도전에 임하고자 합니다.',
  ],
  sign: 'KSR',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
