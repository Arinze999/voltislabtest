import React from 'react';
import CompanyLogo from '../CompanyLogo';
import Image from 'next/image';
import Navbar from '../nav/Navbar';

const Header = () => {
  return (
    <div className="h-[50px] bg-black md:h-[73px] flex justify-between items-center px-[11px] md:px-[54px] z-20 fixed top-0 left-0 right-0 overflow-hidden">
      {/* Background Image */}
      <div className="absolute w-full h-full">
        <Image
          src={'/images/headerbg.png'}
          alt="pnyweb"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Foreground Content */}
      <div className="flex justify-between items-center w-full relative z-10">
        <CompanyLogo />

        <Navbar />
      </div>
    </div>
  );
};

export default Header;
