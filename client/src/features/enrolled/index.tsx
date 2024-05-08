import { Box, Typography, Sheet, Input, IconButton, Divider } from "@mui/joy"
import { SearchRounded } from "@mui/icons-material"

import EnrolledList from "./components/enrolledList"

export default function Courses() {
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
        px: { xs: 2, md: 6 }
      }}
      >
        <Typography level="h2" component="h1" sx={{ mt: 4, mb: 2 }}>
          My courses
        </Typography>
      </Box>
      <Sheet
        sx={{
          display: { xs: 'flex' },
          gap: 1,
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: { xs: 'space-between', sm: 'flex-start' },
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 2 }
        }}
      >
        <Input
          size="sm"
          sx={{ width: "25em" }}
          placeholder="Search through enrolled courses"
          startDecorator={<SearchRounded color="primary" />}
          endDecorator={
            <IconButton
              variant="outlined"
            >
              <Typography level="title-sm" textColor="text.icon">
                ⌘ K
              </Typography>
            </IconButton>
          }
        />
      </Sheet>
      <Divider sx={{ my: 2 }} />
      <EnrolledList />
    </Box>
  )
}