import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageTransition from '@/components/PageTransition';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Best Spoken English Course in India | English Speakers',
  description: 'Join the best spoken English and IELTS coaching platform in India. Learn English fluently with expert trainers and live practice sessions.',
  keywords: 'Spoken English course India, Learn English online, IELTS coaching India, English speaking training',
  other: {
    designer: '5xFuture',
    developer: '5xFuture',
  },
  icons: {
    icon: '/images/English Speakers logo.png',
    shortcut: '/images/English Speakers logo.png',
    apple: '/images/English Speakers logo.png',
  },
  openGraph: {
    title: 'Best Spoken English Course in India | English Speakers',
    description: 'Join the best spoken English and IELTS coaching platform in India. Learn English fluently with expert trainers and live practice sessions.',
    url: 'https://englishspeakers.in',
    siteName: 'English Speakers',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} bg-[#050505] text-white antialiased font-sans flex flex-col min-h-screen selection:bg-blue-500/30 selection:text-blue-200`} suppressHydrationWarning>
        <Navbar />
        <main className="flex-1"><PageTransition>{children}</PageTransition></main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
