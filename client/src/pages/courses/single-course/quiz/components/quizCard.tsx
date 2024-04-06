import { useState } from 'react';
import { useParams } from 'react-router-dom';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { CircularProgress } from '@mui/joy';

import { QuizSharp } from '@mui/icons-material';
import { useGetQuestionsQuery } from 'features/questions/questions.api.slice';
import QuizForm from './quizForm';

export default function QuizCard() {
  const { id } = useParams<{ id: string }>();
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  const { data, isLoading } = useGetQuestionsQuery(id!);

  return (
    <Box>
      {isQuizStarted ?
        <QuizForm {...data}/>
        :
        <Card
          size="lg"
          variant="plain"
          orientation="horizontal"
          sx={{
            textAlign: 'center',
            maxWidth: '100%',
            width: 400,
          }}
        >
          <CardOverflow
            variant="solid"
            color="primary"
            sx={{
              flex: '0 0 200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              px: 'var(--Card-padding)',
            }}
          >
            <Typography fontSize="xl4" fontWeight="xl" textColor="#fff">
              {isLoading ? <CircularProgress /> : data.length}
            </Typography>
            <Typography textColor="primary.200">
              Questions
            </Typography>
            <Typography fontSize="xl2" fontWeight="l" textColor="#fff" sx={{ pt: 1 }}>
              5
            </Typography>
            <Typography textColor="primary.200">
              minutes
            </Typography>
          </CardOverflow>
          <CardContent>
            <AspectRatio ratio="19/8" objectFit="contain" variant="plain">
              <QuizSharp />
            </AspectRatio>
            <CardContent>
              <Typography level="title-lg">Quiz</Typography>
              <Typography fontSize="sm" sx={{ mt: 0.5, mb: 0.5 }}>
                Ready?
              </Typography>
            </CardContent>
            <Button variant="outlined" color="primary" onClick={() => setIsQuizStarted(true)}>
              Start
            </Button>
          </CardContent>
        </Card>
      }
    </Box>
  );
}