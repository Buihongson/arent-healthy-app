import React from 'react';
import { format } from 'date-fns';
import { MyDiary as MyDiaryMock } from 'shared/constants/mock';

const MyDiary = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="my-exercise text-[#414141]">
      <div className="flex items-center font-inter_sans">
        <div className="text-[22px]">MY DIARY</div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {MyDiaryMock.map((item, index) => (
          <div
            key={index}
            className="min-w-[231px] h-[231px] p-4 mb-[12px] border-2 border-[#707070]"
          >
            <div className="text-[18px] font-inter_sans">
              {format(new Date(item.createdAt), 'yyyy.mm.dd')}
            </div>
            <div className="text-[18px] font-inter_sans">
              {format(new Date(item.createdAt), 'HH:mm')}
            </div>
            <div className="text-[12px] font-noto_sans block-ellipsis-8 pt-2">
              {item.content}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center pt-[28px]">
        <button className="background-linear-300 min-w-[296px] min-h-[56px] text-white text-[18px] font-noto_sans rounded">
          自分の日記をもっと見る
        </button>
      </div>
    </div>
  );
});

MyDiary.displayName = 'MyDiary';

export default MyDiary;
