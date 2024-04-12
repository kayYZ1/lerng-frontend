import { createBrowserRouter, RouterProvider } from "react-router-dom"

import DashboardLayout from "layouts/dashboard/app"
import AuthLayout from "layouts/auth/layout"

import Page404 from "features/404"

import { authRoutes, dashboardRoutes, defaultRoutes } from "routes"
import AuthRoute from "shared/components/authRoute"
import LandingPageLayout from "layouts/landing-page/layout"

export default function App() {
  const router = createBrowserRouter([
    {
      element: <LandingPageLayout />,
      errorElement: <Page404 />,
      children: defaultRoutes
    },
    {
      element: <AuthRoute><DashboardLayout /></AuthRoute>,
      errorElement: <Page404 />,
      children: dashboardRoutes
    },
    {
      element: <AuthLayout />,
      errorElement: <Page404 />,
      children: authRoutes
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}