import { lazy } from "react";

import { AuthPath } from "./paths";

const SignIn = lazy(() => import("features/auth/sign-in"));
const SignUp = lazy(() => import("features/auth/sign-up"));
const ForgotPassword = lazy(() => import("features/auth/forgot-password"));
const ResetPassword = lazy(() => import("features/auth/forgot-password/reset-password"))

const routes = [
  {
    path: AuthPath.SIGN_IN,
    element: <SignIn />
  },
  {
    path: AuthPath.SIGN_UP,
    element: <SignUp />
  },
  {
    path: AuthPath.FORGOT_PASSWORD,
    element: <ForgotPassword />
  },
  {
    path: AuthPath.RESET_PASSWORD,
    element: <ResetPassword />
  }
];

export default routes