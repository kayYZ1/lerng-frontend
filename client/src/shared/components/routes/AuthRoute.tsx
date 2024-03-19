import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { RouteChild } from "shared/types";
import { selectCurrentToken } from "features/auth/auth.slice";
import Path from "routes/paths";

export default function AuthRoute({ children }: RouteChild) {
  const token = useSelector(selectCurrentToken);
  console.log(token)

  return token ? children : <Navigate to={Path.SIGN_IN} />
}