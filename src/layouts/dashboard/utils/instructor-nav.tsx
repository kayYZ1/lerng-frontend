import { Link } from 'react-router-dom';

import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';

import DashboardIcon from '@mui/icons-material/Dashboard';
import SignpostIcon from '@mui/icons-material/Signpost';

import { CoursesPath, DashboardPath } from 'routes/paths';
import style from '../dashboard.module.css';

const InstructorListItems = [
  {
    link: DashboardPath.DASHBOARD,
    name: 'Instructor Panel',
    icon: <DashboardIcon />
  },
  {
    link: CoursesPath.COURSES,
    name: 'Courses',
    icon: <SignpostIcon />
  }
];

export default function InstructorNav() {
  return (
    <List
      aria-labelledby="nav-list-browse"
      sx={{
        '& .JoyListItemButton-root': { p: '8px' },
      }}
    >
      {InstructorListItems.map(item => (
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
