import { Box, Typography, Divider, Sheet, Input } from "@mui/joy"

import { Search } from "@mui/icons-material"

import BreadcrumbsCustom from "shared/components/breadcrumbsCustom"
import TicketsTable from "./ticketsTable"
import AddTicket from "./addTicket"

export default function Feedback() {
  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box sx={{ px: { xs: 2, md: 6 } }}>
        <BreadcrumbsCustom />
        <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
          Feedback
        </Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box px={6}>
        <Box>
          <Typography level="h4" component="h3" sx={{ pb: 1 }}>
            My Tickets
          </Typography>
          <Sheet
            sx={{
              display: { xs: 'flex' },
              gap: 1,
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: { xs: 'space-between', sm: 'flex-start' },
              paddingBottom: 2
            }}
          >
            <Input
              size="sm"
              placeholder="Search"
              startDecorator={<Search />}
              sx={{ flexGrow: 1 }}
            />
            <AddTicket />
          </Sheet>
          <TicketsTable />
        </Box>
      </Box>
    </Box >
  )
}