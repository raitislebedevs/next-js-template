import { USERINFO } from '../constants/services';
import CoreServices from './coreServices';

class UserInfoServices extends CoreServices {}

export default new UserInfoServices(USERINFO.BASE);
