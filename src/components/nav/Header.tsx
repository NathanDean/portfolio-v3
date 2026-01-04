'use client';

import { useState, useEffect } from 'react';
import FullNavMenu from './FullNavMenu';
import MobileNavMenu from './MobileNavMenu';
import HomeLink from './HomeLink';
import ToggleMenuButton from './ToggleMenuButton';
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

  return (
    <header className="sticky top-0 left-0 right-0 z-10 py-4 bg-transparent">
      <div className={navBackgroundStyles} />

      <div className={navTextContainerStyles}>
        <div className="px-6 flex justify-between items-center">
          <HomeLink />
          <FullNavMenu sections={sections} />
          <ToggleMenuButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </div>
      </div>

      {/* Mobile dropdown menu */}

      {isMenuVisible && (
        <MobileNavMenu
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
          isMenuOpaque={isMenuOpaque}
          setIsMenuOpen={setIsMenuOpen}
          sections={sections}
        />
      )}
    </header>
  );
}
