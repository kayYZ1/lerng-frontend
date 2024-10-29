import Box from '@mui/joy/Box';
import Skeleton from '@mui/joy/Skeleton';
import Typography from '@mui/joy/Typography';

export default function TypographySkeleton() {
  return (
    <Box sx={{ m: 'auto' }}>
      <Typography
        sx={{ position: 'relative', overflow: 'hidden' }}
        level="h1"
        fontSize="xl"
      >
        <Skeleton>Typography for a course name</Skeleton>
      </Typography>
    </Box>
  );
}
