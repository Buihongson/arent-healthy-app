import React from 'react';
import { Navigate } from 'react-router';

import { PATH_NAME } from 'shared/constants/routes';
import { CookiesStorage } from 'shared/utils/cookie-storage';

interface IGuestGuard {
  children?: React.ReactNode;
}

const GuestGuard = ({ children }: IGuestGuard) => {
  const isAuth = CookiesStorage.isAuthenticated();

  if (isAuth) return <Navigate to={PATH_NAME.Home} replace={true} />;

  return <>{children}</>;
};

export default GuestGuard;
