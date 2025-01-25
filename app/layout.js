import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/Component/Header";
import Marquee from "./Component/Marquee";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // title: "𝗶𝗺𝗮𝗽 | 𝗼𝘂𝘁𝗹𝗼𝘂𝗱",
  // title: "𝗢𝘂𝘁𝗹𝗼𝘂𝗱",
  // title: "𝗢𝗨𝗧𝗟𝗢𝗨𝗗",
  title: "Outloud",
  description: "Outloud platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} w-full relative h-full bg-[#f8f8f8]  ${geistMono.variable} antialiased`}
      >
        <Marquee />
        <Header />
        {children}
      </body>
    </html>
  );
}
