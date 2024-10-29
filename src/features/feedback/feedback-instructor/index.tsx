import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';

import BreadcrumbsCustom from 'shared/components/breadcrumbs-custom';
import InstructorTickets from './instructor-tickets';

export default function FeedbackInstructor() {
  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box sx={{ px: { xs: 2, md: 6 } }}>
        <BreadcrumbsCustom />
        <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
          Your feedback tickets
        </Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
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
