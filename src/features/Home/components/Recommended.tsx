import React from 'react';
import { RecommendedData } from 'shared/constants/mock';

const Recommended = () => {
  return (
    <div className="flex justify-between mb-[64px]">
      {RecommendedData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center bg-[#2E2E2E] w-[216px] h-[144px]"
        >
          <div className="text-primary-300 text-[22px] font-inter_sans text-center">
            {item.name}
          </div>
          <div className="border-[1px] w-[56px] my-[10px]" />
          <div className="text-white text-[18px] font-noto_sans text-center">
            {item.desc}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommended;
