import React from 'react';

interface NavLinkProps {
  className?: string;
  title: string;
  text: React.ReactNode;
  setIsMenuOpen?: (isOpen: boolean) => void;
}

export default function NavLink({
  className = '',
  title,
  text,
  setIsMenuOpen,
}: NavLinkProps) {
  return (
    <a
      key={title}
      className={`hover:text-white hover:drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] ${className}`}
      href={`#${title}`}
      onClick={() => {
        if (setIsMenuOpen) {
          setIsMenuOpen(false);
        }
      }}
    >
      {text}
    </a>
  );
}
