import Image from 'next/image';
import React from 'react';

const From = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[1rem] pb-[2rem] px-[1rem] md:px-[70px]">
      <div>
        {' '}
        <div className="relative w-full xl:w-[1191px] h-[196px] md:h-[612px] overflow-hidden rounded-[2px] md:rounded-[29px]">
          <Image
            src={'/images/voltisdate.jpg'}
            alt="pnyweb"
            fill
            className="object-cover"
            priority
          />
          <div className="bg-black/30 absolute w-full h-full flex flex-col gap-7 justify-end p-4">
            <p className="text-[20px] lg:text-[70px] font-[700]">
              From Awkward to <br /> Effortless.
            </p>
            <p className="text-[10px] lg:text-[30px] font-[500] max-w-[614px]">
              We’re here to break the ice, build confidence, and help you skip
              the weird small talk. PONY helps you start strong, with shared
              interests, better prompts, and zero pressure.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[1rem] md:flex-1">
        {' '}
        <div className="relative w-full h-[170px] md:h-[295px] overflow-hidden rounded-[2px] md:rounded-[29px]">
          <Image
            src={'/images/sea.jpg'}
            alt="pnyweb"
            fill
            className="object-cover"
            priority
          />
        </div>{' '}
        <div className="relative w-full h-[170px] md:h-[295px] overflow-hidden rounded-[2px] md:rounded-[29px]">
          <Image
            src={'/images/sea2.jpg'}
            alt="pnyweb"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default From;
