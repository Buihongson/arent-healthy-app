import React from 'react';

const AchievementRate = () => {
  return (
    <div
      className="min-w-[540px] min-h-[316px] bg-cover col-span-1"
      style={{ backgroundImage: `url('/assets/images/main_photo.jpg')` }}
    >
      <div className="flex justify-center items-center h-full">
        <div className="relative w-[181px] h-[181px]">
          <div className="arc arc_start"></div>
          <div className="arc arc_end"></div>
          <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
            <span className="text-white text-[18px] font-inter_sans pr-1 text-shadow">
              05/21
            </span>
            <span className="text-white text-[25px] font-inter_sans text-shadow">
              75%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementRate;
