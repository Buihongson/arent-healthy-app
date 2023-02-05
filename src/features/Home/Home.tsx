import React from 'react';
import News from './components/News';
import Recommended from './components/Recommended';

const Home = () => {
  return (
    <div className="mx-[160px] my-[64px]">
      <Recommended />
      <News />
    </div>
  );
};

export default Home;
