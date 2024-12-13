import { useFormik } from 'formik';
import * as yup from 'yup';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import FormHelperText from '@mui/joy/FormHelperText';

import { useForgotPasswordFnMutation } from 'app/api/auth.api.slice';
import { transformErrorResponse } from 'shared/utils/functions';
import ErrorAlert from 'shared/components/alerts/error';
import SuccessAlert from 'shared/components/alerts/success';

import style from '../auth.module.css';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
});

export default function ForgotPasswordForm() {
  const [ForgotPasswordFn, { isLoading, error, isSuccess }] =
    useForgotPasswordFnMutation();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      await ForgotPasswordFn(values);
      resetForm();
    },
  });

  const errorResponse = transformErrorResponse(error);

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && !!formik.errors.email}
          placeholder="Enter your email address"
          sx={{
            '&:focus': {
              borderColor: 'primary.main',
              boxShadow: '0 0 0 3px rgba(25, 118, 210, 0.2)',
            },
          }}
        />
        {formik.touched.email && formik.errors.email && (
          <FormHelperText
            component="div"
            className={style.formHelperError}
            data-testid="email-error"
          >
            {formik.errors.email}
          </FormHelperText>
        )}
      </FormControl>
      <Stack gap={4} sx={{ mt: 2 }}>
        <Button
          type="submit"
          fullWidth
          loading={isLoading}
          sx={{
            py: 1.2,
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
          }}
        >
          Send Reset Link
        </Button>
      </Stack>
      {error && <ErrorAlert type="Reset password" message={errorResponse} />}
      {isSuccess && (
        <SuccessAlert
          type="Reset password"
          message="Password reset link has been sent to your email address. Please check your inbox."
        />
      )}
    </form>
  );
}
