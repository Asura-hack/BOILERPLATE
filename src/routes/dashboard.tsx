import { lazy } from "react";

const EmployeeRegistration = lazy(() => import("pages/dashboard/employee-registration"));
const SiteRegistration = lazy(() => import("pages/dashboard/site-registration"));
const ReferenceInfo = lazy(() => import("pages/dashboard/reference-info"));
const Reports = lazy(() => import("pages/dashboard/reports"));
const UserDashboard = lazy(() => import("pages/dashboard/user-dashboard"));

export const dashboardRoutes = [
  
  {
    key: "dashboard",
    path: "employee-registration",
    element: <EmployeeRegistration />,
  },
  {
    key: "dashboard",
    path: "site-registration",
    element: <SiteRegistration />,
  },
  {
    key: "dashboard",
    path: "reference-info",
    element: <ReferenceInfo />,
  },
  {
    key: "dashboard",
    path: "reports",
    element: <Reports />,
  },
  {
    key: "dashboard",
    path: "user-dashboard",
    element: <UserDashboard />,
  },
];
