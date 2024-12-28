import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';
import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';

import ChartContainer from '../chart-container';
import { useGetUserYearlyStatsQuery } from 'app/api/users.api.slice';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function UsersYearlyChart() {
  const { data: userYearlyStats, isLoading } =
    useGetUserYearlyStatsQuery('AdminStatistics');

  return (
    <Grid xs={8} md={4}>
      <ChartContainer sx={{ minHeight: '400px' }}>
        <Typography level="body-md" pb={2}>
          New user's joining overview
        </Typography>
        {isLoading && !userYearlyStats ? (
          <Box display="flex" justifyContent="center" alignItems="center">
            <CircularProgress size="md" />
          </Box>
        ) : (
          <PieChart width={500} height={250}>
            <Pie
              data={userYearlyStats}
              dataKey="count"
              nameKey="year"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {userYearlyStats?.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        )}
      </ChartContainer>
    </Grid>
  );
}
