import React from 'react';
import ScrollButton from 'components/ScrollButton';
import Navbar from 'layouts/MainLayout/Navbar';
import FootBar from './FootBar';

interface IMainLayout {
  children?: React.Component;
}

const MainLayout = ({ children }: IMainLayout) => {
  return (
    <div>
      <Navbar />
      <main>
        <>{children}</>
      </main>
      <ScrollButton />
      <FootBar />
    </div>
  );
};

export default MainLayout;
