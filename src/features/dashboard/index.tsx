import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectCurrentUser } from 'app/slice/user.slice';
import { CoursesPath } from 'routes/paths';

import DashboardPanel from './dashboard-panel';

export default function Dashboard() {
  const currentUser = useSelector(selectCurrentUser);
  return currentUser.role === 'instructor' ? (
    <DashboardPanel />
  ) : (
    <Navigate to={CoursesPath.COURSES} />
  );
}
