import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
  ],
};

// Comprehensive metadata configuration
export const metadata: Metadata = {
  title: {
    default: "YouTube Clone | Karandeep",
    template: "%s | YouTube Clone",
  },
  description:
    "A full-stack YouTube clone built with Next.js, TypeScript, Tailwind CSS, and React 19. Experience seamless video streaming, advanced search, and interactive features.",
  keywords: [
    "YouTube Clone",
    "Video Streaming",
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Full Stack",
    "Bun Runtime",
    "Video Platform",
    "Web Application",
  ],
  authors: [
    {
      name: "Karandeep",
      url: "https://your-portfolio.com",
    },
  ],
  creator: "Karandeep",
  publisher: "Karandeep",
  formatDetection: {
    email: false,
    telephone: false,
  },
  verification: {
    // Add your verification codes here when needed
    // google: "verification_code",
    // yandex: "verification_code",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#ef4444",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-deployed-url.com",
    siteName: "YouTube Clone",
    title: "YouTube Clone | Watch Videos",
    description:
      "A modern video streaming platform built with cutting-edge web technologies.",
    images: [
      {
        url: "https://your-deployed-url.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "YouTube Clone - Video Streaming Platform",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Clone | Watch Videos",
    description: "A modern video streaming platform with advanced features.",
    images: ["https://your-deployed-url.com/twitter-image.png"],
    creator: "@karandeep",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "YouTube Clone",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://your-deployed-url.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en" className={`${inter.className} h-full antialiased`}>
        <body className="min-h-full flex flex-col">
          <TooltipProvider>{children}</TooltipProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
