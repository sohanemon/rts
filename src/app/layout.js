import { Navbar } from '~/components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Retain to Sustain',
  description:
    'A Comprehensive Closed-loop Approach to Sustainability & Circular Economy',
};

export default function RootLayout({ home }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {home}
      </body>
    </html>
  );
}
