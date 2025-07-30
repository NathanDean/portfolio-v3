'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
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

  return (
    <header className="sticky top-0 left-0 right-0 z-10 py-4 bg-transparent">
      <div className="px-6 flex justify-between items-center">
        <Link
          className="logo"
          href="/#home"
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
          nathan dean
        </Link>

        {/* Full nav menu */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/#projects"
            onClick={(e) => {
              if (
                typeof window !== 'undefined' &&
                window.location.pathname === '/'
              ) {
                e.preventDefault();
              }
              scrollToSection('projects');
            }}
          >
            projects
          </Link>

          <Link
            href="/#about"
            onClick={(e) => {
              if (
                typeof window !== 'undefined' &&
                window.location.pathname === '/'
              ) {
                e.preventDefault();
              }
              scrollToSection('about');
            }}
          >
            about me
          </Link>

          <Link href="/blog">blog</Link>
        </nav>

        {/* Mobile menu button */}

        <button
          className="md:hidden"
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

      {/* Mobile dropdown menu */}

      {isMenuVisible && (
        <div
          data-testid="mobile-menu"
          className={`${isMenuOpaque ? 'opacity-100' : 'opacity-0'} md:hidden fixed inset-0 w-full h-screen p-6 transition-opacity duration-300 ease-in-out z-0 flex justify-center items-center bg-[var(--background)] text-[var(--foreground)]`}
        >
          <div className="fixed top-0 left-0 right-0 px-6 py-4">
            <div className="flex justify-between items-center bg">
              <Link
                href="/#home"
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
                nathan dean
              </Link>

              <button
                className="md:hidden"
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
            <Link
              href="/#projects"
              className="text-center"
              onClick={(e) => {
                if (
                  typeof window !== 'undefined' &&
                  window.location.pathname === '/'
                ) {
                  e.preventDefault();
                }
                scrollToSection('projects');
                setIsMenuOpen(false);
              }}
            >
              projects
            </Link>

            <Link
              href="/#about"
              className="text-center"
              onClick={(e) => {
                if (
                  typeof window !== 'undefined' &&
                  window.location.pathname === '/'
                ) {
                  e.preventDefault();
                }
                scrollToSection('about');
                setIsMenuOpen(false);
              }}
            >
              about me
            </Link>

            <Link
              href="/blog"
              className="text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              blog
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
