import Box from '@mui/joy/Box';
import Grid from '@mui/joy/Grid';

import CategoriesChart from './charts/categories';
import UsersYearlyChart from './charts/users-yearly';

export default function MainPanel() {
  return (
    <Box sx={{ py: 2, px: 4 }}>
      <Grid container spacing={1}>
        <Grid xs={12} container spacing={1} sx={{ mb: 2 }}>
          <UsersYearlyChart />
          <CategoriesChart />
        </Grid>
      </Grid>
    </Box>
  );
}
