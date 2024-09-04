import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormHelperText from "@mui/joy/FormHelperText";

import { useFormik } from "formik";
import * as yup from "yup";

import { setCredentials } from "app/slice/auth.slice";
import { useSignInFnMutation } from "app/api/auth.api.slice";
import { UserSignIn } from "shared/ts/types";

import ErrorAlert from "shared/components/alerts/error";
import { DashboardPath, AuthPath } from "routes/paths";
import { transformErrorResponse } from "shared/lib/functions";

import style from "../auth.module.css";

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(8, 'Password must be atleast 8 characters long').required('Password is required'),
});

export default function SignInForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [SignInFn, { isLoading, error }] = useSignInFnMutation();

  const errorResponse = transformErrorResponse(error);

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
      const { accessToken } = await SignInFn(user).unwrap();
      dispatch(setCredentials(accessToken))
      navigate(DashboardPath.ENROLLED)
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
          <Link to={AuthPath.FORGOT_PASSWORD} className={style.link}>Forgot your password?</Link>
        </Box>
        <Button type="submit" loading={isLoading} fullWidth>
          Sign in
        </Button>
      </Stack>
      {error ? <ErrorAlert type="Sign In Error" message={errorResponse} /> : ""}
    </form>
  )
}