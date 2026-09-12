import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pappa Rich Shoe Laundry | Premium Shoe Care in Calicut',
  description: 'Professional shoe cleaning, whitening & restoration services in Calicut. Expert care for every pair. Quick turnaround, eco-friendly products.',
  keywords: 'shoe laundry, shoe cleaning, shoe whitening, shoe restoration, Calicut, Kozhikode',
  authors: [{ name: 'Pappa Rich Shoe Laundry' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Pappa Rich Shoe Laundry',
    description: 'Professional shoe cleaning and restoration services',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75'>👟</text></svg>" />
      </head>
      <body className="bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
