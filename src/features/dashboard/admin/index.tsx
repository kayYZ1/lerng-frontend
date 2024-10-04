import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectCurrentUser } from "app/slice/user.slice";
import { CoursesPath } from "routes/paths";

import AdminPanel from "./admin-panel";

export default function Dashboard() {
  const currentUser = useSelector(selectCurrentUser);
  return currentUser.role === 'admin' ? <AdminPanel /> : <Navigate to={CoursesPath.COURSES} />
}
