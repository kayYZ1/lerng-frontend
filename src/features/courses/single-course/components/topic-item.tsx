import { Link } from 'react-router-dom';

import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import Stack from '@mui/joy/Stack';

import { Topic } from 'shared/ts/types';
import EditTopicModal from './modals/edit-topic';
import RemoveTopicModal from './modals/remove-topic';

type Props = {
  item: Topic;
  userId: string;
  instructorId: string;
};

export default function TopicItem({ item, userId, instructorId }: Props) {
  return (
    <Accordion>
      <AccordionSummary>{item.title}</AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ py: 1 }}>{item.description}</Typography>
        <Box
          sx={{
            marginTop: 'auto',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 1,
          }}
        >
          {instructorId === userId && (
            <Stack direction="row" gap={1}>
              <EditTopicModal {...item} />
              <RemoveTopicModal topicId={item.id} />
            </Stack>
          )}
          <Button
            color="primary"
            sx={{
              borderRadius: 25,
            }}
          >
            <Link
              to={`/dashboard/courses/course/topic/${item.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Go
            </Link>
          </Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
