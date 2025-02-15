import { MenuDataItem } from "@ant-design/pro-layout";
import { BarChartSquare02, UserCircle } from "untitledui-js-base";

const adminMenu: MenuDataItem[] = [
  {
    path: "/dashboard/employee-registration",
    name: "Ажилчдын бүртгэл",
    icon: <UserCircle size="28" />,
    children: [],
  },
  // Add more admin-specific menu items here
];

const financeMenu: MenuDataItem[] = [
  {
    path: "/dashboard/site-registration",
    name: "Талбайн бүртгэл",
    icon: <UserCircle size="28" />,
    children: [],
  },
  {
    path: "/dashboard/reference-info",
    name: "Лавлах мэдээлэл",
    icon: <BarChartSquare02 size="28" />,
    children: [],
  },
  {
    path: "/dashboard/reports",
    name: "Тайлан",
    icon: <BarChartSquare02 size="28" />,
    children: [],
  },
  // Add more finance-specific menu items here
];

const userMenu: MenuDataItem[] = [
  {
    path: "/dashboard/dashboard",
    name: "User Dashboard",
    icon: <BarChartSquare02 size="28" />,
    children: [],
  },
  // Add more user-specific menu items here
];

export { adminMenu, financeMenu, userMenu };
