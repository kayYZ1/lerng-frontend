import { CssBaseline, CssVarsProvider } from '@mui/joy';
import Container from '@mui/joy/Container';
import { Outlet } from 'react-router-dom';

export default function LandingPageLayout() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Container>
        <Outlet />
      </Container>
    </CssVarsProvider>
  );
}