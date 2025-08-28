import Image from 'next/image';
import React from 'react';

const Download = () => {
  return (
    <div className="bg-white text-black px-[11px] md:px-[54px] h-[38px] md:h-[81px] flex flex-row-reverse md:flex-row md:justify-end items-center gap-[21px]">
      <p className="text-[20px] hidden md:block">Download Now</p>
      <div className="w-[100px] h-[29px] md:w-[180px] md:h-[52px] relative">
        <Image
          src={'/images/playvolt.png'}
          alt="pnyweb"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="w-[100px] h-[29px] md:w-[180px] md:h-[52px] relative">
        <Image
          src={'/images/appvolt.png'}
          alt="pnyweb"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default Download;
