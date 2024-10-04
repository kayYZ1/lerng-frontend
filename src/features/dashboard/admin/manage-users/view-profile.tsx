import { useState, Fragment } from 'react';

import Avatar from '@mui/joy/Avatar';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

import { User } from './users-table';
import { useChangeAccessMutation } from 'app/api/users.api.slice';
import { parseDate } from 'shared/lib/functions';

export default function ViewProfile(user: User) {
  const [open, setOpen] = useState<boolean>(false);
  const [ChangeAccess, { isLoading }] = useChangeAccessMutation();

  const changeUserAccess = async (access: string) => {
    const values = {
      userId: user.id,
      access
    }
    await ChangeAccess(values)
  }

  return (
    <Fragment>
      <Button size="sm" variant="plain" color="neutral" onClick={() => setOpen(true)}>
        View
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{ maxWidth: 500, borderRadius: 'md', p: 3, boxShadow: 'lg' }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            sx={{ fontWeight: 'lg', mb: 1 }}
          >
            User profile
          </Typography>
          <Box
            width={400}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            p={2}
            gap={0.5}
          >
            <Avatar src={user.imageUrl} sx={{ '--Avatar-size': '6rem' }} />
            <Typography level="title-lg">{user.username}</Typography>
            <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
              {user.email}
            </Typography>
            <Typography level="body-sm">
              Access to application: <b>{user.access}</b>
            </Typography>
            <Typography level="body-sm">
              Joined: {parseDate(user.created)}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="flex-end" pt={1}>
            {user.access === "open" ?
              <Button color="danger" size="sm" onClick={() => changeUserAccess("blocked")} loading={isLoading}>
                Block {user.username}
              </Button>
              :
              <Button color="neutral" size="sm" onClick={() => changeUserAccess("open")} loading={isLoading}>
                Unblock {user.username}
              </Button>
            }
          </Box>
        </Sheet>
      </Modal>
    </Fragment>
  );
}
