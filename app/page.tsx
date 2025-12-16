import Home from "@/pages/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang chủ | Cổng Thông Tin Bảo Hiểm",
  openGraph: {
    title: "Trang chủ | Cổng Thông Tin Bảo Hiểm",
    description:
      "Nền tảng cung cấp thông tin minh bạch, tra cứu quyền lợi, mạng lưới y tế và quy trình bồi thường bảo hiểm.",
    url: "https://baohiem.soft.io.vn",
    siteName: "Cổng Thông Tin Bảo Hiểm Trực Tuyến",
    images: [
      {
        url: "/1200x630.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function HomePage() {
  return <Home />;
}
