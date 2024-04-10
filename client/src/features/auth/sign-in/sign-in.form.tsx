import { FormControl, FormLabel, Input, Stack, Box, Link, Button, FormHelperText } from "@mui/joy";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setCredentials } from "app/auth/auth.slice";
import { useSignInFnMutation } from "app/auth/auth.api.slice";
import { CustomMutationError, UserSignIn } from "shared/types";

import style from "../auth.module.css"
import ErrorAlert from "shared/components/errorAlert";
import { CoursesPath } from "routes/paths";

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(8, 'Password must be atleast 8 characters long').required('Password is required'),
});

export default function SignInForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [SignInFn, { isLoading, error }] = useSignInFnMutation();

  const errorMessage = error as CustomMutationError;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const user: UserSignIn = {
        email: values.email,
        password: values.password,
      }
      console.log(user);
      const { accessToken } = await SignInFn(user).unwrap();
      dispatch(setCredentials(accessToken))
      navigate(CoursesPath.COURSES)
      resetForm();
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl required>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && !!formik.errors.email}
        />
        {formik.touched.email ?
          <FormHelperText component="div" className={style.formHelperError}>{formik.errors.email}</FormHelperText> : ""}
      </FormControl>
      <FormControl required>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && !!formik.errors.password}
        />
        {formik.touched.password ?
          <FormHelperText component="div" className={style.formHelperError}>{formik.errors.password}</FormHelperText> : ""}
      </FormControl>
      <Stack gap={4} sx={{ mt: 2 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link level="title-sm" href="#replace-with-a-link">
            Forgot your password?
          </Link>
        </Box>
        <Button type="submit" loading={isLoading} fullWidth>
          Sign in
        </Button>
      </Stack>
      {error && 'status' in error ? <ErrorAlert type="Sign In Error" message={errorMessage.data.message} /> : ""}
    </form>
  )
}