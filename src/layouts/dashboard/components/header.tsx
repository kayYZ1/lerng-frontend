import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
import FeedbackIcon from '@mui/icons-material/Feedback';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import TeamNav from "./navigation";
import { DashboardPath, AuthPath } from 'routes/paths';
import style from "../dashboard.module.css";
import ColorSchemeToggle from 'shared/components/colorToggle';
import { useGetMeQuery, useSignOutFnMutation } from 'app/api/auth.api.slice';
import { signOut } from 'app/slice/auth.slice';
import PageSelect from '../utils/pageSelect';
import LerngLogo from "assets/svg/logo-no-background.svg";

import { useDispatch } from 'react-redux';

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        paddingLeft={0.5}
      >
        <img src={LerngLogo} width={96} height={96} />
        <Stack direction="row">
          <IconButton onClick={() => navigate(-1)} size="sm">
            <ArrowBackIcon />
          </IconButton>
          <IconButton onClick={() => navigate(+1)} size="sm">
            <ArrowForwardIcon />
          </IconButton>
        </Stack>
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
          <DialogTitle>
            <img src={LerngLogo} width={96} height={96} />
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
        <PageSelect />
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
              {data.role === 'instructor' ?
                <MenuItem>
                  <FeedbackIcon />
                  <Link to={DashboardPath.FEEDBACK_INSTRUCTOR} className={style.link}>Feedback</Link>
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
    </Box >
  );
}