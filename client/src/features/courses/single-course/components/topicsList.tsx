import Stack from '@mui/joy/Stack';

import { Topic } from 'shared/ts/types';
import TopicItem from './topicItem';

export default function TopicsList({ topics }: { topics: Topic[] }) {
  return (
    <Stack
      spacing={2}
      sx={{
        maxWidth: '80ch',
      }}
    >
      {topics.map((item: Topic) => (
        <TopicItem {...item} key={item.id} />
      ))}
    </Stack>
  )
}