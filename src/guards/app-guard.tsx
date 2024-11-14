import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCurrentToken } from 'app/slice/auth.slice';
import { AuthPath } from 'routes/paths';

export default function AppGuard({ children }: { children: JSX.Element }) {
  const token = useSelector(selectCurrentToken);
  return token ? children : <Navigate to={AuthPath.SIGN_IN} />;
}
