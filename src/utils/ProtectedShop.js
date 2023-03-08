import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedShop({ children }) {
  const auth = useSelector((state) => state.auth.auth);
  if (auth.is_shop) {
    return children;
  }
  return <Navigate to="/" />;
}
