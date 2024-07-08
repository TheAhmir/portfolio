import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../nav/nav.js"
import React from "react";
import Media from "./global_components/media";
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahmir Postell",
  description: "Data Science Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <ClerkProvider appearance={{
        elements: {
          footer: "hidden",
        },
      }}>
      <body className={inter.className}>
        <div className="nav">
          <Nav />
        </div>
        <div className="children">
          {children}
        </div>
        <Media />
      </body>
      </ClerkProvider>
    </html>
  );
}
