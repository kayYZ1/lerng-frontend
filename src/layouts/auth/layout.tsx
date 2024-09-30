import { Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import ColorSchemeToggle from 'shared/components/color-toggle';
import RootLayout from 'layouts/root-layout';
import SuspenseCircle from 'shared/components/suspense-circle';

export default function AuthLayout() {
  const navigate = useNavigate();

  return (
    <RootLayout>
      <Box
        sx={(theme) => ({
          width: '100vw',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(255 255 255 / 0.2)',
          [theme.getColorSchemeSelector('dark')]: {
            backgroundColor: 'rgba(19 19 24 / 0.4)',
          },
        })}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100dvh',
            width: '100vw',
            maxWidth: '100%',
            px: 2,
          }}
        >
          <Box
            component="header"
            sx={{
              py: 3,
              display: 'flex',
              alignItems: 'left',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
              <IconButton onClick={() => navigate(-1)}>
                <ArrowBackIcon />
              </IconButton>
              <Typography level="title-lg">LERNG</Typography>
            </Box>
            <ColorSchemeToggle />
          </Box>
          <Box
            component="main"
            sx={{
              my: 'auto',
              py: 2,
              pb: 5,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: 400,
              maxWidth: '100%',
              mx: 'auto',
              borderRadius: 'sm',
              '& form': {
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              },
            }}
          >
            <Suspense fallback={<SuspenseCircle />}>
              <Outlet />
            </Suspense>
          </Box>
          <Box component="footer" sx={{ py: 3 }}>
            <Typography level="body-xs" textAlign="center">
              LERNG - <Link href="https://github.com/kayYZ1">https://github.com/kayYZ1</Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </RootLayout>
  );
}