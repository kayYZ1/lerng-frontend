import { Box, Grid } from "@mui/joy"

import { useGetCoursesQuery, useGetInstructorCoursesQuery } from "app/api/courses.api.slice"

import CourseItem from "./courseItem"

import { Course, IsInstructor } from "shared/ts/types"
import CourseSkeleton from "./courseSkeleton"

export default function CourseList(instructorView: IsInstructor) {
  const { data, isLoading } = instructorView.instructor ? useGetInstructorCoursesQuery(undefined) : useGetCoursesQuery(undefined);

  return (
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
  )
}