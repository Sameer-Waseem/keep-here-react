import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ user }: any) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      localStorage.removeItem("token");
      navigate("/");
      window.location.reload();
    }
  }, [user]);

  return null;
};

export default Logout;
