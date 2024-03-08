import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Tabs, Tab, TabList, tabClasses, Typography } from '@mui/joy';
import Box from '@mui/joy/Box';

export default function SettingsLayout() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
      <Box
        component="main"
        className="MainContent"
        sx={{
          pt: { xs: 'calc(12px + var(--Header-height))', md: 3 },
          pb: { xs: 2, sm: 2, md: 3 },
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
          height: '100dvh',
          gap: 1,
          overflow: 'auto',
        }}
      >
        <Box sx={{ flex: 1, width: '100%' }}>
          <Box
            sx={{
              position: 'sticky',
              top: { sm: -100, md: -110 },
              bgcolor: 'background.body',
              zIndex: 9995,
            }}
          >
            <Box sx={{ px: { xs: 2, md: 6 } }}>
              <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
                My profile
              </Typography>
            </Box>
            <Tabs
              defaultValue={0}
              sx={{
                bgcolor: 'transparent',
              }}
            >
              <TabList
                tabFlex={1}
                size="sm"
                sx={{
                  pl: { xs: 0, md: 4 },
                  justifyContent: 'left',
                  [`&& .${tabClasses.root}`]: {
                    fontWeight: '600',
                    flex: 'initial',
                    color: 'text.tertiary',
                    [`&.${tabClasses.selected}`]: {
                      bgcolor: 'transparent',
                      color: 'text.primary',
                      '&::after': {
                        height: '2px',
                        bgcolor: 'primary.500',
                      },
                    },
                  },
                }}
              >
                <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={0}>
                  Profile
                </Tab>
                <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={1}>
                  App settings
                </Tab>
              </TabList>
            </Tabs>
          </Box>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Box>
      </Box>
    </Box>
  );
}