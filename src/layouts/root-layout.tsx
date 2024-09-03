import { ReactNode } from 'react';

import { CssVarsProvider } from '@mui/joy/styles';
import { GlobalStyles } from '@mui/joy';
import CssBaseline from '@mui/joy/CssBaseline';

interface IRootLayout {
  children: ReactNode
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <CssVarsProvider disableTransitionOnChange defaultMode='system' disableNestedContext>
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
  )
}