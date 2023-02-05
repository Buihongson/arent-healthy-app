import React from 'react';
import Navbar from './components/Navbar';

interface IAuthLayoutProps {
  children?: React.Component;
}

const AuthLayout = ({ children }: IAuthLayoutProps) => {
  return (
    <div>
      <Navbar />
      <main>
        <>{children}</>
      </main>
    </div>
  );
};

export default AuthLayout;
