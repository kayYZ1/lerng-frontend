import { FormControl, FormLabel, Input, Stack, Button, FormHelperText } from "@mui/joy";
import { useFormik } from "formik";
import * as yup from "yup";

import style from "../auth.module.css"

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
});

export default function ForgotPasswordForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
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
      <Stack gap={4} sx={{ mt: 2 }}>
        <Button type="submit" fullWidth>
          Send
        </Button>
      </Stack>
    </form>
  )
}