import { Navigate, useLocation, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  console.log(auth.roles, allowedRoles);

  return auth?.accessToken ? (
    auth?.roles?.find((role) => allowedRoles?.indexOf(role) > -1) ? (
      <Outlet />
    ) : (
      <Navigate to="/register" replace />
    )
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
