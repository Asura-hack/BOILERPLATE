import { Navigate } from "react-router-dom";
import { useAuthContext } from 'hooks/useAuthContext';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [{ authorized }] = useAuthContext();
  if (!authorized) {
    return <Navigate to="/auth/login" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
