import Box from '@mui/joy/Box';
import Skeleton from '@mui/joy/Skeleton';

export default function EnrolledListSkeleton() {
  return (
    <Box
      sx={{ m: 'auto', display: 'flex', alignItems: 'center', gap: 2 }}
      width={500}
    >
      <Skeleton variant="circular" width={48} height={48} />
      <Box>
        <Skeleton
          variant="rectangular"
          width={320}
          height="1em"
          sx={{ mb: 1 }}
        />
        <Skeleton variant="rectangular" width={200} height="1em" />
      </Box>
    </Box>
  );
}
