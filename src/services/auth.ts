import { request } from 'shared/configs/request';
import { IAuthentication } from 'types';

export const login = (data: IAuthentication) =>
  request.post('/admins/login', data);
