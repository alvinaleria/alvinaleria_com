import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Arvo, Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});

const arvo = Arvo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-arvo',
});

export const metadata: Metadata = {
  title: "Alvin Aleria - Creative Developer Portfolio",
  description: "Filipino freelance creative developer with a keen interest in FE/BE development and UI animations.",
  keywords: ['portfolio', 'nextjs', 'seo'],
  openGraph: {
    title: 'Alvin Aleria - Creative Developer Portfolio',
    description: 'Filipino freelance creative developer with a keen interest in FE/BE development and UI animations.',
    images: ['https://alvinaleria.com/images/logo.png'], // Path to your Open Graph image
    url: 'https://alvinaleria.com/',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alvin Aleria - Creative Developer Portfolio',
    description: 'Filipino freelance creative developer with a keen interest in FE/BE development and UI animations.',
    images: ['https://alvinaleria.com/images/logo.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${arvo.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
