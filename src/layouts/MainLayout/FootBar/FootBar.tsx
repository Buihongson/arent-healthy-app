import React from 'react';
import { Link } from 'react-router-dom';
import { IFootBar } from 'types';

const FootBarItems: IFootBar[] = [
  { name: '会員登録', path: '#' },
  { name: '運営会社', path: '#' },
  { name: '利用規約', path: '#' },
  { name: '個人情報の取扱について', path: '#' },
  { name: '特定商取引法に基づく表記', path: '#' },
  { name: 'お問い合わせ', path: '#' },
];

const FootBar = () => {
  return (
    <div className="bg-[#414141] min-h-[128px]">
      <div className="px-[160px] p-14 flex">
        {FootBarItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="text-white mr-[44px] font-noto_sans text-[11px] cursor-pointer hover:opacity-75"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FootBar;
