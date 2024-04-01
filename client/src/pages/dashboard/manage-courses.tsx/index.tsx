import { Box, Sheet } from "@mui/joy";

import CoursesTable from "./components/courses-table";

export default function ManageCourses() {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: 2,
      }}
    >
      {' '}
      <Sheet
        variant="outlined"
        sx={{
          maxWidth: "1096px",
          borderRadius: 'sm',
          gridColumn: '1/-1',
          display: { xs: 'flex', md: 'flex' },
          mx: { xs: "none", md: 4 }
        }}
      >
        <CoursesTable />
      </Sheet>
    </Box>
  )
}