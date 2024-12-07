import { useState, Fragment } from 'react';

import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import IconButton from '@mui/joy/IconButton';
import Tooltip from '@mui/joy/Tooltip';

import Mail from '@mui/icons-material/Mail';

import SendEmailForm from '../forms/send-email';

import { Instructor } from 'shared/ts/types';

export default function SendEmailModal(instructor: Instructor) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <IconButton onClick={() => setOpen(true)}>
        <Tooltip title="Send email to instructor" variant="solid">
          <Mail />
        </Tooltip>
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
          <SendEmailForm instructor={instructor} setOpen={setOpen} />
        </ModalDialog>
      </Modal>
    </Fragment>
  );
}
