import ProLayout from "@ant-design/pro-layout";
import { Avatar } from "antd";
import auth from "api/auth";
import file from "api/file";
import { AuthContext } from "context/AuthContext";
import { AuthActionTypes } from "context/AuthContext/type";
import { useContext } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { BookOpen01, Logout01 } from "untitledui-js-base";
import { adminMenu, financeMenu, userMenu } from "./menu";

const Logo = () => {
  return (
    <div>
      <BookOpen01 size="28" />
    </div>
  );
};

const DashboardLayout: React.FC = () => {
  const [user, dispatch] = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  let menuData;
  if (user?.user?.role === "admin") {
    menuData = adminMenu;
  } else if (user?.user?.role === "finance") {
    menuData = financeMenu;
  } else {
    menuData = userMenu;
  }

  const handleLogout = () => {
    dispatch({ type: AuthActionTypes.LOGOUT });
    auth.removeToken();
    navigate("/auth/login");
  };

  return (
    <ProLayout
      style={{
        borderRadius: "100px",
      }}
      logo={<Logo />}
      title="Boilerplate"
      menuItemRender={(item, dom) => (
        <Link to={item.path as string} key={item.path}>
          {dom}
        </Link>
      )}
      layout="top"
      contentStyle={{
        background: "#f7fafc",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
      }}
      menu={{
        request: async () => menuData,
      }}
      location={{
        pathname: location.pathname,
      }}
      stylish={{}}
      fixSiderbar={true}
      rightContentRender={() => (
        <div className="flex items-center gap-3">
          <Avatar
            size={30}
            src={file.fileToUrl(user?.user?.profile?.physical_path)}
            className="uppercase"
          >
            {user?.user?.last_name?.substring(0, 2)}
          </Avatar>
          <div className="flex flex-col gap-1 text-white">
            <div className="font-semibold">{user?.user?.last_name}</div>
          </div>
          <Logout01
            color="#fff"
            style={{ marginRight: "10px" }}
            className="cursor-pointer"
            onClick={handleLogout}
          />
        </div>
      )}
      menuFooterRender={(props) => {
        if (props?.collapsed) {
          return (
            <div className="flex items-center justify-center">
              <Logout01
                color="#fff"
                className="cursor-pointer"
                onClick={handleLogout}
              />
            </div>
          );
        }
        return (
          <div className="m-4 flex items-center justify-between text-white font-semibold">
            <div className="flex items-center gap-3">
              <Avatar
                size={50}
                src={file.fileToUrl(user?.user?.profile?.physical_path)}
                className="uppercase"
              >
                {user?.user?.username?.substring(0, 2)}
              </Avatar>
              <div className="flex flex-col gap-1">
                <div className="font-semibold">{user?.user?.first_name}</div>
                <div className="text-sm">{user?.user?.phone}</div>
              </div>
            </div>
            <Logout01
              color="#fff"
              className="cursor-pointer"
              onClick={handleLogout}
            />
          </div>
        );
      }}
      token={{
        header: {
          colorHeaderTitle: "#fff",
          colorBgHeader: "#0077f4",
          colorBgMenuItemSelected: "#0077f4",
          colorBgMenuItemHover: "#202836",
          colorTextMenu: "#fff",
          colorTextMenuSelected: "#fff",
          colorTextMenuActive: "#fff",
        },
      }}
    >
      <Outlet />
    </ProLayout>
  );
};

export default DashboardLayout;
