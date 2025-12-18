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
  Modal,
  Tooltip,
} from "antd";
import {
  SearchOutlined,
  GlobalOutlined,
  PhoneOutlined,
  BankOutlined,
  SafetyCertificateOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined, // Icon địa điểm
  DollarCircleOutlined, // Icon tiền tệ
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

  // 3. State for Map Modal
  const [isMapModalVisible, setIsMapModalVisible] = useState(false);
  const [selectedCompany, setSelectedCompany] =
    useState<InsuranceCompany | null>(null);

  // 4. Filter Logic
  const filteredCompanies = companiesData.filter((company) => {
    const matchesSearch = company.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType = filterType === "All" || company.type === filterType;
    return matchesSearch && matchesType;
  });

  // 5. Pagination Slicing Logic
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = filteredCompanies.slice(startIndex, endIndex);

  // Helper: Get badge color
  const getTypeTag = (type: "Life" | "Non-Life") => {
    if (type === "Life") {
      return <Tag color="green">Nhân thọ</Tag>;
    }
    return <Tag color="blue">Phi nhân thọ</Tag>;
  };

  // Helper: Open Map
  const handleOpenMap = (company: InsuranceCompany) => {
    setSelectedCompany(company);
    setIsMapModalVisible(true);
  };

  return (
    <div style={{ minHeight: "80vh" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <Title level={2} style={{ color: "#0050b3", marginBottom: 8 }}>
          Danh sách Công ty Bảo hiểm
        </Title>
        <Text type="secondary" style={{ fontSize: 16 }}>
          Tra cứu thông tin liên hệ, trụ sở và quy mô của các công ty bảo hiểm
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
                    borderColor: "#f0f0f0",
                  }}
                  styles={{
                    body: {
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      padding: 20,
                    },
                  }}
                  actions={[
                    <Tooltip title="Xem bản đồ" key="map">
                      <Button
                        type="text"
                        icon={<EnvironmentOutlined />}
                        onClick={() => handleOpenMap(item)}
                      >
                        Bản đồ
                      </Button>
                    </Tooltip>,
                    <Tooltip title="Truy cập Website" key="web">
                      <Button
                        type="text"
                        icon={<GlobalOutlined />}
                        href={item.website}
                        target="_blank"
                      >
                        Web
                      </Button>
                    </Tooltip>,
                    <Tooltip title="Gọi hotline" key="call">
                      <Button
                        type="text"
                        icon={<PhoneOutlined />}
                        href={`tel:${item.phone.replace(/\s/g, "")}`}
                      >
                        Gọi
                      </Button>
                    </Tooltip>,
                  ]}
                >
                  {/* HEADER CARD */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      marginBottom: 16,
                    }}
                  >
                    <Avatar
                      shape="square"
                      size={54}
                      style={{
                        backgroundColor:
                          item.type === "Life" ? "#f6ffed" : "#e6f7ff",
                        color: item.type === "Life" ? "#52c41a" : "#1890ff",
                        marginRight: 16,
                        flexShrink: 0,
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
                          lineHeight: 1.3,
                          marginBottom: 6,
                          color: "#262626",
                        }}
                      >
                        {item.name}
                      </Text>
                      {getTypeTag(item.type)}
                    </div>
                  </div>

                  {/* BODY CARD INFO */}
                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: 16,
                      borderTop: "1px dashed #f0f0f0",
                    }}
                  >
                    {/* VỐN ĐIỀU LỆ */}
                    <div style={{ marginBottom: 8, display: "flex" }}>
                      <DollarCircleOutlined
                        style={{
                          color: "#faad14",
                          marginRight: 10,
                          marginTop: 4,
                        }}
                      />
                      <Text>
                        Vốn điều lệ: <strong>{item.charterCapital}</strong>
                      </Text>
                    </div>

                    {/* TRỤ SỞ CHÍNH */}
                    <div style={{ marginBottom: 8, display: "flex" }}>
                      <EnvironmentOutlined
                        style={{
                          color: "#ff4d4f",
                          marginRight: 10,
                          marginTop: 4,
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <Text
                          type="secondary"
                          style={{ fontSize: 13, cursor: "pointer" }}
                          onClick={() => handleOpenMap(item)}
                          title="Bấm để xem bản đồ"
                        >
                          {item.headquarters}
                        </Text>
                      </div>
                    </div>

                    {/* GIỜ LÀM VIỆC & PHONE */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 12,
                        background: "#fafafa",
                        padding: "8px 12px",
                        borderRadius: 6,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <ClockCircleOutlined
                          style={{ color: "#8c8c8c", marginRight: 6 }}
                        />
                        <Text type="secondary" style={{ fontSize: 12 }}>
                          {item.workingHours}
                        </Text>
                      </div>
                      <Text
                        strong
                        style={{ color: "#ff4d4f", fontSize: 14 }}
                        copyable
                      >
                        {item.phone}
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
              pageSizeOptions={["12", "24", "36", "48"]}
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

      {/* MAP MODAL */}
      <Modal
        title={
          <span>
            <EnvironmentOutlined style={{ color: "#ff4d4f", marginRight: 8 }} />
            {selectedCompany?.name} - Trụ sở chính
          </span>
        }
        open={isMapModalVisible}
        onCancel={() => setIsMapModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setIsMapModalVisible(false)}>
            Đóng
          </Button>,
          <Button
            key="google"
            type="primary"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              (selectedCompany?.name || "") +
                " " +
                (selectedCompany?.headquarters || "")
            )}`}
            target="_blank"
          >
            Mở trên Google Maps
          </Button>,
        ]}
        width={800}
        centered
        styles={{ body: { padding: 0 } }}
      >
        {selectedCompany && (
          <div style={{ position: "relative", width: "100%", height: "450px" }}>
            <iframe
              title="Company Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                selectedCompany.headquarters
              )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            ></iframe>
            <div
              style={{
                padding: "12px 16px",
                background: "#f5f5f5",
                borderTop: "1px solid #e8e8e8",
                position: "absolute",
                bottom: 0,
              }}
            >
              <Text strong>Địa chỉ:</Text> {selectedCompany.headquarters}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
