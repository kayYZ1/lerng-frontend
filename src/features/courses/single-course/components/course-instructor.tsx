import { Fragment } from 'react/jsx-runtime';

import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import Tooltip from '@mui/joy/Tooltip';

import Chat from '@mui/icons-material/Chat';

import InstructorCardSkeleton from './skeletons/instructor-card';
import SendEmailModal from './modals/send-email';
import { Instructor } from 'shared/ts/types';

export default function CourseInstructor({
  instructor,
  isLoading,
}: {
  instructor: Instructor;
  isLoading: boolean;
}) {
  return (
    <Fragment>
      {isLoading ? (
        <InstructorCardSkeleton />
      ) : (
        <Card
          sx={{
            boxShadow: 'lg',
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            p: 3,
            my: {
              xs: 2,
              md: 0,
            },
          }}
        >
          <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
            <Avatar
              src={instructor.imageUrl}
              sx={{ '--Avatar-size': '4rem' }}
            />
            <Typography level="title-lg">{instructor.username}</Typography>
            <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
              {instructor.email}
            </Typography>
            <Stack direction="row" gap={4}>
              <SendEmailModal {...instructor} />
              <Tooltip title="Chat with instructor" variant="solid">
                <IconButton>
                  <Chat />
                </IconButton>
              </Tooltip>
            </Stack>
          </CardContent>
        </Card>
      )}
    </Fragment>
  );
}
