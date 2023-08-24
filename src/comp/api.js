import axios from 'axios'
import env from '../env';

axios.interceptors.request.use(
    function(config) {
      // Do something before request is sent
      config.withCredentials = true;
      return config;
    },
    function(error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const api = {
    spendings:() => axios.get(env()+"spend/spendings"),
    monthlySpending:() => axios.get(env()+"spend/monthly"),
    dailySpending:() => axios.get(env()+"spend/daily"),
    weeklySpending:() => axios.get(env()+"spend/weekly"),
    yearlySpending:() => axios.get(env()+"spend/yearly"),



    addSpending:(spending) => axios.put(env()+"spend/spendings", spending)
}

export default api;