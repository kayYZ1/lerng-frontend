import { useState } from 'react';

import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';

import { Question } from 'shared/ts/types';
import { QuestionType } from 'shared/enum';

import QuizTime from '../quizTime';
import ResultCard from '../../resultCard';

export default function QuizForm(questions: Question[]) {
  const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

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
    submitAnswer()
    setShowResult(true)
  }

  const questionsLength = Object.keys(questions).length;
  const activeQuestion = questions[activeQuestionIdx];

  return (
    <Box>
      {showResult ?
        <ResultCard score={score} /> :
        <Card sx={{ flex: 1, width: { xs: 300, md: 400 } }}>
          <Box>
            <Typography level="title-md">{activeQuestion.question}</Typography>
            <Typography level="body-sm" sx={{ py: 1 }}>
              Question type: {activeQuestion.type}
            </Typography>
          </Box>
          <Divider />
          <form>
            <Stack sx={{ my: 1 }} gap={1}>
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
            </Stack>
            <QuizTime setShowResult={setShowResult} />
          </form>
        </Card>
      }
    </Box >
  )
}