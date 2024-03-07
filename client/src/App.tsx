import { createBrowserRouter, RouterProvider } from "react-router-dom"

import DashboardLayout from "layouts/Dashboard/layout"

import Page404 from "pages/404"

import { dashboardRoutes } from "routes"

export default function App() {
  const router = createBrowserRouter([
    {
      element: <DashboardLayout />,
      errorElement: <Page404 />,
      children: dashboardRoutes
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}