import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import FormHelperText from '@mui/joy/FormHelperText';

import { useFormik } from 'formik';
import * as yup from 'yup';

import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';

import { useUpdateUserDataMutation } from 'app/api/users.api.slice';
import { transformErrorResponse } from 'shared/utils/functions';

import UpdateImageModal from './components/modals/update-image';

import { UpdateUser, UserData } from 'shared/ts/types';
import WarningAlert from 'shared/components/alerts/warning';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email'),
  username: yup.string(),
});

export default function UpdateData(data: UserData) {
  const [UpdateUserData, { error, isLoading }] =
    useUpdateUserDataMutation();

  const errorResponse = transformErrorResponse(error);

  const formik = useFormik({
    initialValues: {
      email: data.email,
      username: data.username,
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const updatedUser: UpdateUser = {
        email: values.email,
        username: values.username,
      };
      await UpdateUserData(updatedUser);
      resetForm();
    },
  });

  return (
    <Card sx={{ flex: 1 }}>
      <Box>
        <Typography level="title-md">Personal info</Typography>
        <Typography level="body-sm">
          Customize how your profile information will appear in the
          application.
        </Typography>
      </Box>
      <Divider />
      <Stack direction="row" spacing={1}>
        <Stack direction="column" spacing={0.5}>
          <AspectRatio
            ratio="1"
            maxHeight={200}
            sx={{ flex: 1, minWidth: 120, borderRadius: '100%' }}
          >
            <img
              src={data.avatar}
              loading="lazy"
              alt="Avatar for your profile picture"
            />
          </AspectRatio>
          <UpdateImageModal />
        </Stack>
        <Stack sx={{ flexGrow: 1 }}>
          <form onSubmit={formik.handleSubmit}>
            <Stack direction="column" gap={0.5}>
              <FormControl
                sx={{
                  display: {
                    sm: 'flex-column',
                    md: 'flex-row',
                  },
                }}
              >
                <FormLabel>Email</FormLabel>
                <Input
                  size="sm"
                  type="email"
                  name="email"
                  startDecorator={<EmailRoundedIcon />}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && !!formik.errors.email}
                  disabled={data.email === 'demo@lerng.com' ? true : false}
                />
                {formik.touched.email ? (
                  <FormHelperText component="div">
                    {formik.errors.email}
                  </FormHelperText>
                ) : (
                  ''
                )}
              </FormControl>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                  size="sm"
                  type="text"
                  name="username"
                  startDecorator={<Person2RoundedIcon />}
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.username && !!formik.errors.username
                  }
                  disabled={data.username === 'demolerner' ? true : false}
                />
                {formik.touched.username ? (
                  <FormHelperText component="div">
                    {formik.errors.username}
                  </FormHelperText>
                ) : (
                  ''
                )}
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
              <CardOverflow>
                <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                  <Button
                    size="sm"
                    variant="outlined"
                    onClick={() => formik.resetForm()}
                  >
                    Clear
                  </Button>
                  <Button
                    size="sm"
                    variant="solid"
                    type="submit"
                    loading={isLoading}
                    disabled={
                      data.email === 'demo@lerng.com' ? true : false
                    }
                  >
                    Save
                  </Button>
                </CardActions>
              </CardOverflow>
            </Stack>
            {error ? (
              <WarningAlert
                type="Error occured while updating data"
                message={errorResponse}
              />
            ) : (
              ''
            )}
          </form>
        </Stack>
      </Stack>
    </Card>
  );
}
