import { USERS } from '../constants/services';
import CoreServices from './coreServices';


class UserServices extends CoreServices {}

export default new UserServices(USERS.BASE);
