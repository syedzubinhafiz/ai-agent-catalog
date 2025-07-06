import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/store/Providers";
import AuthButton from "@/components/auth-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Agent Catalog",
    template: "%s | AI Agent Catalog",
  },
  description:
    "Discover and explore a curated list of AI agents — search, filter, and find the right tool for your workflow.",
  openGraph: {
    title: "AI Agent Catalog",
    description:
      "Discover and explore a curated list of AI agents — search, filter, and find the right tool for your workflow.",
    url: "https://ai-agent-catalog.example.com",
    siteName: "AI Agent Catalog",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Catalog",
    description:
      "Discover and explore a curated list of AI agents — search, filter, and find the right tool for your workflow.",
    creator: "@aiagentcatalog",
  },
  generator: "Next.js",
  applicationName: "AI Agent Catalog",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="flex justify-end p-4">
            <AuthButton />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
