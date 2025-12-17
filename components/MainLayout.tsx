"use client";

import React from "react";
import { Layout, Menu, ConfigProvider, FloatButton } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  HomeOutlined,
  BookOutlined,
  MedicineBoxOutlined,
  SafetyCertificateFilled,
  VerticalAlignTopOutlined,
  ReconciliationOutlined,
  BankOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    {
      key: "/",
      icon: <HomeOutlined />,
      label: <Link href="/">Trang chủ</Link>,
    },
    {
      key: "/thuat-ngu",
      icon: <BookOutlined />,
      label: <Link href="/thuat-ngu">Thuật ngữ Bảo hiểm</Link>,
    },
    {
      key: "/benh-vien",
      icon: <MedicineBoxOutlined />,
      label: <Link href="/benh-vien">Mạng lưới Bệnh viện</Link>,
    },
    {
      key: "/cong-ty",
      icon: <BankOutlined />,
      label: <Link href="/cong-ty">Công ty Bảo hiểm</Link>,
    },
    {
      key: "/boi-thuong",
      icon: <ReconciliationOutlined />,
      label: <Link href="/boi-thuong">Bồi thường</Link>,
    },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0050b3",
          borderRadius: 8,
          fontFamily: "'Work Sans', sans-serif",
        },
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            background: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            padding: "0 24px",
            position: "sticky",
            top: 0,
            zIndex: 100,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: 40,
              cursor: "pointer",
            }}
            onClick={() => router.push("/")}
          >
            <SafetyCertificateFilled
              style={{ fontSize: 28, color: "#0050b3", marginRight: 8 }}
            />
            <span
              style={{
                color: "#0050b3",
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "-0.5px",
              }}
            >
              Cổng Bảo Hiểm
            </span>
          </div>

          <Menu
            mode="horizontal"
            // FIX: Ensure pathname is a string by falling back to ""
            selectedKeys={[pathname || ""]}
            items={menuItems}
            style={{
              flex: 1,
              minWidth: 0,
              borderBottom: "none",
              fontSize: "15px",
              fontWeight: 500,
            }}
          />
        </Header>

        <Content
          style={{
            padding: "32px 24px",
            maxWidth: 1200,
            margin: "0 auto",
            width: "100%",
          }}
        >
          {children}
        </Content>

        <Footer
          style={{
            textAlign: "center",
            background: "transparent",
            color: "#888",
          }}
        >
          Cổng thông tin Bảo hiểm ©{new Date().getFullYear()} <br />
          Phát triển bởi{" "}
          <a
            href="https://soft.io.vn"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#0050b3", fontWeight: 600 }}
          >
            SOFT.io.vn
          </a>
        </Footer>
        <FloatButton.BackTop
          type="primary"
          tooltip="Lên đầu trang"
          icon={<VerticalAlignTopOutlined />}
          style={{ right: 24, bottom: 24 }}
        />
      </Layout>
    </ConfigProvider>
  );
};

export default MainLayout;
