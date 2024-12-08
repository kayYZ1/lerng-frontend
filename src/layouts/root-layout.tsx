import { ReactNode } from 'react';

import { CssVarsProvider } from '@mui/joy/styles';
import { GlobalStyles } from '@mui/joy';
import CssBaseline from '@mui/joy/CssBaseline';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <CssVarsProvider
      disableTransitionOnChange
      defaultMode="system"
      disableNestedContext
    >
      <CssBaseline />
      <GlobalStyles
        styles={{
          ':root': {
            '--Collapsed-breakpoint': '769px',
            '--Cover-width': '50vw',
            '--Form-maxWidth': '700px',
          },
        }}
      />
      {children}
    </CssVarsProvider>
  );
}
