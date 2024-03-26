import Sheet from '@mui/joy/Sheet';
import { Box } from '@mui/joy';

import ProgressTable from './components/progressTable';
import ModulesList from './components/modulesList';

export default function ModulesPanel() {
  return (
    <Sheet
      sx={{
        flex: 1,
        width: '100%',
        px: { xs: 2, md: 6 },
        mx: 'auto',
        pt: { xs: 'var(--Header-height)', sm: 0 },
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'minmax(min-content, min(50%, 1000px)) 1fr',
        },
      }}
    >
      <Box sx={{ px: 2, py: 2 }}>
        <ModulesList />
      </Box>
      <Box sx={{ px: 2, py: 2 }}>
        <ProgressTable />
      </Box>
    </Sheet>
  )
}