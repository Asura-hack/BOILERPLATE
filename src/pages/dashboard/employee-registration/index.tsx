// src/pages/dashboard/dashboard/index.tsx
import React, { useState, useEffect } from "react";
import TableHeader from "../../../components/table_header";
import DataTable from "../../../components/table";
import { staticAdmin, staticFinance, staticUser } from "api/auth/users";
import { useAuthContext } from "hooks/useAuthContext";

const Dashboard: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [user] = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Use static data instead of fetching from API
        const usersList = [staticAdmin, staticFinance, staticUser];
        setData(usersList);
      } catch (err) {
        console.error("Failed to fetch users", err);
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    if (user?.user?.role === "admin") {
      fetchData();
    } else {
      setError("You do not have permission to view this data.");
      setLoading(false);
    }
  }, [user]);

  return (
    <div>
      {error && <div className="error-message">{error}</div>}
      {user?.user?.role === "admin" && (
        <>
          <TableHeader onAddUser={() => {}} users={data} />
          <DataTable
            data={data}
            loading={loading}
            onDelete={() => {}}
            onFix={(key: number) => console.log(`Edit user with key: ${key}`)}
            onView={(key: number) => console.log(`View user with key: ${key}`)}
          />
        </>
      )}
    </div>
  );
};

export default Dashboard;