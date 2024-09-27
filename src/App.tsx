import { createBrowserRouter, RouterProvider } from "react-router-dom"

import DashboardLayout from "layouts/dashboard/app"
import AuthLayout from "layouts/auth/layout"

import Page404 from "features/404"

import DashboardRoutes from "routes/dashboard";
import DefaultRoutes from "routes/default";
import AuthRoutes from "routes/auth";

import LandingPageLayout from "layouts/landing-page/layout"
import AuthGuard from "guards/auth-guard"
import AppGuard from "guards/app-guard"

export default function App() {
  const router = createBrowserRouter([
    {
      element: <LandingPageLayout />,
      errorElement: <Page404 />,
      children: DefaultRoutes
    },
    {
      element:
        <AppGuard>
          <DashboardLayout />
        </AppGuard>,
      errorElement: <Page404 />,
      children: DashboardRoutes
    },
    {
      element:
        <AuthGuard>
          <AuthLayout />
        </AuthGuard>,
      errorElement: <Page404 />,
      children: AuthRoutes
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}