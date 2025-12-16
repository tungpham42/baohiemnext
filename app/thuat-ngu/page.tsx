import Glossary from "@/pages/Glossary";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Từ điển Bảo hiểm",
  description:
    "Giải thích hơn 400 thuật ngữ chuyên ngành bảo hiểm một cách đơn giản và dễ hiểu nhất.",
};

export default function GlossaryPage() {
  return <Glossary />;
}
