import CircularProgress from '@mui/joy/CircularProgress';
import Box from '@mui/joy/Box';

export default function SuspenseCircle() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70vh',
      }}
    >
      <CircularProgress size="lg" />
    </Box>
  );
}
