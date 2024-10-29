import { useState, Fragment } from 'react';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import IconButton from '@mui/joy/IconButton';
import AddIcon from '@mui/icons-material/Add';

import AddTopicForm from '../forms/add-topic';

export default function AddTopicModal() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Fragment>
      <IconButton onClick={() => setOpen(true)}>
        <AddIcon />
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
          <AddTopicForm setOpen={setOpen} />
        </ModalDialog>
      </Modal>
    </Fragment>
  );
}
