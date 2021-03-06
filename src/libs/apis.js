// @flow
import axios from 'axios';
import { Base64 } from './base64';

const BASE_URL = 'https://api.github.com';

export const login = (username: string, password: string, callback: Function): void => {
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

export const commitsList = (repoName: string, page: number, callback: Function): void => {
  const repoUrl = `${BASE_URL}/repos/${repoName}/commits`;
  axios({
    method: 'get',
    url: repoUrl,
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
    params: {
      page,
      per_page: 30,
    },
  })
    .then(res => callback(false, res.data))
    .catch(err => callback(true, err.response));
};
