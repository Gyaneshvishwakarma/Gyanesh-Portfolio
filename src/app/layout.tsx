import type { Metadata } from "next";
import "./globals.css";

import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  weight: ['400', '500', '700'], // Adjust as needed
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Gyanesh Vishwakarma | Portfolio",
  description: "Gyanesh Vishwakarma | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={dmSans.className}
      >
        {children}
      </body>
    </html>
  );
}
