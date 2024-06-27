import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";


const msSansSerif = localFont({
  src: "../public/MS-Sans-Serif.ttf",
  display: 'swap'
})
export const metadata: Metadata = {
  title: "Windows 95",
  description: "windows 95 based web portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={msSansSerif.className}>{children}</body>
    </html>
  );
}
