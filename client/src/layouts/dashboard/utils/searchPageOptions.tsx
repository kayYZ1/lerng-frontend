import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SignpostIcon from '@mui/icons-material/Signpost';
import SettingsIcon from '@mui/icons-material/Settings';

export const SearchPageOptions = [
  { label: 'Courses', desc: "All available courses", icon: <LibraryBooksIcon /> },
  { label: 'Enrolled', desc: "User's personal courses", icon: <SignpostIcon /> },
  { label: 'Settings', desc: "User's or application settings", icon: <SettingsIcon /> },
  { label: 'Feedback', desc: "Add feedback regarding course/instructor", icon: <FeedbackIcon /> },
]