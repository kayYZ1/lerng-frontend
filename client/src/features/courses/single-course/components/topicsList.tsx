import { useSelector } from 'react-redux';
import Stack from '@mui/joy/Stack';
import { Typography, Box, IconButton } from '@mui/joy';

import { Topic } from 'shared/ts/types';
import TopicItem from './topicItem';
import { selectCurrentUser } from 'app/users/user.slice';
import AddIcon from '@mui/icons-material/Add';

export default function TopicsList({ topics }: { topics: Topic[] }) {
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
          <IconButton>
            <AddIcon />
          </IconButton>
        </Box>
        : ""}
      {topics.map((item: Topic) => (
        <TopicItem {...item} key={item.id} />
      ))}
    </Stack>
  )
}