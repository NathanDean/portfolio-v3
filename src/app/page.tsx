import AboutSection from '@/components/AboutSection';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectSection from '@/components/ProjectSection';

export default async function Home() {
  return (
    <>
      <HeroSection />

      <ProjectSection />

      <AboutSection />
    </>
  );
}
