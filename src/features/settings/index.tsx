import Stack from '@mui/joy/Stack';
import Divider from '@mui/joy/Divider';

import SettingsLayout from 'layouts/settings/layout';

import { useGetMeQuery } from 'app/api/auth.api.slice';

import ProfileSkeleton from './components/profile-skeleton';
import UpdatePassword from './update-password';
import UpdateData from './update-data';

export default function Profile() {
  const { data: user, isLoading } = useGetMeQuery('User');

  return (
    <SettingsLayout>
      <Stack
        direction="column"
        spacing={1}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Divider />
        {isLoading || !user ? (
          <ProfileSkeleton />
        ) : (
          <UpdateData {...user} />
        )}
        {user && <UpdatePassword {...user} />}
      </Stack>
    </SettingsLayout>
  );
}
