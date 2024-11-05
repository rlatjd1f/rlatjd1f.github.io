import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '온프레미스 기반의 솔루션을 클라우드 기반으로 변경하는 프로젝트를 진행하며 Java와 Spring Boot로 백엔드 서버를 개발하고, Kubernetes 에 대한 경험을 쌓으면서 Docker 에 익숙해졌으며, 컨테이너화와 마이크로서비스 아키텍처에 대한 이해도가 높아졌습니다.',
    '클라우드의 전반적인 모니터링 시스템을 구축을 오픈소스로 진행하면서 Prometheus, Grafana, Loki, Jaeger등 다양한 오픈소스 도구들을 사용하면서 오픈소스 활용 능력이 향상되었습니다.',
    '팀 프로젝트, 개인 프로젝트를 진행하면서 에러요소에 대한 해결이나 중요한 개념들은 블로그에 내용을 정리하고 있습니다. 배운 내용에 대해 글을 작성하는 습관은 단순히 상황을 해결하는 상황에만 그치지않고 한번더 학습하게 되면서 성장하게 된다고 생각합니다.',
    '항상 새로운 기술에 대한 관심이 많고, 새로운 기술을 배우는 것에 대한 두려움이 없습니다. 새로운 기술을 배우는 것은 어렵지만, 배운 기술을 활용하여 문제를 해결하는 것은 즐겁고, 성취감을 느낍니다.',
  ],
  sign: 'KSR',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
