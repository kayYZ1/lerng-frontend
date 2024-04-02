import { Box, Grid } from "@mui/joy"

import { useGetCoursesQuery, useGetInstructorCoursesQuery } from "features/courses/courses.api.slice"

import CourseItem from "./courseItem"

import { Course, IsInstructor } from "shared/types"
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
          mx: { xs: 2, md: 5 }
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