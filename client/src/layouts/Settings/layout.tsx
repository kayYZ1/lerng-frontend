import Box from '@mui/joy/Box';

interface LayoutChild {
  children: JSX.Element;
}

export default function SettingsLayout({ children }: LayoutChild) {
  return (
    <Box
      component="main"
      sx={{
        pt: { xs: 'calc(16px + var(--Header-height))', md: 3 },
        pb: { xs: 2, sm: 2, md: 3 },
        flex: 1,
        display: 'flex',
        minWidth: 0,
        gap: 1,
        overflow: 'auto',
      }}
    >
      {children}
    </Box>
  );
}