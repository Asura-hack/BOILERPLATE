import React, { useState } from "react";
import TableHeader from "../../../components/table_header";
import DataTable from "../../../components/table";

const Dashboard: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  const handleAddUser = (user: any) => {
    setData((prevData) => [...prevData, { ...user, key: Date.now() }]); // Ensure unique key
  };

  const handleDeleteUser = (key: number) => {
    setData((prevData) => prevData.filter((item) => item.key !== key));
  };

  return (
    <div>
      <TableHeader onAddUser={handleAddUser} users={data} />
      <DataTable
        data={data}
        onDelete={handleDeleteUser}
        onFix={function (key: number): void {
          throw new Error("Function not implemented.");
        }}
        onView={function (key: number): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};

export default Dashboard;
