import { createBrowserRouter, RouterProvider } from "react-router-dom"

import DashboardLayout from "layouts/Dashboard/app"
import AuthLayout from "layouts/Auth/layout"

import Page404 from "pages/404"

import { authRoutes, dashboardRoutes } from "routes"
import AuthRoute from "shared/components/routes/AuthRoute"

export default function App() {
  const router = createBrowserRouter([
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