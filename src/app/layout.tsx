import { SmoothLayout } from '@/components';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const uberMove = localFont({
  src: [
    {
      path: '../../public/fonts/UberMoveBold.otf',
      weight: '700',
    },
    {
      path: '../../public/fonts/UberMoveMedium.otf',
      weight: '400',
    },
  ],
  variable: '--font-uber-move',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={uberMove.variable}>
        <SmoothLayout>{children}</SmoothLayout>
      </body>
    </html>
  );
}
