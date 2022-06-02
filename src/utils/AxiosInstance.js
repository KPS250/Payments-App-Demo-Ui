import axios from 'axios';
import {setLoading, setErrorConfig} from '../modules/commons/Actions';
import {AppConfig} from '../config/AppConfig';
import {environment} from '../config/EnvConfig';
import Store from './Store';
import DeviceInfo from 'react-native-device-info';
import { getUserSession } from './LocalStorage';
import { setSession } from '../modules/login/Actions';

const {dispatch} = Store;

let axiosInstance = axios.create({
  baseURL: AppConfig[environment].baseUrl,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': DeviceInfo.getBundleId(),
  },
  //validateStatus: status => status === 200 || status === 201,
});

axiosInstance.interceptors.request.use(
   async config =>  {
    const session = await getUserSession();
    dispatch(setLoading(true));
    dispatch(setSession(session))
    console.log('AxiosInstance-1', session);
   // console.log('AxiosInstance-2', Store.getState().homeReducer.session);
    if (session) {
      config.headers.Authorization = session.token;
    } else {
      //config.headers.Authorization = await getAuthToken();
    }
    console.log('CONFIG', config);
    return config;
  },
  error => {
    console.log(error);
    dispatch(setLoading(false));
    return Promise.reject(error);
  },
);

const UNAUTHORIZED = 401;
const API_ERROR = 500;
const NETWORK_ERROR = 'Network Error';


axiosInstance.interceptors.response.use(
  response => {
    dispatch(setLoading(false));
    //console.log(response);
    return response;
  },
  function (error) {
    console.log(error);
    if (error.code === 'ECONNABORTED') {
      dispatch(setErrorConfig(true));
    } else if (error.message === NETWORK_ERROR) {
      dispatch(setErrorConfig(true));
    } else if (error.response.status === API_ERROR) {
      dispatch(setErrorConfig(true));
    } else if (error.response.status === UNAUTHORIZED) {
      dispatch(setErrorConfig(true));
    } else {
      dispatch(setErrorConfig(true));
    }
  },
);

export default axiosInstance;
