import { Box, Grid } from "@mui/joy";

import { useGetCoursesQuery } from "app/api/courses.api.slice";

import { Course } from "shared/ts/types";
import CourseItem from "./courseItem";
import CourseSkeleton from "./courseSkeleton";

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
          px: { xs: 3, sm: 4, md: 5 }
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