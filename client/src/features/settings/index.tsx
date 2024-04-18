import Stack from '@mui/joy/Stack';
import Grid from '@mui/joy/Grid'

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
          mx: 'auto',
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid xs={12} md={6}>
            {isLoading ? <ProfileSkeleton /> : <UpdateData {...data} />}
          </Grid>
          <Grid xs={12} md={6}>
            <UpdatePassword />
          </Grid>
        </Grid>
      </Stack>
    </SettingsLayout>
  );
}