import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';

import ChartContainer from './chart-container';

export default function MainPanel() {
  const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2500 },
    { name: 'Page B', uv: 500, pv: 3200, amt: 2600 },
    { name: 'Page C', uv: 600, pv: 4000, amt: 2700 },
  ];
  return (
    <Box sx={{ py: 2, px: 4 }}>
      <Grid container spacing={1}>
        <Grid xs={12} container spacing={1} sx={{ mb: 2 }}>
          <Grid xs={12} md={6}>
            <ChartContainer sx={{ minHeight: '400px' }}>
              <Typography level="body-md" pb={2}>
                New user's joining overview
              </Typography>
              <LineChart width={700} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ChartContainer>
          </Grid>
          <Grid xs={12} md={6}>
            <ChartContainer sx={{ minHeight: '400px' }}>
              <Typography level="body-md" pb={2}>
                User's activity
              </Typography>
              <LineChart width={700} height={300} data={data}>
                <Line type="bump" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ChartContainer>
          </Grid>
        </Grid>
        <Grid xs={12} container spacing={2}>
          <Grid xs={12} md={4}>
            <ChartContainer sx={{ minHeight: '200px' }}>
              <Typography level="body-md" pb={2}>
                User's activity
              </Typography>
              <LineChart width={450} height={150} data={data}>
                <Line type="stepAfter" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ChartContainer>
          </Grid>
          <Grid xs={12} md={4}>
            <ChartContainer sx={{ minHeight: '200px' }}>
              <Typography level="body-md" pb={2}>
                User's activity
              </Typography>
              <LineChart width={450} height={150} data={data}>
                <Line type="stepAfter" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ChartContainer>
          </Grid>
          <Grid xs={12} md={4}>
            <ChartContainer sx={{ minHeight: '200px' }}>
              <Typography level="body-md" pb={2}>
                User's activity
              </Typography>
              <LineChart width={450} height={150} data={data}>
                <Line type="stepAfter" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ChartContainer>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
