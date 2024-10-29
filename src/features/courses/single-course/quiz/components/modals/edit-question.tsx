import { useState } from 'react';

import Modal from '@mui/joy/Modal';
import Box from '@mui/joy/Box';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';

import EditQuestionForm from '../forms/edit-question';
import { Question } from 'shared/ts/types';

export default function EditQuestionModal(question: Question) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Box>
      <Typography
        component="div"
        level="body-xs"
        onClick={() => setOpen(true)}
        sx={{
          '&:hover': {
            textDecoration: 'underline',
          },
          cursor: 'pointer',
        }}
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
          <EditQuestionForm setOpen={setOpen} question={question} />
        </ModalDialog>
      </Modal>
    </Box>
  );
}
