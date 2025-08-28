import Image from 'next/image';
import React from 'react';

const Ponytail = () => {
  return (
    <div className="relative flex flex-col md:flex-row gap-[32px] justify-center md:justify-between items-center md:items-end py-[3rem] md:py-[16rem] md:px-[70px]">
      {/* Left block */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-[2rem]">
        <div className="w-[143px] h-[156px] md:w-[512px] md:h-[574px] relative border-2 border-[#ED1B24] rounded-[20px] overflow-hidden">
          <Image
            src={'/images/ponytale.jpg'}
            alt="pnyweb"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col justify-center items-center md:items-start gap-[2rem] md:gap-[1rem]">
          <p className="text-[25px] md:text-[60px] font-[700] md:ml-[3rem]">
            PONY- <span className="text-[#ED1B24]">tale</span>
          </p>
          <div>
            <p className="border-2 text-[10px] md:text-[23px] font-[500] h-[76px] md:h-[235px] border-[#ED1B24] p-4 bg-white text-black w-[95%] max-w-[626px] rounded-tr-[10px] rounded-br-[10px]">
              I was matched with someone who loves Formula 1 and 70s rock. We
              went to a Queen’s tribute concert for our first date. Pony makes
              it easy to{' '}
              <span className="text-[#ED1B24]">skip the awkward</span> small
              talk and jump into stuff we both care about.
            </p>
          </div>
        </div>
      </div>

      {/* Map image: normal flow on mobile; absolute, bigger, and behind on md+ */}
      <div
        className="
      relative w-full h-[236px] overflow-hidden 
      md:absolute md:-z-10 md:pointer-events-none
      md:right-0 md:top-1/2 md:-translate-y-1/2
      md:w-[820px] md:h-[820px]
      2xl:w-[1000px] 2xl:h-[1000px]
    "
        aria-hidden
      >
        <Image
          src={'/images/mapweb.png'}
          alt="pnyweb"
          fill
          className="object-contain md:object-cover scale-[0.9]"
          priority
        />
      </div>
    </div>
  );
};

export default Ponytail;
