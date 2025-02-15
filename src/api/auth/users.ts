// src/api/auth/users.ts
import { Admin, Finance } from "./type";
import { User } from "context/AuthContext/type";

export const staticAdmin: Admin = {
  id: 1,
  created_at: new Date(),
  updated_at: new Date(),
  first_name: "User",
  last_name: "Admin",
  email: "admin@example.com",
  phone: "1234567890",
  is_active: true,
  position: "Administrator",
  user_type: 1,
  city_id: 1,
  role: "admin",
  profile_id: 1,
  district_id: 1,
  agency_id: 1,
};

export const staticFinance: Finance = {
  id: 3,
  created_at: new Date(),
  updated_at: new Date(),
  first_name: "User",
  last_name: "Finance",
  email: "finance@example.com",
  phone: "1122334455",
  is_active: true,
  position: "Finance Manager",
  user_type: 3,
  city_id: 3,
  role: "finance",
  profile_id: 3,
  district_id: 3,
  agency_id: 3,
};

export const staticUser: User = {
  id: 2,
  created_at: new Date(),
  updated_at: new Date(),
  first_name: "User",
  last_name: "Regular",
  email: "user@example.com",
  username: "regularuser",
  gender: 1,
  phone: "0987654321",
  role: "user",
  age: 30,
  regNumber: "123456789",
};
