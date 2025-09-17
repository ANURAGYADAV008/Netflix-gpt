import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, type }) => {
  const user = useSelector((state) => state.user);

  if (type === "private") {
    // Private routes -> require login
    if (!user) return <Navigate to="/login" replace />;
    return children;
  }

  if (type === "public") {
    // Public routes -> block if already logged in
    if (user) return <Navigate to="/browse" replace />;
    return children;
  }

  return children;
};

export default ProtectedRoute;
