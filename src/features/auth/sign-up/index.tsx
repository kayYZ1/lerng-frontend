import { Stack, Typography, Divider } from '@mui/joy';

import { Link } from 'react-router-dom';

import { AuthPath } from 'routes/paths';

import style from '../auth.module.css';
import SignUpForm from './form';

export default function SignUp() {
  return (
    <div>
      <Stack gap={4} sx={{ mb: 2 }}>
        <Stack gap={1}>
          <Typography component="h1" level="h3">
            Sign Up
          </Typography>
          <Typography level="body-sm">
            Already have an account?{' '}
            <Link to={AuthPath.SIGN_IN} className={style.link}>
              Sign In
            </Link>
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
      ></Divider>
      <Stack gap={4} sx={{ mt: 2 }}>
        <SignUpForm />
      </Stack>
    </div>
  );
}
