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
  },
};

export default function HospitalsPage() {
  return <Hospitals />;
}
