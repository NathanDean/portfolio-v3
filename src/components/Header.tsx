'use client';

import { useState, useEffect } from 'react';

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

  // Scrolling behaviour
  const scrollToSection = (sectionId: string) => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  };

  // Menu sections
  const sections = [
    { navText: 'at a glance', title: 'overview' },
    { navText: 'projects', title: 'projects' },
    { navText: 'about me', title: 'about' },
    { navText: 'get in touch', title: 'contact' },
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
          <a
            className="text-2xl"
            href="#home"
            onClick={(e) => {
              if (
                typeof window !== 'undefined' &&
                window.location.pathname === '/'
              ) {
                e.preventDefault();
              }
              scrollToSection('home');
            }}
          >
            <span className="sm:hidden">nd</span>
            <span className="hidden sm:inline-block">nathan dean</span>
          </a>

          {/* Full nav menu */}

          <nav className="hidden lg:flex space-x-10">
            {sections.map((section) => (
              <a
                key={section.title}
                className="text-xl"
                href={`#${section.title}`}
                onClick={(e) => {
                  if (
                    typeof window !== 'undefined' &&
                    window.location.pathname === '/'
                  ) {
                    e.preventDefault();
                  }
                  scrollToSection(section.title);
                }}
              >
                {section.navText}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}

          <button
            className="lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                // X icon when menu is open
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon when menu is closed
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}

      {isMenuVisible && (
        <div data-testid="mobile-menu" className={mobileMenuStyles}>
          <div className="fixed top-0 left-0 right-0 px-6 py-4">
            <div className="flex justify-between items-center bg">
              <a
                className="text-2xl"
                href="#home"
                onClick={(e) => {
                  if (
                    typeof window !== 'undefined' &&
                    window.location.pathname === '/'
                  ) {
                    e.preventDefault();
                  }
                  scrollToSection('home');
                  setIsMenuOpen(false);
                }}
              >
                <span className="sm:hidden">nd</span>
                <span className="hidden sm:inline-block">nathan dean</span>
              </a>

              <button
                className="lg:hidden"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    // X icon when menu is open
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    // Hamburger icon when menu is closed
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <nav className="flex flex-col justify-center h-1/2 space-y-6">
            {sections.map((section) => (
              <a
                key={section.title}
                className="text-xl text-center"
                href={`${section.title}`}
                onClick={(e) => {
                  if (
                    typeof window !== 'undefined' &&
                    window.location.pathname === '/'
                  ) {
                    e.preventDefault();
                  }
                  scrollToSection(section.title);
                  setIsMenuOpen(false);
                }}
              >
                {section.navText}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
