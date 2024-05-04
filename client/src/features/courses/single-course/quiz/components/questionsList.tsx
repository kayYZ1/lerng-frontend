import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails, {
  accordionDetailsClasses,
} from '@mui/joy/AccordionDetails';
import AccordionSummary, {
  accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';

import { Question } from "shared/ts/types";
import { Typography } from '@mui/joy';

export default function QuestionsList(questions: Question[]) {
  const questionsArray = Object.values(questions);

  return (
    <AccordionGroup
      variant="outlined"
      transition="0.2s"
      sx={{
        maxWidth: 400,
        borderRadius: 'lg',
        [`& .${accordionSummaryClasses.button}:hover`]: {
          bgcolor: 'transparent',
        },
        [`& .${accordionDetailsClasses.content}`]: {
          boxShadow: (theme) => `inset 0 1px ${theme.vars.palette.divider}`,
          [`&.${accordionDetailsClasses.expanded}`]: {
            paddingBlock: '0.75rem',
          },
        },
      }}
    >
      {questionsArray.length !== 0 ? questionsArray.map((question) => (
        <Accordion key={question.id}>
          <AccordionSummary>{question.question}</AccordionSummary>
          <AccordionDetails variant='soft'>
            {question.type}, {question.answer}
          </AccordionDetails>
        </Accordion>
      )) :
        <Typography level='body-sm' sx={{ p: 1 }}>
          No questions yet. Add one!
        </Typography>
      }
    </AccordionGroup>
  )
}