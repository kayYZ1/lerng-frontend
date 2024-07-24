import { createBrowserRouter, RouterProvider } from "react-router-dom"

import DashboardLayout from "layouts/dashboard/app"
import AuthLayout from "layouts/auth/layout"

import Page404 from "features/404"

import { authRoutes, dashboardRoutes, defaultRoutes } from "routes"
import LandingPageLayout from "layouts/landing-page/layout"
import AuthGuard from "guards/authGuard"
import AppGuard from "guards/appGuard"

export default function App() {
  const router = createBrowserRouter([
    {
      element: <LandingPageLayout />,
      errorElement: <Page404 />,
      children: defaultRoutes
    },
    {
      element:
        <AppGuard>
          <DashboardLayout />
        </AppGuard>,
      errorElement: <Page404 />,
      children: dashboardRoutes
    },
    {
      element:
        <AuthGuard>
          <AuthLayout />
        </AuthGuard>,
      errorElement: <Page404 />,
      children: authRoutes
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}