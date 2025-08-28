import Awkward from '@/components/home-layout/Awkward';
import Dating from '@/components/home-layout/Dating';
import Download from '@/components/home-layout/Download';
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
    </div>
  );
}
