import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ py: 3, mt: 'auto', textAlign: 'center' }}
    >
      <Typography level="body-sm" textColor="text.secondary">
        © {new Date().getFullYear()} LERNG. All rights reserved.
      </Typography>
    </Box>
  );
}
