import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '한성대학교',
      subTitle: '전자정보공학과 졸업',
      startedAt: '2012-03',
      endedAt: '2018-02',
    },
    {
      title: '대동세무 고등학교',
      subTitle: '회계과 졸업',
      startedAt: '2009-03',
      endedAt: '2012-02',
    },
  ],
};

export default education;
