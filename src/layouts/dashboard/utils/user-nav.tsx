import { Link } from 'react-router-dom';

import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';

import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SignpostIcon from '@mui/icons-material/Signpost';

import { CoursesPath, DashboardPath } from 'routes/paths';
import style from '../dashboard.module.css';

const UserListItems = [
  {
    link: DashboardPath.ENROLLED,
    name: 'Enrolled',
    icon: <LibraryBooksIcon />
  },
  {
    link: CoursesPath.COURSES,
    name: 'Courses',
    icon: <SignpostIcon />
  },
  {
    link: DashboardPath.FEEDBACK,
    name: 'Feedback',
    icon: <FeedbackIcon />
  }
];

export default function UserNav() {
  return (
    <List
      aria-labelledby="nav-list-browse"
      sx={{
        '& .JoyListItemButton-root': { p: '8px' },
      }}
    >
      {UserListItems.map(item => (
        <ListItem key={item.name}>
          <ListItemButton>
            <ListItemDecorator>
              {item.icon}
            </ListItemDecorator>
            <ListItemContent>
              <Link to={item.link} className={style.link}>{item.name}</Link>
            </ListItemContent>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}