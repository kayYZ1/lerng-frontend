import { useParams, useNavigate } from 'react-router-dom';

import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';

import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';

import { useSelector } from 'react-redux';
import { useSaveQuizMutation } from 'app/api/progress.api.slice';
import { selectCurrentUser } from 'app/slice/user.slice';
import { selectActiveCourseId } from 'app/slice/courses.slice';
import { QuizScore } from '../shared/types';

export default function ResultCard({ score }: QuizScore) {
  const user = useSelector(selectCurrentUser);
  const activeCourseId = useSelector(selectActiveCourseId);
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const [SaveQuiz, { isLoading }] = useSaveQuizMutation();

  const saveQuizProgress = async () => {
    const values: { quizScore: number } = {
      quizScore: score
    }

    await SaveQuiz({ topicId: id, values })
    navigate(`/dashboard/courses/course/${activeCourseId}`)
  }

  return (
    <Card
      data-resizable
      sx={{
        textAlign: 'center',
        alignItems: 'center',
        width: 343,
        '--icon-size': '100px',
      }}
    >
      <CardOverflow variant="solid" color="primary">
        <AspectRatio
          variant="outlined"
          ratio="1"
          sx={{
            m: 'auto',
            transform: 'translateY(50%)',
            borderRadius: '50%',
            width: 'var(--icon-size)',
            boxShadow: 'sm',
            bgcolor: 'background.surface',
            position: 'relative',
          }}
        >
          <div>
            {
              score > 0 ?
                <SentimentSatisfiedIcon sx={{ fontSize: "4rem" }} />
                :
                <SentimentDissatisfiedIcon sx={{ fontSize: "4rem" }} />
            }
          </div>
        </AspectRatio>
      </CardOverflow>
      <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>

      </Typography>
      <CardContent sx={{ maxWidth: '40ch' }}>
        Congratulations {user.username}, Your score is {score}!
      </CardContent>
      <CardActions
        orientation="vertical"
        buttonFlex={1}
      >
        <Button variant="solid" color="primary" disabled>
          Share
        </Button>
        <Button variant="outlined" color="neutral" onClick={saveQuizProgress} loading={isLoading}>
          Return
        </Button>
      </CardActions>
    </Card>
  );
}