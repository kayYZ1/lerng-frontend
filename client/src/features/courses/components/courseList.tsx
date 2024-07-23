import { Box, Grid } from "@mui/joy"

import { useGetCoursesQuery } from "app/api/courses.api.slice"

import CourseItem from "./courseItem"

import { Course } from "shared/ts/types"
import CourseSkeleton from "./courseSkeleton"
import { selectCourses } from "app/slice/courses.slice"
import { useSelector } from "react-redux"

export default function CourseList() {
  const { data, isLoading } = useGetCoursesQuery(undefined);

  const filteredCourses = useSelector(selectCourses)

  let courses = [];

  if (filteredCourses.length !== 0) {
    courses = filteredCourses;
  } else {
    courses = data;
  }

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
          px: { xs: 3, sm: 4, md: 5 }
        }}
      >
        {isLoading ?
          [1, 2, 3, 4].map((index) => (
            <CourseSkeleton key={index} />
          ))
          :
          courses.map((course: Course) => (
            <CourseItem {...course} key={course.id} />
          ))
        }
      </Grid>
    </Box>
  )
}