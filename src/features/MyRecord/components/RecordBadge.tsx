import React, { RefObject } from 'react';
import { RecordBadgeItems } from 'shared/constants/mock';

interface IRecordBadgeProps {
  bodyRecordRef?: RefObject<HTMLDivElement>;
  myExerciseRef?: RefObject<HTMLDivElement>;
  myDiaryRef?: RefObject<HTMLDivElement>;
}

const RecordBadge = ({
  bodyRecordRef,
  myExerciseRef,
  myDiaryRef,
}: IRecordBadgeProps) => {
  const onScrollToSection = (type: string) => {
    switch (type) {
      case 'body':
        bodyRecordRef?.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'exercise':
        myExerciseRef?.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'diary':
        myDiaryRef?.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex justify-between gap-3 mb-[56px]">
      {RecordBadgeItems?.map((item, index) => (
        <div
          key={index}
          className="relative flex flex-col bg-black w-[288px] max-w-[288px] h-[288px] border-[25px] border-primary-300 basis-2/6 cursor-pointer"
          onClick={() => {
            onScrollToSection(item.type);
          }}
        >
          <div
            className="flex flex-col h-full bg-cover items-center justify-center opacity-25"
            style={{
              backgroundImage: `url(${item.image})`,
              mixBlendMode: 'luminosity',
            }}
          />
          <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center">
            <div className="text-primary-300 font-inter_sans text-[25px] min-w-[240px]">
              {item.name}
            </div>
            <span className="inline-block bg-primary-400 px-2 py-1 text-white text-[14px] font-noto_sans w-[160px]">
              {item.desc}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecordBadge;
