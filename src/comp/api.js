import axios from 'axios'
import env from '../env';
const api = {
    spendings:() => axios.get(env()+"spendings"),
    monthlySpending:() => axios.get(env()+"spendings/monthly"),
    dailySpending:() => axios.get(env()+"spendings/daily"),
    yearlySpending:() => axios.get(env()+"spendings/yearly"),



    addSpending:(spending) => axios.put(env()+"spendings", spending)
}

export default api;