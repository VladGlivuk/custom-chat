/* eslint-disable no-underscore-dangle */
import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_BASE_URL
};

const API = axios.create(axiosConfig);

API.interceptors.request.use(
  (req) => req,
  (err) => {
    console.log('err: ', err);
  }
);

API.interceptors.response.use(
  (res) => res,
  async (error) => {
    console.log('error: ', error);
  }
);

export default API;
