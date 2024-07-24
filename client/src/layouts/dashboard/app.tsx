import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';

import Header from './components/header';
import Navigation from './components/navigation';
import Layout from './components/layout';
import SuspenseCircle from 'shared/components/suspenseCircle';

export default function DashboardLayout() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Layout.Root>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.SideNav>
          <Navigation />
        </Layout.SideNav>
        <Layout.Main>
          <Suspense fallback={<SuspenseCircle />}>
            <Outlet />
          </Suspense>
        </Layout.Main>
      </Layout.Root>
    </CssVarsProvider>
  );
}