// src/api/auth/index.ts
import { decryptWithAES, encryptWithAES } from "utils/parse";
import { LoginData, LoginResponse, Admin } from "./type";
import { staticAdmin, staticFinance, staticUser } from "./users";

const tokenKey = "newsadmin.token";
const userKey = "app.user";

namespace auth {
  export const login = (body?: LoginData) => {
    return new Promise<LoginResponse>((resolve, reject) => {
      if (body?.email === "admin@example.com" && body?.password === "Admin123!") {
        resolve({ token: "admin-token", user: staticAdmin });
      } else if (body?.email === "finance@example.com" && body?.password === "Finance123!") {
        resolve({ token: "finance-token", user: staticFinance });
      } else if (body?.email === "user@example.com" && body?.password === "User123!") {
        resolve({ token: "user-token", user: staticUser });
      } else {
        reject({ message: "Invalid email or password" });
      }
    });
  };


  export const saveToken = (token: string) => {
    localStorage.setItem(tokenKey, token);
  };

  export const hasToken = () => !!localStorage.getItem(tokenKey);
  export const removeToken = () => localStorage.removeItem(tokenKey);
  export const getToken = () => localStorage.getItem(tokenKey);

  export const info = () => {
    return new Promise<Admin>((resolve, reject) => {
      const token = getToken();
      if (token === "admin-token") {
        resolve(staticAdmin);
      } else if (token === "finance-token") {
        resolve(staticFinance);
      } else if (token === "user-token") {
        resolve(staticUser);
      } else {
        reject({ message: "Invalid token" });
      }
    });
  };

  export const rememberUser = (values: LoginData) => {
    if (values.remember) {
      localStorage.setItem(userKey, encryptWithAES(JSON.stringify(values)));
    } else {
      localStorage.removeItem(userKey);
    }
  };

  export const getRememberUser = () => {
    const userData = localStorage.getItem(userKey);
    if (userData) {
      const _userData = JSON.parse(decryptWithAES(userData)) as LoginData;
      return _userData;
    }
    return undefined;
  };
}

export default auth;
