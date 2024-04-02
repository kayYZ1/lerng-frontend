import { Box, Button, Sheet, Typography } from "@mui/joy";
import { Link } from "react-router-dom";

import CourseList from "pages/courses/components/courseList";
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
        sx={{
          maxWidth: "1096px",
          borderRadius: 'sm',
          mx: { xs: "none", md: 4 },
        }}>
        <Box sx={{ px: 2, py: 2, display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ px: 1, py: 1 }}>Create new course</Typography>
          <Button>
            <Link to={DashboardPath.CREATE_COURSE} style={{ textDecoration: "none", color: "inherit" }}>
              Create
            </Link>
          </Button>
        </Box>
      </Sheet>
      <Box>
        <Typography sx={{ mx: { xs: "none", md: 4 } }}>Your current courses</Typography>
        <CourseList instructor={true} />
      </Box>
    </Box>
  )
}