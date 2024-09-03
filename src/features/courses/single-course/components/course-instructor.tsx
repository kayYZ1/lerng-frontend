import { useParams } from 'react-router-dom';

import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

import { useGetInstructorFromCourseQuery } from 'app/api/courses.api.slice';
import InstructorCardSkeleton from './skeletons/instructor-card';

export default function CourseInstructor() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetInstructorFromCourseQuery(id!);

  return (
    <>
      {isLoading ?
        <InstructorCardSkeleton />
        :
        <Card
          sx={{
            width: 320,
            maxWidth: '100%',
            boxShadow: 'lg',
          }}
        >
          <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
            <Avatar src={data.avatar} sx={{ '--Avatar-size': '4rem' }} />
            <Typography level="title-lg">{data.username}</Typography>
            <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
              {data.email}
            </Typography>
          </CardContent>
        </Card>
      }
    </>
  );
}