import Cookies from 'universal-cookie';
import { addMonths } from 'date-fns';

import { COOKIE_KEY } from 'shared/constants/common';

const cookies = new Cookies();

export const CookiesStorage = {
  getCookieData(key: string) {
    return cookies.get(key);
  },
  setCookieData(key: string, data: string) {
    const expires = addMonths(new Date(), 1);
    return cookies.set(key, data, { expires, path: '/' });
  },
  clearCookieData(key: string) {
    return cookies.remove(key, { path: '/' });
  },
  getAccessToken() {
    return cookies.get(COOKIE_KEY.AccessToken);
  },
  isAuthenticated() {
    const isAuthenticated = cookies.get(COOKIE_KEY.IsAuthenticated);
    return !!isAuthenticated;
  },
  clearSession() {
    this.clearCookieData(COOKIE_KEY.AccessToken);
    this.clearCookieData(COOKIE_KEY.UserInfo);
    this.clearCookieData(COOKIE_KEY.IsAuthenticated);
  },
};
