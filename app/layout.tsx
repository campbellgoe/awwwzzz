import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Awwwzzz (music playlist)",
  description: "Awwwzzz is a playlist by Noface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}<footer>Made by <a href="mailto:george.campbell@massless.ltd">george.campbell@massless.ltd</a> in 2024</footer></body>
      
    </html>
  );
}
