import axios from 'axios'
import env from '../env';
const api = {
    spendings:() => axios.get(env()+"spend/spendings"),
    monthlySpending:() => axios.get(env()+"spend/monthly"),
    dailySpending:() => axios.get(env()+"spend/daily"),
    weeklySpending:() => axios.get(env()+"spend/weekly"),
    yearlySpending:() => axios.get(env()+"spend/yearly"),



    addSpending:(spending) => axios.put(env()+"spend/spendings", spending)
}

export default api;