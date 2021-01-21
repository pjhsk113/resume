import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '주니어 개발자로서 웹 백엔드에 대한 다양한 경험을 쌓고 있습니다. Java, SpringBoot, Vue.js, Vuex, TypeScript 등을 사용한 프로젝트 수행 경험이 있으며 확장성과 유지 보수에 좋은 클린코드 작성과 객체 지향에 관심이 많습니다.',
    'Java와 백엔드 기술을 공부하고 공유하는 것을 좋아합니다. 문서화 역량을 키우고 개발에 관련된 지식을 공유하기 위해 기술 블로그를 운영하고 있습니다. 또한, 평소에 공부하는 관성을 유지하고자 개인 저장소에 일일 커밋을 실천하고 있습니다.',
    '다른 사람들에게 좋은 자극을 줄 수 있는 개발자로 성장하기 위해 꾸준히 노력하고 있습니다. 개발 커뮤니티 활동, 온/오프라인 스터디 활동 외에도 개발 서적과 온라인 강의를 통해 꾸준히 학습하는 습관을 기르고있습니다.',
  ],
  sign: 'Jangho Park',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
