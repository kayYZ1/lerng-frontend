import { Box, Sheet, Typography } from "@mui/joy"

import CreateCourseStepper from "./components/create-course.stepper"
import CreateCourseForm from "./components/forms/create-course.form"

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
          <CreateCourseForm />
        </Box>
      </Sheet>
    </Box>
  )
}