import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundBoxesDemo } from "@/components/Shared/BackgroundBoxesDemo";
import { GridSmallBackgroundDemo } from "@/components/Shared/DotBackgroundDemo";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animation",
  description: "Miten Patel - Full stack Developer ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <body className={inter.className}>
        <GridSmallBackgroundDemo />
        {children}
      </body>
    </html>
  );
}
