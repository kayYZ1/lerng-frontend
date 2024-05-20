import { Link } from "react-router-dom"
import { Stack, Typography, Divider } from "@mui/joy"

import ForgotPasswordForm from "./forgot-password.form"
import { AuthPath } from "routes/paths"
import style from "../auth.module.css"

export default function ForgotPassword() {
  return (
    <div>
      <Stack gap={4} sx={{ mb: 2 }}>
        <Stack gap={1}>
          <Typography component="h1" level="h3">
            Reset password
          </Typography>
          <Typography level="body-sm">
            Go back?{' '}
            <Link to={AuthPath.SIGN_IN} className={style.link}>Click here</Link>
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
        <ForgotPasswordForm />
      </Stack>
    </div>
  )
}