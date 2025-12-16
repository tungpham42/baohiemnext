import Glossary from "@/pages/Glossary";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Từ điển Bảo hiểm",
  description:
    "Giải thích hơn 400 thuật ngữ chuyên ngành bảo hiểm một cách đơn giản và dễ hiểu nhất.",
  openGraph: {
    title: "Từ điển Bảo hiểm",
    description:
      "Giải thích hơn 400 thuật ngữ chuyên ngành bảo hiểm một cách đơn giản và dễ hiểu nhất.",
    url: "https://baohiem.soft.io.vn/thuat-ngu",
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

export default function GlossaryPage() {
  return <Glossary />;
}
