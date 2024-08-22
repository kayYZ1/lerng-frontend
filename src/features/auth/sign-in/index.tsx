import { Stack, Typography, Divider } from "@mui/joy"

import { Link } from "react-router-dom"

import { AuthPath } from "routes/paths"
import SignInForm from "./sign-in.form"

import style from "../auth.module.css"

export default function SignIn() {
  return (
    <div>
      <Stack gap={4} sx={{ mb: 2 }}>
        <Stack gap={1}>
          <Typography component="h1" level="h3">
            Sign In
          </Typography>
          <Typography level="body-sm">
            New to the platform?{' '}
            <Link to={AuthPath.SIGN_UP} className={style.link}>Sign Up</Link>
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
        <SignInForm />
      </Stack>
    </div>
  )
}