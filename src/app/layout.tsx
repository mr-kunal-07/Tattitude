import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";


import { TRPCReactProvider } from "@/trpc/react";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Tatitude",
  description: "Tatitude advance tattoo desgins",
  icons: [{ rel: "icon", url: "/tatitude.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute={'class'}
          defaultTheme="system"
        >
          <Navbar />
          <TRPCReactProvider>
            <main className="pt-16 bg-white">
              {children}
              <Toaster />
            </main>
          </TRPCReactProvider>
        </ThemeProvider>

      </body>
    </html>
  );
}
