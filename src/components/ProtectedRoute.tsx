import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, Component }: any) => {
  return isAllowed ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
