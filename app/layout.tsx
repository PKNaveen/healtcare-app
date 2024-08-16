import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// add details in utils ts file
import {cn} from "@/lib/utils"
import React from "react";
import {ThemeProvider} from "next-themes";

const fontSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight:["200", "400", "500", "700"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Health Care",
  description: "An appointment management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
    <body
        className={cn(
            "min-h-screen bg-dark-300 font-sans antialiased",
            fontSans.variable
        )}
    >
    <ThemeProvider
        attribute="class"
        defaultTheme="dark"
    >
    {children}
    </ThemeProvider>
    </body>

    </html>
  );
}
