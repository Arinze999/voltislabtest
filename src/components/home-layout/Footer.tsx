import Image from 'next/image';
import React from 'react';
import { GlobeEuropeAfrica } from '../icons/Globe';

const Footer = () => {
  return (
    <div className="bg-white text-black rounded-[10px] md:rounded-[29px] m-3 flex flex-col md:flex-row-reverse md:justify-between md:items-end md:py-7">
      <div className="p-4 pt-7 flex flex-col gap-4">
        <p className="text-[20px] font-[700] md:hidden">
          From Awkward to Effortless. <br /> No More “Hey.”
        </p>
        <button className="border border-[#9E9E9E] md:hidden max-w-[187px] h-[35px] text-[10px] font-[500] rounded-[42px]">
          Subscribe to our Newsletter
        </button>
        <div className="relative w-full md:w-[384px] h-[375px] md:h-[452px] overflow-hidden rounded-[10px] md:rounded-[22px]">
          <Image
            src={'/images/sea.jpg'}
            alt="pnyweb"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex w-full gap-4 md:gap-10 items-end md:flex-col-reverse">
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="w-[100px] h-[29px] md:w-[180px] md:h-[52px] relative">
              <Image
                src={'/images/appvolt.png'}
                alt="pnyweb"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="w-[100px] h-[29px] md:w-[180px] md:h-[52px] relative">
              <Image
                src={'/images/playvolt.png'}
                alt="pnyweb"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <button className="border flex items-center justify-around border-[#9E9E9E] w-[90%] md:w-full max-w-[287px] md:max-w-none h-[35px] md:h-[55px] text-[10px] md:text-[14px] font-[500] rounded-[42px]">
            <GlobeEuropeAfrica /> English (United Kingdom) <span> ⌄ </span>
          </button>
        </div>
      </div>

      <div className="flex md:flex-col justify-between md:justify-start p-4 gap-4 md:gap-7">
        <p className="text-[70px] hidden md:block font-[700] max-w-[586px]">
          From Awkward to Effortless. <br /> No More “Hey.”
        </p>
        <button className="border hidden md:block border-[#9E9E9E] max-w-[316px] h-[55px] text-[20px] font-[500] rounded-[42px]">
          Subscribe to our Newsletter
        </button>
        <div className="flex w-full justify-between gap-4 max-w-[369px]">
          <ul className="text-[10px] md:text-[20px] font-[700] flex flex-col gap-3">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Cookie Policy</li>
          </ul>
          <ul className="text-[10px] md:text-[20px] font-[700] flex flex-col gap-3">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
