import { Box, Sheet } from "@mui/joy"
import CoursesTable from "./courses-table"

export default function Statistics() {
  return (
    <Box sx={{
      display: "flex",
      my: 2
    }}>
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