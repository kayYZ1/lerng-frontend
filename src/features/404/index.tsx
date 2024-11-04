import { useNavigate } from 'react-router-dom';

import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';

import ExploreIcon from '@mui/icons-material/Explore';

import { DefaultPath } from 'routes/paths';

export default function Page404() {
  const navigate = useNavigate();

  return (
    <Sheet
      sx={{
        minHeight: '98vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        px: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: 'sm',
          textAlign: 'center',
        }}
      >
        <ExploreIcon sx={{ width: '128px', height: '128px' }} />
        <Typography
          level="h1"
          sx={{ fontSize: '8rem', fontWeight: 'xl', mb: 2 }}
        >
          404
        </Typography>
        <Typography level="h2" sx={{ mb: 2 }}>
          Lost in the Digital Wilderness
        </Typography>
        <Typography level="body-lg" sx={{ mb: 4, opacity: 0.8 }}>
          The page you're looking for seems to have wandered off the map.
          Don't worry though, even the best explorers sometimes lose their
          way.
        </Typography>
        <Button
          variant="solid"
          color="primary"
          size="lg"
          onClick={() => navigate(DefaultPath.LANDING_PAGE)}
        >
          Return to Safety
        </Button>
      </Box>
    </Sheet>
  );
}
