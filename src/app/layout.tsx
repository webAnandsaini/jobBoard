import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Job Board Application",
  description: "Created By Anand Saini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Header />
        {children}
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </body>
    </html>
  );
}
