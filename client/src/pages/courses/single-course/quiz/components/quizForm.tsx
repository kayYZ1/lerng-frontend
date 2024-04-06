import { useState } from 'react';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import { FormControl, Input, FormLabel, Card, Typography, Box, RadioGroup, Radio } from '@mui/joy';

import { Question } from 'shared/types';
import { QuestionType } from 'shared/enum';

function AnswerInput({ type }: { type: QuestionType }) {
  let answerInput: JSX.Element;
  {
    type === QuestionType.open ?
      answerInput = <Input type="text" name="answer" /> :
      answerInput =
      <RadioGroup name="answer">
        <Radio value="1" label="True" color="primary" />
        <Radio value="0" label="False" color="danger" />
      </RadioGroup>
  }
  return answerInput;
}

export default function QuizForm(questions: Question[]) {
  const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);

  function handleNextQuestion() {
    setActiveQuestionIdx((prev) => prev + 1);
  }

  function handlePrevQuestion() {
    setActiveQuestionIdx((prev) => prev - 1);
  }

  const activeQuestion = questions[activeQuestionIdx];
  console.log(activeQuestionIdx, questions.length)

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
            <AnswerInput type={activeQuestion.type} />
          </FormControl>
          <CardOverflow>
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              <Button
                size="sm"
                variant="outlined"
                disabled={activeQuestionIdx === 0}
                onClick={handlePrevQuestion}
              >
                Previous
              </Button>
              {activeQuestionIdx === questions.length - 1 ?
                <Button
                  size="sm"
                  variant="solid"
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
      </Stack>
    </Card>
  )
}