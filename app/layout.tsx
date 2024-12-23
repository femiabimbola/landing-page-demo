import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoFont = Roboto({
  weight: ['100','300', '500', '900'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "A Demo landing Page",
  description: "designed by Femi Abimbola",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${robotoFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
