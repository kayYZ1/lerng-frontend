import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import Skeleton from '@mui/joy/Skeleton';

export default function PopularSkeleton() {
  return (
    <Card
      variant="outlined"
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: 3,
        borderRadius: 'lg',
        boxShadow: 'sm',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: 'lg',
        },
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          level="h4"
          fontWeight="lg"
          sx={{
            mb: 1,
            color: 'primary.main',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          <Skeleton>Long Course Title That May Wrap to Two Lines</Skeleton>
        </Typography>
        <Typography
          sx={{
            mb: 3,
            color: 'text.secondary',
            lineHeight: 1.6,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            flex: 1,
          }}
        >
          <Skeleton>
            This is a longer description text that demonstrates the three
            line height limit for the course description area. It should
            match the actual content.
          </Skeleton>
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{
            color: 'text.secondary',
            mt: 'auto',
          }}
        >
          <Skeleton variant="circular" width={20} height={20} />
          <Typography level="body-sm" noWrap>
            <Skeleton>123 students</Skeleton>
          </Typography>
        </Stack>
      </Box>
      <Skeleton
        variant="rectangular"
        height={40}
        width="100%"
        sx={{ mt: 3, borderRadius: 1 }}
      />
    </Card>
  );
}
