import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Anonymous_Pro,
  Bricolage_Grotesque,
} from "next/font/google";

import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const anonymousPro = Anonymous_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-anonymous-pro",
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
});

export const metadata: Metadata = {
  title: "My Application",
  description: "My Next.js application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${plusJakartaSans.variable}
        ${anonymousPro.variable}
        ${bricolageGrotesque.variable}
        h-full
        antialiased
        `}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
