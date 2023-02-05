import axios from 'axios';
import humps from 'humps';

import { CookiesStorage } from 'shared/utils/cookie-storage';
import { COOKIE_KEY } from 'shared/constants/common';
import { PATH_NAME } from 'shared/constants/routes';

const STATUS_CODE = {
  OK: 200,
  NOT_MODIFIED: 304,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOTALLOWED: 405,
  UNPROCESSABLE_ENTITY: 422,
  LOCKED: 423,
  BAD_GATEWAY: 502,
  GATEWAY_TIMEOUT: 504,
  INTERNAL_SERVER_ERROR: 500,
};

export const request = axios.create({
  baseURL: 'API_URL',
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  },
});

request.interceptors.request.use(
  config => {
    const newConfig = { ...config };
    const accessToken = CookiesStorage.getAccessToken();

    if (accessToken) {
      newConfig.headers.Authorization = `Bearer ${accessToken}`;
    }
    if (config.params) {
      newConfig.params = humps.decamelizeKeys(config.params);
    }
    if (config.data) {
      newConfig.data = humps.decamelizeKeys(config.data);
    }

    return newConfig;
  },
  error => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  response => {
    return humps.camelizeKeys(response.data);
  },
  error => {
    const errorResponse = error?.response;

    switch (errorResponse.status) {
      case STATUS_CODE.UNAUTHORIZED:
        CookiesStorage.clearCookieData(COOKIE_KEY.AccessToken);
        CookiesStorage.clearSession();
        window.location.href = PATH_NAME.Login;

        return Promise.reject(errorResponse?.data);
      case STATUS_CODE.BAD_REQUEST:
      case STATUS_CODE.NOT_FOUND:
      case STATUS_CODE.METHOD_NOTALLOWED:
      case STATUS_CODE.UNPROCESSABLE_ENTITY:
      case STATUS_CODE.LOCKED:
      case STATUS_CODE.INTERNAL_SERVER_ERROR:
      case STATUS_CODE.GATEWAY_TIMEOUT:
      case STATUS_CODE.BAD_GATEWAY:
      default: {
        return Promise.reject(errorResponse?.data);
      }
    }
  }
);
