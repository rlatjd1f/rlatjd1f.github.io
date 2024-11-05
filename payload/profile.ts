import { faEnvelope, faPhone, faBlog } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/sample_tux.png';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김성리',
    small: '(Kim Sung Ri)',
  },
  contact: [
    {
      title: 'dl290382@gmail.com',
      link: 'mailto:dl290382@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://ksr930.tistory.com/',
      link: 'https://ksr930.tistory.com/',
      icon: faBlog,
    },
  ],
  notice: {
    title: '연락은 이메일로 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
