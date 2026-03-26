import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Inter } from "next/font/google";
import {ClerkProvider} from "@clerk/nextjs";


const inter = Inter({ subsets: ["latin"]})

export const metadata: Metadata = {
  title: {
    template: "%s | YouTube Clone",
    default: "YouTube Clone | Karandeep",
  },
  description:
    "A full-stack YouTube clone built with Next.js, TypeScript, and TailwindCSS. Featuring video streaming, authentication, search and real-time interactions.",
  keywords: [
    "YouTube Clone",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Full Stack",
    "Karandeep",
  ],
  authors: [
    {
      name: "Karandeep",
      // url: "https://my-portfolio.com", // TODO: adding my portfolio
    },
  ],
  creator: "Karandeep",
  openGraph: {
    title: "YouTube Clone | Karandeep",
    description:
      "A full-stack YouTube clone built with Next.js, TypeScript, and Tailwind CSS.",
    // url: "https://my-deployed-url.com"   // TODO: adding app deployment url
    siteName: "YouTube Clone",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body className={inter.className}>
          <TooltipProvider>{children}</TooltipProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
