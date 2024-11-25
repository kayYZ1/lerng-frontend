import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import Avatar from '@mui/joy/Avatar';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import ListDivider from '@mui/joy/ListDivider';
import Drawer from '@mui/joy/Drawer';
import ModalClose from '@mui/joy/ModalClose';
import DialogTitle from '@mui/joy/DialogTitle';
import Skeleton from '@mui/joy/Skeleton';

import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Terminal from '@mui/icons-material/Terminal';

import {
  useGetMeQuery,
  useSignOutFnMutation,
} from 'app/api/auth.api.slice';
import { signOut } from 'app/slice/auth.slice';
import { authApi } from 'app/base/auth.api';

import { DashboardPath, AuthPath } from 'routes/paths';

import ColorSchemeToggle from 'shared/components/color-toggle';

import style from '../dashboard.module.css';
import TeamNav from './navigation';

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: user, isLoading } = useGetMeQuery('User');
  const [SignOutFn] = useSignOutFnMutation();

  const [open, setOpen] = useState(false);

  const signOutHandler = () => {
    SignOutFn('Auth');
    dispatch(signOut());
    dispatch(authApi.util.resetApiState()); //Reset the cache while signing out
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'space-between',
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{ display: { xs: 'none', sm: 'flex' } }}
        paddingLeft={0.5}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Terminal />
          <Typography level="title-md">LERNG</Typography>
        </Stack>
      </Stack>
      <Box sx={{ display: { xs: 'inline-flex', sm: 'none' } }}>
        <IconButton
          variant="plain"
          color="neutral"
          onClick={() => setOpen(true)}
        >
          <MenuRoundedIcon />
        </IconButton>
        <Drawer
          sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
          open={open}
          onClose={() => setOpen(false)}
        >
          <ModalClose />
          <DialogTitle>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Terminal />
              <Typography level="title-md">LERNG</Typography>
            </Stack>
          </DialogTitle>
          <Box sx={{ px: 1 }}>
            <TeamNav />
          </Box>
        </Drawer>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 1.5,
          alignItems: 'center',
        }}
      >
        <Stack direction="row">
          <IconButton onClick={() => navigate(-1)} size="sm">
            <ArrowBackIcon />
          </IconButton>
          <IconButton onClick={() => navigate(+1)} size="sm">
            <ArrowForwardIcon />
          </IconButton>
        </Stack>
        <ColorSchemeToggle />
        <Dropdown>
          <MenuButton
            variant="plain"
            size="sm"
            sx={{
              maxWidth: '32px',
              maxHeight: '32px',
              borderRadius: '9999999px',
            }}
          >
            <Avatar
              src={isLoading || !user ? '' : user.avatar}
              sx={{ maxWidth: '32px', maxHeight: '32px' }}
            >
              <Skeleton loading={isLoading} />
            </Avatar>
          </MenuButton>
          {isLoading || !user ? (
            ''
          ) : (
            <Menu
              placement="bottom-end"
              size="sm"
              sx={{
                zIndex: '99999',
                p: 1,
                gap: 1,
                '--ListItem-radius': 'var(--joy-radius-sm)',
              }}
            >
              <MenuItem>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Avatar src={user.avatar} sx={{ borderRadius: '50%' }} />
                  <Box sx={{ ml: 1.5 }}>
                    <Typography level="title-sm" textColor="text.primary">
                      {user.username}
                    </Typography>
                    <Typography level="body-sm" textColor="text.tertiary">
                      {user.email}
                    </Typography>
                    <Typography level="body-xs">{user.role}</Typography>
                  </Box>
                </Box>
              </MenuItem>
              <ListDivider />
              <MenuItem>
                <SettingsRoundedIcon />
                <Link to={DashboardPath.SETTINGS} className={style.link}>
                  Settings
                </Link>
              </MenuItem>
              <ListDivider />
              <MenuItem>
                <LogoutRoundedIcon />
                <Link
                  to={AuthPath.SIGN_IN}
                  className={style.link}
                  onClick={signOutHandler}
                >
                  Sign Out
                </Link>
              </MenuItem>
            </Menu>
          )}
        </Dropdown>
      </Box>
    </Box>
  );
}
