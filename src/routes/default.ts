import { createElement, lazy } from 'react';

import { DefaultPath } from './paths';

const LandingPage = lazy(() => import('features/landing-page/index'));
const PolicyPage = lazy(() => import('features/landing-page/policy'));
const ToS = lazy(() => import('features/landing-page/tos'));
const Contact = lazy(() => import('features/landing-page/contact'));
const AboutUs = lazy(() => import('features/landing-page/about-us'));
const Services = lazy(() => import('features/landing-page/services'));

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
  {
    path: DefaultPath.ABOUT_US,
    element: createElement(AboutUs),
  },
  {
    path: DefaultPath.SERVICES,
    element: createElement(Services),
  },
  {
    path: DefaultPath.CONTACT,
    element: createElement(Contact),
  },
];

export default routes;
