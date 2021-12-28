import CoreServices from './coreServices';
import axios from 'axios';
import { LANGUAGES } from '../constants/services';

class LanguageService extends CoreServices {
  async LOCAL() {
    try {
      const { data } = await axios.get('https://geolocation-db.com/json/');
      return data;
    } catch (error) {
      return { error: this.getErrorMessage(error) };
    }
  }
}

export default new LanguageService(LANGUAGES.BASE);
