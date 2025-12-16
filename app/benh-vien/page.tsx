import Hospitals from "@/pages/Hospitals";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mạng lưới Bệnh viện & Phòng khám",
  description:
    "Tìm kiếm cơ sở y tế bảo lãnh viện phí gần bạn nhất trên toàn quốc.",
  openGraph: {
    title: "Mạng lưới Bệnh viện & Phòng khám",
    description:
      "Tìm kiếm cơ sở y tế bảo lãnh viện phí gần bạn nhất trên toàn quốc.",
    url: "https://baohiem.soft.io.vn/benh-vien",
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

export default function HospitalsPage() {
  return <Hospitals />;
}
