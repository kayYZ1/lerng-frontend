import Box from '@mui/joy/Box';
import Grid from '@mui/joy/Grid';

import CourseItem from 'features/courses/components/course-item';
import CourseSkeleton from 'features/courses/components/course-skeleton';

import EnrolledEmpty from '../empty-state';
import { Enrolled } from 'shared/ts/types';

export default function EnrolledList({
  data,
  isLoading,
}: {
  data: Enrolled[];
  isLoading: boolean;
}) {
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Grid
        container
        spacing={1}
        direction="row"
        sx={{
          flexGrow: 1,
          px: {
            xs: 4,
            sm: 4,
            md: 5,
            lg: 5,
          },
        }}
      >
        {isLoading
          ? [1, 2, 3, 4].map((index) => <CourseSkeleton key={index} />)
          : data.map((el) => <CourseItem {...el.course} key={el.id} />)}
        {data && data.length === 0 && <EnrolledEmpty />}
      </Grid>
    </Box>
  );
}
