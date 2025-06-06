import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nathan Dean: MSc Computer Science & AI w/ comms & creative industries experience',
  description: 'Nathan Dean: An MSc Computer Science and AI student with a background in communications and the creative industries',
};

const outfit = Outfit({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.className}>
      <body>{children}</body>
    </html>
  );
}
