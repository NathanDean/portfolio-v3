import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from '@/components/sections/HeroSection';
import OverviewSection from '@/components/sections/overview/OverviewSection';
import ProjectSection from '@/components/sections/projects/ProjectSection';

export default async function Home() {
  return (
    <>
      <HeroSection />

      <OverviewSection />

      <ProjectSection />

      <AboutSection />

      <ContactSection />
    </>
  );
}
