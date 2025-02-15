// Example setup in src/api/index.ts
import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3000/dashboard', // Base URL should point to your API base
  headers: {
    'Content-Type': 'application/json',
    // Add other necessary headers
  },
});

// Example of list function
export const listUsers = (params: any) => {
  return http.post('/admin/users/list', {
    hasAuth: true,
    params,
  });
};

export default http;
