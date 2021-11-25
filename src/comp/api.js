import axios from 'axios'
const api = {
    spendings:() => axios.get("https://api.yaz-fr.com/spendings"),
    addSpending:(spending) => axios.put("https://api.yaz-fr.com/spendings", spending)
}

export default api;