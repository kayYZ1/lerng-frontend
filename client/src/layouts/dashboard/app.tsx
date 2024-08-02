import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';

import Root from './wrappers/root';
import TopNav from './wrappers/topNav';
import SideNav from './wrappers/sideNav';
import Main from './wrappers/main';

import Header from './components/header';
import Navigation from './components/navigation';
import SuspenseCircle from 'shared/components/suspenseCircle';

export default function DashboardLayout() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Root>
        <TopNav>
          <Header />
        </TopNav>
        <SideNav>
          <Navigation />
        </SideNav>
        <Main>
          <Suspense fallback={<SuspenseCircle />}>
            <Outlet />
          </Suspense>
        </Main>
      </Root>
    </CssVarsProvider>
  );
}