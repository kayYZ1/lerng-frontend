import { useParams } from 'react-router-dom';
import Sheet from '@mui/joy/Sheet';
import { Box, Typography } from '@mui/joy';

import { useGetTopicsFromCourseQuery } from 'app/topics/topics.api.slice';

import ProgressTable from './components/progressTable';
import TopicsList from './components/topicsList';
import TopicItemSkeleton from './components/skeletons/topicItemSkeleton';
import CourseInstructor from './components/courseInstructor';

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
          sm: '1fr minmax(min-content, min(50%, 1000px))',
        },
        gridTemplateAreas: {
          xs: `
        "topicsList"
        "progressTable"
        "topicInstructor"
      `,
          sm: `
        "topicsList progressTable"
        "topicsList topicInstructor"
      `,
        },
      }}
    >
      <Box sx={{ gridArea: 'topicsList', px: 2, py: 2 }}>
        {isLoading ? <TopicItemSkeleton /> : <TopicsList topics={data} />}
      </Box>
      <Box sx={{ gridArea: 'progressTable', px: 2, py: 2 }}>
        <ProgressTable />
      </Box>
      <Box sx={{
        gridArea: 'topicInstructor', px: 2, py: 2,
        display: 'flex', alignItems: 'center', flexDirection: "column"
      }}>
        <Typography level="title-md" sx={{ pb: 2, display: "flex" }}>The instructor for this course is</Typography>
        <CourseInstructor />
      </Box>
      {error ? "Something went wrong please refresh" : ""}
    </Sheet>
  )
}