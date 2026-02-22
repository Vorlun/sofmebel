import { Hero } from '@/components/sections/home/Hero';
import { AboutSection } from '@/components/sections/home/AboutSection';
import { CollectionsSection } from '@/components/sections/home/CollectionsSection';
import { WhyChooseUsSection } from '@/components/sections/home/WhyChooseUsSection';
import { ShowroomSection } from '@/components/sections/home/ShowroomSection';
import { CTASection } from '@/components/sections/home/CTASection';

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <Hero />
      <AboutSection />
      <CollectionsSection />
      <WhyChooseUsSection />
      <ShowroomSection />
      <CTASection />
    </div>
  );
}