import axios from 'axios'
import env from '../env';
const api = {
    spendings:() => axios.get(env()+"spand/spendings"),
    monthlySpending:() => axios.get(env()+"spand/monthly"),
    dailySpending:() => axios.get(env()+"spand/daily"),
    yearlySpending:() => axios.get(env()+"spand/yearly"),



    addSpending:(spending) => axios.put(env()+"spand/spendings", spending)
}

export default api;