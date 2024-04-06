import { useState } from 'react';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import { FormControl, Input, FormLabel, Card, Typography, Box, RadioGroup, Radio } from '@mui/joy';

import { Question } from 'shared/types';
import { QuestionType } from 'shared/enum';
import QuizTime from './quizTime';

export default function QuizForm(questions: Question[]) {
  const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);

  function submitAnswer() {
    if (answer === activeQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  }

  function handleNextQuestion() {
    submitAnswer();
    setActiveQuestionIdx((prev) => prev + 1);
    setAnswer("")
  }

  function saveScore() {
    submitAnswer() //Submit last answer
    console.log(score)
  }

  const questionsLength = Object.keys(questions).length;
  const activeQuestion = questions[activeQuestionIdx];

  return (
    <Card sx={{ flex: 1, width: { xs: 300, md: 400 } }}>
      <Box>
        <Typography level="title-md">{activeQuestion.question}</Typography>
        <Typography level="body-sm" sx={{ py: 1 }}>
          Question type: {activeQuestion.type}
        </Typography>
      </Box>
      <Divider />
      <Stack sx={{ my: 1 }}>
        <form>
          <FormControl required>
            <FormLabel>Answer</FormLabel>
            {
              activeQuestion.type === QuestionType.open ?
                <Input
                  type="text"
                  name="answer"
                  value={answer}
                  onChange={(event) => setAnswer(event.target.value)}
                /> :
                <RadioGroup name="answer" value={answer} onChange={(event) => setAnswer(event.target.value)}>
                  <Radio value="1" label="True" color="primary" />
                  <Radio value="0" label="False" color="danger" />
                </RadioGroup>
            }
          </FormControl>
          <CardOverflow>
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              {activeQuestionIdx === questionsLength - 1 ?
                <Button
                  size="sm"
                  variant="solid"
                  onClick={() => saveScore()}
                >
                  Save
                </Button>
                :
                <Button
                  size="sm"
                  variant="solid"
                  onClick={handleNextQuestion}
                >
                  Next
                </Button>
              }
            </CardActions>
          </CardOverflow>
        </form>
        <QuizTime />
      </Stack>
    </Card >
  )
}