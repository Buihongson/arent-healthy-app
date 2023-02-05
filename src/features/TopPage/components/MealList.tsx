import React from 'react';
import { format } from 'date-fns';
import { MealListItems } from 'shared/constants/mock';

const MealList = () => {
  return (
    <div className="mx-[160px] mb-[64px]">
      <div className="grid grid-cols-4 gap-4">
        {MealListItems?.map((item, index) => (
          <div
            key={index}
            className="relative min-w-[234px] h-[234px] bg-cover"
          >
            <img
              src={item.image}
              className="w-full h-full"
              alt={`${item.type}-logo`}
            />
            <span className="absolute bottom-0 left-0 bg-primary-300 text-white text-[15px] font-inter_sans p-[7px]">{`${format(
              new Date(item.createdAt),
              'MM.dd'
            )}.${item.type}`}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center pt-[28px]">
        <button className="background-linear-300 min-w-[296px] min-h-[56px] text-white text-[18px] font-noto_sans rounded">
          記録をもっと見る
        </button>
      </div>
    </div>
  );
};

export default MealList;
