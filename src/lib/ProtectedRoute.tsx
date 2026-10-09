import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Nomatch from "../pages/Nomatch";
import { AppState } from "../services/redux/stores";

export const ProtectedRoute = ({
  children,
  roles,
}: {
  // eslint-disable-next-line no-undef
  children: JSX.Element;
  roles: any;
}) => {
  const location = useLocation();
  const { data, loading } = useSelector((state: AppState) => state.auth);

  if (loading) {
    return <p className="container">Checking auth..</p>;
  }

  const userHasRequiredRole = !!(data && roles.includes(data.role));

  if (!data?.role) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (data && !userHasRequiredRole) {
    return <Nomatch />; // build your won access denied page (sth like 404)
  }

  return children;
};
