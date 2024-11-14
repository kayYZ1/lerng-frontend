import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

import BookIcon from '@mui/icons-material/Book';

export default function EnrolledEmpty() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 'md',
        mx: 'auto',
        px: 2,
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 4,
      }}
    >
      <Box
        sx={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'primary.softBg',
        }}
      >
        <BookIcon />
      </Box>
      <Box sx={{ maxWidth: 'sm' }}>
        <Typography level="h2" component="h3" sx={{ pb: 2 }}>
          Nothing here :(
        </Typography>
        <Typography level="body-md" sx={{ mb: 4, color: 'neutral.500' }}>
          Enroll into some courses first. Check the <i>courses</i> page!
        </Typography>
      </Box>
    </Box>
  );
}
