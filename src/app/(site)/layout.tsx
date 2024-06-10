import { CustomCursor, SmoothLayout } from '@/components';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../../_styles/globals.scss';

const uberMove = localFont({
  src: [
    {
      path: '../../../public/fonts/UberMoveBold.otf',
      weight: '700',
    },
    {
      path: '../../../public/fonts/UberMoveMedium.otf',
      weight: '400',
    },
  ],
  variable: '--font-uber-move',
});

export const metadata: Metadata = {
  title: 'Eucalyptus card',
  description: 'Eucalyptus card',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={uberMove.variable}>
        <CustomCursor />
        <SmoothLayout>{children}</SmoothLayout>
      </body>
    </html>
  );
}
