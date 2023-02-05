import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
      </div>
    </nav>
  );
};

export default Navbar;
