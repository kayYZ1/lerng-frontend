import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCurrentToken } from 'app/slice/auth.slice';
import { DashboardPath } from 'routes/paths';

export default function AuthGuard({
  children,
}: {
  children: JSX.Element;
}) {
  const token = useSelector(selectCurrentToken);
  return token ? <Navigate to={DashboardPath.ENROLLED} /> : children;
}
