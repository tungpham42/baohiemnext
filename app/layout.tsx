import React from "react";
import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import AntdRegistry from "@/lib/AntdRegistry"; // Import the registry
import MainLayout from "@/components/MainLayout"; // Import the UI layout
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Cổng Thông Tin Bảo Hiểm",
    default: "Cổng Thông Tin Bảo Hiểm Trực Tuyến",
  },
  description:
    "Nền tảng cung cấp thông tin minh bạch, tra cứu quyền lợi, mạng lưới y tế và quy trình bồi thường bảo hiểm.",
  keywords: [
    "Bảo hiểm",
    "Tra cứu bảo hiểm",
    "Bảo lãnh viện phí",
    "Thuật ngữ bảo hiểm",
    "Bồi thường",
  ],
  authors: [{ name: "Phạm Tùng", url: "https://soft.io.vn" }],
  openGraph: {
    title: {
      template: "%s | Cổng Thông Tin Bảo Hiểm",
      default: "Cổng Thông Tin Bảo Hiểm Trực Tuyến",
    },
    description:
      "Tra cứu thuật ngữ, bệnh viện và quy trình bồi thường nhanh chóng.",
    url: "https://baohiem.soft.io.vn",
    siteName: "InsurTech Portal",
    images: [
      {
        url: "/1200x630.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <Script
          id="adsense-script"
          async
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3585118770961536`}
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <AntdRegistry>
          <MainLayout>{children}</MainLayout>
        </AntdRegistry>
        <GoogleAnalytics ga_id="G-HHXZSNQ65X" />
      </body>
    </html>
  );
}
