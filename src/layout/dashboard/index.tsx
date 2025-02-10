import ProLayout from "@ant-design/pro-layout";
import { Avatar } from "antd";
import auth from "api/auth";
import file from "api/file";
import { AuthContext } from "context/AuthContext";
import { AuthActionTypes } from "context/AuthContext/type";
import { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BookOpen01, Logout01 } from "untitledui-js-base";
import menuData from "./menu";

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
  // if (!user?.authorized) {
  //   return <Navigate to="/auth/login" />;
  // }
  return (
    <ProLayout
      style={{
        borderRadius: "100px",
      }}
      logo={<Logo />}
      title="AI Based News Dashboard"
      menuItemRender={(item, dom) => (
        <Link to={item.path as string} key={item.path}>
          {dom}
        </Link>
      )}
      layout="top"
      contentStyle={{
        margin: 0,
        background: "#f7fafc",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
      }}
      menu={{
        request: async () => {
          return menuData;
        },
      }}
      location={{
        pathname: location.pathname,
      }}
      siderWidth={300}
      stylish={{}}
      fixSiderbar={true}
      menuFooterRender={(props) => {
        if (props?.collapsed) {
          return (
            <div className="flex items-center justify-center">
              <Logout01
                color="#fff"
                className="cursor-pointer"
                onClick={() => {
                  dispatch({ type: AuthActionTypes.LOGOUT });
                  auth.removeToken();
                }}
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
              <div className="flex flex-col gap-2">
                <div className="uppercase">{user?.user?.first_name}</div>
                <div>{user?.user?.phone}</div>
              </div>
            </div>
            <Logout01
              color="#fff"
              className="cursor-pointer"
              onClick={() => {
                dispatch({ type: AuthActionTypes.LOGOUT });
                auth.removeToken();
              }}
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
