'use client';

import { useState, useEffect } from 'react';
import HomeLink from './HomeLink';
import MenuButton from './MenuButton';
import NavLink from './NavLink';

export default function Header() {
  // Mobile menu toggling
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMenuOpaque, setIsMenuOpaque] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuVisible(true);

      const timer = setTimeout(() => {
        setIsMenuOpaque(true);
      }, 10);

      return () => clearTimeout(timer);
    } else {
      setIsMenuOpaque(false);

      const timer = setTimeout(() => {
        setIsMenuVisible(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Menu sections
  const sections = [
    { text: 'at a glance', title: 'overview' },
    { text: 'projects', title: 'projects' },
    { text: 'about me', title: 'about' },
    { text: 'get in touch', title: 'contact' },
  ];

  // Tailwind utility strings
  const navBackgroundStyles =
    'absolute inset-0 h-24 backdrop-blur-sm [mask-image:linear-gradient(to_bottom,black_0%,black_30%,rgba(0,0,0,0.8)_60%,transparent_100%)] pointer-events-none';
  const navTextContainerStyles = 'relative';
  const mobileMenuStyles = `${isMenuOpaque ? 'opacity-100' : 'opacity-0'} lg:hidden fixed inset-0 w-full h-screen p-6 transition-opacity duration-300 ease-in-out z-0 flex justify-center items-center bg-[var(--background)] text-[var(--foreground)]`;

  return (
    <header className="sticky top-0 left-0 right-0 z-10 py-4 bg-transparent">
      <div className={navBackgroundStyles} />

      <div className={navTextContainerStyles}>
        <div className="px-6 flex justify-between items-center">
          <HomeLink />

          {/* Full nav menu */}

          <nav className="hidden lg:flex space-x-10">
            {sections.map((section) => (
              <NavLink
                key={section.text}
                className="text-xl"
                title={section.title}
                text={section.text}
              />
            ))}
          </nav>

          {/* Mobile menu button */}

          <MenuButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </div>
      </div>

      {/* Mobile dropdown menu */}

      {isMenuVisible && (
        <div data-testid="mobile-menu" className={mobileMenuStyles}>
          <div className="fixed top-0 left-0 right-0 px-6 py-4">
            <div className="flex justify-between items-center bg">
              <HomeLink />

              <MenuButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
            </div>
          </div>

          <nav className="flex flex-col justify-center h-1/2 space-y-6">
            {sections.map((section) => (
              <NavLink
                key={section.text}
                className="text-xl text-center"
                title={section.title}
                text={section.text}
                setIsMenuOpen={setIsMenuOpen}
              />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
