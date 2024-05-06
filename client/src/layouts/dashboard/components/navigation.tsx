import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';

import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FeedbackIcon from '@mui/icons-material/Feedback';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SignpostIcon from '@mui/icons-material/Signpost';

import { selectCurrentUser } from 'app/users/user.slice';
import { CoursesPath, DashboardPath } from 'routes/paths';
import style from "../dashboard.module.css"

export default function Navigation() {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <List
      size="sm"
      sx={{ '--ListItem-radius': 'var(--joy-radius-sm)', '--List-gap': '4px' }}
    >
      <ListItem nested>
        <ListSubheader sx={{ letterSpacing: '2px', fontWeight: '800' }}>
          Browse
        </ListSubheader>
        <List
          aria-labelledby="nav-list-browse"
          sx={{
            '& .JoyListItemButton-root': { p: '8px' },
          }}
        >
          {currentUser.role === 'instructor' ?
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
            : ""
          }
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
                <FeedbackIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>
                Add a feedback
              </ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </ListItem>
    </List>
  );
}