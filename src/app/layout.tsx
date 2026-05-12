import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";

import AnnouncementBar from "@/components/announcementBar";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const josefinSans = localFont({
  src: [
    {
      path: "../../public/fonts/static/JosefinSans-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/static/JosefinSans-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/static/JosefinSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/static/JosefinSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/static/JosefinSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/static/JosefinSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/static/JosefinSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-josefin-sans",
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
      <body className={`${josefinSans.variable} overflow-x-hidden`}>
        <AnnouncementBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
