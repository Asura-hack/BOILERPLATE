import React from "react";
import ProForm, { ProFormText } from "@ant-design/pro-form";
import { useRequest } from "ahooks";
import { Button, Checkbox, notification } from "antd";
import { useNavigate } from "react-router-dom";
import auth from "api/auth";
import { LoginData, LoginResponse } from "api/auth/type";
import { useAuthContext } from "hooks/useAuthContext";

const AuthPage: React.FC = () => {
  const [user, dispatch] = useAuthContext();
  const navigate = useNavigate();

  const login = useRequest(auth.login, {
    manual: true,
    onSuccess: (result: LoginResponse) => {
      dispatch({ type: "LOGIN", payload: result?.user });
      auth.saveToken(result?.token);
      notification.success({ message: "Login Successful", duration: 1.5 });
      navigate("/dashboard/dashboard");
    },
    onError: (error) => {
      notification.error({ message: "Error", description: error?.message || "Unknown error", duration: 1.5 });
    },
  });

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/mnt/data/image.png')" }}>
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-gradient-to-b from-black to-gray-900 bg-opacity-80 relative border border-blue-500">
        <h2 className="text-center text-2xl font-bold text-blue-400">LOGIN</h2>
        <ProForm
          className="mt-6"
          submitter={{
            render: () => (
              <Button loading={login.loading} type="primary" htmlType="submit" className="w-full mt-4 bg-blue-500 hover:bg-blue-700 border-none text-white rounded-md">LOGIN</Button>
            ),
          }}
          onFinish={async (values: LoginData) => {
            await login.runAsync({
              email: values.email.toLowerCase(),
              password: values.password,
              remember: values.remember,
            });
          }}
        >
          <ProFormText
            placeholder="Enter Email"
            rules={[{ required: true, message: "Enter your email" }, { type: "email", message: "Invalid email" }]}
            label={<span className="text-blue-400">Email</span>}
            name="email"
            fieldProps={{ size: "large" }}
            className="bg-gray-800 text-white border-blue-400 rounded-md"
          />
          <ProFormText.Password
            placeholder="Enter Password"
            rules={[{ required: true, message: "Enter your password" }]}
            label={<span className="text-blue-400">Password</span>}
            name="password"
            fieldProps={{ size: "large" }}
            className="bg-gray-800 text-white border-blue-400 rounded-md"
          />
          <Checkbox className="text-blue-400">Remember Me</Checkbox>
        </ProForm>
      </div>
    </div>
  );
};

export default AuthPage;
