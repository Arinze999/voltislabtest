import Awkward from '@/components/home-layout/Awkward';
import Dating from '@/components/home-layout/Dating';
import Download from '@/components/home-layout/Download';
import Footer from '@/components/home-layout/Footer';
import From from '@/components/home-layout/From';
import Group from '@/components/home-layout/Group';
import Hero from '@/components/home-layout/Hero';
import Ponytail from '@/components/home-layout/Ponytail';

export default function Home() {
  return (
    <div className="mt-[50px] md:mt-[73px]">
      <Download />
      <Hero />
      <Dating />
      <Group />
      <Awkward />
      <Ponytail />
      <From />
      <Footer />
      <div className="flex w-full justify-center p-3">
        <p className="text-[#424242] text-[10px] md:text-[16px]">
          © 2025 Voltis Labs LTD.
        </p>
      </div>
    </div>
  );
}
