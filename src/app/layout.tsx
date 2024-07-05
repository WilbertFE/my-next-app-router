"use client";

// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
// import { useState } from "react";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const disableNavbar = ["/login", "/register"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [state, setState] = useState(0);
  const pathName = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        {!disableNavbar.includes(pathName) && <Navbar />}
        {/* <div>Layout {state}</div> */}
        {/* <button onClick={() => setState(state + 1)}>Klik</button> */}
        {children}
      </body>
    </html>
  );
}
