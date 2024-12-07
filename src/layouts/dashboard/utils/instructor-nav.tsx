import { Link, useLocation } from 'react-router-dom';

import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';

import DashboardIcon from '@mui/icons-material/Dashboard';
import SignpostIcon from '@mui/icons-material/Signpost';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

import { CoursesPath, DashboardPath } from 'routes/paths';
import style from '../dashboard.module.css';

const InstructorListItems = [
  {
    link: CoursesPath.COURSES,
    name: 'Courses',
    icon: <SignpostIcon />,
  },
  {
    link: DashboardPath.ENROLLED,
    name: 'Enrolled',
    icon: <LibraryBooksIcon />,
  },
  {
    link: DashboardPath.FEEDBACK_INSTRUCTOR,
    name: 'Feedback',
    icon: <FeedbackIcon />,
  },
  {
    link: DashboardPath.DASHBOARD,
    name: 'Instructor',
    icon: <DashboardIcon />,
  },
];

export default function InstructorNav() {
  const location = useLocation();

  return (
    <List
      aria-labelledby="nav-list-browse"
      sx={{
        '& .JoyListItemButton-root': { p: '8px' },
      }}
    >
      {InstructorListItems.map((item) => (
        <ListItem
          key={item.name}
          sx={{
            backgroundColor: location.pathname.includes(item.link)
              ? 'primary.softBg'
              : 'inherit',
          }}
        >
          <ListItemButton>
            <ListItemDecorator>{item.icon}</ListItemDecorator>
            <ListItemContent>
              <Link to={item.link} className={style.link}>
                {item.name}
              </Link>
            </ListItemContent>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
