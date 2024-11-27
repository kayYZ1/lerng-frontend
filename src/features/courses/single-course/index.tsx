import { useParams } from 'react-router-dom';

import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';

import { useGetCourseQuery } from 'app/api/courses.api.slice';

import TypographySkeleton from './components/skeletons/typography';
import TopicsPanel from './topics-panel';
import BreadcrumbsCustom from 'shared/components/breadcrumbs-custom';

export default function Course() {
  const { id } = useParams<{ id: string }>();
  const { data: course, isLoading, error } = useGetCourseQuery(id!);

  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box
        sx={{
          mx: { xs: 5, md: 8 },
        }}
      >
        <BreadcrumbsCustom />
        {isLoading ? (
          <TypographySkeleton />
        ) : (
          <Box>
            <Typography component="div" level="h2" sx={{ mt: 1 }}>
              {course?.title}
            </Typography>
            <Typography
              component="div"
              level="body-sm"
              sx={{ mt: 1, mb: 2 }}
            >
              {course?.description}
            </Typography>
          </Box>
        )}
        {error && 'Something went wrong please refresh the page.'}
      </Box>
      <Divider sx={{ my: 1 }} />
      <Box sx={{ flex: 1 }}>
        <TopicsPanel id={id} />
      </Box>
    </Box>
  );
}
