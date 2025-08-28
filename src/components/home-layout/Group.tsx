import Image from 'next/image';
import React from 'react';

const Group = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[32px] justify-center md:justify-between items-center md:items-end py-[3rem] md:py-[8rem] md:px-[70px]">
      <div className="flex flex-col justify-center items-center gap-[14px] md:gap-[60px] max-w-[316px] md:max-w-[655px]">
        <p className="text-center md:text-left text-[25px] md:text-[50px] 2xl:text-[70px]  font-[700]">
          “We group people by actual vibe, not just
          <br className="block md:hidden" /> whos nearby.”
        </p>
        <p className="text-[10px] md:text-[20px] 2xl:text-[30px] font-[500] text-center md:text-left">
          We don’t think chemistry comes from geography. That’s why your matches
          are based on your world, your energy, and your rhythm.
        </p>
      </div>

      <div className="flex flex-col justify-between items-center gap-[0.6rem]">
        <div className="flex gap-[7px]  md:gap-[1rem]">
          <div className="w-[104px] md:w-[199px] 2xl:w-[299px] h-[144px] md:h-[290px] 2xl:h-[390px] rounded-[4px] relative overflow-hidden">
            <Image
              src={'/images/group1.jpg'}
              alt="pnyweb"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 w-full h-[10%] bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </div>
          <div className="w-[104px] md:w-[199px] 2xl:w-[299px] h-[144px] md:h-[290px] 2xl:h-[390px] rounded-[4px] relative overflow-hidden">
            <Image
              src={'/images/group2.jpg'}
              alt="pnyweb"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 w-full h-[10%] bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </div>
          <div className="w-[104px] md:w-[199px] 2xl:w-[299px] h-[144px] md:h-[290px] 2xl:h-[390px] rounded-[4px] relative overflow-hidden">
            <Image
              src={'/images/group3.jpg'}
              alt="pnyweb"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 w-full h-[10%] bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </div>
        </div>

        <p className="text-[15px] md:text-[30px] 2xl:text-[40px]">
          Pick your vibe, don’t look back.
        </p>
      </div>
    </div>
  );
};

export default Group;
