import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectCurrentUser } from 'app/slice/user.slice';
import { CoursesPath } from 'routes/paths';

import InstructorPanel from './instructor-panel';

export default function Dashboard() {
  const currentUser = useSelector(selectCurrentUser);
  return currentUser.role === 'instructor' ? (
    <InstructorPanel />
  ) : (
    <Navigate to={CoursesPath.COURSES} />
  );
}
