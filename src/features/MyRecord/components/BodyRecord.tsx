import React, { useState } from 'react';
import classNames from 'classnames';
import Chart from 'components/Chart';

const ChartFilter = [
  { label: '年', value: 'year' },
  { label: '月', value: 'month' },
  { label: '週', value: 'week' },
  { label: '日', value: 'day' },
];

const BodyRecord = React.forwardRef<HTMLDivElement>((_, ref) => {
  const [filterValue, setFilterValue] = useState<string>('day');

  return (
    <div
      ref={ref}
      className="my-exercise bg-[#414141] py-[24px] px-[16px] h-[304px] overflow-hidden mb-[56px]"
    >
      <div className="text-white flex items-center font-inter_sans">
        <div className="w-[95px] text-[15px]">BODY RECORD</div>
        <div className="text-[22px]">2021.05.21</div>
      </div>
      <div className="min-h-[180px]">
        <Chart />
      </div>
      <div className="flex mt-4">
        {ChartFilter.map((item, index) => (
          <button
            key={index}
            className={classNames(
              'w-14 h-6 mr-4 rounded-[11px] text-[15px] font-noto_sans',
              {
                'bg-white text-primary-300': filterValue !== item.value,
                'text-white bg-primary-300': filterValue === item.value,
              }
            )}
            onClick={() => {
              setFilterValue(item.value);
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
});

BodyRecord.displayName = 'BodyRecord';

export default BodyRecord;
