import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Shared/Header/Header';
import { Footer } from '@/components/Shared/Footer/Footer';
import { Analytics } from '@vercel/analytics/react';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { ThemeProvider } from '@/components/ThemeProvider/ThemeProvider';

export const metadata: Metadata = {
  title: 'CV | Denis Shmuratkin',
  description: `DialecticalLaw's CV`,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <div className="container">
              <div className="line" />
              <div className="line" />
              <div className="line" />
              <Header />
              <main className="main">{children}</main>
              <Footer />
            </div>
            <Analytics />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
