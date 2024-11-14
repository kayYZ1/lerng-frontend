import { Fragment } from 'react/jsx-runtime';

import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

import InstructorCardSkeleton from './skeletons/instructor-card';

type Instructor = {
  id: string;
  email: string;
  username: string;
  avatar: string;
};

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
              src={instructor.avatar}
              sx={{ '--Avatar-size': '4rem' }}
            />
            <Typography level="title-lg">{instructor.username}</Typography>
            <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
              {instructor.email}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Fragment>
  );
}
