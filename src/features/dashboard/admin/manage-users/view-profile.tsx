import { useState, Fragment } from 'react';

import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { User } from './users-table';

export default function ViewProfile(user: User) {
  const [open, setOpen] = useState<boolean>(false);
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
            User profile - {user.username}
          </Typography>
          <Typography textColor="text.tertiary">
            Make sure to use <code>aria-labelledby</code> on the modal dialog with an
            optional <code>aria-describedby</code> attribute. Just a placeholder
          </Typography>
          <Box display="flex" justifyContent="flex-end" pt={1}>
            {user.access === "open" ?
              <Button color="danger" size="sm">
                Ban {user.username}
              </Button>
              :
              <Button color="neutral" size="sm">
                Unban {user.username}
              </Button>
            }
          </Box>
        </Sheet>
      </Modal>
    </Fragment>
  );
}
