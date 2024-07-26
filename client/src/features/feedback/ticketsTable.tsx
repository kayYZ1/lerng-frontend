import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';

export default function TicketsTable() {
  return (
    <Sheet
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        maxHeight: "30vh",
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
              <th>Course</th>
              <th>Status</th>
              <th>Date</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Typography level="body-xs">BSH-3313</Typography>
              </td>
              <td>
                <Typography level="body-xs">Bash whats it</Typography>
              </td>
              <td>
                <Chip
                  variant="soft"
                  size="sm"
                >
                  Rejected
                </Chip>
              </td>
              <td>
                <Typography level="body-xs">22/02/2024</Typography>
              </td>
              <td>
                <Typography level="body-xs">27/07/2024</Typography>
              </td>
            </tr>
          </tbody>
        </Table>
      </Box>
    </Sheet >
  )
}