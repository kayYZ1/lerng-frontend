import { createElement, lazy } from 'react';

import { DefaultPath } from './paths';

const LandingPage = lazy(() => import('features/landing-page/index'));
const PolicyPage = lazy(() => import('features/landing-page/policy'));
const ToS = lazy(() => import('features/landing-page/tos'));

const routes = [
  {
    path: DefaultPath.LANDING_PAGE,
    element: createElement(LandingPage),
  },
  {
    path: DefaultPath.POLICY,
    element: createElement(PolicyPage),
  },
  {
    path: DefaultPath.TOS,
    element: createElement(ToS),
  },
];

export default routes;
