import React from 'react';

const ExerciseData = [
  { name: '家事全般（立位・軽い）', kcal: '26kcal', time: '10' },
  { name: '家事全般（立位・軽い）', kcal: '26kcal', time: '10' },
  { name: '家事全般（立位・軽い）', kcal: '26kcal', time: '10' },
  { name: '家事全般（立位・軽い）', kcal: '26kcal', time: '10' },
  { name: '家事全般（立位・軽い）', kcal: '26kcal', time: '10' },
  { name: '家事全般（立位・軽い）', kcal: '26kcal', time: '10' },
  { name: '家事全般（立位・軽い）', kcal: '26kcal', time: '10' },
  { name: '家事全般（立位・軽い）', kcal: '26kcal', time: '10' },
  { name: '家事全般（立位・軽い）', kcal: '26kcal', time: '10' },
  { name: '家事全般（立位・軽い）', kcal: '26kcal', time: '10' },
  { name: '家事全般（立位・軽い）', kcal: '26kcal', time: '10' },
  { name: '家事全般（立位・軽い）', kcal: '26kcal', time: '10' },
  { name: '家事全般（立位・軽い）', kcal: '26kcal', time: '10' },
  { name: '家事全般（立位・軽い）', kcal: '26kcal', time: '10' },
  { name: '家事全般（立位・軽い）', kcal: '26kcal', time: '10' },
  { name: '家事全般（立位・軽い）', kcal: '26kcal', time: '10' },
  { name: '家事全般（立位・軽い）', kcal: '26kcal', time: '10' },
  { name: '家事全般（立位・軽い）', kcal: '26kcal', time: '10' },
  { name: '家事全般（立位・軽い）', kcal: '26kcal', time: '10' },
];

const MyExercise = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="my-exercise bg-[#414141] py-[24px] px-[16px] h-[264px] overflow-hidden mb-[56px]"
    >
      <div className="text-white flex items-center font-inter_sans">
        <div className="w-[95px] text-[15px]">MY EXERCISE</div>
        <div className="text-[22px]">2021.05.21</div>
      </div>
      <div className="my-exercise__content max-h-[100%] overflow-auto pb-[24px]">
        <ul className="list-disc grid grid-cols-2 gap-2 text-white pb-[24px] px-[16px]">
          {ExerciseData.map((item, index) => (
            <li
              key={index}
              className="m-w-[416px] mr-[40px] border-b-[1px] border-[#777]"
            >
              <div className="flex justify-between">
                <div>
                  <div className="text-white text-[15px] font-noto_sans">
                    {item.name}
                  </div>
                  <div className="text-primary-300 text-[15px] font-inter_sans">
                    {item.kcal}
                  </div>
                </div>
                <div className="text-primary-300 text-[18px] font-inter_sans">{`${item.time} min`}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

MyExercise.displayName = 'MyExercise';

export default MyExercise;
