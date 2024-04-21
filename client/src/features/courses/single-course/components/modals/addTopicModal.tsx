import * as React from 'react';
import Modal from '@mui/joy/Modal';
import Sheet from '@mui/joy/Sheet';
import IconButton from '@mui/joy/IconButton';
import AddIcon from '@mui/icons-material/Add';

import AddTopicForm from '../forms/addTopicForm';

export default function AddTopicModal() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <IconButton onClick={() => setOpen(true)}>
        <AddIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <AddTopicForm setOpen={setOpen} />
      </Modal>
    </React.Fragment>
  );
}