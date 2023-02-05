import React from 'react';

const MealBadgeItems = [
  {
    name: 'Morning',
    logo: '/assets/images/logo/icon_knife.svg',
  },
  {
    name: 'Lunch',
    logo: '/assets/images/logo/icon_knife.svg',
  },
  {
    name: 'Dinner',
    logo: '/assets/images/logo/icon_knife.svg',
  },
  {
    name: 'Snack',
    logo: '/assets/images/logo/icon_cup.svg',
  },
];

const MealBadge = () => {
  return (
    <div className="flex items-center justify-center my-[25px]">
      {MealBadgeItems?.map((item, index) => (
        <div
          key={index}
          className="hexagon flex justify-center items-center flex-col mx-[42px]"
        >
          <img
            src={item.logo}
            className="w-[56px] h-[56px]"
            alt={`${item.name}-logo`}
          />
          <span className="text-white font-inter_sans text-[20px]">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MealBadge;
