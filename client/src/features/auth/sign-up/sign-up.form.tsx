import { FormControl, FormLabel, Input, Stack, Box, Checkbox, Button, Typography, FormHelperText, Link } from "@mui/joy";
import { useFormik } from "formik";
import * as yup from "yup"

import { useSignUpFnMutation } from "app/auth/auth.api.slice";
import { UserSignUp } from "shared/ts/types";

import style from "../auth.module.css"
import ErrorAlert from "shared/components/errorAlert";
import { transformErrorResponse } from "shared/lib/functions";

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  username: yup.string().required('Username is required'),
  password: yup.string().min(8, 'Password must be atleast 8 characters long').required('Password is required'),
  repeatPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

export default function SignUpForm() {
  const [SignUpFn, { isLoading, error }] = useSignUpFnMutation();

  const errorResponse = transformErrorResponse(error);

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const user: UserSignUp = {
        email: values.email,
        password: values.password,
        username: values.username
      }
      await SignUpFn(user);
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
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && !!formik.errors.username}
        />
        {formik.touched.username ?
          <FormHelperText component="div" className={style.formHelperError}>{formik.errors.username}</FormHelperText> : ""}
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
      <FormControl required>
        <FormLabel>Repeat password</FormLabel>
        <Input
          type="password"
          name="repeatPassword"
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.repeatPassword && !!formik.errors.repeatPassword}
        />
        {formik.touched.repeatPassword ?
          <FormHelperText component="div" className={style.formHelperError}>{formik.errors.repeatPassword}</FormHelperText> : ""}
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
                  <Typography fontWeight="md">terms and conditions</Typography>.
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
      {error ? <ErrorAlert type="Sign Up Error" message={errorResponse} /> : ""}
    </form>
  )
}