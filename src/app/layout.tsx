import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Header from "@/components/layout/Header";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "New Christian Faith Ministry",
    template: "%s | New Christian Faith Ministry",
  },
  description:
    "New Christian Faith Ministry — The Word is true from the beginning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header />

        {children}
      </body>
    </html>
  );
}