import React from 'react';
import { format } from 'date-fns';
import { NewsList } from 'shared/constants/mock';

const News = () => {
  return (
    <div className="mb-[64px]">
      <div className="grid grid-cols-4 gap-2">
        {NewsList?.map((item, index) => (
          <div key={index}>
            <div className="relative bg-cover min-w-[234px] h-[234px] cursor-pointer">
              <img
                src={item.image}
                className="w-full h-full"
                alt={`${index}-logo`}
              />
              <span className="absolute bottom-0 left-0 bg-primary-300 text-white text-[15px] font-inter_sans p-[7px]">{`${format(
                new Date(item.createdAt),
                'yyyy.mm.dd HH:mm'
              )}`}</span>
            </div>
            <div className="block-ellipsis-2 text-[15px] font-noto_sans text-[#414141] py-2 cursor-pointer">
              {item.desc}
            </div>
            <div>
              {item.tags.map((tagItem, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-primary-400 text-[12px] font-noto_sans mr-2 cursor-pointer"
                >{`#${tagItem}`}</span>
              ))}
            </div>
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

export default News;
