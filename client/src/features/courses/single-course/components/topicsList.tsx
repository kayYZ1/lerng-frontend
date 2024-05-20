import { useSelector } from 'react-redux';
import Stack from '@mui/joy/Stack';
import { Typography, Box } from '@mui/joy';
import AccordionGroup from '@mui/joy/AccordionGroup';
import { accordionSummaryClasses } from '@mui/joy/AccordionSummary';

import { Topic } from 'shared/ts/types';
import TopicItem from './topicItem';
import { selectCurrentUser } from 'app/slice/user.slice';
import AddTopicModal from './modals/addTopicModal';

interface ITopicsListProps {
  topics: Topic[],
}

export default function TopicsList({ topics }: ITopicsListProps) {
  const user = useSelector(selectCurrentUser)
  return (
    <Stack
      spacing={2}
      sx={{
        maxWidth: '80ch',
      }}
    >
      {user.role === 'instructor' ?
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Typography sx={{ px: 1, py: 1 }}>Add topic</Typography>
          <AddTopicModal />
        </Box>
        : ""}
      <AccordionGroup
        transition={{
          initial: "0.3s ease-out",
          expanded: "0.2s ease",
        }}
        sx={{
          maxWidth: 700,
          [`& .${accordionSummaryClasses.indicator}`]: {
            transition: '0.2s',
          },
          [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
            transform: 'rotate(180deg)',
          },
        }}
      >
        {topics.map((item: Topic) => (
          <TopicItem {...item} key={item.id} />
        ))}
      </AccordionGroup>
    </Stack>
  )
}