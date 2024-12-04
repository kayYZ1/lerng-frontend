import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import { SxProps } from '@mui/joy/styles/types';

interface ChartContainerProps {
  sx?: SxProps;
  children?: React.ReactNode;
}

export default function ChartContainer({ children }: ChartContainerProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        p: 2,
        height: '100%',
      }}
    >
      <Box sx={{ height: '100%' }}>{children}</Box>
    </Card>
  );
}
