import { Box, Typography, Divider } from "@mui/joy"

import BreadcrumbsCustom from "shared/components/breadcrumbsCustom"
import InstructorTickets from "./instructorTickets"

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
      <Box px={6} display="flex" sx={{ flexDirection: { xs: 'column', sm: 'row' } }} gap={5}>
        <InstructorTickets />
      </Box>
    </Box>
  )
}