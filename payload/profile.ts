import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faBlogger } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/32737230.png';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '박 장 호',
    small: '(Jangho Park)',
  },
  contact: [
    {
      title: 'pjhsk113@naver.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: 'https://github.com',
      link: 'https://github.com/pjhsk113',
      icon: faGithub,
    },
    {
      link: 'https://jjingho.tistory.com/',
      icon: faBlogger,
    },
  ],
  notice: {
    title: '코드로 소통하고 싶은 개발자 박장호입니다.',
    icon: faBell,
  },
};

export default profile;
