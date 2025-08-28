import Image from 'next/image';
import React from 'react';

const Dating = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-[11px] md:gap-[35px]">
      <div className="bg-white text-black w-full h-[397px] md:h-[678px] flex flex-col gap-[33px] pb-[17px] justify-end items-center md:rounded-tl-[30px] md:rounded-bl-[30px]">
        <p className="text-[25px] md:text-[70px] font-[700] text-center">
          Dating on <br className="md:hidden" /> PONY
        </p>
        <p className="text-[14px] md:text-[23px] text-center max-w-[304px] md:max-w-[800px] font-[700]">
          In our community, dating isn’t about swiping endlessly. We believe the
          strongest relationships begin with shared passions - whether that’s
          music, food, pets, fitness, or films. When you join, you select your
          core interests, and we <span className="text-[#F25656]">match</span>{' '}
          you with people who vibe with the same.
        </p>
        <div className="hidden md:flex justify-center items-center gap-[24px] pb-[40px]">
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
      </div>
      <div className="relative w-full h-[397px] md:h-[678px] overflow-hidden md:rounded-tr-[30px] md:rounded-br-[30px]">
        <Image
          src={'/images/voltiscouple2.jpg'}
          alt="pnyweb"
          fill
          className="object-cover scale-[1.1] md:scale-none"
          priority
        />
      </div>
    </div>
  );
};

export default Dating;
