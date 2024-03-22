import Stack from '@mui/joy/Stack';

import SettingsLayout from 'layouts/Settings/layout';

import UpdatePassword from './update-password';
import UpdateData from './update-data';

export default function Profile() {
  return (
    <SettingsLayout>
      <Stack
        spacing={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '800px',
          mx: 'auto',
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
        <UpdateData />
        <UpdatePassword />
      </Stack>
    </SettingsLayout>
  );
}