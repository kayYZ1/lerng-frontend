import { Box, Grid } from "@mui/joy";

import { Course } from "shared/ts/types";
import CourseItem from "./course-item";
import CourseSkeleton from "./course-skeleton";

interface Props {
  data: Course[]
  isLoading: boolean
}

export default function CoursesList({ data, isLoading }: Props) {
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
          data.map((course) => (
            <CourseItem {...course} key={course.id} />
          ))
        }
      </Grid>
    </Box>
  )
}