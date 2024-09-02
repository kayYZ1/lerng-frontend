import Sheet from '@mui/joy/Sheet';
import Box from '@mui/joy/Box';

import { setActiveCourseId } from 'app/slice/courses.slice';
import { useGetTopicsFromCourseQuery } from 'app/api/topics.api.slice';
import { useDispatch } from 'react-redux';

import ProgressTable from './components/progressTable';
import TopicsList from './components/topicsList';
import TopicItemSkeleton from './components/skeletons/topicItemSkeleton';
import CourseInstructor from './components/courseInstructor';

import { IdProps } from './shared/types';
import { useEffect } from 'react';

export default function TopicsPanel({ id }: IdProps) {
  const { data, isLoading, error } = useGetTopicsFromCourseQuery(id!);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveCourseId(id));
  }, [dispatch])

  return (
    <Sheet
      sx={{
        flex: 1,
        width: '100%',
        px: { xs: 2, md: 6 },
        mx: 'auto',
        pt: { xs: 'var(--Header-height)', sm: 0 },
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      <Box
        sx={{
          flex: { xs: '1 1 auto', sm: '1 1', md: '1 1' },
          px: 2,
          py: 2,
        }}
      >
        {isLoading ? <TopicItemSkeleton /> : <TopicsList topics={data} />}
      </Box>
      <Box sx={{ flex: 1, px: 2, py: 2 }}>
        <ProgressTable id={id} />
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 2 }}>
          <CourseInstructor />
        </Box>
      </Box>
      {error ? "Something went wrong please refresh" : ""}
    </Sheet >
  )
}