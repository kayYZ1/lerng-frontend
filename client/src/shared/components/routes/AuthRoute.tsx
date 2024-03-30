import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { RouteChild } from "shared/types";
import { selectCurrentToken } from "features/auth/auth.slice";
import { AuthPath } from "routes/paths";

export default function AuthRoute({ children }: RouteChild) {
  const token = useSelector(selectCurrentToken);
  return token ? children : <Navigate to={AuthPath.SIGN_IN} />
}