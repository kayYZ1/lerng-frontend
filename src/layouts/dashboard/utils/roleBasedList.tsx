import { Link } from 'react-router-dom';

import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';

import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FeedbackIcon from '@mui/icons-material/Feedback';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SignpostIcon from '@mui/icons-material/Signpost';

import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'app/slice/user.slice';

import { CoursesPath, DashboardPath } from 'routes/paths';
import style from '../dashboard.module.css';

export default function RoleBasedList() {
  const user = useSelector(selectCurrentUser);

  switch (user.role) {
    case 'instructor': return <InstructorList />
    case 'user': return <UserList />
  }
}

function InstructorList() {
  return (
    <List
      aria-labelledby="nav-list-browse"
      sx={{
        '& .JoyListItemButton-root': { p: '8px' },
      }}
    >
      <ListItem>
        <ListItemButton>
          <ListItemDecorator>
            <DashboardIcon fontSize="small" />
          </ListItemDecorator>
          <ListItemContent>
            <Link to={DashboardPath.DASHBOARD} className={style.link}>Instructor panel</Link>
          </ListItemContent>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemDecorator>
            <SignpostIcon fontSize="small" />
          </ListItemDecorator>
          <ListItemContent>
            <Link to={CoursesPath.COURSES} className={style.link}>Courses</Link>
          </ListItemContent>
        </ListItemButton>
      </ListItem>
    </List>
  )
}

function UserList() {
  return (
    <List
      aria-labelledby="nav-list-browse"
      sx={{
        '& .JoyListItemButton-root': { p: '8px' },
      }}
    >
      <ListItem>
        <ListItemButton>
          <ListItemDecorator>
            <LibraryBooksIcon fontSize="small" />
          </ListItemDecorator>
          <ListItemContent>
            <Link to={DashboardPath.ENROLLED} className={style.link}>Enrolled</Link>
          </ListItemContent>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemDecorator>
            <SignpostIcon fontSize="small" />
          </ListItemDecorator>
          <ListItemContent>
            <Link to={CoursesPath.COURSES} className={style.link}>Courses</Link>
          </ListItemContent>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemDecorator>
            <FeedbackIcon fontSize="small" />
          </ListItemDecorator>
          <ListItemContent>
            <Link to={DashboardPath.FEEDBACK} className={style.link}>Feedback</Link>
          </ListItemContent>
        </ListItemButton>
      </ListItem>
    </List>
  )
}