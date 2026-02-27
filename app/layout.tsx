import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", // Opcional, mas ajuda a padronizar
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto", // Criamos a variável CSS aqui
});

export const metadata: Metadata = {
  title: "Tempero Web",
  description: "Site oficial Tempero Web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={roboto.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
