import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';

const rows = [
  {
    id: 'INV-1234',
    date: 'Feb 3, 2023',
    status: 'Refunded',
    customer: {
      initial: 'O',
      name: 'Olivia Ryhe',
      email: 'olivia@email.com',
    },
  },
  {
    id: 'INV-1233',
    date: 'Feb 3, 2023',
    status: 'Paid',
    customer: {
      initial: 'S',
      name: 'Steve Hampton',
      email: 'steve.hamp@email.com',
    },
  },
  {
    id: 'INV-1232',
    date: 'Feb 3, 2023',
    status: 'Refunded',
    customer: {
      initial: 'C',
      name: 'Ciaran Murray',
      email: 'ciaran.murray@email.com',
    },
  },
  {
    id: 'INV-1231',
    date: 'Feb 3, 2023',
    status: 'Refunded',
    customer: {
      initial: 'M',
      name: 'Maria Macdonald',
      email: 'maria.mc@email.com',
    },
  },
  {
    id: 'INV-1230',
    date: 'Feb 3, 2023',
    status: 'Cancelled',
    customer: {
      initial: 'C',
      name: 'Charles Fulton',
      email: 'fulton@email.com',
    },
  },
  {
    id: 'INV-1229',
    date: 'Feb 3, 2023',
    status: 'Cancelled',
    customer: {
      initial: 'J',
      name: 'Jay Hooper',
      email: 'hooper@email.com',
    },
  },
  {
    id: 'INV-1228',
    date: 'Feb 3, 2023',
    status: 'Refunded',
    customer: {
      initial: 'K',
      name: 'Krystal Stevens',
      email: 'k.stevens@email.com',
    },
  },
  {
    id: 'INV-1227',
    date: 'Feb 3, 2023',
    status: 'Paid',
    customer: {
      initial: 'S',
      name: 'Sachin Flynn',
      email: 's.flyn@email.com',
    },
  },
  {
    id: 'INV-1226',
    date: 'Feb 3, 2023',
    status: 'Cancelled',
    customer: {
      initial: 'B',
      name: 'Bradley Rosales',
      email: 'brad123@email.com',
    },
  },
  {
    id: 'INV-1225',
    date: 'Feb 3, 2023',
    status: 'Paid',
    customer: {
      initial: 'O',
      name: 'Olivia Ryhe',
      email: 'olivia@email.com',
    },
  },
  {
    id: 'INV-1224',
    date: 'Feb 3, 2023',
    status: 'Cancelled',
    customer: {
      initial: 'S',
      name: 'Steve Hampton',
      email: 'steve.hamp@email.com',
    },
  },
  {
    id: 'INV-1223',
    date: 'Feb 3, 2023',
    status: 'Paid',
    customer: {
      initial: 'C',
      name: 'Ciaran Murray',
      email: 'ciaran.murray@email.com',
    },
  },
  {
    id: 'INV-1221',
    date: 'Feb 3, 2023',
    status: 'Refunded',
    customer: {
      initial: 'M',
      name: 'Maria Macdonald',
      email: 'maria.mc@email.com',
    },
  },
  {
    id: 'INV-1220',
    date: 'Feb 3, 2023',
    status: 'Paid',
    customer: {
      initial: 'C',
      name: 'Charles Fulton',
      email: 'fulton@email.com',
    },
  },
  {
    id: 'INV-1219',
    date: 'Feb 3, 2023',
    status: 'Cancelled',
    customer: {
      initial: 'J',
      name: 'Jay Hooper',
      email: 'hooper@email.com',
    },
  },
  {
    id: 'INV-1218',
    date: 'Feb 3, 2023',
    status: 'Cancelled',
    customer: {
      initial: 'K',
      name: 'Krystal Stevens',
      email: 'k.stevens@email.com',
    },
  },
  {
    id: 'INV-1217',
    date: 'Feb 3, 2023',
    status: 'Paid',
    customer: {
      initial: 'S',
      name: 'Sachin Flynn',
      email: 's.flyn@email.com',
    },
  },
  {
    id: 'INV-1216',
    date: 'Feb 3, 2023',
    status: 'Cancelled',
    customer: {
      initial: 'B',
      name: 'Bradley Rosales',
      email: 'brad123@email.com',
    },
  },
];

export default function EnrolledCoursesTable() {
  return (
    <Sheet
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "30vh",
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
              <th style={{ width: 240, padding: '12px 6px' }}>Course</th>
              <th style={{ width: 220, padding: '12px 6px' }}>Instructor</th>
              <th style={{ width: 120, padding: '12px 6px' }}>Ticket</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>
                  <Typography level="body-xs">{row.date}</Typography>
                </td>
                <td>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Avatar size="sm">{row.customer.initial}</Avatar>
                    <div>
                      <Typography level="body-xs">{row.customer.name}</Typography>
                      <Typography level="body-xs">{row.customer.email}</Typography>
                    </div>
                  </Box>
                </td>
                <td>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Link level="body-xs" component="button">
                      File a ticket
                    </Link>
                  </Box>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Box>
    </Sheet >
  )
}