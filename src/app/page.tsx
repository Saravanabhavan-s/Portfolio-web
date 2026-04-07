import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Work } from '@/components/sections/Work';
import { Technologies } from '@/components/sections/Technologies';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { SectionDivider } from '@/components/shared/SectionDivider';

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Work />
      <SectionDivider />
      <Technologies />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Contact />
      <Footer />
    </main>
  );
}
