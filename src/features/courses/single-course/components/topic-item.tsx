import { Link } from 'react-router-dom';

import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';

import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'app/slice/user.slice';

import { Topic } from 'shared/ts/types';
import EditTopicModal from './modals/edit-topic';

export default function TopicItem(item: Topic) {
  const currentUser = useSelector(selectCurrentUser);

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
          {currentUser.role === 'instructor' ? (
            <EditTopicModal {...item} />
          ) : null}
          <Button color="primary">
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
