import { useState, Fragment } from 'react';

import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import IconButton from '@mui/joy/IconButton';

import EditContentForm from '../forms/edit-content';
import { Content } from 'shared/ts/types';
import EditAction from 'shared/components/actions/edit-action';

export default function EditContentModal(content: Content) {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <IconButton onClick={() => setOpen(true)}>
        <EditAction title="Edit content" />
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
