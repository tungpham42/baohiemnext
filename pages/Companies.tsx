"use client";

import React, { useState } from "react";
import {
  Typography,
  Input,
  Select,
  Card,
  Row,
  Col,
  Tag,
  Button,
  Avatar,
  Empty,
  Pagination,
} from "antd";
import {
  SearchOutlined,
  GlobalOutlined,
  PhoneOutlined,
  BankOutlined,
  SafetyCertificateOutlined,
  ClockCircleOutlined, // <--- Import thêm icon này
} from "@ant-design/icons";
import { companiesData } from "@/data/mockData";
import { InsuranceCompany } from "@/types";

const { Title, Text } = Typography;
const { Option } = Select;

export default function InsuranceCompaniesPage() {
  // 1. State for Search & Filter
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<"All" | "Life" | "Non-Life">(
    "All"
  );

  // 2. State for Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  // 3. Filter Logic
  const filteredCompanies = companiesData.filter((company) => {
    const matchesSearch = company.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType = filterType === "All" || company.type === filterType;
    return matchesSearch && matchesType;
  });

  // 4. Pagination Slicing Logic
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = filteredCompanies.slice(startIndex, endIndex);

  // Helper to get badge color
  const getTypeTag = (type: "Life" | "Non-Life") => {
    if (type === "Life") {
      return <Tag color="green">Nhân thọ</Tag>;
    }
    return <Tag color="blue">Phi nhân thọ</Tag>;
  };

  return (
    <div style={{ minHeight: "80vh" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <Title level={2} style={{ color: "#0050b3", marginBottom: 8 }}>
          Danh sách Công ty Bảo hiểm
        </Title>
        <Text type="secondary" style={{ fontSize: 16 }}>
          Tra cứu thông tin liên hệ và thời gian hoạt động của các công ty bảo
          hiểm
        </Text>
      </div>

      {/* Toolbar: Search & Filter */}
      <Card
        bordered={false}
        style={{
          marginBottom: 32,
          borderRadius: 12,
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        }}
      >
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} md={12}>
            <Input
              size="large"
              placeholder="Tìm kiếm tên công ty..."
              prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              allowClear
            />
          </Col>
          <Col xs={24} md={6}>
            <Select
              size="large"
              defaultValue="All"
              style={{ width: "100%" }}
              onChange={(value) => {
                setFilterType(value as "All" | "Life" | "Non-Life");
                setCurrentPage(1);
              }}
            >
              <Option value="All">Tất cả loại hình</Option>
              <Option value="Life">Bảo hiểm Nhân thọ</Option>
              <Option value="Non-Life">Bảo hiểm Phi nhân thọ</Option>
            </Select>
          </Col>
          <Col xs={24} md={6} style={{ textAlign: "right" }}>
            <Text strong style={{ color: "#0050b3" }}>
              {filteredCompanies.length} kết quả
            </Text>
          </Col>
        </Row>
      </Card>

      {/* Company List */}
      {filteredCompanies.length > 0 ? (
        <>
          <Row gutter={[24, 24]}>
            {paginatedData.map((item: InsuranceCompany) => (
              <Col xs={24} sm={12} lg={8} key={item.id}>
                <Card
                  style={{
                    height: "100%",
                    borderRadius: 12,
                    display: "flex",
                    flexDirection: "column",
                  }}
                  styles={{
                    body: {
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    },
                  }}
                  actions={[
                    <Button
                      key="web"
                      type="link"
                      icon={<GlobalOutlined />}
                      href={item.website}
                      target="_blank"
                    >
                      Website
                    </Button>,
                    <Button
                      key="call"
                      type="link"
                      icon={<PhoneOutlined />}
                      href={`tel:${item.phone.replace(/\s/g, "")}`}
                      danger
                    >
                      Gọi ngay
                    </Button>,
                  ]}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      marginBottom: 16,
                    }}
                  >
                    <Avatar
                      shape="square"
                      size={48}
                      style={{
                        backgroundColor:
                          item.type === "Life" ? "#f6ffed" : "#e6f7ff",
                        color: item.type === "Life" ? "#52c41a" : "#1890ff",
                        marginRight: 16,
                      }}
                      icon={
                        item.type === "Life" ? (
                          <SafetyCertificateOutlined />
                        ) : (
                          <BankOutlined />
                        )
                      }
                    />
                    <div>
                      <Text
                        strong
                        style={{
                          fontSize: 16,
                          display: "block",
                          lineHeight: 1.4,
                          marginBottom: 4,
                        }}
                      >
                        {item.name}
                      </Text>
                      {getTypeTag(item.type)}
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: 16,
                      borderTop: "1px solid #f0f0f0",
                    }}
                  >
                    {/* PHONE */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 8,
                      }}
                    >
                      <PhoneOutlined
                        style={{ color: "#8c8c8c", marginRight: 8 }}
                      />
                      <Text copyable={{ text: item.phone }}>{item.phone}</Text>
                    </div>

                    {/* WORKING HOURS (Mới thêm) */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 8,
                      }}
                    >
                      <ClockCircleOutlined
                        style={{ color: "#8c8c8c", marginRight: 8 }}
                      />
                      <Text type="secondary">
                        {/* Fallback nếu data chưa cập nhật */}
                        {item.workingHours || "Hotline 24/7"}
                      </Text>
                    </div>

                    {/* WEBSITE */}
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <GlobalOutlined
                        style={{ color: "#8c8c8c", marginRight: 8 }}
                      />
                      <Text ellipsis style={{ maxWidth: 200 }}>
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: "inherit" }}
                        >
                          {item.website.replace(/^https?:\/\/(www\.)?/, "")}
                        </a>
                      </Text>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Pagination Controls */}
          <div
            style={{
              marginTop: 32,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Pagination
              current={currentPage}
              total={filteredCompanies.length}
              pageSize={pageSize}
              onChange={(page, size) => {
                setCurrentPage(page);
                setPageSize(size);
              }}
              showSizeChanger
              locale={{ items_per_page: "/ trang" }}
              pageSizeOptions={["12", "24", "36", "48", "60"]}
              showTotal={(total, range) => (
                <Text type="secondary">
                  Hiển thị {range[0]}-{range[1]} của <strong>{total}</strong>{" "}
                  công ty
                </Text>
              )}
            />
          </div>
        </>
      ) : (
        <Empty
          description="Không tìm thấy công ty bảo hiểm nào"
          style={{ marginTop: 60 }}
        />
      )}
    </div>
  );
}
