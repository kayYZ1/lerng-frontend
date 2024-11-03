import { useNavigate } from 'react-router-dom';

import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';

import Terminal from '@mui/icons-material/Terminal';
import ColorSchemeToggle from 'shared/components/color-toggle';

import { AuthPath } from 'routes/paths';

export default function Navigation() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        py: 2,
        borderBottom: '1px solid',
        borderColor: 'rgba(255, 255, 255, 0.1)',
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <Terminal />
        <Typography level="title-md">LERNG</Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          color="neutral"
          onClick={() => navigate(AuthPath.SIGN_IN)}
        >
          Sign In
        </Button>
        <ColorSchemeToggle />
      </Stack>
    </Box>
  );
}
