import Box from '@mui/joy/Box';
import Grid from '@mui/joy/Grid';

import CategoriesChart from './charts/categories';
import UsersYearlyChart from './charts/users-yearly';
import UsersMonthlyChart from './charts/users-monthly';

export default function MainPanel() {
  return (
    <Box sx={{ px: 4 }}>
      <Grid container spacing={1}>
        <Grid xs={12} container spacing={1} sx={{ mb: 2 }}>
          <UsersMonthlyChart />
          <UsersYearlyChart />
          <CategoriesChart />
        </Grid>
      </Grid>
    </Box>
  );
}
