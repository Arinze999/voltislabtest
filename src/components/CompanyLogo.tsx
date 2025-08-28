import Image from 'next/image';
import Link from 'next/link';

const CompanyLogo = () => {
  return (
    <Link href={'/'} className="flex justify-center items-center gap-[4px] md:gap-[13px]">
      <Image
        src={'/images/ponyweb.png'}
        alt="pnyweb"
        width={50}
        height={46}
        className="hidden md:block"
      />
      <Image
        src={'/images/ponymobile.png'}
        alt="pnyweb"
        width={27}
        height={26}
        className="block md:hidden"
      />
      <span className="text-[18px] md:text-[40px] font-[500]">PONY</span>
    </Link>
  );
};

export default CompanyLogo;
