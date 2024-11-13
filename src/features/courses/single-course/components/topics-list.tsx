import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import AccordionGroup from '@mui/joy/AccordionGroup';
import { accordionSummaryClasses } from '@mui/joy/AccordionSummary';

import { Topic } from 'shared/ts/types';
import { selectCurrentUser } from 'app/slice/user.slice';
import { useGetInstructorFromCourseQuery } from 'app/api/courses.api.slice';

import TopicItem from './topic-item';
import AddTopicModal from './modals/add-topic';
import EmptyTopic from '../empty-state';

export default function TopicsList({ topics }: { topics: Topic[] }) {
  const { id } = useParams<{ id: string }>();
  const { data: instructor } = useGetInstructorFromCourseQuery(id!);

  const user = useSelector(selectCurrentUser);

  return (
    <Stack
      spacing={2}
      sx={{
        maxWidth: '80ch',
      }}
    >
      {instructor && instructor.id === user.id && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Typography sx={{ px: 1, py: 1 }}>Add topic</Typography>
          <AddTopicModal />
        </Box>
      )}
      <AccordionGroup
        transition={{
          initial: '0.3s ease-out',
          expanded: '0.2s ease',
        }}
        sx={{
          maxWidth: 700,
          [`& .${accordionSummaryClasses.indicator}`]: {
            transition: '0.2s',
          },
          [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]:
            {
              transform: 'rotate(180deg)',
            },
        }}
      >
        {topics.map(
          (item: Topic) =>
            instructor && (
              <TopicItem
                item={item}
                instructorId={instructor.id}
                userId={user.id}
              />
            ),
        )}
      </AccordionGroup>
      {topics.length === 0 && <EmptyTopic />}
    </Stack>
  );
}
