import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-infinity loading-xl"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/signin" />;
};

export default PrivateRoute;
