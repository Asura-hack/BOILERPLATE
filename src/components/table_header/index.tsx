import React, { useState } from "react";
import { Input, DatePicker, Button } from "antd";
import dayjs from "dayjs";
import { RefreshCCW01 } from "untitledui-js-base";
import AddUser from "../../components/add";

const { Search } = Input;
const { RangePicker } = DatePicker;

interface TableHeaderProps {
  onAddUser: (user: any) => void;
  users: any[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ onAddUser, users }) => {
  const [open, setOpen] = useState(false);

  const handleRefresh = () => {
    console.log("Refreshing...");
  };

  const handleCreate = () => {
    setOpen(true);
  };

  const handleSave = (newUser: any) => {
    onAddUser(newUser); // Pass data to parent (Dashboard)
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div style={{ padding: "10px 20px", borderBottom: "1px solid #ddd" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <RangePicker style={{ width: 250 }} />
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Search placeholder="Хайх..." style={{ flex: 1, maxWidth: 300 }} />
          <Button icon={<RefreshCCW01 size="18" />} onClick={handleRefresh} />
          <Button style={{}} type="primary" onClick={handleCreate}>
            Үүсгэх
          </Button>
        </div>
      </div>

      {/* AddUser Modal */}
      <AddUser open={open} onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
};

export default TableHeader;
