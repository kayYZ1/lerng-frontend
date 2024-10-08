import Box from '@mui/joy/Box';

import { Typography } from '@mui/joy';

export default function MainPanel() {
  return (
    <Box sx={{
      display: "flex",
      my: 2
    }}>
      <Box
        sx={{
          display: { xs: 'flex', md: 'flex' },
          flexDirection: "column",
          mx: { xs: "none", md: 4 }
        }}
      >
        <Typography level="body-md">Probably admin panel?</Typography>
      </Box>
    </Box>
  )
}