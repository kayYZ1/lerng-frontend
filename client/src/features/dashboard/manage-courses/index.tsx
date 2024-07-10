import { Box, Sheet, Typography } from "@mui/joy";

import CourseList from "features/courses/components/courseList";
import AddCourseImageModal from "./components/addCourseImageModal";

export default function ManageCourses() {
  return (
    <Box>
      <Sheet
        sx={{
          maxWidth: "1096px",
          borderRadius: 'sm',
          mx: { xs: "none", md: 4 },
        }}>
        <Box sx={{ px: 2, py: 2, display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ px: 1, py: 1 }}>Create new course</Typography>
          <AddCourseImageModal />
        </Box>
      </Sheet>
      <Box>
        <Typography sx={{ mx: { xs: "none", md: 4 }, px: 2 }}>Your current courses</Typography>
        <CourseList instructor={true} />
      </Box>
    </Box>
  )
}