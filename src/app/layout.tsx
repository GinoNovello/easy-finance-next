import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Easy Finance",
  description: "Maneja tus finanzas de una forma sencilla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark min-h-100dvh overflow-x-hidden">
      <body suppressHydrationWarning={true} className={inter.className}>
      {children}
      </body>
    </html>
  );
}
