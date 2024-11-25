// import localFont from 'next/font/local';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
