import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`${className} w-19/20 sm:w-7/8 md:w-1/2 bg-[var(--background)] text-[var(--foreground)] dark:border dark:border-gray-500 shadow-sm overflow-hidden`}
    >
      {children}
    </div>
  );
}
