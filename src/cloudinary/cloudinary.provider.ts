import { ConfigOptions, v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): ConfigOptions => {
    return v2.config({
      cloud_name: 'dh73snhfc',
      api_key: '615926527442474',
      api_secret: 'Gqqv3y7lQWsnzIruhvvsLvaWaQw',
    });
  },
};