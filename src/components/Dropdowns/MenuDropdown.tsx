import React, { useRef } from 'react';
import { createPopper } from '@popperjs/core';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { IMenuDropdown } from 'types';
import { PATH_NAME } from 'shared/constants/routes';

const MenuDropdownItems: IMenuDropdown[] = [
  { name: '自分の記録', path: PATH_NAME.MyRecord },
  { name: '体重グラフ', path: PATH_NAME.TopPage },
  { name: '目標', path: '#' },
  { name: '選択中のコース', path: '#' },
  { name: 'コラム一覧', path: PATH_NAME.Home },
  { name: '設定', path: '#' },
];

const MenuDropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = useRef<HTMLAnchorElement>(null);
  const popoverDropdownRef = useRef<HTMLDivElement>(null);

  const openDropdownPopover = () => {
    createPopper(
      btnDropdownRef.current as HTMLAnchorElement,
      popoverDropdownRef.current as HTMLDivElement,
      {
        placement: 'bottom-end',
      }
    );
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      {dropdownPopoverShow && (
        <div
          className="fixed w-screen h-screen top-0 left-0"
          id="overlay"
          onClick={closeDropdownPopover}
        />
      )}
      <a
        className="text-white block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={e => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <img
            alt="menu-logo"
            className="w-[32px] h-[32px]"
            src={
              dropdownPopoverShow
                ? '/assets/images/logo/icon_close.svg'
                : '/assets/images/logo/icon_menu.svg'
            }
          />
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={classNames('bg-[#777777] flex flex-col min-w-[280px] z-10', {
          block: dropdownPopoverShow,
          hidden: !dropdownPopoverShow,
        })}
      >
        {MenuDropdownItems.map((item, index) => (
          <>
            <Link
              key={index}
              to={item.path}
              className="text-[18px] text-white px-[32px] py-[23px] hover:opacity-75 font-noto_sans"
            >
              {item.name}
            </Link>
            <div className="w-full h-[1px] opacity-10 bg-white mix-blend-normal" />
            <div className="w-full h-[1px] opacity-25 bg-[#2E2E2E] mix-blend-normal" />
          </>
        ))}
      </div>
    </>
  );
};

export default MenuDropdown;
