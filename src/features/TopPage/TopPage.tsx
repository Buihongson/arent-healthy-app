import Chart from 'components/Chart';
import React from 'react';
import AchievementRate from './components/AchievementRate';
import MealBadge from './components/MealBadge';
import MealList from './components/MealList';

const TopPage = () => {
  return (
    <>
      <div className="grid grid-cols-3">
        <AchievementRate />
        <div className="bg-[#2E2E2E] col-span-2 px-8 py-4">
          <Chart />
        </div>
      </div>
      <MealBadge />
      <MealList />
    </>
  );
};

export default TopPage;
