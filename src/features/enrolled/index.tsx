import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { useGetEnrolledCoursesQuery } from "app/api/enrolled.api.slice";
import { selectCurrentUser } from "app/slice/user.slice";
import { CoursesPath, DashboardPath } from "routes/paths";

import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Input from "@mui/joy/Input";
import Divider from "@mui/joy/Divider";

import SearchRounded from "@mui/icons-material/SearchRounded";

import EnrolledList from "./components/enrolled-list";
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
  const { data, isLoading } = useGetEnrolledCoursesQuery("Enrolled");

  return (
    <Box sx={{
      flex: 1, width: '99%'
    }}>
      <Box sx={{
        px: {
          xs: 4, md: 6
        }
      }}
      >
        <BreadcrumbsCustom />
        <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
          My courses
        </Typography>
      </Box >
      <Sheet
        sx={{
          display: { xs: 'flex' },
          gap: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: { xs: 'space-between', sm: 'flex-start' },
          px: { xs: 4, sm: 4, md: 6, lg: 6 },
          py: { xs: 2, md: 2 }
        }}
      >
        <Input
          size="sm"
          sx={{ width: "25em" }}
          placeholder="Search through enrolled courses"
          startDecorator={<SearchRounded color="primary" />}
        />
      </Sheet>
      <Divider sx={{ my: 2 }} />
      <EnrolledList data={data} isLoading={isLoading} />
    </Box >
  )
}