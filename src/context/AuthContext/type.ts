import { ProfileType } from "api/types";

export type AuthContextType = [DataType, React.Dispatch<any>];

export interface DataType {
  authorized: boolean;
  init: boolean;
  user: any;
}

export interface User {
  id: number;
  created_at: Date;
  updated_at: Date;
  email: string;
  username: string;
  gender: number;
  first_name: string;
  last_name: string;
  phone: string;
  role: "user";
  age: number;
  regNumber: string;
}

export type AuthProviderProps = {
  children: React.ReactNode;
};

export type ReducerType = (state: any, action: any) => any;

export enum AuthActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  INIT = "INIT",
}
