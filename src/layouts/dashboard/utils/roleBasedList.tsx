import { useSelector } from 'react-redux';

import { selectCurrentUser } from 'app/slice/user.slice';

import InstructorList from './instructorList';
import UserList from './userList';

export default function RoleBasedList() {
  const user = useSelector(selectCurrentUser);

  switch (user.role) {
    case 'instructor': return <InstructorList />
    case 'user': return <UserList />
  }
}
