import Home from "@/pages/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang chủ | Cổng Thông Tin Bảo Hiểm",
  openGraph: {
    title: "Trang chủ | Cổng Thông Tin Bảo Hiểm",
    description:
      "Nền tảng cung cấp thông tin minh bạch, tra cứu quyền lợi, mạng lưới y tế và quy trình bồi thường bảo hiểm.",
  },
};

export default function HomePage() {
  return <Home />;
}
