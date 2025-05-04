import type { Metadata } from "next";
import "@/app/_styles/globals.css";
import Navigation from "./_components/Navigation";
import Logo from "@/app/_components/Logo";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | HavenStay",
    default: "Welcome | HavenStay",
  },
  description:
    "Your Peaceful Escape Awaits With HavenStay. All you have to do is select one of our beautiful properties, then get to relaxing!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();
  return (
    <html lang='en'>
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>HavenStay Copyright © {currentYear}</footer>
      </body>
    </html>
  );
}
