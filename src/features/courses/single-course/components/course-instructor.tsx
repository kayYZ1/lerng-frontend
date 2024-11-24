import { Fragment } from 'react/jsx-runtime';

import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

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
            <SendEmailModal {...instructor} />
          </CardContent>
        </Card>
      )}
    </Fragment>
  );
}
