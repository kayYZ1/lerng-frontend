import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';
import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';

import { useGetCategoriesStatsQuery } from 'app/api/courses.api.slice';
import ChartContainer from '../chart-container';

export default function CategoriesChart() {
  const { data: categoriesStats, isLoading } =
    useGetCategoriesStatsQuery('AdminStatistics');

  return (
    <Grid xs={12} md={6}>
      <ChartContainer sx={{ minHeight: '400px' }}>
        <Typography level="body-md" pb={2}>
          Course categories
        </Typography>
        {isLoading && !categoriesStats ? (
          <Box
            width={700}
            height={300}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress size="md" />
          </Box>
        ) : (
          <BarChart width={700} height={300} data={categoriesStats}>
            <Bar dataKey="count" fill="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="category" tick={{ fontSize: 8 }} />
            <YAxis tick={{ fontSize: 12 }} domain={[0, 'dataMax + 2']} />
            <Tooltip cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }} />
          </BarChart>
        )}
      </ChartContainer>
    </Grid>
  );
}
