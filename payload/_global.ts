import favicon from '../asset/favicon.ico';
import previewImage from '../asset/32737230.png';
import { IGlobal } from '../component/common/IGlobal';

const title = 'RESUME: Jangho Park';
const description = 'This is a simple web resume.';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'OpenGraph Image Sample.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Park',
        lastName: 'Jangho',
        username: 'Jangduk',
        gender: 'male',
      },
    },
  },
};
