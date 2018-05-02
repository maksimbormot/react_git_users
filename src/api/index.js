import axios from 'axios';

const API_PREFIX = 'https://api.github.com';
const NUMBER_OF_PROFILES_TO_DISPLAY = 24;

export function searchUsersByName(str) {
  const params = {
    q: str,
    per_page: NUMBER_OF_PROFILES_TO_DISPLAY,
  };
  return axios.get(`${API_PREFIX}/search/users`, {params});
}

export function getUserInfo(name) {
  return axios.get(`${API_PREFIX}/users/${name}`);
}

export function getUserRepos(name) {
  return axios.get(`${API_PREFIX}/users/${name}/repos`);
}

