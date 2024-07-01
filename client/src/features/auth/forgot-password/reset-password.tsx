import { FormControl, FormLabel, Input, Stack, Button, FormHelperText, Typography, Divider } from "@mui/joy";
import { useFormik } from "formik";
import * as yup from "yup";

import style from "../auth.module.css"

const validationSchema = yup.object().shape({
  password: yup.string().min(8, 'Password must be atleast 8 characters long').required('Password is required'),
  repeatPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

export default function ResetPassword() {
  const formik = useFormik({
    initialValues: {
      password: "",
      repeatPassword: ""
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  })

  return (
    <div>
      <Stack gap={4} sx={{ mb: 2 }}>
        <Stack gap={1}>
          <Typography component="h1" level="h3">
            Reset password
          </Typography>
          <Typography level="body-sm">
            Link will be active only for 5 minutes.
          </Typography>
        </Stack>
      </Stack>
      <Divider
        sx={(theme) => ({
          [theme.getColorSchemeSelector('light')]: {
            color: { xs: '#FFF', md: 'text.tertiary' },
            '--Divider-lineColor': {
              xs: '#FFF',
              md: 'var(--joy-palette-divider)',
            },
          },
        })}
      >
      </Divider>
      <Stack gap={4} sx={{ mt: 2 }}>
        <form onSubmit={formik.handleSubmit}>
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
          <FormControl>
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
            <Button type="submit" fullWidth>
              Reset
            </Button>
          </Stack>
        </form >
      </Stack>
    </div>
  )
}