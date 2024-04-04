import { useParams } from 'react-router-dom';
import Sheet from '@mui/joy/Sheet';
import { Box } from '@mui/joy';

import { useGetTopicsFromCourseQuery } from 'features/topics/topics.api.slice';

import ProgressTable from './components/progressTable';
import TableSkeleton from './components/skeletons/tableSkeleton';
import TopicsList from './components/topicsList';
import TopicItemSkeleton from './components/skeletons/topicItemSkeleton';
import TopicInstructor from './components/topicInstructor';

export default function TopicsPanel() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetTopicsFromCourseQuery(id!);

  return (
    <Sheet
      sx={{
        flex: 1,
        width: '100%',
        px: { xs: 2, md: 6 },
        mx: 'auto',
        pt: { xs: 'var(--Header-height)', sm: 0 },
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'minmax(min-content, min(50%, 1000px)) 1fr',
        },
      }}
    >
      <Box sx={{ px: 2, py: 2 }}>
        {isLoading ? <TopicItemSkeleton /> : <TopicsList topics={data} />}
      </Box>
      <Box sx={{ px: 2, py: 2 }}>
        {isLoading ? <TableSkeleton /> : <ProgressTable topics={data} />}
      </Box>
      <Box sx={{ gridColumn: { xs: '1', sm: '2' }, px: 2, py: 2 }}>
        <TopicInstructor />
      </Box>
      {error ? "Something went wrong please refresh" : ""}
    </Sheet>
  )
}