import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SignpostIcon from '@mui/icons-material/Signpost';
import SettingsIcon from '@mui/icons-material/Settings';

import { CoursesPath, DashboardPath } from 'routes/paths';

const PageSelectOptions = [
  {
    label: 'Courses',
    desc: 'All available courses',
    icon: <LibraryBooksIcon />,
    link: CoursesPath.COURSES,
  },
  {
    label: 'Enrolled',
    desc: "User's personal courses",
    icon: <SignpostIcon />,
    link: DashboardPath.ENROLLED,
  },
  {
    label: 'Settings',
    desc: "User's or application settings",
    icon: <SettingsIcon />,
    link: DashboardPath.SETTINGS,
  },
];

export default PageSelectOptions;
