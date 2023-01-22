import { Navigate, Outlet } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  isAllowed: boolean;
}

const SecureRoutes = ({ children, isAllowed }: Props) => {
  if (!isAllowed) return <Navigate to="/login" />;
  return children ? <>{children}</> : <Outlet />;
};

export default SecureRoutes;
