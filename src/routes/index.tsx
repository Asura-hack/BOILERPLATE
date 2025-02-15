import { PageLoading } from "@ant-design/pro-layout";
import { ErrorBoundary } from "@ant-design/pro-utils";
import { useAuthContext } from "hook/useAuthContext";
import AuthLayout from "layout/auth";
import DashboardLayout from "layout/dashboard";
import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes } from "./auth";
import { dashboardRoutes } from "./dashboard";
import ProtectedRoute from "./protectedRoute";

const MainRoutes: React.FC = () => {
  const [user] = useAuthContext();

  const routes = [
    {
      key: "dashboard",
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      ),
      children: dashboardRoutes,
    },
    {
      key: "auth",
      path: "/auth",
      element: <AuthLayout />,
      children: authRoutes,
    },
  ];

  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.key}
          path={route.path}
          element={
            <ErrorBoundary>
              <Suspense fallback={<PageLoading />}>{route.element}</Suspense>
            </ErrorBoundary>
          }
        >
          {route.children?.map((path) => (
            <Route
              key={path.key}
              path={path.path}
              element={
                <ErrorBoundary>
                  <Suspense fallback={<PageLoading />}>{path.element}</Suspense>
                </ErrorBoundary>
              }
            />
          ))}
        </Route>
      ))}
      <Route
        key={"root"}
        path="*"
        element={
          user?.authorized ? (
            user.user.role === "admin" ? (
              <Navigate to="/dashboard/employee-registration" />
            ) : user.user.role === "finance" ? (
              <Navigate to="/dashboard/site-registration" />
            ) : (
              <Navigate to="/dashboard/user-dashboard" />
            )
          ) : (
            <Navigate to="/auth/login" />
          )
        }
      />
    </Routes>
  );
};

export default MainRoutes;
