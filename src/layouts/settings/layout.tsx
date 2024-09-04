import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography'
import BreadcrumbsCustom from 'shared/components/breadcrumbs-custom';

interface LayoutChild {
  children: JSX.Element;
}

export default function SettingsLayout({ children }: LayoutChild) {
  return (
    <Box
      component="main"
      sx={{
        pb: { xs: 2, sm: 2, md: 3 },
        flex: 1,
        display: 'flex',
        minWidth: 0,
        gap: 1,
        overflow: 'auto',
      }}
    >
      <Box sx={{ flex: 1, width: '100%' }}>
        <Box
          sx={{
            top: { sm: -100, md: -110 },
            bgcolor: 'background.body',
          }}
        >
          <Box sx={{ px: { xs: 2, md: 6 } }}>
            <BreadcrumbsCustom />
            <Typography level="h2" component="h1" sx={{ mt: 1, mb: 1 }}>
              Settings
            </Typography>
          </Box>
        </Box>
        {children}
      </Box>
    </Box>
  );
}