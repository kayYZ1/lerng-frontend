import { Box, Grid } from "@mui/joy"

import { useGetCoursesQuery } from "features/courses/courses.api.slice"

import CourseItem from "./courseItem"

import { Course } from "shared/types"
import CourseSkeleton from "./courseSkeleton"

export default function CourseList() {
  const { data, isLoading } = useGetCoursesQuery(undefined);

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
          px: 4
        }}
      >
        {isLoading ?
          [1, 2, 3, 4, 5].map((index) => (
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