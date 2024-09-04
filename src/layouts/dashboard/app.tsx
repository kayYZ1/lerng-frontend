import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Root from './wrappers/root';
import TopNav from './wrappers/top-nav';
import SideNav from './wrappers/side-nav';
import Main from './wrappers/main';

import Header from './components/header';
import Navigation from './components/navigation';
import SuspenseCircle from 'shared/components/suspense-circle';
import RootLayout from 'layouts/root-layout';

export default function DashboardLayout() {
  return (
    <RootLayout>
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
    </RootLayout>
  );
}