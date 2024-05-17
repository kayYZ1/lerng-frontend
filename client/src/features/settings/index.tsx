import Stack from '@mui/joy/Stack';

import SettingsLayout from 'layouts/settings/layout';

import { useGetMeQuery } from 'app/auth/auth.api.slice';

import ProfileSkeleton from './components/profileSkeleton';
import UpdatePassword from './update-password';
import UpdateData from './update-data';
import { Divider } from '@mui/joy';

export default function Profile() {
  const { data, isLoading } = useGetMeQuery(undefined);

  return (
    <SettingsLayout>
      <Stack
        direction="column"
        spacing={2}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 1 }}
      >
        <Divider />
        {isLoading ? <ProfileSkeleton /> : <UpdateData {...data} />}
        <UpdatePassword />
      </Stack>
    </SettingsLayout>
  );
}