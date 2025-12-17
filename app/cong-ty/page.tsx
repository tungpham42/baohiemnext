import Companies from "@/pages/Companies";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Công ty Bảo hiểm",
  description: "Danh sách các Công ty Bảo hiểm tại Việt Nam.",
  openGraph: {
    title: "Công ty Bảo hiểm",
    description: "Danh sách các Công ty Bảo hiểm tại Việt Nam.",
    url: "https://baohiem.soft.io.vn/cong-ty",
    siteName: "Cổng Thông Tin Bảo Hiểm Trực Tuyến",
    images: [
      {
        url: "https://baohiem.soft.io.vn/1200x630.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function CompaniesPage() {
  return <Companies />;
}
