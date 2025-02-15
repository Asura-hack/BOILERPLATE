import axios from 'axios';
import { UsersType } from "./types";

const http = axios.create({
  baseURL: 'http://localhost:3000/dashboard', // Adjust this base URL as necessary
  headers: {
    'Content-Type': 'application/json',
  },
});
namespace users {
  export const list = (params: any) =>
    http.post<UsersType[]>("admin/users/list", {
      hasAuth: true,
      params,
    });

  // Add Other API call methods, if any (e.g., create, get, update, deleteUser)...
  // Ensure these are not declared more than once.
}

// Single export default statement
export default users;
