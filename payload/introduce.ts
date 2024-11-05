import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '온프레미스 기반의 솔루션을 클라우드 기반으로 전환하는 프로젝트를 진행하면서, Java와 Spring Boot로 백엔드 서버를 개발하였습니다. 이 과정에서 Kubernetes에 대한 경험을 쌓고 Docker에 익숙해지며, 컨테이너화 및 마이크로서비스 아키텍처에 대한 이해도를 높였습니다.',
    '또한, 클라우드 전반의 모니터링 시스템을 오픈소스 도구를 활용하여 구축하는 프로젝트에 참여하면서 Prometheus, Grafana, Loki, Jaeger 등 다양한 오픈소스 툴의 활용 능력을 향상시켰습니다.',
    '팀 프로젝트와 개인 프로젝트를 진행하며 발생하는 에러 요소에 대한 해결책이나 중요한 개념들을 블로그에 정리하고 있습니다. 이처럼 배운 내용을 글로 작성하는 습관으로 단순한 문제 해결을 넘어, 다시 한번 학습하고 성장할 수 있는 시간으로 생각합니다.',
    '항상 새로운 기술에 대한 관심이 많으며, 배우는 것에 두려움이 없습니다. 새로운 기술은 익히기 어려울 수 있지만, 이를 활용하여 문제를 해결하는 과정에서 즐거움과 성취감을 느낍니다.',
  ],
  sign: 'KSR',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
