import '@/styles/globals.scss';

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Navbar } from '@/components/navbar/navbar';

const montSerrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['300', '400', '600', '700'], 
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  title: "MKS sistemas",
  description: "Store ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montSerrat.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
