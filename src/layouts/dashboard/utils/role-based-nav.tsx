import { useSelector } from 'react-redux';

import { selectCurrentUser } from 'app/slice/user.slice';

import InstructorNav from './instructor-nav';
import UserNav from './user-nav';
import AdminNav from './admin-nav';

export default function RoleBasedNav() {
  const user = useSelector(selectCurrentUser);

  switch (user.role) {
    case 'instructor':
      return <InstructorNav />;
    case 'user':
      return <UserNav />;
    case 'admin':
      return <AdminNav />;
  }
}
