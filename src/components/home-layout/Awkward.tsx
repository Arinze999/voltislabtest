import Image from 'next/image';
import React from 'react';

const Awkward = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[11px] md:gap-[35px]">
      <div className="bg-white text-black w-full h-[397px] md:h-[678px] flex flex-col gap-[33px] justify-end items-center md:items-start md:pl-[53px] 2xl:pl-[113px] pb-[2rem] md:pb-[4rem]">
        <p className="text-[25px] md:text-[70px] font-[700] text-center md:text-left">
          No Awkward Starts. Just Real Connections.
        </p>
        <p className="text-[14px] md:text-[23px] text-center md:text-left max-w-[304px] md:max-w-[800px] font-[700]">
          We remove the awkward, so you can focus on what really matters: <br />
          <b>Building Something Real.</b>
        </p>
      </div>
      <div className="relative w-full md:w-[587px] 2xl:w-[787px] h-[397px] md:h-[678px] overflow-hidden">
        <Image
          src={'/images/beachcouple.jpg'}
          alt="pnyweb"
          fill
          className="object-cover scale-[1.1] md:scale-none"
          priority
        />
      </div>
    </div>
  );
};

export default Awkward;
