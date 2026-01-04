import React from 'react';

interface TextContainerProps {
  children: React.ReactNode;
  className: string;
}

export default function TextContainer({
  children,
  className = '',
}: TextContainerProps) {
  return <div className={`w-3/4 sm:w-5/8 ${className}`}>{children}</div>;
}
