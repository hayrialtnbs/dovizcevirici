import axios from 'axios';
import { APİ_URL, } from '../Utils/ApiUrls';

class MainServices {
    async getCurrencyList() {
        return await axios.get(APİ_URL);
    }
}
export default new MainServices()