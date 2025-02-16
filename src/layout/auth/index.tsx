import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <div
      className="h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: `url("/background/login.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Outlet />
      
    </div>
  );
};

export default AuthLayout;
