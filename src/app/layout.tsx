import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Shared/Header/Header';
import { Footer } from '@/components/Shared/Footer/Footer';

export const metadata: Metadata = {
  title: 'CV | Denis Shmuratkin',
  description: `DialecticalLaw's CV`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
