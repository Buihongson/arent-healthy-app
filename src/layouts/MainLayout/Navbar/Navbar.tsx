import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { PATH_NAME } from 'shared/constants/routes';
import { INavbar } from 'types';
import MenuDropdown from 'components/Dropdowns';
import { CookiesStorage } from 'shared/utils/cookie-storage';
import Badge from 'components/Badge';

const NavbarItems: INavbar[] = [
  {
    logo: '/assets/images/logo/icon_memo.svg',
    name: '自分の記録',
    path: PATH_NAME.MyRecord,
  },
  {
    logo: '/assets/images/logo/icon_challenge.svg',
    name: 'チャレンジ',
    path: PATH_NAME.Challenge,
  },
  {
    logo: '/assets/images/logo/icon_memo.svg',
    name: 'お知らせ',
    path: PATH_NAME.Memo,
    badge: 1,
  },
];

const Navbar = () => {
  const isAuthenticated = CookiesStorage.isAuthenticated();
  const navigate = useNavigate();

  return (
    <nav className="w-full z-10 bg-primary md:flex-row md:flex-nowrap md:justify-start flex items-center px-[160px] py-[19px] bg-[#414141]">
      <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
        <Link
          className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
          to={'/'}
        >
          <img
            src="/assets/images/logo/logo.svg"
            className="w-[109px] h-[35px]"
            alt="logo"
          />
        </Link>
        <div className="flex">
          {NavbarItems.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="flex flow-row justify-center items-center mr-[32px] cursor-pointer"
            >
              {({ isActive }) => (
                <>
                  <Badge
                    icon={item.logo}
                    badgeNumber={item?.badge}
                    className="w-8 h-8"
                  />
                  <span
                    className={classNames(
                      'text-white text-[16px] hover:opacity-75 font-noto_sans',
                      {
                        'text-primary-400': isActive,
                        'text-white': !isActive,
                      }
                    )}
                  >
                    {item.name}
                  </span>
                </>
              )}
            </NavLink>
          ))}
          {isAuthenticated && (
            <div
              className="flex flow-row justify-center items-center mr-[32px] cursor-pointer"
              onClick={() => {
                CookiesStorage.clearSession();
                navigate(PATH_NAME.Home);
              }}
            >
              <span
                className={classNames(
                  'text-white text-[16px] hover:opacity-75 font-inter_sans'
                )}
              >
                Logout
              </span>
            </div>
          )}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <MenuDropdown />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
