import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RouteChild } from 'shared/ts/types';
import { selectCurrentToken } from 'app/slice/auth.slice';
import { DashboardPath } from 'routes/paths';

export default function AuthGuard({ children }: RouteChild) {
  const token = useSelector(selectCurrentToken);
  return token ? <Navigate to={DashboardPath.ENROLLED} /> : children;
}
