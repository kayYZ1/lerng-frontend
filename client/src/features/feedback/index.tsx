import { Box, Typography, Divider, Sheet, Input, IconButton } from "@mui/joy"

import { Search } from "@mui/icons-material"
import { Filter } from "@mui/icons-material"

import BreadcrumbsCustom from "shared/components/breadcrumbsCustom"
import EnrolledCoursesTable from "./enrolled-courses-table"
import TicketsTable from "./tickets-table"

export default function Feedback() {
  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box sx={{ px: { xs: 2, md: 6 } }}>
        <BreadcrumbsCustom />
        <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
          Feedback
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
        }}
      >
        <Input
          size="sm"
          placeholder="Search"
          startDecorator={<Search />}
          sx={{ flexGrow: 1 }}
        />
        <IconButton
          size="sm"
          variant="outlined"
          color="neutral"
        >
          <Filter />
        </IconButton>
      </Sheet>
      <Divider sx={{ my: 2 }} />
      <Box px={6}>
        <EnrolledCoursesTable />
        <TicketsTable />
      </Box>
    </Box >
  )
}