import { useNavigate } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Box,
  Checkbox,
  Button,
  Typography,
  FormHelperText,
  Link,
} from '@mui/joy';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { useSignUpFnMutation } from 'app/api/auth.api.slice';
import { UserSignUp } from 'shared/ts/types';

import ErrorAlert from 'shared/components/alerts/error';
import ShowCapsLock from 'shared/components/show-capslock';
import { transformErrorResponse } from 'shared/lib/functions';

import style from '../auth.module.css';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  username: yup.string().required('Username is required'),
  password: yup
    .string()
    .min(8, 'Password must be atleast 8 characters long')
    .required('Password is required'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

type LocationState = {
  userEmail: string | undefined;
};

export default function SignUpForm(props: LocationState) {
  const [SignUpFn, { isLoading, error }] = useSignUpFnMutation();

  const navigate = useNavigate();
  const errorResponse = transformErrorResponse(error);

  const formik = useFormik({
    initialValues: {
      email: typeof props.userEmail === 'string' ? props.userEmail : '',
      username: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const user: UserSignUp = {
        email: values.email,
        password: values.password,
        username: values.username,
      };
      await SignUpFn(user);
      navigate('/auth/sign-in');
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl required>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          placeholder="john.doe@gmail.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && !!formik.errors.email}
        />
        {formik.touched.email ? (
          <FormHelperText
            component="div"
            className={style.formHelperError}
          >
            {formik.errors.email}
          </FormHelperText>
        ) : (
          ''
        )}
      </FormControl>
      <FormControl required>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="username"
          placeholder="johndoe"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && !!formik.errors.username}
        />
        {formik.touched.username ? (
          <FormHelperText
            component="div"
            className={style.formHelperError}
          >
            {formik.errors.username}
          </FormHelperText>
        ) : (
          ''
        )}
      </FormControl>
      <FormControl required>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          placeholder="password_example123#"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && !!formik.errors.password}
        />
        {formik.touched.password ? (
          <FormHelperText
            component="div"
            className={style.formHelperError}
          >
            {formik.errors.password}
          </FormHelperText>
        ) : (
          ''
        )}
      </FormControl>
      <FormControl required>
        <FormLabel>Repeat password</FormLabel>
        <Input
          type="password"
          name="repeatPassword"
          placeholder="password_example123#"
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.repeatPassword && !!formik.errors.repeatPassword
          }
        />
        {formik.touched.repeatPassword ? (
          <FormHelperText
            component="div"
            className={style.formHelperError}
          >
            {formik.errors.repeatPassword}
          </FormHelperText>
        ) : (
          ''
        )}
      </FormControl>
      <Stack gap={4} sx={{ mt: 2 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <FormControl size="sm" sx={{ width: 400 }} required>
            <Checkbox
              label={
                <>
                  I have read and agree to the{' '}
                  <Typography fontWeight="md">
                    terms and conditions
                  </Typography>
                  .
                </>
              }
            />
            <FormHelperText>
              <Typography level="body-sm">
                Read our <Link href="#link">terms and conditions</Link>.
              </Typography>
            </FormHelperText>
          </FormControl>
        </Box>
        <Button type="submit" loading={isLoading} fullWidth>
          Sign in
        </Button>
      </Stack>
      <ShowCapsLock />
      {error ? (
        <ErrorAlert type="Sign Up Error" message={errorResponse} />
      ) : (
        ''
      )}
    </form>
  );
}
