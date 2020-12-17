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
            { content: '검색 및 필터 기능 공통 모듈 개발' },
            {
              content: '모니터링 기능 개발 참여',
              descriptions: [
                { content: '동기화 이력, 애플리케이션 동작 이력, 시스템 오류 이력 등 이력 관리 API 개발' },
                { content: '미확인 알람 기능 구현' },
                { content: '동기화 및 활성화 API 개발' },
              ],
            },
            {
              content: 'RDBMS 데이터 수집 개발 참여',
              descriptions: [
                { content: '쿼리 결과를 PointValue 데이터 형태로 가공' },
                { content: 'I18n을 활용한 다국어 메시지 처리' },
                { content: 'executeBatch를 통한 쿼리 일괄 처리의 안정성 개선' },
                { content: 'RDBMS Connection 테스트 기능 구현' },
              ],
            },
            {
              content: '비정형 데이터 수집 개발',
              descriptions: [
                { content: '비정형 데이터 수집 방법 리서치 담당' },
                { content: 'LogStash 구문 분석 기술을 손쉽게 사용할 수 있는 활용 방안 아이디어 채택' },
              ],
            },
          ],
        },
        {
          content: 'FrontEnd',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Vue.js를 활용한 SPA 개발' },
            { content: '운영 화면 컴포넌트 개발' },
            { content: '프론트엔드 백엔드 통신간 데이터 암/복호화 기능 구현' },
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
        { content: '챗봇 API 서버와의 통신간 암/복호화 구현' },
        { content: 'Vue.js, Vutify를 사용하여 컴포넌트 개발' },
        { content: 'Vuex를 이용한 상태관리 및 API 개발' },
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
            { content: 'Spring Security를 이용한 인증 기능 개발' },
            { content: 'OTP URL 응답 데이터 암호화 API 개발' },
            { content: '발급 이력 로깅 및 승인 API 개발' },
          ],
        },
        { content: 'Swagger를 도입하여 API 문서 자동화' },
        { content: '설계 및 소프트웨어 스펙 선정 과정 등을 경험' },
        { content: 'Java8 활용을 통한 모던 자바 지식 습득' },
        { content: '기능 추가에 따른 확장성의 중요성을 느낌' },
      ],
    },
  ],
};

export default project;
