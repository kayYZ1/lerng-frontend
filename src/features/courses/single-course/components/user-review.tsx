import { useState } from 'react';

import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';

import StarIcon from '@mui/icons-material/Star';
import Skeleton from '@mui/joy/Skeleton';

import {
  useGetRatingQuery,
  useUpdateRatingMutation,
} from 'app/api/enrolled.api.slice';

export default function UserReview({
  courseId,
}: {
  courseId: string | undefined;
}) {
  const [hover, setHover] = useState(0);

  const { data: reviewScore, isLoading } = useGetRatingQuery(courseId);
  const [UpdateRating] = useUpdateRatingMutation();

  const handleReviewScore = async (score: number) => {
    const values = {
      rating: score,
    };
    await UpdateRating({ courseId, values });
  };

  return (
    <Card
      sx={{
        boxShadow: 'lg',
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        mr: 2,
        p: 3,
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography level="title-lg">Your Review</Typography>
        {isLoading ? (
          <Skeleton variant="rectangular" width={160} height={32} />
        ) : (
          <Stack direction="row" spacing={1}>
            {[1, 2, 3, 4, 5].map((score) => (
              <StarIcon
                key={score}
                onMouseEnter={() => setHover(score)}
                onMouseLeave={() => setHover(0)}
                onClick={() => handleReviewScore(score)}
                sx={{
                  fontSize: 40,
                  color:
                    score <= (hover || reviewScore) ? '#a3850e' : '#E0E0E0',
                  cursor: 'pointer',
                  transition: 'color 0.2s, transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.2)',
                  },
                }}
              />
            ))}
          </Stack>
        )}
        {reviewScore > 0 && (
          <Typography
            level="body-sm"
            component="i"
            sx={{ mt: 1, color: 'text.secondary' }}
          >
            You rated this course {reviewScore} out of 5 stars
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
