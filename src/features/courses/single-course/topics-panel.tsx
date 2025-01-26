import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Sheet from '@mui/joy/Sheet';
import Box from '@mui/joy/Box';

import { setActiveCourse } from 'app/slice/courses.slice';
import { useGetTopicsFromCourseQuery } from 'app/api/topics.api.slice';
import { useGetInstructorFromCourseQuery } from 'app/api/courses.api.slice';
import { selectCurrentUser } from 'app/slice/user.slice';

import ProgressTable from './components/progress-table';
import TopicsList from './components/topics-list';
import TopicItemSkeleton from './components/skeletons/topic-item';
import CourseInstructor from './components/course-instructor';
import UserReview from './components/user-review';
import InstructorReview from './components/instructor-review';
import InstructorCardSkeleton from './components/skeletons/instructor-card';

export default function TopicsPanel({ id }: { id: string | undefined }) {
  const {
    data: topics,
    isLoading,
    error,
  } = useGetTopicsFromCourseQuery(id!);
  const { data: instructor, isLoading: instructorLoader } =
    useGetInstructorFromCourseQuery(id!);

  const dispatch = useDispatch();

  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(setActiveCourse(id));
  }, [dispatch, id]);

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
        {isLoading ? (
          <TopicItemSkeleton />
        ) : (
          topics && <TopicsList topics={topics} />
        )}
      </Box>
      <Box sx={{ flex: 1, px: 2, py: 2 }}>
        <ProgressTable id={id} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            my: 2,
          }}
        >
          {instructorLoader && <InstructorCardSkeleton />}
          {instructor?.id === user.id ? (
            <InstructorReview />
          ) : (
            <UserReview courseId={id} />
          )}
          <CourseInstructor
            instructor={instructor}
            isLoading={instructorLoader}
          />
        </Box>
      </Box>
      {error && 'Something went wrong please refresh the page.'}
    </Sheet>
  );
}
