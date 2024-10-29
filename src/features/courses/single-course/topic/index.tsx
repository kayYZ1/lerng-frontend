import { useParams } from 'react-router-dom';

import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';

import { useGetTopicQuery } from 'app/api/topics.api.slice';

import TypographySkeleton from '../components/skeletons/typography';
import TopicPanel from './single-topic';
import BreadcrumbsCustom from 'shared/components/breadcrumbs-custom';

export default function Topic() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetTopicQuery(id!);

  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box
        sx={{
          mx: { xs: 5, md: 8 },
        }}
      >
        <BreadcrumbsCustom />
        <Typography component={'div'} level="h2" sx={{ mt: 1, mb: 1 }}>
          {isLoading ? <TypographySkeleton /> : data.title}
          {error ? 'Something went wrong please refresh' : ''}
        </Typography>
        <Typography component={'div'} level="body-md">
          {isLoading ? <TypographySkeleton /> : data.description}
        </Typography>
      </Box>
      <Divider sx={{ my: 1 }} />
      <Box sx={{ flex: 1 }}>
        <TopicPanel id={id} />
      </Box>
    </Box>
  );
}
