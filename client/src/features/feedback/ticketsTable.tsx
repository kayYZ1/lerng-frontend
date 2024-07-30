import Box from '@mui/joy/Box';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import { useGetFeedbackTicketsQuery } from 'app/api/feedback.slice';
import { FeedbackTicket } from 'shared/ts/types';
import { parseDate } from 'shared/lib/functions';

export default function TicketsTable() {
  const { data, isLoading } = useGetFeedbackTicketsQuery(undefined);

  console.log(data)

  return (
    <Sheet
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box sx={{ flexGrow: 1, overflow: "auto" }}>
        <Table
          hoverRow
          sx={{
            '--TableCell-headBackground': 'var(--joy-palette-background-level1)',
            '--Table-headerUnderlineThickness': '1px',
            '--TableRow-hoverBackground': 'var(--joy-palette-background-level1)',
            '--TableCell-paddingY': '4px',
            '--TableCell-paddingX': '8px',
          }}
        >
          <thead>
            <tr>
              <th>Ticket Id.</th>
              <th>Problem</th>
              <th>Status</th>
              <th>Date</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? "" : data.map((ticket: FeedbackTicket) => (
              <tr key={ticket.id}>
                <td>
                  <Typography level="body-xs">{ticket.ticket_id}</Typography>
                </td>
                <td>
                  <Typography level="body-xs">{ticket.problem}</Typography>
                </td>
                <td>
                  <Chip
                    variant="soft"
                    size="sm"
                  >
                    {ticket.status}
                  </Chip>
                </td>
                <td>
                  <Typography level="body-xs">{parseDate(ticket.created)}</Typography>
                </td>
                <td>
                  <Typography level="body-xs">{parseDate(ticket.updated)}</Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Box>
    </Sheet >
  )
}