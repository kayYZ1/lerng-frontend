import { lazy } from "react";

import { DefaultPath } from "./paths";

const LandingPage = lazy(() => import("features/landing-page/index"))

const routes = [
  {
    path: DefaultPath.LANDING_PAGE,
    element: <LandingPage />
  }
]

export default routes