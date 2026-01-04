import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/nav/Header';

export const metadata: Metadata = {
  title:
    'Nathan Dean: Computer Science + AI grad with a background in creative industries communications',
  description:
    'Nathan Dean: Computer Science + AI grad with a background in creative industries communications',
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
      <body>
        <Header />

        <div className="-mt-16">{children}</div>
      </body>
    </html>
  );
}
