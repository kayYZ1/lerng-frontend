import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectCurrentUser } from "app/slice/user.slice";
import { CoursesPath, DashboardPath } from "routes/paths";

import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import Divider from "@mui/joy/Divider";

import SearchRounded from "@mui/icons-material/SearchRounded";

import EnrolledList from "./components/enrolledList";
import BreadcrumbsCustom from "shared/components/breadcrumbsCustom";

export default function Enrolled() {
  const user = useSelector(selectCurrentUser);

  switch (user.role) {
    case 'user': return <MyCourses />
    case 'instructor': return <Navigate to={DashboardPath.DASHBOARD} />
    default: return <Navigate to={CoursesPath.COURSES} />
  }
}

function MyCourses() {
  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box sx={{
        px: { xs: 2, md: 6 }
      }}
      >
        <BreadcrumbsCustom />
        <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
          My courses
        </Typography>
      </Box>
      <Sheet
        sx={{
          display: { xs: 'flex' },
          gap: 1,
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: { xs: 'space-between', sm: 'flex-start' },
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 2 }
        }}
      >
        <Input
          size="sm"
          sx={{ width: "25em" }}
          placeholder="Search through enrolled courses"
          startDecorator={<SearchRounded color="primary" />}
          endDecorator={
            <IconButton
              variant="outlined"
            >
              <Typography level="title-sm" textColor="text.icon">
                ⌘ K
              </Typography>
            </IconButton>
          }
        />
      </Sheet>
      <Divider sx={{ my: 2 }} />
      <EnrolledList />
    </Box>
  )
}