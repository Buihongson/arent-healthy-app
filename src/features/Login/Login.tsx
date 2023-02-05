import React from 'react';
import { useNavigate } from 'react-router-dom';
import { COOKIE_KEY } from 'shared/constants/common';
import { PATH_NAME } from 'shared/constants/routes';
import { CookiesStorage } from 'shared/utils/cookie-storage';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-10 flex items-center justify-center">
      <button
        className="background-linear-300 min-w-[296px] min-h-[56px] text-white text-[18px] font-noto_sans rounded"
        onClick={() => {
          CookiesStorage.setCookieData(COOKIE_KEY.IsAuthenticated, 'true');
          navigate(PATH_NAME.TopPage, { replace: true });
        }}
      >
        Login to Healthy
      </button>
    </div>
  );
};

export default Login;
