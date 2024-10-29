import type { Metadata } from "next";
import "./globals.css";

import { DM_Sans } from "next/font/google";
import Navbar from "../../pages/Navbar";
import Footer from "../../pages/Footer";

const dmSans = DM_Sans({
  weight: ['400', '500', '700'], 
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Gyanesh Vishwakarma | Portfolio",
  description: "Portfolio of Gyanesh Vishwakarma, a Web Developer with expertise in building high-performance, user-focused applications using Next.js, React, and Tailwind CSS.",
  keywords: "Gyanesh Vishwakarma, Web Developer, Portfolio, Next.js, React, Tailwind CSS",
  
  twitter: {
    card: "summary_large_image",
    site: "@https://x.com/Gyaneshz", 
    creator: "@https://x.com/Gyaneshz",
    title: "Gyanesh Vishwakarma | Portfolio",
    description: "Explore the professional portfolio of Gyanesh Vishwakarma, showcasing web development expertise in Next.js and React.",
   
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={dmSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
