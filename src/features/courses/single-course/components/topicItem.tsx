import { Topic } from "shared/ts/types";
import { Box, Button, Typography } from "@mui/joy";
import { Link } from "react-router-dom";

import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';

export default function TopicItem(item: Topic) {
  return (
    <Accordion>
      <AccordionSummary>{item.title}</AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ py: 1 }}>{item.description}</Typography>
        <Box sx={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
          <Button color="primary">
            <Link to={`/dashboard/courses/course/topic/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              Go
            </Link>
          </Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}