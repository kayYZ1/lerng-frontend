import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

import BookIcon from '@mui/icons-material/Book';

export default function EmptyTopic() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 'sm',
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 1,
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
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
          Seems like author of this course is in the process of adding
          contents to it. Please come back later!
        </Typography>
      </Box>
    </Box>
  );
}
