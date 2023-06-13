import './globals.css';
import { Roboto } from 'next/font/google';

import Navbar from '@/components/Navbar';
import 'react-slideshow-image/dist/styles.css';

const roboto = Roboto({
  weight: ['400', '500', '900'],
  style: ['normal'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'AM Basketball',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <link rel="icon" href="/images/favicon.ico" />
      <body className={`${roboto.className} bg-black`}>
        <main className="h-screen screen flex flex-col items-center p-4 pt-0 lg:px-16 2xl:px-32">
          <Navbar />
          <div className="w-full h-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
