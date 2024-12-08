import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

import InstructorTickets from './instructor-tickets';

export default function FeedbackInstructor() {
  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box sx={{ px: { xs: 2, md: 6 } }}>
        <Typography level="body-lg" sx={{ mt: 1, mb: 2 }}>
          Feedback tickets sent for your courses
        </Typography>
      </Box>
      <Box
        px={6}
        display="flex"
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
        gap={5}
      >
        <InstructorTickets />
      </Box>
    </Box>
  );
}
