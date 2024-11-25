import { useState, Fragment } from 'react';

import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import IconButton from '@mui/joy/IconButton';

import Mail from '@mui/icons-material/Mail';

import SendEmailForm from '../forms/send-email';

import { Instructor } from 'shared/ts/types';

export default function SendEmailModal(instructor: Instructor) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <IconButton onClick={() => setOpen(true)}>
        <Mail />
      </IconButton>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ModalDialog>
          <SendEmailForm instructor={instructor} />
        </ModalDialog>
      </Modal>
    </Fragment>
  );
}
