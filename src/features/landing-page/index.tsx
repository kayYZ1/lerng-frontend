import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Container from '@mui/joy/Container';
import Button from '@mui/joy/Button';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';

import ArrowForward from '@mui/icons-material/ArrowForward';
import { GitHub } from '@mui/icons-material';

import { Link } from 'react-router-dom';
import { AuthPath } from 'routes/paths';

import { useGetLatestUsersQuery } from 'app/api/users.api.slice';

import LerngLogo from 'assets/svg/logo-no-background.svg';
import ColorSchemeToggle from 'shared/components/color-toggle';
import { UserLandingPage } from 'shared/ts/types';
import Carousel from './components/carousel';

function SocialLinks() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        color="neutral"
        startDecorator={<GitHub />}
        component="a"
        href="https://github.com/kayYZ1"
        target="_blank"
      >
        GitHub
      </Button>
    </Stack>
  );
}

export default function LandingPage() {
  const { data, isLoading, error } = useGetLatestUsersQuery(undefined);

  return (
    <Box
      sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Box component="header" sx={{ py: 2, px: 3 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <img src={LerngLogo} alt="LERNG Logo" width={96} height={96} />
          <Stack direction="row" spacing={2}>
            <SocialLinks />
            <ColorSchemeToggle />
          </Stack>
        </Stack>
      </Box>
      <Container
        sx={(theme) => ({
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 8,
          gap: 4,
          [theme.breakpoints.up(834)]: {
            flexDirection: 'row',
            gap: 6,
          },
          [theme.breakpoints.up(1199)]: {
            gap: 12,
          },
        })}
      >
        <Box
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            maxWidth: '50ch',
            textAlign: 'center',
            flexShrink: 999,
            [theme.breakpoints.up(834)]: {
              minWidth: 420,
              alignItems: 'flex-start',
              textAlign: 'initial',
            },
          })}
        >
          <Typography color="primary" fontSize="lg" fontWeight="lg">
            Ready to start learning?
          </Typography>
          <Typography
            level="h1"
            fontWeight="xl"
            fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
          >
            LERNG - a gateway to Linux mastery
          </Typography>
          <Typography
            fontSize="lg"
            textColor="text.secondary"
            lineHeight="lg"
          >
            Unlock specialized knowledge about Linux and its distribution
            systems from industry professionals.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              my: 2,
              '& > *': { flex: 'auto' },
            }}
          >
            <Button size="lg" variant="outlined" color="neutral">
              <Link
                to={AuthPath.SIGN_UP}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Sign Up
              </Link>
            </Button>
            <Button size="lg" endDecorator={<ArrowForward />}>
              <Link
                to={AuthPath.SIGN_IN}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Sign In
              </Link>
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 2,
              textAlign: 'left',
              '& > *': {
                flexShrink: 0,
              },
            }}
          >
            <AvatarGroup size="md">
              {isLoading || error
                ? [1, 2, 3].map((item) => <Avatar key={item} />)
                : data.map((user: UserLandingPage) => {
                    return <Avatar key={user.id} src={user.imageUrl} />;
                  })}
            </AvatarGroup>
            <Typography textColor="text.secondary">
              Join our thriving community of <b>10,000+</b> <br></br>
              Linux enthusiasts
            </Typography>
          </Box>
        </Box>
        <AspectRatio
          ratio={600 / 520}
          variant="outlined"
          maxHeight={300}
          sx={(theme) => ({
            minWidth: 300,
            alignSelf: 'stretch',
            [theme.breakpoints.up(834)]: {
              alignSelf: 'initial',
              flexGrow: 1,
              '--AspectRatio-maxHeight': '520px',
              '--AspectRatio-minHeight': '400px',
            },
            borderRadius: 'sm',
            bgcolor: 'background.level2',
            flexBasis: '50%',
          })}
        >
          <Carousel />
        </AspectRatio>
      </Container>
      <Box
        component="footer"
        sx={{ py: 3, mt: 'auto', textAlign: 'center' }}
      >
        <Typography level="body-sm" textColor="text.secondary">
          © {new Date().getFullYear()} LERNG. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
