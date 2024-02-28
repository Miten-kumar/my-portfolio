import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundBoxesDemo } from "@/components/Shared/BackgroundBoxesDemo";


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
      <body className={inter.className}>
        < BackgroundBoxesDemo />
        {children}
      </body>
    </html>
  );
}
