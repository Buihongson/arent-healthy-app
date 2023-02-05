import React from 'react';
import { Navigate } from 'react-router';

import { PATH_NAME } from 'shared/constants/routes';
import { CookiesStorage } from 'shared/utils/cookie-storage';

interface IAuthGuard {
  children?: React.Component;
}

const AuthGuard = ({ children }: IAuthGuard) => {
  const isAuth = CookiesStorage.isAuthenticated();

  if (!isAuth) return <Navigate to={PATH_NAME.Login} replace={true} />;

  return <>{children}</>;
};

export default AuthGuard;
