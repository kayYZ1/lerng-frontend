import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Skeleton from '@mui/joy/Skeleton';

import StarIcon from '@mui/icons-material/Star';

import { useGetRatingByCourseQuery } from 'app/api/enrolled.api.slice';

export default function CourseRating({ courseId }: { courseId: string }) {
  const { data: rating, isLoading } = useGetRatingByCourseQuery(courseId);
  console.log(rating);
  return (
    <Box display='flex' alignItems='center'>
      {isLoading ? <Skeleton width={25} height={15} sx={{ paddingTop: 2 }} /> :
        <>
          <Typography component="p" level='body-xs'>
            {rating.rating}/5
          </Typography>
          <StarIcon sx={{ fontSize: 16, color: '#a3850e' }} />
          <Typography component="p" level='body-xs'>
            ({rating.votes})
          </Typography>
        </>
      }
    </Box >
  );
} 