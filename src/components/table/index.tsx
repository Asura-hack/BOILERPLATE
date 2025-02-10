import React from "react";
import { Button } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import ProTable from "@ant-design/pro-table";

interface DataTableProps {
  data: any[];
  onDelete: (key: number) => void;
  onFix: (key: number) => void;
  onView: (key: number) => void; // Add function for viewing details
}

const DataTable: React.FC<DataTableProps> = ({ data, onDelete }) => {
  const columns = [
    {
      title: "Овог",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Нэр",
      dataIndex: "firstName",
      key: "firstName",
    },
    { title: "Үүрэг", dataIndex: "role", key: "role" },
    { title: "Регистрийн дугаар", dataIndex: "regNumber", key: "regNumber" },
    { title: "Нас", dataIndex: "age", key: "age" },
    { title: "Хүйс", dataIndex: "gender", key: "gender" },
    { title: "Утас", dataIndex: "phone", key: "phone" },
    { title: "Имэйл", dataIndex: "email", key: "email" },
    {
      title: "Үйлдэл",
      key: "actions",
      render: (_: any, record: any) => (
        <div className="flex justify-center">
          <Button
            icon={<EyeOutlined />}
            type="default"
            onClick={() => onView(record.key)}
          />
          <Button
            icon={<EditOutlined />}
            type="primary"
            style={{ marginLeft: 8 }}
            onClick={() => onFix(record.key)}
          />
          <Button
            icon={<DeleteOutlined />}
            danger
            style={{ marginLeft: 8 }}
            onClick={() => onDelete(record.key)}
          />
        </div>
      ),
    },
  ];
  return (
    <ProTable
      dataSource={data}
      columns={columns}
      pagination={{ pageSize: 10 }}
      options={false}
      search={false}
      rowKey="key"
      className="rounded-md"
    />
  );
};

export default DataTable;
function onFix(key: any): void {
  throw new Error("Function not implemented.");
}
function onView(key: any): void {
  throw new Error("Function not implemented.");
}
