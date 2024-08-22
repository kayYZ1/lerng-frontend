import * as React from 'react';
import Modal from '@mui/joy/Modal';
import IconButton from '@mui/joy/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/joy/Box';
import ModalDialog from '@mui/joy/ModalDialog';

import AddQuestionForm from '../forms/addQuestionForm';

export default function AddQuestionModal() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <Box>
      <IconButton onClick={() => setOpen(true)}>
        <AddIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <ModalDialog>
          <AddQuestionForm setOpen={setOpen} />
        </ModalDialog>
      </Modal>
    </Box>
  );
}