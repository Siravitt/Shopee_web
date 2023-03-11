import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedShop({ children }) {
  const auth = useSelector(state => state.auth.auth);
  if (!auth || auth.is_shop === false) {
    return <Navigate to="/" />;
  }
  return children;
}
