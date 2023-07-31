import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Providers from '@/components/Providers';
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });
export const metadata: Metadata = {
  title: 'Formula 1 Rankings',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
