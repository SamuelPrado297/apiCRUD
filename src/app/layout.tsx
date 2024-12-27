import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CRUD com Next.js",
  description: "CRUD com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
