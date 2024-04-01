import { Box, Sheet, Typography } from "@mui/joy"

import CreateCourseStepper from "./components/create-course.stepper"
import RenderCourseForm from "./components/forms"

export default function CreateCourse() {

  return (
    <Box sx={{
      display: "flex",
      my: 2
    }} justifyContent="center">
      <Sheet sx={{
        maxWidth: "1024px",
        borderRadius: 'sm',
        backgroundColor: "inherit"
      }}>
        <Typography level="h2" sx={{ p: 2, textAlign: "center" }}>Course creation panel</Typography>
        <Box sx={{ px: 2, pb: 2 }}>
          <CreateCourseStepper />
        </Box>
        <Box>
          <RenderCourseForm />
        </Box>
      </Sheet>
    </Box>
  )
}