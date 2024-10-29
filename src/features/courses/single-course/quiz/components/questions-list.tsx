import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary, {
  accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

import { Question } from 'shared/ts/types';
import EditQuestionModal from './modals/edit-question';

export default function QuestionsList(questions: Question[]) {
  const questionsArray = Object.values(questions);

  return (
    <AccordionGroup
      transition={{
        initial: '0.3s ease-out',
        expanded: '0.2s ease',
      }}
      sx={{
        maxWidth: 400,
        [`& .${accordionSummaryClasses.indicator}`]: {
          transition: '0.2s',
        },
        [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]:
          {
            transform: 'rotate(180deg)',
          },
      }}
    >
      {questionsArray.length !== 0 ? (
        questionsArray.map((question) => (
          <Accordion key={question.id}>
            <AccordionSummary>{question.question}</AccordionSummary>
            <AccordionDetails>
              <Box display="flex" justifyContent="space-between">
                <Typography level="body-sm">
                  {question.type} - {question.answer}
                </Typography>
                <EditQuestionModal {...question} />
              </Box>
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <Typography level="body-sm" sx={{ p: 1 }}>
          No questions yet. Add one!
        </Typography>
      )}
    </AccordionGroup>
  );
}
