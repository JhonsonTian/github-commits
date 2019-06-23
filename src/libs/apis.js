import axios from 'axios';
import { Base64 } from './base64';


const BASE_URL = 'https://api.github.com';

export const login = (username, password, callback) => {
  const auth = Base64.encode(`${username}:${password}`);
  axios({
    method: 'get',
    url: BASE_URL,
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `Basic ${auth}`,
    },
  })
    .then(res => callback(false, res.data))
    .catch(err => callback(true, err.response));
};
