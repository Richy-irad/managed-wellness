import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";

import AnnouncementBar from "@/components/announcementBar";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const ltMuseum = localFont({
  src: "../../public/fonts/spirito/LTMuseumMedium.woff2",
  weight: "500",
  style: "normal",
  variable: "--font-display",
  adjustFontFallback: false,
});

const switzer = localFont({
  src: [
    {
      path: "../../public/fonts/spirito/Switzer-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/spirito/Switzer-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/spirito/Switzer-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/spirito/Switzer-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-body",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: {
    default: "Managed Wellness Centre",
    template: "%s | Managed Wellness Centre",
  },
  description:
    "Compassionate, evidence-based mental health services including counseling, therapy, and psychometric testing. In-person and virtual sessions available.",
  openGraph: {
    siteName: "Managed Wellness Centre",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ltMuseum.variable} ${switzer.variable} overflow-x-hidden`}>
        <AnnouncementBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
