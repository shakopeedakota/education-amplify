import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/lib/AuthContext";
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: "SMSC Education",
  description: "An app for filling out education forms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/mji8hbh.css" />
        <script src="https://kit.fontawesome.com/2cc0989af0.js" crossOrigin="anonymous" async={true}></script>
      </head>
      <body className="antialiased flex flex-col">
        <AuthProvider>
          <Toaster position="bottom-center" />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
