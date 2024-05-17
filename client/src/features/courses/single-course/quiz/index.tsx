import { Box, Typography, Divider } from "@mui/joy"
import QuizCard from "./quizCard"
import BreadcrumbsCustom from "shared/components/breadcrumbsCustom"

export default function Quiz() {
  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box sx={{
        mx: { xs: 5, md: 8 }
      }}
      >
        <BreadcrumbsCustom />
        <Typography level="h2" component="h1" sx={{ mt: 1, mb: 1 }}>
          Quiz
        </Typography>
      </Box>
      <Divider sx={{ my: 1 }} />
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: { xs: 2, md: 4 } }}>
        <QuizCard />
      </Box>
    </Box>
  )
}