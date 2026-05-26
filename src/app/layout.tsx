import type { Metadata } from 'next';
import { Manrope, Sora, Unbounded } from 'next/font/google';
import SiteNav from '@/components/SiteNav';
import './globals.css';

const display = Sora({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
});

const sans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
});

const hero = Unbounded({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-hero',
});

export const metadata: Metadata = {
  title: 'Orbita | AI operations for chat-first teams',
  description: 'Orbita turns chats, voice notes, PDFs, and images into tracked work for real-world teams.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} ${hero.variable}`}>
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
