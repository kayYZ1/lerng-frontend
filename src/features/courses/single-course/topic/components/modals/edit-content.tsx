import { useState, Fragment } from 'react';

import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import IconButton from '@mui/joy/IconButton';

import EditContentForm from '../forms/edit-content';
import { Content } from 'shared/ts/types';

import EditIcon from '@mui/icons-material/Edit';

export default function EditContentModal(content: Content) {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <IconButton onClick={() => setOpen(true)}>
        <EditIcon />
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
          <EditContentForm setOpen={setOpen} content={content} />
        </ModalDialog>
      </Modal>
    </Fragment>
  );
}
