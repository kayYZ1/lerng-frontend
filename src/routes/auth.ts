import { lazy, createElement } from 'react';

import { AuthPath } from './paths';

const SignIn = lazy(() => import('features/auth/sign-in'));
const SignUp = lazy(() => import('features/auth/sign-up'));
const ForgotPassword = lazy(() => import('features/auth/forgot-password'));
const ResetPassword = lazy(
  () => import('features/auth/forgot-password/reset-password'),
);

const routes = [
  {
    path: AuthPath.SIGN_IN,
    element: createElement(SignIn),
  },
  {
    path: AuthPath.SIGN_UP,
    element: createElement(SignUp),
  },
  {
    path: AuthPath.FORGOT_PASSWORD,
    element: createElement(ForgotPassword),
  },
  {
    path: AuthPath.RESET_PASSWORD,
    element: createElement(ResetPassword),
  },
];

export default routes;
