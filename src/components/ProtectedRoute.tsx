import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, Component }: any) => {
  return user ? <Component user={user} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
