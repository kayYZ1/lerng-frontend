import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';
import Skeleton from '@mui/joy/Skeleton';

import QuizCard from './quiz-card';
import BreadcrumbsCustom from 'shared/components/breadcrumbs-custom';
import { selectActiveCourse } from 'app/slice/courses.slice';
import { useSelector } from 'react-redux';
import { useGetCourseQuery } from 'app/api/courses.api.slice';

export default function Quiz() {
  const activeCourse = useSelector(selectActiveCourse);
  const { data: course, isLoading } = useGetCourseQuery(
    activeCourse as unknown as string,
  );

  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box
        sx={{
          mx: { xs: 5, md: 8 },
        }}
      >
        <BreadcrumbsCustom />
        <Typography level="h2" component="h1" sx={{ mt: 1, mb: 1 }}>
          Quiz
        </Typography>
      </Box>
      <Divider sx={{ my: 1 }} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          my: { xs: 2, md: 4 },
        }}
      >
        {isLoading ? (
          <Skeleton variant="rectangular" width={350} height="1em" />
        ) : (
          <Box width={400} py={2} flexWrap="wrap">
            <Typography level="body-md">Quiz for: </Typography>
            <Typography level="body-sm">{course.title}</Typography>
          </Box>
        )}
        <QuizCard />
      </Box>
    </Box>
  );
}
