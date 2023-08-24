import React from 'react';
import List from './comp/List';
import axios from 'axios'

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

//   axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  // axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

function App() {
  return (
    <List />
  );
}

export default App;
