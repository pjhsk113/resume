import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '빅데이터 수집 솔루션 BridgeX 개발',
      startedAt: '2020-05',
      where: '위엠비(WeMB)',
      descriptions: [
        { content: '대용량 데이터 수집/적재 솔루션 개발' },
        {
          content: 'BackEnd',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'API 개발',
              descriptions: [{ content: '화면 기능 별 API 개발' }],
            },
          ],
        },
        {
          content: 'FrontEnd',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Vue.js를 활용한 컴포넌트 개발' },
            { content: 'Vuex 상태 관리' },
            { content: 'scss를 활용한 UI/UX 개선' },
          ],
        },
      ],
    },
    {
      title: '라이선스 발급 이력 추적 백오피스 개발',
      startedAt: '2020-03',
      endedAt: '2020-05',
      where: '위엠비(WeMB)',
      descriptions: [
        {
          content:
            '라이선스 발급 승인, 이력 확인 등 라이선스 발급 관리자가 사용하는 어드민 플랫폼 개발',
        },
        { content: '기존 라이선스 발급 환경을 일원화하여 관리자 공수 감소' },
        { content: 'Vue.js, Vutify를 사용하여 컴포넌트 개발' },
        { content: 'Vuex를 이용한 상태관리 및 API 개발' },
        { content: 'Spring Security를 이용한 인증 기능 개발' },
        { content: '관리자 권한 별 Routing 기능 개발' },
        { content: 'JavaScript ES6와 함수형 프로그래밍에 대한 전반적인 역량 향상' },
      ],
    },
    {
      title: '라이선스 발급 챗봇',
      startedAt: '2020-02',
      endedAt: '2020-03',
      where: '위엠비(WeMB)',
      descriptions: [
        { content: '서드 파티 애플리케이션을 이용한 라이선스 발급 챗봇 개발' },
        {
          content: 'API Server',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Spring boot, Spring Data JPA를 사용하여 개발' },
            { content: '사용자 식별을 통한 라이선스 발급 제한 기능 개발' },
            { content: '발급 이력 로깅 및 승인 API 개발' },
          ],
        },
        { content: 'Swagger를 도입하여 API 문서 자동화' },
        { content: '설계 및 소프트웨어 스펙 선정 과정 등을 경험' },
      ],
    },
  ],
};

export default project;
