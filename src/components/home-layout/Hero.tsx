import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="w-full h-[489px] md:h-[922px] relative mb-[11px] md:mb-[26px]">
      <div className="relative z-1 h-full w-full flex flex-col gap-[86px] md:gap-[62px] justify-center items-center">
        <p className="flex flex-col text-center justify-center items-center text-[25px] md:text-[120px] font-[700]">
          Interests Make Connections{' '}
          <span className="text-[14px] md:text-[50px] font-[500]">
            Start with Substance
          </span>
        </p>

        <button className="bg-white w-[109px] md:w-[188px] md:h-[57px] h-[32px] text-black rounded-[30px] text-[15px] md:text-[20px] font-[500]">
          Download
        </button>
      </div>
      <Image
        src={'/images/voltishero2.jpg'}
        alt="pnyweb"
        fill
        className="object-cover z-0"
        priority
      />
    </div>
  );
};

export default Hero;
