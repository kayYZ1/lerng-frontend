import { useState, Fragment } from 'react';

import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';

import EditContentForm from '../forms/edit-content';
import { Content } from 'shared/ts/types';

export default function EditContentModal(content: Content) {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Typography
        component="div"
        level="body-sm"
        sx={{
          '&:hover': {
            textDecoration: 'underline',
          },
          cursor: 'pointer',
        }}
        onClick={() => setOpen(true)}
      >
        Edit
      </Typography>
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
          <EditContentForm setOpen={setOpen} content={content} />
        </ModalDialog>
      </Modal>
    </Fragment>
  );
}
