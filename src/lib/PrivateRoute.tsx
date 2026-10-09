import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { AppState } from "../services/redux/stores";

// eslint-disable-next-line no-undef
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();

  const { data, loading } = useSelector((state: AppState) => state.auth);

  if (loading) {
    return <p>Checking authentication..</p>;
  }

  if (!data?.role) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
