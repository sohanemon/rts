import './globals.css';

import localFont from 'next/font/local';
import Footer from '~/components/Footer';
import Navbar from '~/components/Navbar';

const nova = localFont({
  src: '../fonts/Regulator Nova.otf',
  display: 'swap',
  variable: '--nova',
});
const roc = localFont({
  src: '../fonts/roc grotesk.ttf',
  display: 'swap',
  variable: '--roc',
});

export const metadata = {
  title: 'Retain to Sustain',
  description:
    'A Comprehensive Closed-loop Approach to Sustainability & Circular Economy',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${nova.className} ${nova.variable} ${roc.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
