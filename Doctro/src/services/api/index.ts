import axios from 'axios';
// import { BASE_URL } from '../constants';
import storage from 'utils/local-storage';
import {Platform} from 'react-native';
import {APP_API_URL} from 'utils/constants';

axios.interceptors.request.use(config => config);

const execute = async (
  path: any,
  method = 'GET',
  {
    params = {} as any,
    queries = {} as any,
    payloads = {} as any,
    headers = {} as any,
  } = {},
) => {
  const token = await storage.get('sessionToken');
  const base = APP_API_URL.replace(/~\/$/, '');
  const url = base + 'api/' + path;
  console.log('url--------->>', url);
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  if (!headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }
  headers.Platform = Platform.OS;

  if (!headers.Accept) {
    headers.Accept = 'application/json';
  }

  const options: any = {method, headers};

  if (method === 'POST' || method === 'PATCH' || method === 'PUT') {
    options.data = payloads;
  }

  if (queries) {
    options.params = queries;
  }
  __DEV__ && console.log({url, options});
  console.log({url, options});
  return await (
    await axios(url, options)
  ).data;
};

export default {
  get: (path: string, options: any) => execute(path, 'GET', options),
  post: (path: string, options: any) => execute(path, 'POST', options),
  patch: (path: string, options: any) => execute(path, 'PATCH', options),
  delete: (path: string, options: any) => execute(path, 'DELETE', options),
  put: (path: string, options: any) => execute(path, 'PUT', options),
};
