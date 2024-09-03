import { useState } from 'react';

import Modal from '@mui/joy/Modal';
import IconButton from '@mui/joy/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/joy/Box';
import ModalDialog from '@mui/joy/ModalDialog';

import AddQuestionForm from '../forms/add-question';

export default function AddQuestionModal() {
  const [open, setOpen] = useState<boolean>(false);
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