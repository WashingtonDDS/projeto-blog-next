import { Header } from "@/components/blog/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CubosFin",
  description: "CubosFin - Plataforma de Finanças",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
