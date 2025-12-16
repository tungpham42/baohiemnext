import ClaimsProcess from "@/pages/ClaimsProcess";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quy trình Bồi thường",
  description:
    "Hướng dẫn chi tiết các bước để nhận quyền lợi bảo hiểm nhanh chóng và minh bạch, bao gồm hồ sơ cần chuẩn bị và tiến trình xử lý tiêu chuẩn.",
  openGraph: {
    title: "Quy trình Bồi thường",
    description:
      "Hướng dẫn chi tiết các bước để nhận quyền lợi bảo hiểm nhanh chóng và minh bạch, bao gồm hồ sơ cần chuẩn bị và tiến trình xử lý tiêu chuẩn.",
    url: "https://baohiem.soft.io.vn/boi-thuong",
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

export default function ClaimsProcessPage() {
  return <ClaimsProcess />;
}
