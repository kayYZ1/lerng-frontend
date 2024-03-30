import Box from '@mui/joy/Box';
import Skeleton from '@mui/joy/Skeleton';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

export default function TypographySkeleton() {
  return (
    <Stack spacing={2} useFlexGap sx={{ maxWidth: '60ch' }}>
      <Box sx={{ m: 'auto' }}>
        <Typography
          sx={{ position: 'relative', overflow: 'hidden' }}
          level="h1"
          fontSize="xl"
        >
          <Skeleton>Typography for a course name</Skeleton>
        </Typography>
      </Box>
    </Stack>
  )
}