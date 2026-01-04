import React from 'react';

interface NavLinkProps {
  className?: string;
  title: string;
  text: React.ReactNode;
}

export default function NavLink({ className = '', title, text }: NavLinkProps) {
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

  return (
    <a
      key={title}
      className={`text-xl ${className}`}
      href={`#${title}`}
      onClick={(e) => {
        if (typeof window !== 'undefined' && window.location.pathname === '/') {
          e.preventDefault();
        }
        scrollToSection(title);
      }}
    >
      {text}
    </a>
  );
}
