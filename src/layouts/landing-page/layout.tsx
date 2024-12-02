import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Container from '@mui/joy/Container';

import RootLayout from 'layouts/root-layout';
import SuspenseCircle from 'shared/components/suspense-circle';

export default function LandingPageLayout() {
  return (
    <RootLayout>
      <Container>
        <Suspense fallback={<SuspenseCircle />}>
          <Outlet />
        </Suspense>
      </Container>
    </RootLayout>
  );
}
