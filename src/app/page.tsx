import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import HeroSection from '@/components/HeroSection';
import ProjectSection from '@/components/ProjectSection';

export default async function Home() {
  return (
    <>
      <HeroSection />

      <ProjectSection />

      <AboutSection />

      <ContactSection />
    </>
  );
}
