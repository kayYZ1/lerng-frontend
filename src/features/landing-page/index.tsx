import Box from '@mui/joy/Box';

import Navigation from './components/navigation';
import HeroSection from './components/hero-section';
import Popular from './components/popular';

export default function LandingPage() {
  return (
    <Box
      sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Navigation />
      <HeroSection />
      <Popular />
    </Box>
  );
}
