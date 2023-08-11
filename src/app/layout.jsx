import './globals.css';

import BackToTop from '~/components/BackToTop';
import Footer from '~/components/Footer';
import Navbar from '~/components/Navbar';

export const metadata = {
  title: 'Retain to Sustain',
  description:
    'A Comprehensive Closed-loop Approach to Sustainability & Circular Economy',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='stylesheet' href='https://use.typekit.net/hjz7sjo.css' />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
