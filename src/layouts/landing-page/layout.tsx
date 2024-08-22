import Container from '@mui/joy/Container';
import { Outlet } from 'react-router-dom';

import RootLayout from 'layouts/rootLayout';

export default function LandingPageLayout() {
  return (
    <RootLayout>
      <Container>
        <Outlet />
      </Container>
    </RootLayout>
  );
}