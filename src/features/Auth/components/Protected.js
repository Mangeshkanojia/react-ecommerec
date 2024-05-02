import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectLoggedInUser } from "../authSlice";
function Protected({ children }) {
  const user = useSelector(selectLoggedInUser);
  if (user) {
    return children;
  }
  return <Navigate to="/login" replace={true}></Navigate>;
}

export default Protected;
