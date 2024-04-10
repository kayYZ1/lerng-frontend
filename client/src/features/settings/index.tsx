import Stack from '@mui/joy/Stack';

import SettingsLayout from 'layouts/settings/layout';

import { useGetMeQuery } from 'app/auth/auth.api.slice';

import ProfileSkeleton from './components/profileSkeleton';
import UpdatePassword from './update-password';
import UpdateData from './update-data';

export default function Profile() {
  const { data, isLoading } = useGetMeQuery(undefined);

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
        {isLoading ? <ProfileSkeleton /> : <UpdateData {...data} />}
        <UpdatePassword />
      </Stack>
    </SettingsLayout>
  );
}