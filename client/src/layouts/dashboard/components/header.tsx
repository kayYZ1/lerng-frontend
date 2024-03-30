import * as React from 'react';
import { Link } from 'react-router-dom';

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
import { useDispatch } from 'react-redux';

import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FeedbackIcon from '@mui/icons-material/Feedback';

import TeamNav from "./navigation"
import { DashboardPath, AuthPath } from 'routes/paths';

import style from "../dashboard.module.css"

import ColorSchemeToggle from 'shared/components/colorToggle';

import { useGetMeQuery } from 'features/auth/auth.api.slice';
import { useSignOutFnMutation } from 'features/auth/auth.api.slice';
import { signOut } from 'features/auth/auth.slice';

export default function Header() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const { data, isLoading } = useGetMeQuery(undefined);
  const [SignOutFn] = useSignOutFnMutation();

  const signOutHandler = () => {
    SignOutFn(undefined);
    dispatch(signOut());
  }

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
      >
        Learn-Linux.com
      </Stack>
      <Box sx={{ display: { xs: 'inline-flex', sm: 'none' } }}>
        <IconButton variant="plain" color="neutral" onClick={() => setOpen(true)}>
          <MenuRoundedIcon />
        </IconButton>
        <Drawer
          sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
          open={open}
          onClose={() => setOpen(false)}
        >
          <ModalClose />
          <DialogTitle>Learn-Linux.com</DialogTitle>
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
        <NotificationsIcon />
        <ColorSchemeToggle />
        <Dropdown>
          <MenuButton
            variant="plain"
            size="sm"
            sx={{ maxWidth: '32px', maxHeight: '32px', borderRadius: '9999999px' }}
          >
            <Avatar
              src={isLoading ? '' : data.avatar}
              sx={{ maxWidth: '32px', maxHeight: '32px' }}
            >
              <Skeleton loading={isLoading} />
            </Avatar>
          </MenuButton>
          {isLoading ? "" :
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
                  <Avatar
                    src={data.avatar}
                    sx={{ borderRadius: '50%' }}
                  />
                  <Box sx={{ ml: 1.5 }}>
                    <Typography level="title-sm" textColor="text.primary">
                      {data.username}
                    </Typography>
                    <Typography level="body-sm" textColor="text.tertiary">
                      {data.email}
                    </Typography>
                    <Typography level="body-xs">
                      {data.role}
                    </Typography>
                  </Box>
                </Box>
              </MenuItem>
              <ListDivider />
              <MenuItem>
                <SettingsRoundedIcon />
                <Link to={DashboardPath.SETTINGS} className={style.link}>Settings</Link>
              </MenuItem>
              {data.role === 'admin' ?
                <MenuItem>
                  <FeedbackIcon />
                  <Link to={""} className={style.link}>User's feedback</Link>
                </MenuItem> : ""
              }
              <ListDivider />
              <MenuItem>
                <LogoutRoundedIcon />
                <Link to={AuthPath.SIGN_IN} className={style.link} onClick={signOutHandler}>Sign Out</Link>
              </MenuItem>
            </Menu>
          }
        </Dropdown>
      </Box>
    </Box>
  );
}