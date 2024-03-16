import { Box, Typography, Sheet, Input, IconButton } from "@mui/joy"
import { SearchRounded } from "@mui/icons-material"

import CourseList from "./courseList"
import SelectFilter from "./components/SelectFilter"

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
          Courses
        </Typography>
      </Box>
      <Sheet
        sx={{
          display: { xs: 'flex' },
          my: 1,
          gap: 1,
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: { xs: 'space-between', sm: 'flex-start' },
          px: { xs: 2, md: 6 }
        }}
      >
        <Input
          size="sm"
          placeholder="Search anything…"
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
        <SelectFilter />
      </Sheet>
      <CourseList />
    </Box>
  )
}