import { Box, Sheet, Typography, Grid } from "@mui/joy";

import { useGetInstructorCoursesQuery } from "app/api/courses.api.slice";

import CourseItem from "features/courses/components/courseItem";
import CourseSkeleton from "features/courses/components/courseSkeleton";
import AddCourseImageModal from "./components/addCourseImageModal";

import { Course } from "shared/ts/types";

export default function ManageCourses() {
  const { data, isLoading } = useGetInstructorCoursesQuery(undefined);

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
        <Box sx={{
          display: 'flex',
        }}>
          <Grid
            container
            direction="row"
            sx={{
              flexGrow: 1,
              flexWrap: "wrap",
              mx: { xs: 3, sm: 4, md: 5 }
            }}
          >
            {isLoading ?
              [1, 2, 3, 4].map((index) => (
                <CourseSkeleton key={index} />
              ))
              :
              data.map((course: Course) => (
                <CourseItem {...course} key={course.id} />
              ))
            }
          </Grid>
        </Box>
      </Box>
    </Box >
  )
}