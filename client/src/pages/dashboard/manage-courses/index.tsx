import { Box, Button, Sheet, Typography } from "@mui/joy";
import { Link } from "react-router-dom";

import CourseList from "pages/courses/components/courseList";
import CoursesTable from "./components/courses-table";
import { DashboardPath } from "routes/paths";

export default function ManageCourses() {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: 2,
      }}
    >
      <Sheet
        variant="outlined"
        sx={{
          maxWidth: "1096px",
          borderRadius: 'sm',
          gridColumn: '1/-1',
          display: { xs: 'flex', md: 'flex' },
          mx: { xs: "none", md: 4 }
        }}
      >
        <CoursesTable />
      </Sheet>
      <Sheet
        sx={{
          maxWidth: "1096px",
          borderRadius: 'sm',
          mx: { xs: "none", md: 4 }
        }}>
        <Box sx={{ px: 2, py: 2, display: "flex" }}>
          <Typography sx={{ px: 1, py: 1 }}>Create new course</Typography>
          <Button>
            <Link to={DashboardPath.CREATE_COURSE} style={{ textDecoration: "none", color: "inherit" }}>
              Create
            </Link>
          </Button>
        </Box>
      </Sheet>
      <Box>
        <CourseList instructor={true} />
      </Box>
    </Box>
  )
}