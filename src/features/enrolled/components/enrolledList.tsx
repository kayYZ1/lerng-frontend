import Box from "@mui/joy/Box";
import Grid from "@mui/joy/Grid";

import { useGetEnrolledCoursesQuery } from "app/api/enrolled.api.slice";

import CourseItem from "features/courses/components/courseItem";
import CourseSkeleton from "features/courses/components/courseSkeleton";

import { EnrolledCourses } from "shared/ts/types";

export default function EnrolledList() {
  const { data, isLoading } = useGetEnrolledCoursesQuery(undefined);
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
          data.map((el: EnrolledCourses) => (
            <CourseItem {...el.course} key={el.id} />
          ))
        }
      </Grid>
    </Box>
  )
}