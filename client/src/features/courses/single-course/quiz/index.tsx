import { Box, Typography, Divider } from "@mui/joy"
import QuizCard from "./quizCard"

export default function Quiz() {
  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box sx={{
        display: "flex",
        mb: 1,
        gap: 1,
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'start', sm: 'center' },
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        mx: { xs: 5, md: 8 }
      }}
      >
        <Typography level="h2" component="h1" sx={{ mt: 4 }}>
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