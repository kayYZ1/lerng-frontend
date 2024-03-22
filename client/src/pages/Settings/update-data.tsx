import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';

import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';

import { useGetMeQuery } from 'features/auth/auth.api.slice';
import ProfileSkeleton from './components/profileSkeleton';

export default function UpdateData() {
  const { data, isLoading } = useGetMeQuery(undefined);
  return (
    <>
      {isLoading ?
        <ProfileSkeleton />
        :
        <Card sx={{ flex: 1 }}>
          <Box>
            <Typography level="title-md">Personal info</Typography>
            <Typography level="body-sm">
              Customize how your profile information will appear in the application.
            </Typography>
          </Box>
          <Divider />
          <Stack
            direction="row"
            spacing={2}
          >
            <Stack direction="column" spacing={1}>
              <AspectRatio
                ratio="1"
                maxHeight={200}
                sx={{ flex: 1, minWidth: 120, borderRadius: '100%' }}
              >
                <img
                  src={data.avatar}
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
              <IconButton
                aria-label="upload new picture"
                size="sm"
                variant="outlined"
                color="neutral"
                sx={{
                  bgcolor: 'background.body',
                  position: 'absolute',
                  zIndex: 2,
                  borderRadius: '50%',
                  left: 100,
                  top: 170,
                  boxShadow: 'sm',
                }}
              >
                <EditRoundedIcon />
              </IconButton>
            </Stack>
            <Stack sx={{ flexGrow: 1 }}>
              <Stack>
                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <Input size="sm" defaultValue={data.username} type="text" startDecorator={<Person2RoundedIcon />} />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    size="sm"
                    type="email"
                    startDecorator={<EmailRoundedIcon />}
                    defaultValue={data.email}
                  />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Role</FormLabel>
                  <Input
                    size="sm"
                    type="text"
                    startDecorator={<AdminPanelSettingsRoundedIcon />}
                    defaultValue={data.role}
                    disabled
                  />
                </FormControl>
              </Stack>
            </Stack>
          </Stack>
          <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              <Button size="sm" variant="outlined" color="neutral">
                Cancel
              </Button>
              <Button size="sm" variant="solid">
                Save
              </Button>
            </CardActions>
          </CardOverflow>
        </Card>
      }
    </>
  )
}