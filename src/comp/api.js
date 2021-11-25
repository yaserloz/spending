import axios from 'axios'
import env from '../env';
const api = {
    spendings:() => axios.get(env()+"spendings"),
    addSpending:(spending) => axios.put(env()+"spendings", spending)
}

export default api;