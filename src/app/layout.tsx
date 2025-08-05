import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../components/Navigation";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "NTiH",
  description: "NEW TRENDS in HOUSING - Inovativní řešení pro moderní bydlení.",
  keywords: "bydlení, inovace, trendy, housing, moderní architektura, NTiH",
  icons: {
    icon: [
      {
        url: '/favicon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon.png', 
        sizes: '16x16',
        type: 'image/png',
      }
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          <Navigation />
          <main className="relative z-10">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
