import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./(components)/Nav";
import "./globals.css";
import AuthProvider from "./(components)/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "-Board",
  description: "-Board",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={`${inter.className} bg-gray-100`}>
          <Nav />
          <div>{children}</div>
        </body>
      </AuthProvider>
    </html>
  );
}
