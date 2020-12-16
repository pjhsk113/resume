import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '국립 한경대학교',
      subTitle: '전기전자제어 공학과 - 제어트랙 3.3 / 4.5 졸업',
      startedAt: '2012-03',
      endedAt: '2018-08',
    },
    {
      title: '신구대학교',
      subTitle: '컴퓨터 멀티미디어 공학과 4.4 / 4.5 졸업',
      startedAt: '2010-03',
      endedAt: '2012-02',
    },
    {
      title: '여의도 고등학교',
      subTitle: '',
      startedAt: '2007-03',
      endedAt: '2010-02',
    },
  ],
};

export default education;
